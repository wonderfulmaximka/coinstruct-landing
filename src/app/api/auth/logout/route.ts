import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('admin_session')?.value

    if (token) {
      // Sign out from Supabase
      await supabase.auth.signOut()
    }

    // Create response and clear session cookie
    const response = NextResponse.json({ success: true })

    response.cookies.set({
      name: 'admin_session',
      value: '',
      httpOnly: true,
      maxAge: 0,
    })

    return response
  } catch (err) {
    console.error('Logout error:', err)
    return NextResponse.json(
      { error: 'Failed to sign out' },
      { status: 500 }
    )
  }
}
