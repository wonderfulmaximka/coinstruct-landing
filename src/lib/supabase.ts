import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Create client even if env vars are missing (prevents build errors)
// Runtime errors will occur if actually trying to use Supabase without proper config
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
