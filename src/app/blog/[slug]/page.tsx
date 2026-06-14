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
import { CtaButton } from '@/lib/cta-button-extension'
import { Article } from '@/lib/types'

const EXTENSIONS = [StarterKit, Underline, LinkExtension, Image, Youtube, CtaButton]

const CALENDLY = 'https://calendly.com/max-coinstruct/30min?back=1&month=2025-11'
const LINKEDIN = 'https://www.linkedin.com/in/maxim-krasnov-484574246/'

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
        if (!res.ok) { setError('Article not found'); return }
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

      {/* ── Site nav (matches main site) ────────────────────────── */}
      <nav className="top">
        <div className="container row">
          <a href="/" className="logo" aria-label="Coinstruct home">
            <img src="/assets/logos/coinstruct-logo.png" alt="Coinstruct" className="logo-mark" />
          </a>
          <div className="links">
            <a href="/#expertise">Expertise</a>
            <a href="/#serve">Who we serve</a>
            <a href="/#approach">How we work</a>
            <a href="/blog">Blog</a>
          </div>
          <div className="spacer" />
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
          >
            Talk to Expert
            <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </nav>

      {/* ── Article ─────────────────────────────────────────────── */}
      <article className="mx-auto max-w-2xl px-6 py-12">

        {/* Back link */}
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">
          ← Back to blog
        </Link>

        {/* Date */}
        {article.published_at && (
          <p className="mt-6 text-xs font-semibold tracking-widest uppercase text-gray-400">
            {new Date(article.published_at).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </p>
        )}

        {/* Title */}
        <h1 className="mt-3 text-4xl font-bold text-gray-900 leading-tight tracking-tight">
          {article.title}
        </h1>

        {/* Subtitle */}
        {article.subtitle && (
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">{article.subtitle}</p>
        )}

        {/* Thumbnail */}
        {article.thumbnail_url && (
          <div className="mt-8 overflow-hidden rounded-xl bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.thumbnail_url}
              alt={article.title}
              className="w-full h-auto max-h-96 object-cover"
            />
          </div>
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

        {/* ── End-of-article CTA ────────────────────────────────── */}
        <div className="mt-8 pt-12 border-t border-gray-100">
          <div className="flex flex-col md:flex-row gap-10 items-start">

            {/* Left copy */}
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3"
                 style={{ color: '#1c66ff' }}>
                Let&apos;s Talk
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4"
                  style={{ color: '#0b0c0f' }}>
                Let&apos;s discover your{' '}
                <span style={{ color: '#9ca3af' }}>blockchain</span>{' '}
                <span style={{ color: '#d1d5db' }}>strategy.</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                Whether you&apos;re exploring crypto expansion, planning a token launch, or
                tokenizing real-world assets, Coinstruct is ready to guide you from strategy
                to live product.
              </p>
            </div>

            {/* Right card */}
            <div className="w-full md:w-72 rounded-2xl p-6 flex flex-col gap-3 flex-shrink-0"
                 style={{ background: '#f6f7fb' }}>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-base">Maxim Krasnov</p>
                  <p className="text-sm text-gray-500 mt-0.5">Managing Partner, Coinstruct</p>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                    >
                      {/* LinkedIn icon */}
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="mailto:max@coinstruct.tech"
                      className="text-sm hover:underline"
                      style={{ color: '#1c66ff' }}
                    >
                      max@coinstruct.tech
                    </a>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/maxim.jpg"
                  alt="Maxim Krasnov"
                  className="w-20 h-20 rounded-xl object-cover object-top flex-shrink-0"
                />
              </div>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener"
                className="mt-1 flex items-center justify-center gap-2 font-semibold rounded-xl px-4 py-3 transition text-white"
                style={{ background: '#1c66ff' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#1550cc' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#1c66ff' }}
              >
                Talk to Expert
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

          </div>
        </div>

      </article>
    </div>
  )
}
