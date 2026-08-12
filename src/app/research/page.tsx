import ResearchForm from './ResearchForm'

export const metadata = {
  title: 'Tokenization Playbook for Banks 2026 — Coinstruct Research',
  description:
    'Practical research on how banks can launch tokenization initiatives: strategy matrix, regulatory map across 6 jurisdictions, and a 12-month action plan.',
}

export default function ResearchPage() {
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
            <a href="/research" aria-current="page">Research</a>
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

      {/* ── Hero ────────────────────────────────── */}
      <section className="rhero">
        {/* Topographic contour field */}
        <svg
          className="rhero-topo"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <path id="rw1" d="M -140 0 C 170 -54, 400 34, 620 6 S 1010 -58, 1230 -6 S 1560 42, 1620 2" />
            <path id="rw2" d="M -140 8 C 210 48, 440 -30, 660 10 S 1030 62, 1270 8 S 1580 -32, 1640 8" />
          </defs>
          {Array.from({ length: TOPO_LINES }).map((_, i) => {
            const y = 250 + i * 16
            const op = 0.05 + 0.17 * Math.sin((Math.PI * (i + 1)) / (TOPO_LINES + 2))
            const sx = i % 2 === 0 ? 1 : 1.05
            const tx = i % 3 === 0 ? -14 : i % 3 === 1 ? 10 : 0
            return (
              <use
                key={i}
                href={i % 2 === 0 ? '#rw1' : '#rw2'}
                transform={`translate(${tx} ${y}) scale(${sx} 1)`}
                stroke="#ffffff"
                strokeWidth={1}
                strokeOpacity={op.toFixed(3)}
              />
            )
          })}
        </svg>

        {/* Floating labeled nodes */}
        <div className="rhero-nodes" aria-hidden="true">
          {TOPO_NODES.map((n) => (
            <div key={n.label} className="topo-node" style={{ left: n.left, top: n.top }}>
              <span className="topo-label">{n.label}</span>
              <span className="topo-line" />
              <span className="topo-dot" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="container rhero-inner">
          <h1 className="display-2 rhero-title" style={{ maxWidth: '760px' }}>
            Tokenization Playbook<br />for Banks 2026
          </h1>
          <p className="lead rhero-sub" style={{ maxWidth: '560px', marginTop: '20px', marginBottom: '40px' }}>
            Research on the practical approaches Banks can use to launch digital assets initiatives — from strategy to first live product.
          </p>
          <a href="#get-report" className="btn rhero-cta">
            Get the free report
            <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <div className="rhero-founder">
            <div className="rhero-founder-id">
              <img src="/assets/maxim.jpg" alt="Maxim Krasnov" className="rhero-avatar" />
              <div>
                <div className="rhero-name">Maxim Krasnov</div>
                <div className="rhero-role">CEO, Coinstruct.tech</div>
              </div>
            </div>
            <blockquote className="rhero-quote">
              “A bank that does not run its first tokenization pilot in the next 12–18 months risks gradual exclusion from select payment and treasury chains.”
            </blockquote>
          </div>
        </div>

        <style>{`
          .rhero {
            position: relative;
            overflow: hidden;
            background: linear-gradient(178deg, #163bd8 0%, #1c62ff 52%, #5480ff 100%);
          }
          .rhero-topo {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
          }
          .rhero-nodes {
            position: absolute;
            inset: 0;
            z-index: 2;
            pointer-events: none;
          }
          .rhero-inner {
            position: relative;
            z-index: 3;
            padding-top: 150px;
            padding-bottom: 130px;
          }
          .rhero-title { color: #fff; }
          .rhero-sub { color: rgba(255,255,255,0.82); }
          .rhero-cta {
            background: #fff;
            color: var(--ink);
          }
          .rhero-cta:hover { background: rgba(255,255,255,0.88); }
          .rhero-founder {
            display: flex;
            align-items: center;
            gap: 32px;
            margin-top: 52px;
            max-width: 900px;
            flex-wrap: wrap;
          }
          .rhero-founder-id {
            display: flex;
            align-items: center;
            gap: 14px;
            flex-shrink: 0;
          }
          .rhero-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid rgba(255,255,255,0.35);
          }
          .rhero-name {
            color: #fff;
            font-weight: 600;
            font-size: 15px;
            letter-spacing: -0.01em;
          }
          .rhero-role {
            color: rgba(255,255,255,0.65);
            font-size: 13px;
            margin-top: 2px;
          }
          .rhero-quote {
            margin: 0;
            padding-left: 20px;
            border-left: 2px solid rgba(255,255,255,0.3);
            color: rgba(255,255,255,0.88);
            font-size: 15px;
            font-style: italic;
            line-height: 1.55;
            max-width: 460px;
          }
          @media (max-width: 720px) {
            .rhero-founder {
              gap: 20px;
              margin-top: 36px;
              flex-direction: column;
              align-items: flex-start;
            }
            .rhero-quote {
              border-left: none;
              padding-left: 0;
              border-top: 2px solid rgba(255,255,255,0.2);
              padding-top: 16px;
              max-width: 100%;
            }
          }
          .topo-node {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: translateX(-50%);
          }
          .topo-label {
            font-size: 13px;
            color: rgba(255,255,255,0.6);
            letter-spacing: 0.02em;
            margin-bottom: 8px;
            white-space: nowrap;
          }
          .topo-line {
            width: 1px;
            height: 44px;
            background: linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.45));
          }
          .topo-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #fff;
            margin-top: -1px;
            box-shadow: 0 0 0 4px rgba(255,255,255,0.12);
          }
          @media (max-width: 820px) {
            .rhero-nodes { display: none; }
            .rhero-inner { padding-top: 100px; padding-bottom: 64px; }
          }
          @media (max-width: 480px) {
            .rhero-inner { padding-top: 84px; padding-bottom: 48px; }
            .rhero-sub { margin-bottom: 28px !important; }
          }
        `}</style>
      </section>

      {/* ── Key Insights ────────────────────────── */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <span className="eyebrow">Key Insights</span>
          <h2 className="display-3" style={{ marginTop: '16px', marginBottom: '48px', maxWidth: '640px' }}>
            What the research found
          </h2>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {insights.map((ins, i) => (
              <li key={i} style={{
                borderTop: '2px solid var(--blue)',
                paddingTop: '20px',
              }}>
                <p className="lead" style={{ fontSize: '16px', margin: 0 }}>
                  <strong>{ins.bold}</strong> {ins.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Form (client component) ─────────────── */}
      <ResearchForm />

    </div>
  )
}

/* ── Hero background ──────────────────────────────────── */

const TOPO_LINES = 26

const TOPO_NODES = [
  { label: 'Deposits', left: '13%', top: '14%' },
  { label: 'Settlement', left: '30%', top: '24%' },
  { label: 'Custody', left: '72%', top: '20%' },
  { label: 'Compliance', left: '90%', top: '34%' },
  { label: 'Liquidity', left: '94%', top: '56%' },
]

/* ── Content ──────────────────────────────────────────── */

const insights = [
  {
    bold: 'Banks that treated tokenization as a product, not a pilot,',
    body: 'achieved positive unit economics 18 months faster than peers who ran disconnected PoCs.',
  },
  {
    bold: 'Regulatory clarity is now table stakes in 6 key jurisdictions.',
    body: 'MiCA, MAS MAS-PS, CBUAE, SEC, FINMA, and ADGM frameworks are mature enough to support real product launches in 2026.',
  },
  {
    bold: 'The first mover advantage in tokenized deposits is narrowing.',
    body: 'Three tier-1 banks are expected to launch commercially by Q3 2026, compressing the window for regional banks to differentiate.',
  },
  {
    bold: 'Core banking integration is the #1 execution risk,',
    body: 'cited by 71% of surveyed institutions — not regulatory approval, not client demand.',
  },
]

