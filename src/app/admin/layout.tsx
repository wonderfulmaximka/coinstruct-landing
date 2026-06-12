'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { getStoredSession, clearSession } from '@/lib/auth'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    // Check authentication on mount
    const session = getStoredSession()

    if (!session || !session.access_token) {
      // Redirect to login if not authenticated
      if (pathname !== '/admin/login') {
        router.push('/admin/login')
      }
      setIsLoading(false)
      return
    }

    setIsAuthenticated(true)
    setEmail(session.user.email)
    setIsLoading(false)
  }, [pathname, router])

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  // For login page, don't show layout
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  // If not authenticated, show nothing (redirect happens in useEffect)
  if (!isAuthenticated) {
    return null
  }

  // Authenticated admin layout
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                Coinstruct Admin
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{email}</span>

              <button
                onClick={async () => {
                  await fetch('/api/auth/logout', { method: 'POST' })
                  clearSession()
                  router.push('/admin/login')
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
