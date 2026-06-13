'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Article } from '@/lib/types'

const Editor = dynamic(() => import('@/components/Editor'), {
  ssr: false,
  loading: () => (
    <div className="border border-gray-200 rounded-xl min-h-[400px] flex items-center justify-center text-gray-400 text-sm">
      Loading editor…
    </div>
  ),
})

export default function EditArticlePage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  // Loading / error states
  const [pageLoading, setPageLoading] = useState(true)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [article, setArticle] = useState<Article | null>(null)

  // Form fields
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const [thumbnailUploading, setThumbnailUploading] = useState(false)
  const [content, setContent] = useState<any>(null)
  const [contentReady, setContentReady] = useState(false)
  const [excerpt, setExcerpt] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const [ogImageUrl, setOgImageUrl] = useState('')

  // Action states
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      const token = localStorage.getItem('admin_token')
      try {
        const res = await fetch(`/api/admin/articles/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (!res.ok) {
          const d = await res.json()
          setFetchError(d.error || 'Article not found')
          return
        }
        const data: Article = await res.json()
        setArticle(data)
        setTitle(data.title)
        setSlug(data.slug)
        setSubtitle(data.subtitle || '')
        setThumbnailUrl(data.thumbnail_url || '')
        setContent(data.content)
        setExcerpt(data.excerpt || '')
        setMetaDescription(data.meta_description || '')
        setOgImageUrl(data.og_image_url || '')
        setContentReady(true)
      } catch {
        setFetchError('Failed to load article')
      } finally {
        setPageLoading(false)
      }
    }
    load()
  }, [id])

  const handleThumbnailUpload = async (file: File) => {
    const token = localStorage.getItem('admin_token')
    if (!token) return
    setThumbnailUploading(true)
    const fd = new FormData()
    fd.append('file', file)
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      })
      const data = await res.json()
      if (data.url) setThumbnailUrl(data.url)
      else alert('Upload failed: ' + (data.error || 'Unknown'))
    } catch {
      alert('Upload failed')
    } finally {
      setThumbnailUploading(false)
    }
  }

  const handleSave = async (status: 'draft' | 'published') => {
    setError(null)
    setSuccessMsg(null)
    if (!title.trim()) { setError('Title is required'); return }
    if (!slug.trim()) { setError('Slug is required'); return }

    setSaving(true)
    try {
      const token = localStorage.getItem('admin_token')
      const res = await fetch(`/api/admin/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: title.trim(),
          slug: slug.trim(),
          subtitle: subtitle.trim() || null,
          thumbnail_url: thumbnailUrl.trim() || null,
          content,
          excerpt: excerpt.trim() || null,
          meta_description: metaDescription.trim() || null,
          og_image_url: ogImageUrl.trim() || null,
          schema_markup: null,
          status,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Failed to save')
        return
      }

      setArticle(data)
      const msg =
        status === 'published'
          ? article?.status === 'published'
            ? 'Changes saved.'
            : 'Article published!'
          : article?.status === 'published'
          ? 'Article unpublished.'
          : 'Draft saved.'
      setSuccessMsg(msg)
      setTimeout(() => setSuccessMsg(null), 4000)
    } catch {
      setError('Failed to save article')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Delete this article permanently? This cannot be undone.')) return
    const token = localStorage.getItem('admin_token')
    try {
      const res = await fetch(`/api/admin/articles/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.ok) {
        router.push('/admin')
      } else {
        const data = await res.json()
        setError(data.error || 'Delete failed')
      }
    } catch {
      setError('Delete failed')
    }
  }

  if (pageLoading) {
    return (
      <div className="flex items-center justify-center py-20 text-gray-400 text-sm">
        Loading article…
      </div>
    )
  }

  if (fetchError) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-600 mb-4">{fetchError}</p>
        <button onClick={() => router.push('/admin')} className="text-blue-600 hover:underline text-sm">
          ← Back to dashboard
        </button>
      </div>
    )
  }

  const isPublished = article?.status === 'published'

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Edit Article</h2>
          <div className="mt-1.5 flex items-center gap-3">
            <span
              className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                isPublished ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {isPublished ? 'Published' : 'Draft'}
            </span>
            {isPublished && (
              <a
                href={`/blog/${article?.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                View live →
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => router.push('/admin')}
            className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            ← Dashboard
          </button>

          {isPublished ? (
            <button
              onClick={() => handleSave('draft')}
              disabled={saving}
              className="px-4 py-2 text-sm font-medium text-yellow-700 border border-yellow-200 bg-yellow-50 rounded-lg hover:bg-yellow-100 disabled:opacity-50"
            >
              Unpublish
            </button>
          ) : (
            <button
              onClick={() => handleSave('draft')}
              disabled={saving}
              className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
            >
              {saving ? 'Saving…' : 'Save Draft'}
            </button>
          )}

          <button
            onClick={() => handleSave('published')}
            disabled={saving}
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? 'Saving…' : isPublished ? 'Save Changes' : 'Publish'}
          </button>
        </div>
      </div>

      {/* Feedback banners */}
      {successMsg && (
        <div className="mb-6 p-4 bg-green-50 border border-green-100 rounded-lg text-sm text-green-700">
          {successMsg}
        </div>
      )}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Main column ───────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-6">

          {/* Title + Slug */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Article title…"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 text-lg font-semibold placeholder-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <div className="mt-5">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Slug <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm whitespace-nowrap">/blog/</span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="article-slug"
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-1.5 text-gray-900 text-sm font-mono placeholder-gray-300 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Subtitle</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Optional tagline or summary line…"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Editor — render only after content is fetched to show correct initial value */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Content</label>
            {contentReady ? (
              <Editor key={id} content={content} onChange={setContent} />
            ) : (
              <div className="border border-gray-200 rounded-xl min-h-[400px] flex items-center justify-center text-gray-400 text-sm">
                Loading content…
              </div>
            )}
          </div>
        </div>

        {/* ── Sidebar ───────────────────────────────────────── */}
        <div className="space-y-6">

          {/* Thumbnail */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail</label>
            {thumbnailUrl && (
              <div className="relative mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumbnailUrl}
                  alt="Thumbnail preview"
                  className="w-full aspect-video object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setThumbnailUrl('')}
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full w-6 h-6 flex items-center justify-center text-gray-600 text-xs shadow"
                >✕</button>
              </div>
            )}
            <input
              type="text"
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              placeholder="https://…"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-300 focus:border-blue-500 focus:outline-none mb-2"
            />
            <label className="cursor-pointer w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0]
                  if (f) handleThumbnailUpload(f)
                  e.target.value = ''
                }}
              />
              {thumbnailUploading ? 'Uploading…' : '↑ Upload image'}
            </label>
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-sm font-medium text-gray-700">Excerpt</label>
              <span className="text-xs text-gray-400">{excerpt.length}/160</span>
            </div>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value.slice(0, 160))}
              placeholder="Short teaser shown in article listings…"
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-300 focus:border-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* SEO */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">SEO</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-medium text-gray-700">Meta description</label>
                  <span className="text-xs text-gray-400">{metaDescription.length}/160</span>
                </div>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value.slice(0, 160))}
                  placeholder="Shown in search results…"
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-300 focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  OG image URL
                </label>
                <input
                  type="text"
                  value={ogImageUrl}
                  onChange={(e) => setOgImageUrl(e.target.value)}
                  placeholder="https://… (social share image)"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-300 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Danger zone */}
          <div className="bg-white rounded-xl border border-red-100 p-6">
            <h3 className="text-sm font-semibold text-red-600 mb-3">Danger zone</h3>
            <button
              onClick={handleDelete}
              className="w-full px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
            >
              Delete article permanently
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
