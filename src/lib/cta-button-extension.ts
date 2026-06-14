import { Node, mergeAttributes } from '@tiptap/core'

/**
 * Custom TipTap node: renders an inline CTA button (link) inside the article body.
 * Attributes (text, href, size) are stored in TipTap JSON and rendered to data-*
 * HTML attributes so generateHTML() can reconstruct them on the reader side.
 */
export const CtaButton = Node.create({
  name: 'ctaButton',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      text: {
        default: 'Talk to Expert',
        renderHTML: (attrs) => ({ 'data-text': attrs.text }),
        parseHTML: (el: Element) => el.getAttribute('data-text') || 'Talk to Expert',
      },
      href: {
        default: 'https://calendly.com/max-coinstruct/30min?back=1&month=2025-11',
        renderHTML: (attrs) => ({ 'data-href': attrs.href }),
        parseHTML: (el: Element) => el.getAttribute('data-href') || '',
      },
      size: {
        default: 'md',
        renderHTML: (attrs) => ({ 'data-size': attrs.size }),
        parseHTML: (el: Element) => el.getAttribute('data-size') || 'md',
      },
    }
  },

  parseHTML() {
    return [{ tag: 'div[data-type="cta-button"]' }]
  },

  renderHTML({ HTMLAttributes }) {
    const { 'data-text': text, 'data-href': href, 'data-size': size, ...rest } = HTMLAttributes
    return [
      'div',
      mergeAttributes(rest, { 'data-type': 'cta-button', class: 'cta-btn-wrapper' }),
      [
        'a',
        {
          href: href || '#',
          target: '_blank',
          rel: 'noopener noreferrer',
          class: `cta-btn cta-btn--${size || 'md'}`,
        },
        text || 'Talk to Expert',
      ],
    // ProseMirror DOMOutputSpec supports string children at runtime;
    // cast needed because TipTap's TS types are too narrow here.
    ] as any
  },
})
