'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('@/components/Editor'), {
  ssr: false,
  loading: () => (
    <div className="border border-gray-200 rounded-xl min-h-[400px] flex items-center justify-center text-gray-400 text-sm">
      Loading editor…
    </div>
  ),
})

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 100)
}

export default function NewArticlePage() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [slugEdited, setSlugEdited] = useState(false)
  const [subtitle, setSubtitle] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const [thumbnailUploading, setThumbnailUploading] = useState(false)
  const [content, setContent] = useState<any>(null)
  const [excerpt, setExcerpt] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const [ogImageUrl, setOgImageUrl] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleTitleChange = (value: string) => {
    setTitle(value)
    if (!slugEdited) setSlug(toSlug(value))
  }

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
    if (!title.trim()) { setError('Title is required'); return }
    if (!slug.trim()) { setError('Slug is required'); return }

    setSaving(true)
    try {
      const token = localStorage.getItem('admin_token')
      const res = await fetch('/api/admin/articles', {
        method: 'POST',
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
          published_at: status === 'published' ? new Date().toISOString() : null,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Failed to save article')
        return
      }

      router.push('/admin')
    } catch {
      setError('Failed to save article')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">New Article</h2>
          <p className="mt-1 text-gray-500 text-sm">Create a new blog post</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => router.push('/admin')}
            className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSave('draft')}
            disabled={saving}
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save Draft'}
          </button>
          <button
            onClick={() => handleSave('published')}
            disabled={saving}
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? 'Publishing…' : 'Publish'}
          </button>
        </div>
      </div>

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
              onChange={(e) => handleTitleChange(e.target.value)}
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
                  onChange={(e) => {
                    setSlug(e.target.value)
                    setSlugEdited(true)
                  }}
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

          {/* Editor */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Content</label>
            <Editor content={content} onChange={setContent} />
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
        </div>
      </div>
    </div>
  )
}
