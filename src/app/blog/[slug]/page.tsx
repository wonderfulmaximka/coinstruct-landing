'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Article } from '@/lib/types'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`/api/articles/${params.slug}`)
        if (!res.ok) {
          setError('Article not found')
          return
        }
        const data = await res.json()
        setArticle(data)
      } catch (err) {
        console.error('Failed to fetch article:', err)
        setError('Failed to load article')
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-2xl px-6 py-12">
          <h1 className="text-2xl font-bold text-gray-900">{error}</h1>
          <Link href="/blog" className="mt-4 text-blue-600 hover:text-blue-700">
            ← Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      {article.thumbnail_url && (
        <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
          <img
            src={article.thumbnail_url}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="mx-auto max-w-2xl px-6 py-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          {/* Back link */}
          <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-700">
            ← Back to blog
          </Link>

          {/* Date */}
          {article.published_at && (
            <p className="mt-4 text-sm text-gray-500">
              {new Date(article.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}

          {/* Title */}
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            {article.title}
          </h1>

          {/* Subtitle */}
          {article.subtitle && (
            <p className="mt-4 text-xl text-gray-600">{article.subtitle}</p>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none py-8">
          <ArticleContent content={article.content} />
        </div>

        {/* SEO Metadata (hidden from view, for search engines) */}
        {article.schema_markup && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(article.schema_markup) }}
          />
        )}
      </article>
    </div>
  )
}

function ArticleContent({ content }: { content: any }) {
  if (!content) return null

  // TipTap JSON renderer
  // This is a simplified version - in production, use @tiptap/react with nodeViewsRenderer
  return (
    <div className="space-y-4">
      <pre className="rounded bg-gray-100 p-4 text-xs overflow-auto">
        {JSON.stringify(content, null, 2)}
      </pre>
      <p className="text-gray-600 text-sm">
        ℹ️ Full TipTap content rendering will be implemented in the admin panel
      </p>
    </div>
  )
}
