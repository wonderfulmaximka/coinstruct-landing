'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Youtube from '@tiptap/extension-youtube'
import Underline from '@tiptap/extension-underline'
import { useCallback, useRef } from 'react'

interface EditorProps {
  content: any
  onChange: (json: any) => void
}

function Btn({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void
  active?: boolean
  title?: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
        active ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  )
}

function Sep() {
  return <span className="w-px bg-gray-200 self-stretch mx-0.5" />
}

export default function Editor({ content, onChange }: EditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' },
      }),
      Image.configure({ inline: false, allowBase64: false }),
      Youtube.configure({ width: 640, height: 360 }),
    ],
    content: content || '',
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON())
    },
  })

  const handleLink = useCallback(() => {
    if (!editor) return
    const prev = editor.getAttributes('link').href || ''
    const url = window.prompt('Enter URL:', prev)
    if (url === null) return
    if (url === '') {
      editor.chain().focus().unsetLink().run()
    } else {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }, [editor])

  const handleImageUrl = useCallback(() => {
    if (!editor) return
    const url = window.prompt('Paste image URL:')
    if (url) editor.chain().focus().setImage({ src: url }).run()
  }, [editor])

  const handleImageUpload = useCallback(
    async (file: File) => {
      if (!editor) return
      const token =
        typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null
      if (!token) return

      const fd = new FormData()
      fd.append('file', file)

      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: fd,
        })
        const data = await res.json()
        if (data.url) {
          editor.chain().focus().setImage({ src: data.url }).run()
        } else {
          alert('Image upload failed: ' + (data.error || 'Unknown error'))
        }
      } catch {
        alert('Image upload failed')
      }
    },
    [editor]
  )

  const handleYoutube = useCallback(() => {
    if (!editor) return
    const url = window.prompt('Paste YouTube URL:')
    if (url) editor.chain().focus().setYoutubeVideo({ src: url }).run()
  }, [editor])

  if (!editor) {
    return (
      <div className="border border-gray-200 rounded-xl min-h-[400px] flex items-center justify-center text-gray-400 text-sm">
        Loading editor…
      </div>
    )
  }

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      {/* ── Toolbar ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-gray-100 bg-gray-50/80">
        {/* History */}
        <Btn onClick={() => editor.chain().focus().undo().run()} title="Undo">↩</Btn>
        <Btn onClick={() => editor.chain().focus().redo().run()} title="Redo">↪</Btn>
        <Sep />

        {/* Headings */}
        <Btn
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          active={editor.isActive('heading', { level: 1 })}
        >H1</Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          active={editor.isActive('heading', { level: 2 })}
        >H2</Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          active={editor.isActive('heading', { level: 3 })}
        >H3</Btn>
        <Btn
          onClick={() => editor.chain().focus().setParagraph().run()}
          active={editor.isActive('paragraph')}
          title="Paragraph"
        >¶</Btn>
        <Sep />

        {/* Inline marks */}
        <Btn
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
          title="Bold"
        ><strong>B</strong></Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
          title="Italic"
        ><em>I</em></Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive('underline')}
          title="Underline"
        ><span className="underline">U</span></Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive('strike')}
          title="Strikethrough"
        ><s>S</s></Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleCode().run()}
          active={editor.isActive('code')}
          title="Inline code"
        ><code className="text-xs">`</code></Btn>
        <Sep />

        {/* Lists + blocks */}
        <Btn
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
          title="Bullet list"
        >• List</Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
          title="Ordered list"
        >1. List</Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive('blockquote')}
          title="Blockquote"
        >❝ Quote</Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          active={editor.isActive('codeBlock')}
          title="Code block"
        >{'{ }'}</Btn>
        <Sep />

        {/* Links & media */}
        <Btn onClick={handleLink} active={editor.isActive('link')} title="Insert / edit link">
          Link
        </Btn>
        <Btn onClick={handleImageUrl} title="Insert image from URL">
          IMG URL
        </Btn>
        <Btn onClick={() => fileInputRef.current?.click()} title="Upload image">
          IMG ↑
        </Btn>
        <Btn onClick={handleYoutube} title="Embed YouTube video">
          ▶ YouTube
        </Btn>
        <Sep />

        {/* Misc */}
        <Btn
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="Horizontal rule"
        >─ HR</Btn>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleImageUpload(file)
          e.target.value = ''
        }}
      />

      {/* ── Editor area ─────────────────────────────────────────── */}
      <EditorContent editor={editor} className="tiptap-editor" />
    </div>
  )
}
