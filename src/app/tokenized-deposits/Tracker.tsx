'use client'

import { useEffect, useMemo, useState, FormEvent, KeyboardEvent } from 'react'
import {
  COUNTRY_FLAG,
  DepositProgram,
  STATUS_LABEL,
  TOKENIZED_DEPOSITS_DATA,
} from '@/data/tokenized-deposits'

type Kind = 'bank' | 'consortium'
type Item = DepositProgram & { kind: Kind }

const ALL_ITEMS: Item[] = [
  ...TOKENIZED_DEPOSITS_DATA.banks.map((i) => ({ ...i, kind: 'bank' as const })),
  ...TOKENIZED_DEPOSITS_DATA.consortia.map((i) => ({ ...i, kind: 'consortium' as const })),
]

const CONTACT_KEY = 'tdt_contact'
const ALERTED_KEY = 'tdt_alerted_ids'

type Contact = { name: string; email: string }

const TOKENIZATION_OPTIONS = [
  'Yes, considering / planning',
  'Preparing for launch',
  'Not sure if we need it',
  'Just researching',
  'Other',
]

/* ── Icons ────────────────────────────────────────────── */

function IconEye() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14} aria-hidden="true">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function IconBell() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14} aria-hidden="true">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

function IconBank() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={15} height={15} aria-hidden="true">
      <path d="M3 21h18" /><path d="M5 21V10" /><path d="M9 21V10" /><path d="M15 21V10" /><path d="M19 21V10" /><path d="M2 10l10-7 10 7" />
    </svg>
  )
}

function IconConsortium() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={15} height={15} aria-hidden="true">
      <circle cx="5" cy="6" r="2.5" /><circle cx="19" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" />
      <path d="M7 7.3L10.3 16" /><path d="M17 7.3L13.7 16" /><path d="M7.5 6h9" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14} aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  )
}

/* ── Logo badge ───────────────────────────────────────── */

function LogoBadge({ item }: { item: Item }) {
  if (item.logo) {
    return <img src={item.logo} alt={`${item.name} logo`} loading="lazy" />
  }
  const monoMatch = item.program.match(/\(([^)]+)\)/)
  const initials = monoMatch ? monoMatch[1] : item.name.slice(0, 4).toUpperCase()
  return <span className="tdt-mono-badge">{initials}</span>
}

/* ── Card ─────────────────────────────────────────────── */

function ProgramCard({
  item,
  alerted,
  onView,
  onAlert,
}: {
  item: Item
  alerted: boolean
  onView: (id: string) => void
  onAlert: (id: string) => void
}) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onView(item.id)
    }
  }
  return (
    <div
      className={`tdt-card tdt-card-${item.kind}`}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${item.name}, ${item.program}`}
      onClick={() => onView(item.id)}
      onKeyDown={handleKeyDown}
    >
      <div className="tdt-card-top">
        <div className="tdt-card-id">
          <div className="tdt-logo-badge">
            <LogoBadge item={item} />
          </div>
          <div>
            <div className="tdt-card-name">{item.name}</div>
            <div className="tdt-card-program">{item.program}</div>
          </div>
        </div>
        <span className="tdt-country-chip">
          {COUNTRY_FLAG[item.country] || ''} {item.country}
        </span>
      </div>
      <span className={`tdt-status-pill tdt-status-${item.status}`}>
        <span className={`tdt-dot tdt-dot-${item.status}`} />
        {STATUS_LABEL[item.status]}
      </span>
      <div className="tdt-card-actions">
        <button
          type="button"
          className="tdt-btn"
          onClick={(e) => { e.stopPropagation(); onView(item.id) }}
        >
          <IconEye /> View
        </button>
        <button
          type="button"
          className={`tdt-btn ${alerted ? 'tdt-btn-success' : 'tdt-btn-primary'}`}
          onClick={(e) => { e.stopPropagation(); onAlert(item.id) }}
        >
          {alerted ? <><IconCheck /> Alert set</> : <><IconBell /> Set alert</>}
        </button>
      </div>
    </div>
  )
}

/* ── Section (bank programs / consortia) ─────────────── */

function Section({
  title,
  icon,
  kind,
  items,
  alertedIds,
  onView,
  onAlert,
}: {
  title: string
  icon: React.ReactNode
  kind: Kind
  items: DepositProgram[]
  alertedIds: Set<string>
  onView: (id: string) => void
  onAlert: (id: string) => void
}) {
  const [country, setCountry] = useState('all')
  const [status, setStatus] = useState('all')

  const countries = useMemo(() => Array.from(new Set(items.map((i) => i.country))).sort(), [items])

  const filtered = items.filter((i) => {
    const matchC = country === 'all' || i.country === country
    const matchS = status === 'all' || i.status === status
    return matchC && matchS
  })

  return (
    <section className="tdt-block">
      <div className="tdt-block-head">
        <div className="tdt-block-title">
          <span className={`tdt-block-icon tdt-block-icon-${kind}`}>{icon}</span>
          <h2>{title}</h2>
        </div>
        <span className="tdt-block-count">{filtered.length}</span>
      </div>

      <div className="tdt-section-filters">
        <span className="tdt-filter-label">Country</span>
        <select value={country} onChange={(e) => setCountry(e.target.value)} aria-label={`Filter ${title} by country`}>
          <option value="all">All</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <span className="tdt-filter-label">Status</span>
        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label={`Filter ${title} by status`}>
          <option value="all">All</option>
          <option value="live">Live</option>
          <option value="pilot">Pilot</option>
          <option value="sandbox">Sandbox</option>
          <option value="building">Building</option>
        </select>
        <span className="tdt-result-count">{filtered.length} of {items.length}</span>
      </div>

      <div className="tdt-grid">
        {filtered.length === 0 ? (
          <div className="tdt-empty">No programs match these filters.</div>
        ) : (
          filtered.map((item) => (
            <ProgramCard
              key={item.id}
              item={{ ...item, kind }}
              alerted={alertedIds.has(item.id)}
              onView={onView}
              onAlert={onAlert}
            />
          ))
        )}
      </div>
    </section>
  )
}

/* ── Detail modal ─────────────────────────────────────── */

function DetailModal({
  item,
  alerted,
  onClose,
  onAlert,
}: {
  item: Item | null
  alerted: boolean
  onClose: () => void
  onAlert: (id: string) => void
}) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: globalThis.KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div className="tdt-overlay tdt-overlay-open" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="tdt-detail" role="dialog" aria-modal="true" aria-labelledby="tdt-detail-name">
        <div className="tdt-detail-top">
          <div className="tdt-detail-id">
            <div className="tdt-detail-logo"><LogoBadge item={item} /></div>
            <div>
              <div className="tdt-detail-name" id="tdt-detail-name">{item.name}</div>
              <div className="tdt-detail-program">{item.program}</div>
            </div>
          </div>
          <button type="button" className="tdt-close-btn" aria-label="Close" onClick={onClose}>&times;</button>
        </div>

        <div className="tdt-detail-meta">
          <span className="tdt-country-chip">{COUNTRY_FLAG[item.country] || ''} {item.country}</span>
          <span className={`tdt-status-pill tdt-status-${item.status} tdt-status-pill-detail`}>
            <span className={`tdt-dot tdt-dot-${item.status}`} />
            {STATUS_LABEL[item.status]}
          </span>
        </div>

        <p className="tdt-detail-summary">{item.summary}</p>

        {item.note && <div className="tdt-note-box">{item.note}</div>}

        {item.currencies && item.currencies.length > 0 && (
          <div className="tdt-detail-section">
            <p className="tdt-section-label">Currencies</p>
            <div className="tdt-curr-row">
              {item.currencies.map((c) => <span key={c} className="tdt-curr-chip">{c}</span>)}
            </div>
          </div>
        )}

        <div className="tdt-detail-section">
          <p className="tdt-section-label">{item.ledgerLabel || 'Infrastructure'}</p>
          <div className="tdt-tag-row">
            {item.ledgerTags.map((t) => <span key={t} className="tdt-tag">{t}</span>)}
          </div>
        </div>

        <div className="tdt-detail-section">
          <p className="tdt-section-label">Traction</p>
          <div className="tdt-stat-grid">
            {item.stats.map((s) => (
              <div key={s.label} className="tdt-stat-block">
                <div className="tdt-stat-value">{s.value}</div>
                <div className="tdt-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="tdt-detail-section">
          <p className="tdt-section-label">{item.clientsLabel || 'Key clients'}</p>
          <div className="tdt-client-grid">
            {item.clients.map((c) => <span key={c} className="tdt-client-block">{c}</span>)}
          </div>
        </div>

        <div className="tdt-detail-section">
          <p className="tdt-section-label">Differentiator</p>
          <p className="tdt-differentiator-text">{item.differentiator}</p>
        </div>

        <div className="tdt-detail-section">
          <p className="tdt-section-label">Roadmap</p>
          <div className="tdt-roadmap">
            {item.roadmap.map((step, i) => (
              <div key={step} className={`tdt-roadmap-step${i === 0 ? ' tdt-roadmap-step-current' : ''}`}>
                <div className="tdt-roadmap-dot" />
                <div className="tdt-roadmap-label">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="tdt-detail-footer">
          <button
            type="button"
            className={`tdt-btn ${alerted ? 'tdt-btn-success' : 'tdt-btn-primary'}`}
            onClick={() => onAlert(item.id)}
          >
            {alerted ? <><IconCheck /> Alert set</> : <><IconBell /> Set an alert</>}
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── Gate modal: submit to view ───────────────────────── */

function GateModal({
  open,
  onClose,
  onSubmitted,
}: {
  open: boolean
  onClose: () => void
  onSubmitted: (name: string, email: string) => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tokenization, setTokenization] = useState('')
  const [errors, setErrors] = useState<{ name?: string; email?: string; tokenization?: string }>({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (!open) return
    const onKey = (e: globalThis.KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    const newErrors: typeof errors = {}
    if (!name.trim()) newErrors.name = 'Please enter your name.'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email.'
    if (!tokenization) newErrors.tokenization = 'Please select an option.'
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }

    setLoading(true)
    try {
      const res = await fetch('/api/tokenized-deposits/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, tokenization_planning: tokenization }),
      })
      const data = await res.json()
      if (!res.ok) { setSubmitError(data.error || 'Something went wrong. Please try again.'); setLoading(false); return }
      onSubmitted(name.trim(), email.trim())
      setName(''); setEmail(''); setTokenization('')
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="tdt-popup-overlay tdt-popup-overlay-open" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="tdt-popup-box" role="dialog" aria-modal="true" aria-labelledby="tdt-gate-title">
        <div className="tdt-popup-top">
          <div>
            <div className="tdt-popup-title" id="tdt-gate-title">Submit to view more</div>
            <div className="tdt-popup-sub">One quick form unlocks every program on the tracker.</div>
          </div>
          <button type="button" className="tdt-close-btn" aria-label="Close" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="tdt-field">
            <label htmlFor="tdt-gate-name">Name</label>
            <input
              id="tdt-gate-name"
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })) }}
            />
            {errors.name && <span className="tdt-field-error">{errors.name}</span>}
          </div>
          <div className="tdt-field">
            <label htmlFor="tdt-gate-email">Work email</label>
            <input
              id="tdt-gate-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })) }}
            />
            {errors.email && <span className="tdt-field-error">{errors.email}</span>}
          </div>
          <div className="tdt-field">
            <label htmlFor="tdt-gate-select">Are you planning tokenization?</label>
            <select
              id="tdt-gate-select"
              value={tokenization}
              onChange={(e) => { setTokenization(e.target.value); setErrors((p) => ({ ...p, tokenization: undefined })) }}
            >
              <option value="" disabled>Select one...</option>
              {TOKENIZATION_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
            {errors.tokenization && <span className="tdt-field-error">{errors.tokenization}</span>}
          </div>

          {submitError && <p className="tdt-submit-error">{submitError}</p>}

          <button type="submit" className="tdt-btn tdt-btn-primary tdt-popup-submit" disabled={loading}>
            {loading ? 'Submitting…' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

/* ── Alert modal: get notified ────────────────────────── */

type AlertPhase = 'form' | 'submitting' | 'done' | 'already' | 'error'

function AlertModal({
  open,
  targetName,
  knownContact,
  alreadyAlerted,
  onClose,
  onSubmit,
}: {
  open: boolean
  targetName: string | null
  knownContact: { name: string; email: string } | null
  alreadyAlerted: boolean
  onClose: () => void
  onSubmit: (name: string, email: string) => Promise<boolean>
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const [phase, setPhase] = useState<AlertPhase>('form')
  const [resultEmail, setResultEmail] = useState('')

  // Reset each time the modal transitions from closed to open. Known contacts
  // skip straight to auto-submitting so the person never re-enters their email;
  // programs they're already tracking skip the network call entirely.
  // (Adjusting state during render, not in an effect, per React's guidance
  // for state that depends on a changing prop.)
  const [wasOpen, setWasOpen] = useState(open)
  if (open !== wasOpen) {
    setWasOpen(open)
    if (open) {
      setErrors({})
      if (alreadyAlerted && knownContact) {
        setResultEmail(knownContact.email)
        setPhase('already')
      } else if (knownContact) {
        setName(knownContact.name); setEmail(knownContact.email)
        setPhase('submitting')
      } else {
        setName(''); setEmail('')
        setPhase('form')
      }
    }
  }

  // `knownContact` and `onSubmit` are stable across re-renders here (contact is
  // React state in the parent, onSubmit doesn't change identity mid-flow), so this
  // effect runs exactly once per "submitting" phase — no separate fired-guard needed.
  useEffect(() => {
    if (!open || phase !== 'submitting' || !knownContact) return
    let cancelled = false
    onSubmit(knownContact.name, knownContact.email).then((ok) => {
      if (cancelled) return
      setResultEmail(knownContact.email)
      setPhase(ok ? 'done' : 'error')
    })
    return () => { cancelled = true }
  }, [open, phase, knownContact, onSubmit])

  useEffect(() => {
    if (!open) return
    const onKey = (e: globalThis.KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const newErrors: typeof errors = {}
    if (!name.trim()) newErrors.name = 'Please enter your name.'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email.'
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }

    setPhase('submitting')
    const ok = await onSubmit(name.trim(), email.trim())
    setResultEmail(email.trim())
    setPhase(ok ? 'done' : 'error')
  }

  return (
    <div className="tdt-popup-overlay tdt-popup-overlay-open" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="tdt-popup-box" role="dialog" aria-modal="true" aria-labelledby="tdt-alert-title">
        <div className="tdt-popup-top">
          <div>
            <div className="tdt-popup-title" id="tdt-alert-title">Get notified</div>
            <div className="tdt-popup-sub">
              {targetName
                ? `We'll email you when ${targetName} changes status.`
                : "We'll email you when new programs are added to the tracker."}
            </div>
          </div>
          <button type="button" className="tdt-close-btn" aria-label="Close" onClick={onClose}>&times;</button>
        </div>

        {phase === 'form' && (
          <form onSubmit={handleSubmit} noValidate>
            <div className="tdt-field">
              <label htmlFor="tdt-alert-name">Your name</label>
              <input
                id="tdt-alert-name"
                type="text"
                placeholder="Jane Cooper"
                value={name}
                onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })) }}
              />
              {errors.name && <span className="tdt-field-error">{errors.name}</span>}
            </div>
            <div className="tdt-field">
              <label htmlFor="tdt-alert-email">Work email</label>
              <input
                id="tdt-alert-email"
                type="email"
                placeholder="jane@fund.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })) }}
              />
              {errors.email && <span className="tdt-field-error">{errors.email}</span>}
            </div>

            <button type="submit" className="tdt-btn tdt-btn-primary tdt-popup-submit">
              Set alert
            </button>
          </form>
        )}

        {phase === 'submitting' && (
          <p className="tdt-popup-sub" style={{ marginTop: 14 }}>
            Setting your alert for <b>{knownContact?.email}</b>…
          </p>
        )}

        {(phase === 'done' || phase === 'already') && (
          <div className="tdt-popup-confirm">
            <span className="tdt-ok-dot" />
            {phase === 'already' ? (
              <>You&apos;re already tracking <b>{targetName || 'this program'}</b> — we&apos;ll email <b>{resultEmail}</b> when it changes status.</>
            ) : (
              <>You&apos;re set. We&apos;ll email <b>{resultEmail}</b> when <b>{targetName || 'the tracker'}</b> changes status.</>
            )}
          </div>
        )}

        {phase === 'error' && (
          <div>
            <p className="tdt-submit-error">Something went wrong. Please try again.</p>
            <button
              type="button"
              className="tdt-btn tdt-btn-primary tdt-popup-submit"
              onClick={() => setPhase(knownContact ? 'submitting' : 'form')}
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Main tracker ──────────────────────────────────────── */

export default function Tracker() {
  // A single identity, established by the FIRST form the person completes
  // (the gate form, or an alert form on any card) and reused everywhere
  // after that — no repeat "who are you" prompts once we have an email.
  const [contact, setContact] = useState<Contact | null>(null)
  const [alertedIds, setAlertedIds] = useState<Set<string>>(new Set())
  const [hydrated, setHydrated] = useState(false)
  const [pendingViewId, setPendingViewId] = useState<string | null>(null)
  const [gateOpen, setGateOpen] = useState(false)
  const [detailId, setDetailId] = useState<string | null>(null)
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertTargetId, setAlertTargetId] = useState<string | null>(null)

  useEffect(() => {
    try {
      const storedContact = window.localStorage.getItem(CONTACT_KEY)
      if (storedContact) setContact(JSON.parse(storedContact))
      const storedAlerted = window.localStorage.getItem(ALERTED_KEY)
      if (storedAlerted) setAlertedIds(new Set(JSON.parse(storedAlerted)))
    } catch {
      // localStorage unavailable, or the stored value was corrupt — treat as unidentified
    }
    setHydrated(true)
  }, [])

  const rememberContact = (next: Contact) => {
    setContact(next)
    try { window.localStorage.setItem(CONTACT_KEY, JSON.stringify(next)) } catch { /* ignore */ }
  }

  const markAlerted = (id: string) => {
    setAlertedIds((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev).add(id)
      try { window.localStorage.setItem(ALERTED_KEY, JSON.stringify([...next])) } catch { /* ignore */ }
      return next
    })
  }

  const findItem = (id: string): Item | null => ALL_ITEMS.find((i) => i.id === id) || null

  const handleRequestView = (id: string) => {
    if (contact) {
      setDetailId(id)
      return
    }
    setPendingViewId(id)
    setGateOpen(true)
  }

  const handleGateSubmitted = (name: string, email: string) => {
    rememberContact({ name, email })
    setGateOpen(false)
    if (pendingViewId) {
      setDetailId(pendingViewId)
      setPendingViewId(null)
    }
  }

  const handleAccountChipClick = () => {
    if (!contact) {
      setPendingViewId(null)
      setGateOpen(true)
    }
  }

  const handleOpenAlert = (id: string | null) => {
    setAlertTargetId(id)
    setAlertOpen(true)
  }

  const handleAlertSubmit = async (name: string, email: string): Promise<boolean> => {
    const target = alertTargetId ? findItem(alertTargetId) : null
    try {
      const res = await fetch('/api/tokenized-deposits/alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          target_id: target?.id || null,
          target_name: target ? `${target.name} — ${target.program}` : null,
        }),
      })
      if (res.ok) {
        rememberContact({ name, email })
        if (alertTargetId) markAlerted(alertTargetId)
      }
      return res.ok
    } catch {
      return false
    }
  }

  const detailItem = detailId ? findItem(detailId) : null
  const alertTarget = alertTargetId ? findItem(alertTargetId) : null

  return (
    <div className="tdt-page">
      <div className="tdt-wrap">

        <header className="tdt-header">
          <div>
            <h1>Tokenized deposits tracker</h1>
            <p className="tdt-subhead">Bank-issued deposit tokens and the consortia building interoperability between them.</p>
          </div>
          <button
            type="button"
            className={`tdt-account-chip${contact ? ' tdt-account-chip-signed-in' : ''}`}
            onClick={handleAccountChipClick}
            disabled={!hydrated}
          >
            {contact ? (
              <>
                <span className="tdt-status-dot" />
                {contact.name} &middot; Active
              </>
            ) : (
              <>
                <IconUser /> Sign up
              </>
            )}
          </button>
        </header>

        <Section
          title="Bank programs"
          icon={<IconBank />}
          kind="bank"
          items={TOKENIZED_DEPOSITS_DATA.banks}
          alertedIds={alertedIds}
          onView={handleRequestView}
          onAlert={(id) => handleOpenAlert(id)}
        />

        <Section
          title="Consortia"
          icon={<IconConsortium />}
          kind="consortium"
          items={TOKENIZED_DEPOSITS_DATA.consortia}
          alertedIds={alertedIds}
          onView={handleRequestView}
          onAlert={(id) => handleOpenAlert(id)}
        />

        <footer className="tdt-footer">
          Tracked manually from public disclosures. Figures reflect the most recent public statements as of September 2026 and may lag actual deployments.
        </footer>
      </div>

      <DetailModal
        item={detailItem}
        alerted={detailId ? alertedIds.has(detailId) : false}
        onClose={() => setDetailId(null)}
        onAlert={(id) => handleOpenAlert(id)}
      />

      <GateModal
        open={gateOpen}
        onClose={() => setGateOpen(false)}
        onSubmitted={handleGateSubmitted}
      />

      <AlertModal
        open={alertOpen}
        targetName={alertTarget ? `${alertTarget.name}, ${alertTarget.program},` : null}
        knownContact={contact}
        alreadyAlerted={alertTargetId ? alertedIds.has(alertTargetId) : false}
        onClose={() => setAlertOpen(false)}
        onSubmit={handleAlertSubmit}
      />

      <style>{`
        .tdt-page {
          --tdt-ink: var(--ink);
          --tdt-ink-soft: var(--ink-2);
          --tdt-line: var(--line-strong);
          --tdt-accent: var(--blue);
          --tdt-accent-dark: #1B3F9E;
          --tdt-accent-soft: var(--surface-2);
          --tdt-live: #1F7A4D;
          --tdt-live-bg: #E7F2EC;
          --tdt-pilot: #9C7A3C;
          --tdt-pilot-bg: #F5EEDF;
          --tdt-sandbox: #4A5578;
          --tdt-sandbox-bg: #EAEBF2;
          --tdt-building: #5B5F66;
          --tdt-building-bg: #EBEBE8;
          --tdt-bank-bg: #EAF2FE;
          --tdt-bank-border: #C9DCF6;
          --tdt-consortium-bg: #EAF8F0;
          --tdt-consortium-border: #C3E6CF;
          --tdt-radius: 9px;
          color: var(--tdt-ink);
        }

        .tdt-wrap { max-width: var(--container); margin: 0 auto; padding: 48px 40px 96px; }

        .tdt-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; flex-wrap: wrap; }
        .tdt-header h1 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 40px;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .tdt-subhead { font-size: 15px; color: var(--tdt-ink-soft); max-width: 560px; margin: 10px 0 0; }

        .tdt-account-chip {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid var(--tdt-accent); color: var(--tdt-accent); background: #fff;
          font-family: var(--font-body); font-size: 13px; font-weight: 500;
          padding: 9px 16px; border-radius: 20px; cursor: pointer; white-space: nowrap; flex-shrink: 0;
        }
        .tdt-account-chip:hover { background: var(--tdt-accent-soft); }
        .tdt-account-chip-signed-in { border-color: var(--tdt-line); color: var(--tdt-ink); background: var(--surface); cursor: default; }
        .tdt-account-chip-signed-in:hover { background: var(--surface); }
        .tdt-status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--tdt-live); flex-shrink: 0; }

        /* Override the site-wide "section { padding: 140px 0 }" rule — these are compact in-page blocks, not marketing sections. */
        .tdt-block { padding: 0; margin-top: 52px; }
        .tdt-block-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 18px; }
        .tdt-block-title { display: flex; align-items: center; gap: 10px; }
        .tdt-block-icon { width: 26px; height: 26px; border-radius: 7px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .tdt-block-icon-bank { background: var(--tdt-bank-bg); color: var(--tdt-accent-dark); }
        .tdt-block-icon-consortium { background: var(--tdt-consortium-bg); color: #1E6B3D; }
        .tdt-block-head h2 { font-family: var(--font-display); font-size: 19px; font-weight: 600; margin: 0; }
        .tdt-block-count { font-family: var(--font-mono); font-size: 12px; color: var(--tdt-ink-soft); }

        .tdt-section-filters { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; flex-wrap: wrap; }
        .tdt-filter-label { font-size: 12.5px; color: var(--tdt-ink-soft); margin-right: 2px; }
        .tdt-section-filters select {
          appearance: none; -webkit-appearance: none;
          font-family: var(--font-body); font-size: 13px; color: var(--tdt-ink);
          background: #fff url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6"><path d="M0 0l5 6 5-6z" fill="%235B5F68"/></svg>') no-repeat right 12px center;
          border: 1px solid var(--tdt-line); border-radius: 6px; padding: 8px 30px 8px 12px; cursor: pointer;
        }
        .tdt-section-filters select:focus-visible { outline: 2px solid var(--tdt-accent); outline-offset: 2px; }
        .tdt-result-count { margin-left: auto; font-size: 12.5px; color: var(--tdt-ink-soft); }

        .tdt-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        @media (max-width: 920px) { .tdt-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) {
          .tdt-grid { grid-template-columns: 1fr; }
          .tdt-wrap { padding: 32px 18px 72px; }
          .tdt-header h1 { font-size: 31px; }
        }

        .tdt-card {
          border: 1px solid transparent; border-radius: var(--tdt-radius); padding: 18px;
          display: flex; flex-direction: column; gap: 12px;
          transition: border-color .15s ease; cursor: pointer;
        }
        .tdt-card:focus-visible { outline: 2px solid var(--tdt-accent); outline-offset: 2px; }
        .tdt-card-bank { background: var(--tdt-bank-bg); border-color: var(--tdt-bank-border); }
        .tdt-card-consortium { background: var(--tdt-consortium-bg); border-color: var(--tdt-consortium-border); }
        .tdt-card-bank:hover { border-color: #9FBEEE; }
        .tdt-card-consortium:hover { border-color: #9BD3AE; }

        .tdt-card-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
        .tdt-card-id { display: flex; align-items: center; gap: 10px; }
        .tdt-logo-badge {
          width: 34px; height: 34px; border-radius: 7px; display: flex; align-items: center; justify-content: center;
          overflow: hidden; flex-shrink: 0; background: #fff; box-shadow: 0 0 0 1px rgba(10,14,26,0.07);
        }
        .tdt-logo-badge img { width: 100%; height: 100%; object-fit: contain; padding: 5px; }
        .tdt-mono-badge { font-family: var(--font-mono); font-size: 11px; font-weight: 500; color: var(--tdt-ink-soft); letter-spacing: -0.02em; }
        .tdt-card-name { font-family: var(--font-display); font-size: 18px; font-weight: 600; line-height: 1.2; }
        .tdt-card-program { font-size: 12.5px; color: var(--tdt-ink-soft); margin-top: 3px; }
        .tdt-country-chip {
          font-family: var(--font-mono); font-size: 11px; color: var(--tdt-ink-soft);
          background: rgba(255,255,255,0.7); border-radius: 4px; padding: 3px 7px; flex-shrink: 0;
          display: flex; align-items: center; gap: 4px;
        }

        .tdt-status-pill { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500; padding: 4px 9px 4px 7px; border-radius: 20px; width: fit-content; }
        .tdt-status-live { color: var(--tdt-live); background: #fff; }
        .tdt-status-pilot { color: var(--tdt-pilot); background: #fff; }
        .tdt-status-sandbox { color: var(--tdt-sandbox); background: #fff; }
        .tdt-status-building { color: var(--tdt-building); background: #fff; }
        .tdt-status-pill-detail.tdt-status-live { background: var(--tdt-live-bg); }
        .tdt-status-pill-detail.tdt-status-pilot { background: var(--tdt-pilot-bg); }
        .tdt-status-pill-detail.tdt-status-sandbox { background: var(--tdt-sandbox-bg); }
        .tdt-status-pill-detail.tdt-status-building { background: var(--tdt-building-bg); }

        .tdt-dot { width: 6px; height: 6px; border-radius: 50%; display: inline-block; flex-shrink: 0; }
        .tdt-dot-live { background: var(--tdt-live); }
        .tdt-dot-pilot { background: var(--tdt-pilot); }
        .tdt-dot-sandbox { background: var(--tdt-sandbox); }
        .tdt-dot-building { background: var(--tdt-building); }

        .tdt-card-actions { display: flex; gap: 8px; margin-top: auto; padding-top: 4px; }
        .tdt-btn {
          flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          font-family: var(--font-body); font-size: 12.5px; font-weight: 500; padding: 8px 0; border-radius: 6px;
          cursor: pointer; text-align: center; border: 1px solid var(--tdt-accent); background: #fff; color: var(--tdt-accent);
        }
        .tdt-btn:hover { background: var(--tdt-accent-soft); }
        .tdt-btn:focus-visible { outline: 2px solid var(--tdt-accent); outline-offset: 2px; }
        .tdt-btn-primary { background: var(--tdt-accent); color: #fff; border-color: var(--tdt-accent); }
        .tdt-btn-primary:hover { background: var(--tdt-accent-dark); border-color: var(--tdt-accent-dark); }
        .tdt-btn-success { background: var(--tdt-live); color: #fff; border-color: var(--tdt-live); }
        .tdt-btn-success:hover { background: #175f3d; border-color: #175f3d; }

        .tdt-empty { grid-column: 1/-1; border: 1px dashed var(--tdt-line); border-radius: var(--tdt-radius); padding: 28px; text-align: center; color: var(--tdt-ink-soft); font-size: 13.5px; }

        .tdt-footer { margin-top: 64px; font-size: 12px; color: var(--tdt-ink-soft); }

        /* ── Detail overlay ── */
        .tdt-overlay {
          position: fixed; inset: 0; background: rgba(10,14,26,0.5);
          display: flex; align-items: flex-start; justify-content: center; padding: 44px 20px; overflow-y: auto; z-index: 100;
        }
        .tdt-detail {
          background: #fff; width: 100%; max-width: 720px; border-radius: 14px; border: 1px solid var(--line);
          padding: 34px 38px 32px;
        }
        .tdt-detail-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
        .tdt-detail-id { display: flex; align-items: center; gap: 14px; }
        .tdt-detail-logo {
          width: 52px; height: 52px; border-radius: 10px; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; background: var(--surface); box-shadow: 0 0 0 1px rgba(10,14,26,0.08); overflow: hidden;
        }
        .tdt-detail-logo img { width: 100%; height: 100%; object-fit: contain; padding: 8px; }
        .tdt-detail-name { font-family: var(--font-display); font-size: 26px; font-weight: 600; line-height: 1.15; }
        .tdt-detail-program { font-size: 13.5px; color: var(--tdt-ink-soft); margin-top: 3px; }
        .tdt-close-btn { background: none; border: none; font-size: 20px; line-height: 1; color: var(--tdt-ink-soft); cursor: pointer; padding: 4px; }
        .tdt-close-btn:hover { color: var(--tdt-ink); }
        .tdt-close-btn:focus-visible { outline: 2px solid var(--tdt-accent); outline-offset: 2px; border-radius: 4px; }

        .tdt-detail-meta { display: flex; align-items: center; gap: 10px; margin-top: 18px; font-size: 12.5px; color: var(--tdt-ink-soft); }
        .tdt-detail-meta .tdt-country-chip { background: #fff; box-shadow: 0 0 0 1px var(--tdt-line); }

        .tdt-detail-summary { font-size: 14.5px; color: var(--tdt-ink); margin-top: 16px; line-height: 1.6; }

        .tdt-note-box { margin-top: 14px; background: var(--tdt-pilot-bg); color: #6B4F1E; border-radius: 7px; padding: 10px 13px; font-size: 12.5px; line-height: 1.5; }

        .tdt-section-label { font-size: 11.5px; color: var(--tdt-ink-soft); margin: 0 0 10px; font-weight: 500; }
        .tdt-detail-section { margin-top: 28px; }

        .tdt-tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .tdt-tag { font-family: var(--font-mono); font-size: 12px; background: var(--tdt-accent-soft); color: var(--tdt-accent-dark); padding: 6px 11px; border-radius: 6px; }

        .tdt-curr-row { display: flex; flex-wrap: wrap; gap: 6px; }
        .tdt-curr-chip { font-family: var(--font-mono); font-size: 11.5px; color: var(--tdt-ink-soft); background: var(--surface); padding: 3px 8px; border-radius: 4px; }

        .tdt-stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        @media (max-width: 640px) { .tdt-stat-grid { grid-template-columns: repeat(2, 1fr); } }
        .tdt-stat-block { background: var(--surface); border-radius: 8px; padding: 13px 14px; }
        .tdt-stat-value { font-family: var(--font-mono); font-size: 19px; font-weight: 500; color: var(--tdt-ink); }
        .tdt-stat-label { font-size: 11.5px; color: var(--tdt-ink-soft); margin-top: 5px; line-height: 1.35; }

        .tdt-client-grid { display: flex; flex-wrap: wrap; gap: 8px; }
        .tdt-client-block { border-radius: 7px; padding: 9px 13px; font-size: 13px; color: var(--tdt-ink); background: var(--surface); }

        .tdt-differentiator-text { font-size: 13.5px; line-height: 1.6; color: var(--tdt-ink); }

        .tdt-roadmap { display: flex; position: relative; margin-top: 6px; padding-top: 6px; }
        .tdt-roadmap::before { content: ''; position: absolute; top: 11px; left: 6px; right: 6px; height: 1px; background: var(--tdt-line); }
        .tdt-roadmap-step { position: relative; flex: 1; padding-right: 16px; }
        .tdt-roadmap-step:last-child { padding-right: 0; }
        .tdt-roadmap-dot { width: 11px; height: 11px; border-radius: 50%; background: #fff; border: 2px solid var(--tdt-line); position: relative; z-index: 1; margin-bottom: 12px; }
        .tdt-roadmap-step-current .tdt-roadmap-dot { background: var(--tdt-accent); border-color: var(--tdt-accent); }
        .tdt-roadmap-label { font-size: 12.5px; line-height: 1.45; color: var(--tdt-ink); padding-right: 4px; }
        .tdt-roadmap-step-current .tdt-roadmap-label { font-weight: 500; }

        .tdt-detail-footer { display: flex; justify-content: flex-end; margin-top: 30px; }
        .tdt-detail-footer .tdt-btn { flex: none; padding: 10px 20px; }

        /* ── Popups (gate + alert) ── */
        .tdt-popup-overlay {
          position: fixed; inset: 0; background: rgba(10,14,26,0.5);
          display: flex; align-items: center; justify-content: center; padding: 20px; z-index: 110;
        }
        .tdt-popup-box { background: #fff; width: 100%; max-width: 380px; border-radius: 12px; border: 1px solid var(--line); padding: 26px 26px 24px; }
        .tdt-popup-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .tdt-popup-title { font-family: var(--font-display); font-size: 18px; font-weight: 600; }
        .tdt-popup-sub { font-size: 12.5px; color: var(--tdt-ink-soft); margin-top: 5px; line-height: 1.45; }

        .tdt-field { margin-top: 14px; }
        .tdt-field label { display: block; font-size: 11.5px; color: var(--tdt-ink-soft); margin-bottom: 5px; }
        .tdt-field input, .tdt-field select {
          width: 100%; font-family: var(--font-body); font-size: 13.5px; padding: 9px 11px;
          border: 1px solid var(--tdt-line); border-radius: 6px; background: var(--surface); color: var(--tdt-ink);
          box-sizing: border-box;
        }
        .tdt-field input:focus-visible, .tdt-field select:focus-visible { outline: 2px solid var(--tdt-accent); outline-offset: 1px; }
        .tdt-field-error { display: block; margin-top: 5px; font-size: 12px; color: #d93025; }
        .tdt-submit-error { color: #d93025; font-size: 13px; margin: 14px 0 0; }

        .tdt-popup-submit { width: 100%; margin-top: 18px; padding: 11px 0; }
        .tdt-popup-confirm { font-size: 13.5px; line-height: 1.55; padding-top: 6px; }
        .tdt-popup-confirm b { color: var(--tdt-ink); }
        .tdt-ok-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--tdt-live); margin-right: 7px; }
      `}</style>
    </div>
  )
}
