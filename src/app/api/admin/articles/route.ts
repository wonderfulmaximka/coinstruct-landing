import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Build a Supabase client that carries the user's JWT so RLS sees them as authenticated
function makeClient(token: string) {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { global: { headers: { Authorization: `Bearer ${token}` } } }
  )
}

async function verifyAuth(token?: string) {
  if (!token) return null
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const { data, error } = await supabase.auth.getUser(token)
    if (error || !data.user) return null
    return data.user
  } catch {
    return null
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    const user = await verifyAuth(token)
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const supabase = makeClient(token!)

    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Admin articles fetch error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ articles: data || [] })
  } catch (err) {
    console.error('Admin articles fetch error:', err)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    const user = await verifyAuth(token)
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const supabase = makeClient(token!)

    const body = await request.json()
    const {
      title, slug, subtitle, content, excerpt,
      thumbnail_url, meta_description, og_image_url, schema_markup, status,
    } = body

    if (!title || !slug) {
      return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('articles')
      .insert([{
        title,
        slug,
        subtitle: subtitle || null,
        content: content || null,
        excerpt: excerpt || null,
        thumbnail_url: thumbnail_url || null,
        meta_description: meta_description || null,
        og_image_url: og_image_url || null,
        schema_markup: schema_markup || null,
        status: status || 'draft',
        published_at: status === 'published' ? new Date().toISOString() : null,
      }])
      .select()

    if (error) {
      console.error('Article creation error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json(data?.[0], { status: 201 })
  } catch (err) {
    console.error('Article creation error:', err)
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 })
  }
}
