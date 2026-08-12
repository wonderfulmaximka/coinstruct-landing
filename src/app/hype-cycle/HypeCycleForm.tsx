'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function HypeCycleForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tokenization, setTokenization] = useState('')
  const [errors, setErrors] = useState<{ name?: string; email?: string; tokenization?: string }>({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

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
      const res = await fetch('/api/research/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, tokenization_planning: tokenization, source: 2 }),
      })
      const data = await res.json()
      if (!res.ok) { setSubmitError(data.error || 'Something went wrong. Please try again.'); setLoading(false); return }
    } catch {
      setSubmitError('Something went wrong. Please try again.')
      setLoading(false)
      return
    }
    router.push('/hype-cycle/report')
  }

  return (
    <section id="get-report" className="hcform-section" style={{ position: 'relative', padding: '80px 0 100px', background: '#fff', overflow: 'hidden' }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '620px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(150, 190, 255, 0.28), transparent 65%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="display-3" style={{ margin: '0 0 12px', textAlign: 'center' }}>
            Read the full Hype Cycle
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {['20-page research', '25+ tokenization strategies covered', 'Visualized & explained'].map(tag => (
              <span key={tag} style={{
                fontSize: '12.5px',
                fontWeight: 500,
                color: 'var(--ink-2)',
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '999px',
                padding: '5px 14px',
                whiteSpace: 'nowrap',
              }}>{tag}</span>
            ))}
          </div>

          <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={labelStyle} htmlFor="hc-name">Full Name</label>
              <input
                id="hc-name"
                type="text"
                required
                placeholder="Your full name"
                value={name}
                onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: undefined })) }}
                style={{ ...inputStyle, ...(errors.name ? errorBorderStyle : {}) }}
              />
              {errors.name && <span style={errorStyle}>{errors.name}</span>}
            </div>

            <div>
              <label style={labelStyle} htmlFor="hc-email">Work email</label>
              <input
                id="hc-email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: undefined })) }}
                style={{ ...inputStyle, ...(errors.email ? errorBorderStyle : {}) }}
              />
              {errors.email && <span style={errorStyle}>{errors.email}</span>}
            </div>

            <div>
              <label style={labelStyle} htmlFor="hc-tokenization">Are you planning tokenization?</label>
              <select
                id="hc-tokenization"
                value={tokenization}
                onChange={e => { setTokenization(e.target.value); setErrors(p => ({ ...p, tokenization: undefined })) }}
                style={{ ...inputStyle, color: tokenization ? 'var(--ink)' : 'var(--muted)', cursor: 'pointer', ...(errors.tokenization ? errorBorderStyle : {}) }}
              >
                <option value="" disabled>Select one…</option>
                <option value="Yes, considering / planning">Yes, considering / planning</option>
                <option value="Preparing for launch">Preparing for launch</option>
                <option value="Not sure if we need it">Not sure if we need it</option>
                <option value="Just researching">Just researching</option>
                <option value="Other">Other</option>
              </select>
              {errors.tokenization && <span style={errorStyle}>{errors.tokenization}</span>}
            </div>

            {submitError && (
              <p style={{ color: '#dc2626', fontSize: '14px', margin: 0 }}>{submitError}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-blue"
              style={{ marginTop: '8px', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Loading…' : 'Go to Research'}
              {!loading && (
                <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 500,
  color: 'var(--ink-2)',
  marginBottom: '6px',
  letterSpacing: '-0.01em',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid var(--line-strong)',
  borderRadius: 'var(--r-sm)',
  fontSize: '15px',
  color: 'var(--ink)',
  background: 'white',
  fontFamily: 'inherit',
  appearance: 'none',
  WebkitAppearance: 'none',
  outline: 'none',
  transition: 'border-color 0.15s, box-shadow 0.15s',
  boxSizing: 'border-box',
}

const errorBorderStyle: React.CSSProperties = {
  borderColor: '#d93025',
}

const errorStyle: React.CSSProperties = {
  display: 'block',
  marginTop: '5px',
  fontSize: '12px',
  color: '#d93025',
}
