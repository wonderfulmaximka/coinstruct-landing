import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, target_id, target_name } = body

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRx.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )

    const { error } = await supabase.from('tokenized_deposits_leads').insert({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      tag: 'alrt',
      target_id: target_id || null,
      target_name: target_name || null,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to save alert.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Tokenized deposits alert error:', err)
    return NextResponse.json({ error: 'Unexpected error. Please try again.' }, { status: 500 })
  }
}
