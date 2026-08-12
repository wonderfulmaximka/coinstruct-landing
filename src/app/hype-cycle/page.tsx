import HypeCycleForm from './HypeCycleForm'

export const metadata = {
  title: 'Digital Assets Hype Cycle 2026 — Coinstruct Research',
  description:
    'Blockchain makes bold promises. This research separates hype from commercially proven digital-asset use cases across the 2026 Hype Cycle.',
}

const INSIGHT_TAGS: { label: string; bg: string; ink: string }[] = [
  { label: 'Stablecoins (USD)',            bg: '#e6efff', ink: '#1c3f8f' },
  { label: 'CBDC',                         bg: '#eaf3ea', ink: '#2f6b3a' },
  { label: 'Tokenized Deposits',           bg: '#fff4e0', ink: '#8a5a17' },
  { label: 'Tokenized Stocks',             bg: '#f2eaff', ink: '#5a2fb2' },
  { label: 'Tokenized MMFs',               bg: '#e3f4f6', ink: '#1f6b76' },
  { label: 'Gold Tokenization',            bg: '#fbf1cf', ink: '#7a5a10' },
  { label: 'ERC-3643',                     bg: '#ffe9ec', ink: '#a52a3a' },
  { label: 'Tokenized Private Credit',     bg: '#e8eef8', ink: '#2f4a80' },
  { label: 'Permissioned Chains',          bg: '#efe9f7', ink: '#5c3ea0' },
  { label: 'RWA-specific L2s',             bg: '#e4f2fb', ink: '#1a5e8f' },
  { label: 'Atomic DvP',                   bg: '#eefaf1', ink: '#2c7a4a' },
  { label: 'Tokenized Real Estate',        bg: '#fff0e5', ink: '#9a4e14' },
  { label: 'Utility Tokens',               bg: '#f4eff9', ink: '#5f3e8a' },
  { label: 'Tokenized Commodities (excl. gold)', bg: '#eaf6ee', ink: '#356b3d' },
  { label: 'Tokenized Carbon Credits',     bg: '#e6f4ea', ink: '#2e6b3a' },
  { label: 'Private Chains',               bg: '#f2f0ea', ink: '#5a4c2a' },
  { label: 'NFTs',                         bg: '#fbe8f2', ink: '#96256b' },
  { label: 'AI Agent Payments',            bg: '#eef1ff', ink: '#3040a5' },
  { label: 'RWA Perpetuals',               bg: '#eaf2fb', ink: '#1c4f8a' },
  { label: 'Yield-bearing Stablecoins',    bg: '#e6f0ec', ink: '#2b6a52' },
  { label: 'Institutional DeFi',           bg: '#eae8fb', ink: '#3d3a95' },
  { label: 'Wholesale CBDC',               bg: '#e5efe9', ink: '#2d5f45' },
  { label: 'Non-USD Stablecoins',          bg: '#eaf1fa', ink: '#28588f' },
  { label: 'Tokenized Bonds',              bg: '#fff2e6', ink: '#8f5216' },
  { label: 'Tokenized PE/VC',              bg: '#f0eafb', ink: '#4d2e94' },
]

// Split into 3 marquee rows so tags flow across the page.
const ROWS = [
  INSIGHT_TAGS.filter((_, i) => i % 3 === 0),
  INSIGHT_TAGS.filter((_, i) => i % 3 === 1),
  INSIGHT_TAGS.filter((_, i) => i % 3 === 2),
]

type Tag = (typeof INSIGHT_TAGS)[number]
function TagPill({ t }: { t: Tag }) {
  return (
    <span className="hc-tag" style={{ background: t.bg, color: t.ink }}>
      {t.label}
    </span>
  )
}

export default function HypeCyclePage() {
  return (
    <div className="min-h-screen bg-white hc-page">

      {/* ── Site nav ─────────────────────────────────────────── */}
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
            <a href="/hype-cycle" aria-current="page">Hype Cycle</a>
            <a href="/blog">Blog</a>
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

      {/* ── Ambient region: hero + chart + tags + bullets share ONE
             continuous background layer so there are no section seams ── */}
      <div className="hc-ambient-region">
        <div className="hc-ambient-layer" aria-hidden="true">
          <span className="hc-blob hc-blob-1" />
          <span className="hc-blob hc-blob-2" />
          <span className="hc-blob hc-blob-3" />
          <span className="hc-blob hc-blob-4" />
          <span className="hc-blob hc-blob-5" />
          <span className="hc-blob hc-blob-6" />
        </div>

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="hc-hero">
          <div className="container hc-hero-inner">
            <h1 className="display-2 hc-title">
              Digital Assets<br />Hype Cycle 2026
            </h1>
            <p className="hc-gartner-note">
              Built on <span className="hc-gartner-brand">Gartner</span> Hype Cycle methodology
            </p>
            <p className="lead hc-sub">
              Blockchain makes bold promises. But how to disconnect hype from beneficial use cases?
            </p>
          </div>
        </section>

        {/* ── Stat highlights ────────────────────────────────── */}
        <section className="hc-highlights">
          <div className="container">
            <div className="hc-hl-row">

              {/* Block 1: RWA AUM */}
              <div className="hc-hl-block">
                <div className="hc-hl-label">Tokenized real-world assets AUM</div>
                <div className="hc-hl-aum-row">
                  <span className="hc-hl-stat">$38.17B</span>
                  <span className="hc-hl-growth">↑ +40.5% YTD</span>
                </div>
                <div className="hc-hl-fund-tags">
                  {['BlackRock BUIDL', 'Circle USYC', 'Tether Gold', 'Spiko EU T-bills'].map(tag => (
                    <span key={tag} className="hc-hl-fund-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="hc-hl-sep" />

              {/* Block 2: TradFi */}
              <div className="hc-hl-block hc-hl-block--tradfi">
                <div className="hc-hl-headline">TradFi going all-in</div>
                <div className="hc-hl-logos">
                  <img src="/assets/logos/blackrock.svg" alt="BlackRock" className="hc-hl-logo hc-hl-logo-blackrock" />
                  <img src="/assets/logos/citi.svg" alt="Citi" className="hc-hl-logo hc-hl-logo-citi" />
                  <span className="hc-hl-logo-text">Morgan Stanley</span>
                  <img src="/assets/logos/franklin-templeton.svg" alt="Franklin Templeton" className="hc-hl-logo hc-hl-logo-ft" />
                </div>
              </div>

              <div className="hc-hl-sep" />

              {/* Block 3: Regulation */}
              <div className="hc-hl-block hc-hl-block--regulation">
                <div className="hc-hl-headline">Regulation is here</div>
                <div className="hc-hl-desc">40+ regional acts</div>
                <div className="hc-hl-logos">
                  <img src="/assets/logos/sec.png" alt="SEC" className="hc-hl-logo hc-hl-logo-sec" />
                  <img src="/assets/logos/mas.jpg" alt="MAS" className="hc-hl-logo hc-hl-logo-mas" />
                  <img src="/assets/logos/esma.jpg" alt="ESMA" className="hc-hl-logo hc-hl-logo-esma" />
                  <img src="/assets/logos/vara.svg" alt="VARA" className="hc-hl-logo hc-hl-logo-vara" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Hype cycle chart ───────────────────────────────── */}
        <section className="hc-chart-section">
          <div className="container">
            <div className="hc-chart-wrap">
              <img
                src="/assets/hype-cycle-2026.png"
                alt="Digital Assets Hype Cycle 2026 — position of tokenization use cases"
                className="hc-chart-img"
              />
            </div>
          </div>
        </section>

        {/* ── Tags section title ───────────────────────────────── */}
        <div className="hc-tags-title-wrap">
          <div className="container">
            <h2 className="display-3 hc-tags-title">
              Many tokenization plays.<br />Which one is a right fit?
            </h2>
          </div>
        </div>

        {/* ── Insight tags — animated marquee rows ────────────── */}
        <section className="hc-tags-section">
          <div className="hc-tags-marquee">
            {ROWS.map((row, i) => (
              <div key={i} className={`hc-tag-row hc-tag-row-${i}`}>
                <div className="hc-tag-track">
                  {row.map((t) => <TagPill key={'a-' + t.label} t={t} />)}
                  {row.map((t) => <TagPill key={'b-' + t.label} t={t} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Form ─────────────────────────────────────────────── */}
      <HypeCycleForm />

      {/* ── Discover in the research ─────────────────────────── */}
      <section className="hc-bullets-section">
        <div className="container hc-bullets-inner">
          <h2 className="display-3 hc-bullets-title">Discover in the research</h2>
          <ul className="hc-bullets">
            <li>How to separate hype from the commercially proven cases in digital assets?</li>
            <li>Which tokenization actually benefits to your business?</li>
            <li>Which Digital Assets plays are too early?</li>
          </ul>
        </div>
      </section>

      {/* ── Footer CTA ───────────────────────────────────────── */}
      <section id="contact" className="footer-cta">
        <div className="container">
          <div className="grid">
            <div>
              <div className="meta">Let&apos;s talk</div>
              <h2>
                Let&apos;s discover your <span className="light">blockchain strategy.</span>
              </h2>
              <p>Whether you&apos;re exploring crypto expansion, planning a token launch, or tokenizing real-world assets, Coinstruct is ready to guide you from strategy to live product.</p>
            </div>

            <div className="contact">
              <div className="contact-left">
                <div className="who">Maxim Krasnov</div>
                <div className="role">Managing Partner, Coinstruct</div>
                <a
                  href="https://www.linkedin.com/in/maxim-krasnov-484574246/"
                  target="_blank"
                  rel="noopener"
                  className="linkedin-link"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <div className="email">max@coinstruct.tech</div>
                <a
                  href="https://calendly.com/max-coinstruct/30min?back=1&month=2025-11"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-blue"
                >
                  Talk to Expert
                  <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <div className="contact-photo" aria-hidden="true">
                <img src="/assets/maxim.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer bar ───────────────────────────────────────── */}
      <footer className="footer-bar">
        <div className="container row">
          <div>© 2026 Coinstruct Labs Kft.</div>
          <div>Building for the Modern Finance</div>
        </div>
      </footer>

      <style>{`
        .hc-page { position: relative; overflow-x: hidden; }

        /* ── Ambient region wrapper ─────────────────────────── */
        .hc-ambient-region {
          position: relative;
          background: #fff;
          overflow: hidden;
        }
        .hc-ambient-layer {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          /* Fade the whole ambient layer out before it reaches the form
             section below, so there's no hard edge anywhere. */
          mask-image: linear-gradient(to bottom, black 0%, black 82%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 82%, transparent 100%);
        }
        .hc-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
        }
        .hc-blob-1 {
          top: -180px;
          left: 8%;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(101, 145, 255, 0.30), transparent 70%);
        }
        .hc-blob-2 {
          top: -120px;
          right: 6%;
          width: 460px;
          height: 460px;
          background: radial-gradient(circle, rgba(150, 130, 255, 0.24), transparent 70%);
        }
        .hc-blob-3 {
          top: 480px;
          left: -120px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(120, 190, 255, 0.26), transparent 70%);
        }
        .hc-blob-4 {
          top: 620px;
          right: -100px;
          width: 440px;
          height: 440px;
          background: radial-gradient(circle, rgba(140, 170, 255, 0.24), transparent 70%);
        }
        .hc-blob-5 {
          top: 1180px;
          left: 20%;
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(160, 150, 255, 0.20), transparent 70%);
        }
        .hc-blob-6 {
          top: 1550px;
          right: 12%;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(110, 175, 255, 0.22), transparent 70%);
        }

        /* ── Stat highlights ─────────────────────────────── */
        .hc-highlights {
          position: relative;
          padding: 16px 0 36px;
          z-index: 1;
        }
        .hc-hl-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .hc-hl-block {
          flex: 1;
          max-width: 320px;
          text-align: center;
          padding: 0 36px;
        }
        .hc-hl-sep {
          width: 1px;
          background: rgba(0,0,0,0.10);
          align-self: stretch;
          flex-shrink: 0;
          min-height: 72px;
        }
        /* Block 1: RWA AUM */
        .hc-hl-label {
          font-size: 11px;
          font-weight: 500;
          color: var(--ink-2);
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .hc-hl-aum-row {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 9px;
          margin-bottom: 14px;
        }
        .hc-hl-stat {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--ink);
          line-height: 1;
        }
        .hc-hl-growth {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          font-size: 11px;
          font-weight: 600;
          color: #15803d;
          background: #dcfce7;
          border-radius: 5px;
          padding: 3px 8px;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .hc-hl-fund-tags {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          flex-wrap: wrap;
        }
        .hc-hl-fund-tag {
          font-size: 11px;
          font-weight: 500;
          color: var(--ink-2);
          background: rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 5px;
          padding: 3px 8px;
          white-space: nowrap;
        }
        /* Blocks 2 & 3: headline text */
        .hc-hl-headline {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: var(--ink);
          line-height: 1.15;
          margin-bottom: 14px;
        }
        .hc-hl-desc {
          font-size: 12px;
          color: var(--ink-2);
          margin-bottom: 14px;
          letter-spacing: -0.005em;
        }
        .hc-hl-logos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hc-hl-logo {
          display: block;
          object-fit: contain;
          flex-shrink: 0;
        }
        .hc-hl-logo-blackrock { height: 13px; opacity: 0.75; }
        .hc-hl-logo-citi { height: 20px; opacity: 0.75; }
        .hc-hl-logo-vara { height: 17px; opacity: 0.70; }
        .hc-hl-logo-ft { height: 14px; opacity: 0.78; }
        /* Show only the iconic emblem of each regulator logo */
        .hc-hl-logo-sec {
          height: 28px; width: 28px; opacity: 0.85;
          object-fit: cover; object-position: left center;
        }
        .hc-hl-logo-mas {
          height: 28px; width: 28px; opacity: 0.90;
          object-fit: cover; object-position: center top;
        }
        .hc-hl-logo-esma {
          height: 24px; width: 24px; opacity: 0.85;
          object-fit: cover; object-position: left center;
        }
        .hc-hl-logo-text {
          font-size: 11.5px;
          font-weight: 600;
          color: var(--ink);
          white-space: nowrap;
          opacity: 0.65;
          letter-spacing: -0.01em;
        }
        .hc-hl-logo-text-sm { font-size: 10.5px; }
        .hc-hl-regulator {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--ink);
          background: rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: 5px;
          padding: 3px 8px;
        }

        /* ── Tags section title ───────────────────────────── */
        .hc-tags-title-wrap {
          position: relative;
          z-index: 1;
          padding: 48px 0 24px;
          text-align: center;
        }
        .hc-tags-title {
          color: var(--ink);
          margin: 0 auto;
          max-width: 700px;
        }

        /* ── Hero ─────────────────────────────────────────── */
        .hc-hero {
          position: relative;
          padding: 96px 0 56px;
        }
        .hc-hero-inner {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .hc-title {
          color: var(--ink);
          margin: 0 auto;
          max-width: 900px;
          letter-spacing: -0.02em;
        }
        .hc-gartner-note {
          font-size: 12px;
          color: var(--ink-2);
          margin: 14px auto 0;
          letter-spacing: 0.01em;
        }
        .hc-gartner-brand {
          font-weight: 700;
          color: var(--ink);
        }
        .hc-sub {
          color: var(--ink-2);
          max-width: 640px;
          margin: 20px auto 0;
          font-size: 18px;
        }

        /* ── Chart section ────────────────────────────────── */
        .hc-chart-section {
          position: relative;
          padding: 32px 0 40px;
        }
        .hc-chart-section .container { position: relative; z-index: 1; }
        .hc-chart-wrap {
          position: relative;
          max-width: 1120px;
          margin: 0 auto;
          /* Aspect ratio chosen to skip the Whimsical watermark strip and the
             outer light-gray frame in the source PNG. */
          aspect-ratio: 1.55 / 1;
          overflow: hidden;
        }
        .hc-chart-img {
          position: absolute;
          top: -6%;
          left: -4%;
          width: 108%;
          height: auto;
          background: transparent;
        }

        /* ── Tag marquee ──────────────────────────────────── */
        .hc-tags-section {
          position: relative;
          padding: 32px 0 56px;
        }
        .hc-tags-marquee {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 14px;
          /* Feather edges so tags fade in/out at the sides instead of hard-cropping */
          mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%);
        }
        .hc-tag-row {
          display: flex;
          overflow: hidden;
          width: 100%;
        }
        .hc-tag-track {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
          padding-right: 12px;
          animation: hc-marquee-left 55s linear infinite;
          will-change: transform;
        }
        .hc-tag-row-1 .hc-tag-track {
          animation: hc-marquee-right 70s linear infinite;
        }
        .hc-tag-row-2 .hc-tag-track {
          animation: hc-marquee-left 62s linear infinite;
        }
        .hc-tag-row:hover .hc-tag-track { animation-play-state: paused; }

        @keyframes hc-marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes hc-marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hc-tag-track { animation: none !important; }
        }

        .hc-tag {
          display: inline-flex;
          align-items: center;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: -0.005em;
          line-height: 1.2;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ── Discover in the research ─────────────────────── */
        .hc-bullets-section {
          position: relative;
          padding: 64px 0 72px;
        }
        .hc-bullets-inner {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .hc-bullets-title {
          color: var(--ink);
          margin: 0 auto 28px;
        }
        .hc-bullets {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          text-align: left;
        }
        .hc-bullets li {
          position: relative;
          padding-left: 28px;
          color: var(--ink-2);
          font-size: 17px;
          line-height: 1.5;
        }
        .hc-bullets li::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 10px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--blue);
        }

        @media (max-width: 820px) {
          /* Reorder sections: tags + title move above chart */
          .hc-ambient-region { display: flex; flex-direction: column; }
          .hc-hero            { order: 1; }
          .hc-highlights      { order: 2; }
          .hc-tags-section    { order: 3; }
          .hc-tags-title-wrap { order: 4; padding: 24px 0 8px; }
          .hc-chart-section   { order: 5; }

          /* Hide TradFi & Regulation blocks + all separators */
          .hc-hl-block--tradfi,
          .hc-hl-block--regulation { display: none; }
          .hc-hl-sep { display: none; }

          .hc-hl-block { padding: 0 16px; max-width: 100%; }
          .hc-hl-stat { font-size: 24px; }
          .hc-hl-headline { font-size: 20px; }
          .hc-tags-title { font-size: 28px; }
          .hc-hero { padding: 72px 0 32px; }
          .hc-title { font-size: 40px; line-height: 1.1; }
          .hc-sub { font-size: 16px; margin-top: 16px; }

          /* Bigger chart: edge-to-edge, max-width: none overrides global img reset
             so width: 115% actually renders wider, making the image taller than
             the wrap and letting overflow:hidden clip the Whimsical watermark */
          .hc-chart-section { padding: 0 0 32px; }
          .hc-chart-section .container { padding-left: 0; padding-right: 0; max-width: 100%; }
          .hc-chart-wrap { aspect-ratio: 1.45 / 1; max-width: 100%; }
          .hc-chart-img { top: -6%; left: -6%; width: 115%; max-width: none; }

          .hc-tag { font-size: 12px; padding: 6px 12px; }
          .hc-tag-track { animation-duration: 40s; }
          .hc-tag-row-1 .hc-tag-track { animation-duration: 50s; }
          .hc-tag-row-2 .hc-tag-track { animation-duration: 45s; }
          .hc-bullets-section { padding: 40px 0 48px; }
          .hc-bullets li { font-size: 15px; }
          .hc-blob { filter: blur(70px); }
          .hc-blob-1, .hc-blob-2, .hc-blob-3, .hc-blob-4, .hc-blob-5, .hc-blob-6 {
            width: 320px; height: 320px;
          }
        }
      `}</style>
    </div>
  )
}
