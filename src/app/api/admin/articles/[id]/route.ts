import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

async function verifyAdminAuth(token?: string) {
  if (!token) return null
  try {
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
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    const user = await verifyAdminAuth(token)
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

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
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    const user = await verifyAdminAuth(token)
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
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
    } = body

    if (!title || !slug) {
      return NextResponse.json(
        { error: 'Title and slug are required' },
        { status: 400 }
      )
    }

    // Fetch current article to preserve published_at when re-publishing
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
      status: status || 'draft',
      updated_at: new Date().toISOString(),
    }

    // Set published_at when first publishing; clear it when unpublishing
    if (status === 'published' && !current?.published_at) {
      updateData.published_at = new Date().toISOString()
    } else if (status === 'published' && current?.published_at) {
      // Keep existing published_at
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
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    const user = await verifyAdminAuth(token)
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

    const { error } = await supabase.from('articles').delete().eq('id', id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Article delete error:', err)
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 })
  }
}
