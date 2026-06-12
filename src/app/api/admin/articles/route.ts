import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

/**
 * Verify admin authentication
 * For now, we check if user is authenticated via Supabase
 * In production, implement proper admin role checking
 */
async function verifyAdminAuth(token?: string) {
  if (!token) {
    return null
  }

  try {
    const { data, error } = await supabase.auth.getUser(token)
    if (error || !data.user) {
      return null
    }
    return data.user
  } catch {
    return null
  }
}

export async function GET(request: NextRequest) {
  try {
    // Extract token from Authorization header
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')

    // Verify authentication (simplified - in production use Supabase RLS)
    const user = await verifyAdminAuth(token)
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Fetch all articles (published + drafts) for this user
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      articles: data || [],
    })
  } catch (err) {
    console.error('Admin articles fetch error:', err)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')

    const user = await verifyAdminAuth(token)
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const {
      title,
      slug,
      subtitle,
      content,
      excerpt,
      thumbnail_url,
      meta_description,
      og_image_url,
      schema_markup,
      status,
      published_at,
    } = body

    if (!title || !slug) {
      return NextResponse.json(
        { error: 'Title and slug are required' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('articles')
      .insert([
        {
          title,
          slug,
          subtitle,
          content,
          excerpt,
          thumbnail_url,
          meta_description,
          og_image_url,
          schema_markup,
          status: status || 'draft',
          published_at: status === 'published' ? new Date().toISOString() : null,
        },
      ])
      .select()

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(data?.[0], { status: 201 })
  } catch (err) {
    console.error('Article creation error:', err)
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    )
  }
}
