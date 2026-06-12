import { supabase } from './supabase'
import { jwtDecode } from 'jwt-decode'

export type AuthSession = {
  access_token: string
  user: {
    id: string
    email: string
  }
}

/**
 * Sign up a new admin user (for initial setup only)
 */
export async function signUpAdmin(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${getBaseUrl()}/auth/callback`,
    },
  })

  if (error) throw new Error(error.message)
  return data
}

/**
 * Sign in admin user
 */
export async function signInAdmin(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw new Error(error.message)

  return {
    access_token: data.session?.access_token,
    user: data.user,
  }
}

/**
 * Sign out admin user
 */
export async function signOutAdmin() {
  const { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message)
}

/**
 * Get current session from localStorage
 */
export function getStoredSession(): AuthSession | null {
  if (typeof window === 'undefined') return null

  const token = localStorage.getItem('admin_token')
  const userId = localStorage.getItem('admin_user_id')
  const email = localStorage.getItem('admin_email')

  if (!token || !userId || !email) return null

  return {
    access_token: token,
    user: { id: userId, email },
  }
}

/**
 * Store session in localStorage
 */
export function storeSession(session: AuthSession) {
  localStorage.setItem('admin_token', session.access_token)
  localStorage.setItem('admin_user_id', session.user.id)
  localStorage.setItem('admin_email', session.user.email)
}

/**
 * Clear stored session
 */
export function clearSession() {
  localStorage.removeItem('admin_token')
  localStorage.removeItem('admin_user_id')
  localStorage.removeItem('admin_email')
}

/**
 * Check if token is valid
 */
export function isTokenValid(token: string): boolean {
  try {
    const decoded: any = jwtDecode(token)
    const now = Math.floor(Date.now() / 1000)
    return decoded.exp > now
  } catch {
    return false
  }
}

/**
 * Get the base URL for the app
 */
export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
}
