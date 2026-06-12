'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Article } from '@/lib/types'

const ITEMS_PER_PAGE = 9

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [page, search])

  const fetchArticles = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        limit: ITEMS_PER_PAGE.toString(),
        offset: (page * ITEMS_PER_PAGE).toString(),
        ...(search && { search }),
      })

      const res = await fetch(`/api/articles?${params}`)
      const data = await res.json()

      setArticles(data.articles || [])
      setTotal(data.total || 0)
    } catch (err) {
      console.error('Failed to fetch articles:', err)
    } finally {
      setLoading(false)
    }
  }

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Insights on tokenization, blockchain, and digital assets strategy
          </p>

          {/* Search */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(0)
              }}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {loading ? (
          <div className="text-center text-gray-500">Loading articles...</div>
        ) : articles.length === 0 ? (
          <div className="text-center text-gray-500">
            {search
              ? 'No articles found. Try a different search.'
              : 'No articles published yet.'}
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-lg"
                >
                  {/* Thumbnail */}
                  {article.thumbnail_url && (
                    <div className="relative aspect-video overflow-hidden bg-gray-200">
                      <img
                        src={article.thumbnail_url}
                        alt={article.title}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    {article.published_at && (
                      <p className="text-sm text-gray-500">
                        {new Date(article.published_at).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </p>
                    )}

                    {/* Title */}
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                      {article.title}
                    </h3>

                    {/* Subtitle */}
                    {article.subtitle && (
                      <p className="mt-1 text-sm text-gray-600">
                        {article.subtitle}
                      </p>
                    )}

                    {/* Excerpt */}
                    {article.excerpt && (
                      <p className="mt-3 line-clamp-2 text-sm text-gray-600">
                        {article.excerpt}
                      </p>
                    )}

                    {/* Read more link */}
                    <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                      Read article →
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
                <button
                  onClick={() => setPage(Math.max(0, page - 1))}
                  disabled={page === 0}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>

                <p className="text-sm text-gray-600">
                  Page {page + 1} of {totalPages}
                </p>

                <button
                  onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                  disabled={page === totalPages - 1}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
