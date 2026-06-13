'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Article } from '@/lib/types'

export default function AdminDashboard() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      // Fetch all articles (published + drafts)
      const res = await fetch('/api/admin/articles', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
        },
      })

      if (!res.ok) {
        if (res.status === 401) {
          setError('Session expired. Please sign in again.')
          return
        }
        throw new Error('Failed to fetch articles')
      }

      const data = await res.json()
      setArticles(data.articles || [])
    } catch (err) {
      console.error('Error fetching articles:', err)
      setError('Failed to load articles')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
          <p className="mt-2 text-gray-600">Manage your blog articles</p>
        </div>

        <Link
          href="/admin/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          + New Article
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Total Articles</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {articles.length}
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Published</p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {articles.filter((a) => a.status === 'published').length}
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-gray-600 text-sm">Drafts</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">
            {articles.filter((a) => a.status === 'draft').length}
          </p>
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {error && (
          <div className="p-4 bg-red-50 border-b border-red-200">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading...</div>
        ) : articles.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p>No articles yet.</p>
            <Link href="/admin/new" className="text-blue-600 hover:text-blue-700">
              Create your first article →
            </Link>
          </div>
        ) : (
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Published
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">
                      {article.title}
                    </p>
                    {article.subtitle && (
                      <p className="text-sm text-gray-600">
                        {article.subtitle}
                      </p>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        article.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {article.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {article.published_at
                      ? new Date(article.published_at).toLocaleDateString()
                      : '—'}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/${article.id}`}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Edit
                      </Link>

                      {article.status === 'published' && (
                        <Link
                          href={`/blog/${article.slug}`}
                          target="_blank"
                          className="text-gray-600 hover:text-gray-700 text-sm font-medium"
                        >
                          View
                        </Link>
                      )}

                      <button
                        onClick={async () => {
                          if (!confirm('Delete this article? This cannot be undone.')) return
                          try {
                            const res = await fetch(`/api/admin/articles/${article.id}`, {
                              method: 'DELETE',
                              headers: {
                                Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
                              },
                            })
                            if (res.ok) {
                              setArticles((prev) => prev.filter((a) => a.id !== article.id))
                            } else {
                              const d = await res.json()
                              alert(d.error || 'Delete failed')
                            }
                          } catch {
                            alert('Delete failed')
                          }
                        }}
                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
