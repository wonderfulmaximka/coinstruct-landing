'use client'

import { useState, FormEvent } from 'react'

const DRIVE_URL = 'https://drive.google.com/file/d/1ndVtJtXGvWqonlZhqtvaUIhLoGpJe2m9/view?usp=sharing'

export default function ResearchForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tokenization, setTokenization] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/research/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, tokenization_planning: tokenization }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }
      window.location.href = DRIVE_URL
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <section id="get-report" style={{ padding: '100px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
          className="research-form-grid"
        >
          {/* Left — form */}
          <div>
            <span className="eyebrow">Get the report</span>
            <h2 className="display-3" style={{ margin: '16px 0 12px' }}>
              Get the full 23-page research
            </h2>
            <p className="lead" style={{ marginBottom: '40px', fontSize: '16px' }}>
              Case studies, a regulatory map across 6 jurisdictions, and a 12-month action plan by bank archetype.
            </p>

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle} htmlFor="r-name">Name</label>
                <input
                  id="r-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="r-email">Work email</label>
                <input
                  id="r-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="r-tokenization">Are you planning tokenization?</label>
                <select
                  id="r-tokenization"
                  value={tokenization}
                  onChange={e => setTokenization(e.target.value)}
                  style={{ ...inputStyle, color: tokenization ? 'var(--ink)' : 'var(--muted)', cursor: 'pointer' }}
                >
                  <option value="" disabled>Select one…</option>
                  <option value="Yes, considering / planning">Yes, considering / planning</option>
                  <option value="Preparing for launch">Preparing for launch</option>
                  <option value="Not sure if we need it">Not sure if we need it</option>
                  <option value="Just researching">Just researching</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {error && (
                <p style={{ color: '#dc2626', fontSize: '14px', margin: 0 }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-blue"
                style={{ marginTop: '8px', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Sending…' : 'Send me the report'}
                {!loading && (
                  <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>

              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, textAlign: 'center' }}>
                No spam ever, monthly tokenization research only.
              </p>
            </form>
          </div>

          {/* Right — image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/assets/stacked_reports_1-report.png"
              alt="Tokenization Playbook for Banks 2026 — stacked report"
              style={{ width: '100%', maxWidth: '420px', borderRadius: '12px', display: 'block' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .research-form-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .research-form-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
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
