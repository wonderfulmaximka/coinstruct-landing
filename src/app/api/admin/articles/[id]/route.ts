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
    // Use a plain client just for token verification
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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    const user = await verifyAuth(token)
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const supabase = makeClient(token!)

    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !data) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }
    return NextResponse.json(data)
  } catch (err) {
    console.error('Article fetch error:', err)
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    const user = await verifyAuth(token)
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const supabase = makeClient(token!)

    const body = await request.json()
    const {
      title, slug, subtitle, content, excerpt,
      thumbnail_url, meta_description, og_image_url, schema_markup, status, category,
    } = body

    if (!title || !slug) {
      return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 })
    }

    // Fetch current to preserve published_at when re-publishing
    const { data: current } = await supabase
      .from('articles')
      .select('status, published_at')
      .eq('id', id)
      .single()

    const updateData: Record<string, unknown> = {
      title,
      slug,
      subtitle: subtitle || null,
      content: content || null,
      excerpt: excerpt || null,
      thumbnail_url: thumbnail_url || null,
      meta_description: meta_description || null,
      og_image_url: og_image_url || null,
      schema_markup: schema_markup || null,
      category: category || null,
      status: status || 'draft',
      updated_at: new Date().toISOString(),
    }

    if (status === 'published' && !current?.published_at) {
      updateData.published_at = new Date().toISOString()
    } else if (status === 'published' && current?.published_at) {
      updateData.published_at = current.published_at
    } else {
      updateData.published_at = null
    }

    const { data, error } = await supabase
      .from('articles')
      .update(updateData)
      .eq('id', id)
      .select()

    if (error) {
      console.error('Article update error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json(data?.[0])
  } catch (err) {
    console.error('Article update error:', err)
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    const user = await verifyAuth(token)
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const supabase = makeClient(token!)

    const { error } = await supabase.from('articles').delete().eq('id', id)
    if (error) {
      console.error('Article delete error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Article delete error:', err)
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 })
  }
}
