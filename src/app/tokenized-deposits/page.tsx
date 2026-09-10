import Tracker from './Tracker'

export const metadata = {
  title: 'Tokenized Deposits Tracker — Coinstruct',
  description:
    'A live tracker of bank-issued tokenized deposit programs and the consortia building interoperability between them.',
}

export default function TokenizedDepositsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Site nav ────────────────────────────── */}
      <nav className="top">
        <div className="container row">
          <a href="/" className="logo" aria-label="Coinstruct home">
            <img src="/assets/logos/coinstruct-logo.png" alt="Coinstruct" className="logo-mark" />
          </a>
          <div className="links">
            <a href="/#expertise">Expertise</a>
            <a href="/#serve">Who we serve</a>
            <a href="/#approach">How we work</a>
            <a href="/research">Research</a>
            <a href="/blog">Blog</a>
            <a href="/tokenized-deposits" aria-current="page">Deposits Tracker</a>
          </div>
          <div className="spacer" />
          <a
            href="https://calendly.com/max-coinstruct/30min?back=1&month=2025-11"
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

      <Tracker />

    </div>
  )
}
