'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { generateHTML } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import LinkExtension from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Youtube from '@tiptap/extension-youtube'
import { Article } from '@/lib/types'

const EXTENSIONS = [StarterKit, Underline, LinkExtension, Image, Youtube]

function ArticleContent({ content }: { content: any }) {
  if (!content) return null

  try {
    const html = generateHTML(content, EXTENSIONS)
    return (
      <div
        className="tiptap-editor"
        // Content comes from our own database — not user-supplied untrusted HTML
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  } catch {
    return <p className="text-gray-500 italic">Content could not be rendered.</p>
  }
}

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string

  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    const fetchArticle = async () => {
      try {
        const res = await fetch(`/api/articles/${slug}`)
        if (!res.ok) {
          setError('Article not found')
          return
        }
        const data = await res.json()
        setArticle(data)
      } catch {
        setError('Failed to load article')
      } finally {
        setLoading(false)
      }
    }
    fetchArticle()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading…</p>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-2xl px-6 py-12">
          <h1 className="text-2xl font-bold text-gray-900">{error || 'Not found'}</h1>
          <Link href="/blog" className="mt-4 inline-block text-blue-600 hover:underline text-sm">
            ← Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Thumbnail hero */}
      {article.thumbnail_url && (
        <div className="w-full aspect-video overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.thumbnail_url}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <article className="mx-auto max-w-2xl px-6 py-12">
        {/* Back link */}
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">
          ← Back to blog
        </Link>

        {/* Meta */}
        {article.published_at && (
          <p className="mt-6 text-sm text-gray-400">
            {new Date(article.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}

        {/* Title */}
        <h1 className="mt-3 text-4xl font-bold text-gray-900 leading-tight tracking-tight">
          {article.title}
        </h1>

        {/* Subtitle */}
        {article.subtitle && (
          <p className="mt-4 text-xl text-gray-500 leading-relaxed">{article.subtitle}</p>
        )}

        {/* Divider */}
        <hr className="mt-8 border-gray-100" />

        {/* Body */}
        <div className="py-8">
          <ArticleContent content={article.content} />
        </div>

        {/* JSON-LD schema */}
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
