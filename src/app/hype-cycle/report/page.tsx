export const metadata = {
  title: 'Digital Assets Hype Cycle 2026 — Full Research | Coinstruct',
  description:
    'The complete Coinstruct Digital Assets Hype Cycle 2026 research: methodology, all tokenization plays, and what each means for financial institutions.',
}

const STAGES = [
  {
    num: '1',
    name: 'Early Innovations',
    body: 'A potential technology breakthrough kicks things off. Early proof-of-concept stories and media interest trigger significant publicity. Often no usable products exist and commercial viability is unproven. Think of it as the moment a new idea hits the news and people start asking "what if?"',
  },
  {
    num: '2',
    name: 'Peak of Inflated Expectations',
    body: 'This is the phase where excitement outpaces reality. Publicity produces a number of success stories, often accompanied by scores of failures. Some companies take action; many do not. There\'s still more hype than proof that innovation can deliver what people need.',
  },
  {
    num: '3',
    name: 'Trough of Disillusionment',
    body: 'Interest wanes as experiments and implementations fail to deliver. Producers of the technology shake out or fail. Investment continues only if surviving providers improve their products to the satisfaction of early adopters. The hype has cooled, the headlines have moved on, and many write the technology off. But this is often where the real work happens.',
  },
  {
    num: '4',
    name: 'Slope of Enlightenment',
    body: 'More use cases of the technology\'s benefits start to crystallize and become more widely understood. Second- and third-generation products appear. More enterprises fund pilots, while conservative companies remain cautious. People are learning what the technology actually does well, as opposed to what was promised.',
  },
  {
    num: '5',
    name: 'Plateau of Productivity',
    body: 'Mainstream adoption starts to take off. The technology\'s broad market applicability and relevance are clearly paying off. The word "plateau" is key: expectations level off at a realistic, sustainable height. Not as high as the original hype peak, but grounded in proven, repeatable value.',
  },
]

const INSIGHT_TAGS: { label: string; bg: string; ink: string; id: string }[] = [
  { label: 'Stablecoins (USD)',                   bg: '#e6efff', ink: '#1c3f8f', id: 'stablecoins-usd' },
  { label: 'CBDC',                                bg: '#eaf3ea', ink: '#2f6b3a', id: 'cbdc' },
  { label: 'Tokenized Deposits',                  bg: '#fff4e0', ink: '#8a5a17', id: 'tokenized-deposits' },
  { label: 'Tokenized Stocks',                    bg: '#f2eaff', ink: '#5a2fb2', id: 'tokenized-stocks' },
  { label: 'Tokenized MMFs',                      bg: '#e3f4f6', ink: '#1f6b76', id: 'tokenized-mmfs' },
  { label: 'Gold Tokenization',                   bg: '#fbf1cf', ink: '#7a5a10', id: 'gold-tokenization' },
  { label: 'ERC-3643',                            bg: '#ffe9ec', ink: '#a52a3a', id: 'erc-3643' },
  { label: 'Tokenized Private Credit',            bg: '#e8eef8', ink: '#2f4a80', id: 'tokenized-private-credit' },
  { label: 'Permissioned Chains',                 bg: '#efe9f7', ink: '#5c3ea0', id: 'permissioned-chains' },
  { label: 'RWA-specific L2s',                    bg: '#e4f2fb', ink: '#1a5e8f', id: 'rwa-specific-l2s' },
  { label: 'Atomic DvP',                          bg: '#eefaf1', ink: '#2c7a4a', id: 'atomic-dvp' },
  { label: 'Tokenized Real Estate',               bg: '#fff0e5', ink: '#9a4e14', id: 'tokenized-real-estate' },
  { label: 'Utility Tokens',                      bg: '#f4eff9', ink: '#5f3e8a', id: 'utility-tokens' },
  { label: 'Tokenized Commodities (excl. gold)',  bg: '#eaf6ee', ink: '#356b3d', id: 'tokenized-commodities-excl-gold' },
  { label: 'Tokenized Carbon Credits',            bg: '#e6f4ea', ink: '#2e6b3a', id: 'tokenized-carbon-credits' },
  { label: 'Private Chains',                      bg: '#f2f0ea', ink: '#5a4c2a', id: 'private-chains' },
  { label: 'NFTs',                                bg: '#fbe8f2', ink: '#96256b', id: 'nfts' },
  { label: 'AI Agent Payments',                   bg: '#eef1ff', ink: '#3040a5', id: 'ai-agent-payments' },
  { label: 'RWA Perpetuals',                      bg: '#eaf2fb', ink: '#1c4f8a', id: 'rwa-perpetuals' },
  { label: 'Yield-bearing Stablecoins',           bg: '#e6f0ec', ink: '#2b6a52', id: 'yield-bearing-stablecoins' },
  { label: 'Institutional DeFi',                  bg: '#eae8fb', ink: '#3d3a95', id: 'institutional-defi' },
  { label: 'Wholesale CBDC',                      bg: '#e5efe9', ink: '#2d5f45', id: 'wholesale-cbdc' },
  { label: 'Non-USD Stablecoins',                 bg: '#eaf1fa', ink: '#28588f', id: 'non-usd-stablecoins' },
  { label: 'Tokenized Bonds',                     bg: '#fff2e6', ink: '#8f5216', id: 'tokenized-bonds' },
  { label: 'Tokenized PE/VC',                     bg: '#f0eafb', ink: '#4d2e94', id: 'tokenized-pe-vc' },
]

const STABLECOIN_CASES = [
  { ticker: 'USDT', issuer: 'Tether', amount: '~$184B · 59%' },
  { ticker: 'USDC', issuer: 'USD Coin', amount: '~$73B' },
  { ticker: 'USDS', issuer: 'Sky', amount: '~$9.6B' },
  { ticker: 'USD1', issuer: 'World Liberty Financial', amount: '~$4B' },
  { ticker: 'PYUSD', issuer: 'PayPal USD', amount: '~$2.8B' },
]

const MMF_CASES = [
  { ticker: 'BUIDL', issuer: 'BlackRock', amount: '~$2.6B · 8 chains' },
  { ticker: 'USYC', issuer: 'Circle', amount: '~$2.7B' },
  { ticker: 'USDY', issuer: 'Ondo', amount: '~$2.6B' },
  { ticker: 'BENJI', issuer: 'Franklin Templeton', amount: '~$1B · 8 chains' },
  { ticker: 'JLTXX', issuer: 'JPMorgan', amount: 'launched May 2026' },
]

const GOLD_CASES = [
  { ticker: 'XAUT', issuer: 'Tether Gold', amount: '~$2.5B' },
  { ticker: 'PAXG', issuer: 'PAX Gold', amount: '~$2.3B · +51% Q1' },
  { ticker: 'KAU', issuer: 'Kinesis Gold', amount: '~$350M' },
  { ticker: 'XAUM', issuer: 'Matrixdock', amount: '~$70M · 11× growth' },
]

const ERC3643_CASES = [
  { ticker: 'DTCC', issuer: 'ComposerX platform', amount: 'integrated Mar 2025' },
  { ticker: 'MAS', issuer: 'Project Guardian', amount: 'live' },
  { ticker: 'Franklin Templeton', issuer: 'BENJI token', amount: 'live' },
  { ticker: 'Invesco / Apex', issuer: 'ERC3643 Association', amount: 'members' },
]

const CBDC_CASES = [
  { ticker: 'Fnality GBP', issuer: 'Fnality International', amount: 'finality Dec 2024' },
  { ticker: 'Helvetia III', issuer: 'Swiss National Bank', amount: 'live multi-bond' },
  { ticker: 'DLR × Fnality', issuer: 'Broadridge', amount: 'intraday repo' },
]

const PRIVATE_CREDIT_CASES = [
  { ticker: 'Maple Finance', issuer: 'Institutional lending', amount: '~$4B AUM · +69% YTD' },
  { ticker: 'Centrifuge', issuer: 'Structured credit', amount: '~$1.5B TVL' },
  { ticker: 'Goldfinch', issuer: 'Emerging market debt', amount: '~$90M active loans' },
  { ticker: 'Apollo', issuer: 'Tokenized credit fund', amount: '9% MORPHO stake' },
]

const TOKENIZED_DEPOSIT_CASES = [
  { ticker: 'JPMD', issuer: 'JPMorgan', amount: '$2–5B daily via Kinexys' },
  { ticker: 'Token Services', issuer: 'Citi', amount: 'live cross-border' },
  { ticker: 'Tokenized Deposits', issuer: 'Wells Fargo', amount: 'announced Aug 2026' },
  { ticker: 'Shared Network', issuer: 'The Clearing House', amount: 'targeting mid-2027' },
]

const PERM_CHAIN_CASES = [
  { ticker: 'Canton Network', issuer: 'Goldman / DTCC / JPM / Citadel', amount: '~$3.7B mcap' },
  { ticker: 'Provenance', issuer: 'Figure Technologies', amount: '$1.6B TVL' },
  { ticker: 'Broadridge DLR', issuer: 'Broadridge', amount: 'up to $9T/mo repo' },
]

const RWA_L2_CASES = [
  { ticker: 'Robinhood Chain', issuer: 'Robinhood', amount: 'mainnet Jul 1, 2026' },
  { ticker: 'Plume Network', issuer: 'Plume', amount: '$1B+ TVL' },
  { ticker: 'Ondo Chain', issuer: 'Ondo Finance', amount: '+205% TVL YTD' },
  { ticker: 'Converge', issuer: 'Ethena × Securitize', amount: 'in development' },
]

const ATOMIC_DVP_CASES = [
  { ticker: 'Broadridge DLR', issuer: 'Broadridge', amount: '$384B/day Dec 2025' },
  { ticker: 'Kinexys Repo', issuer: 'JPMorgan', amount: 'live on Canton' },
  { ticker: 'DTCC Pilot', issuer: 'DTCC', amount: 'live Jul 2026 · Oct commercial' },
  { ticker: 'Cross-border PoC', issuer: 'Ondo / JPM / MC / Ripple', amount: '<5s settlement' },
]

const REAL_ESTATE_CASES = [
  { ticker: 'RealT', issuer: 'Fractional rental', amount: 'live, US properties' },
  { ticker: 'Lofty', issuer: 'Fractional rental', amount: 'low minimums' },
  { ticker: 'Propy', issuer: 'Deed tokenization', amount: 'on-chain title' },
  { ticker: 'Dubai LR', issuer: 'Dubai Land Register', amount: 'government registry' },
  { ticker: 'PRYPCO Mint', issuer: 'Dubai', amount: 'regulated pilot' },
]

const UTILITY_CASES = [
  { ticker: 'BNB', issuer: 'BNB Chain', amount: 'gas + ecosystem' },
  { ticker: 'LINK', issuer: 'Chainlink', amount: '$6.2B · -30.3% YTD' },
  { ticker: 'UNI', issuer: 'Uniswap', amount: '$2.5B · -31.6% YTD' },
  { ticker: 'POL', issuer: 'Polygon', amount: '$816M · -27.3% YTD' },
]

const COMMODITY_CASES = [
  { ticker: 'KAG', issuer: 'Kinesis Silver', amount: '~$350M · 4.8% share' },
  { ticker: 'XAUM', issuer: 'Matrixdock', amount: '~$70M · 11× growth' },
  { ticker: 'Oil / Gas', issuer: 'Various pilots', amount: 'no traction' },
  { ticker: 'Ag / Metals', issuer: 'Various pilots', amount: 'no traction' },
]

const CARBON_CASES = [
  { ticker: 'Toucan', issuer: 'Toucan Protocol', amount: '~$717K TVL · -83% YTD' },
  { ticker: 'KLIMA', issuer: 'KlimaDAO', amount: '$0.04 · -99%+ from ATH' },
  { ticker: 'Regen', issuer: 'Regen Network', amount: 'active' },
  { ticker: 'Flowcarbon', issuer: 'Flowcarbon', amount: 'active' },
]

const PRIVATE_CHAIN_CASES = [
  { ticker: 'Hyperledger', issuer: 'Linux Foundation / IBM', amount: 'supply chain live' },
  { ticker: 'R3 Corda', issuer: 'R3', amount: '20+ networks · $17B+' },
  { ticker: 'Quorum→Kinexys', issuer: 'JPMorgan', amount: 'pivoted to public L2' },
]
const NFT_CASES = [
  { ticker: 'OpenSea', issuer: 'Primary marketplace', amount: '$340M monthly vol (Jun 2026)' },
  { ticker: 'Blur', issuer: 'Pro trading', amount: '38% of ETH NFT volume' },
  { ticker: 'Magic Eden', issuer: 'Solana / BTC Ordinals', amount: 'multi-chain leader' },
]
const AI_PAYMENT_CASES = [
  { ticker: 'x402 Protocol', issuer: 'Coinbase → Linux Foundation', amount: '180M+ txns · $50B cumulative' },
  { ticker: 'Visa', issuer: 'Stablecoin settlement', amount: '$7B annualized' },
  { ticker: 'Stripe MMP', issuer: 'Machine Payments Protocol', amount: 'on Tempo L1' },
  { ticker: 'Amazon Bedrock', issuer: 'AgentCore', amount: 'x402 integrated' },
  { ticker: 'Google AP2', issuer: 'Agent Payments Protocol', amount: 'x402 settlement layer' },
  { ticker: 'Mastercard / BVNK', issuer: 'Mastercard', amount: '$1.8B acquisition' },
]
const RWA_PERP_CASES = [
  { ticker: 'Hyperliquid', issuer: 'Decentralized perps', amount: '$25.1B weekly RWA vol · 70% open interest' },
  { ticker: 'Binance', issuer: 'Tokenized stock perps', amount: '~50% market share' },
  { ticker: 'OKX', issuer: 'RWA perps', amount: 'top-3 venue' },
  { ticker: 'Arcus', issuer: 'dYdX team + Robinhood Chain', amount: '95 stock tokens · $33M week 1' },
  { ticker: 'Ostium', issuer: 'Forex + commodity perps', amount: 'live' },
]
const TOKENIZED_STOCK_CASES = [
  { ticker: 'Ondo Finance', issuer: 'On-chain equities', amount: '$955M · largest issuer' },
  { ticker: 'xStocks / Backed', issuer: 'EU prospectus certs', amount: '$507M' },
  { ticker: 'Binance bStocks', issuer: 'Exchange-issued', amount: '$334M' },
  { ticker: 'Securitize', issuer: 'Issuer-sponsored (IPO SECZ)', amount: '$245M · public co.' },
  { ticker: 'Robinhood', issuer: 'Tokenized debt (Jersey)', amount: '$44M · 328K holders' },
]
const YIELD_STABLE_CASES = [
  { ticker: 'Sky USDS', issuer: 'Formerly MakerDAO', amount: '$9.58B · +10.4% YTD' },
  { ticker: 'Ethena USDe', issuer: 'Basis-trade model', amount: '$3.92B · -37.8% YTD' },
  { ticker: 'Ondo USDY', issuer: 'Treasury-backed', amount: '$2.09B · +240% YTD' },
  { ticker: 'Ethena sUSDe', issuer: 'Staked USDe', amount: '$1.56B · -55.1% YTD' },
  { ticker: 'Mountain USDM', issuer: 'Mountain Protocol', amount: 'offshore yield model' },
]
const INST_DEFI_CASES = [
  { ticker: 'Aave Horizon', issuer: 'Aave (Circle, Ripple, FT, VanEck)', amount: '~$580M net deposits Dec 2025' },
  { ticker: 'Morpho', issuer: 'Modular vaults', amount: '$12.0B TVL · Apollo 9% stake' },
  { ticker: 'Uniswap v4', issuer: 'Permissioned Pools', amount: 'on-chain compliance checks' },
  { ticker: 'Ondo Nexus', issuer: 'Ondo Finance', amount: 'institutional bridge' },
  { ticker: 'Superstate USTB', issuer: 'Superstate', amount: 'tokenized T-bill fund' },
]
const WHOLESALE_CBDC_CASES = [
  { ticker: 'BIS Project Agorá', issuer: 'Fed + ECB + BoE + BoJ + SNB + BoF + BoM', amount: 'tech experiments 2026' },
  { ticker: 'ECB Project Pontes', issuer: 'European Central Bank', amount: 'live target Q3 2026' },
  { ticker: 'HKMA EnsembleTX', issuer: 'HKMA', amount: 'launched Feb 2026' },
  { ticker: 'BoE Synch Lab', issuer: 'Bank of England', amount: 'sandbox active' },
  { ticker: 'Bundesbank DLT', issuer: 'Deutsche Bundesbank', amount: 'trials active' },
]
const NON_USD_STABLE_CASES = [
  { ticker: 'EURC', issuer: 'Circle', amount: '~$525M · 92% of euro stablecoin market' },
  { ticker: 'EURCV', issuer: 'SG-FORGE (Société Générale)', amount: 'MiCA-authorized' },
  { ticker: 'EURI', issuer: 'iFinex', amount: 'MiCA-authorized' },
  { ticker: 'BBRL', issuer: 'Braza (Brazil)', amount: 'live' },
  { ticker: 'MXNB', issuer: 'Bitso (Mexico)', amount: 'piloting' },
]
const TOKENIZED_BOND_CASES = [
  { ticker: 'HSBC Orion', issuer: 'HSBC', amount: '$3.5B+ cumulative · UK DIGIT pilot' },
  { ticker: 'EIB Digital CP', issuer: 'European Investment Bank', amount: 'first DLT-native CP on D7 · Jun 2026' },
  { ticker: 'HK Green Bond II', issuer: 'HKMA / HK Gov.', amount: '$1.3B · largest digital bond' },
  { ticker: 'Siemens', issuer: 'Siemens AG', amount: '€300M · intraday CBM settlement' },
  { ticker: 'SocGen', issuer: 'Société Générale', amount: 'first US digital bond' },
]
const PE_VC_CASES = [
  { ticker: 'Securitize (SECZ)', issuer: 'Platform (NASDAQ IPO Jul 2026)', amount: '$4B+ tokenized across asset types' },
  { ticker: 'Hamilton Lane', issuer: '3 feeder funds on Polygon', amount: 'min. from $5M → $20K' },
  { ticker: 'KKR Health Care II', issuer: 'KKR / Avalanche', amount: 'first major PE fund token' },
  { ticker: 'Apollo Credit', issuer: 'Tokenized diversified credit', amount: '$170M AUM Nov 2025' },
  { ticker: 'Republic Mirror', issuer: 'SpaceX / OpenAI exposure', amount: 'retail synthetic access' },
]

export default function HypeCycleReportPage() {
  return (
    <div className="rp-page">

      {/* ── Site nav ───────────────────────────────────────────── */}
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
            <a href="/hype-cycle">Hype Cycle</a>
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

      {/* ── Ambient blobs — hero + chart region ───────────────── */}
      <div className="rp-ambient-layer" aria-hidden="true">
        <span className="rp-blob rp-blob-1" />
        <span className="rp-blob rp-blob-2" />
        <span className="rp-blob rp-blob-3" />
        <span className="rp-blob rp-blob-4" />
      </div>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="rp-hero">
        <div className="container rp-hero-inner">
          <div className="rp-kicker">Research Report · 2026</div>
          <h1 className="display-2 rp-title">
            Digital Assets Hype Cycle, 2026
          </h1>
        </div>
      </section>

      {/* ── Chart — cropped, 70% width centred ─────────────────── */}
      <section className="rp-chart-section">
        <div className="rp-chart-outer">
          <div className="rp-chart-wrap">
            <img
              src="/assets/hype-cycle-2026.png"
              alt="Digital Assets Hype Cycle 2026 — positions of tokenization use cases across the curve"
              className="rp-chart-img"
            />
          </div>
        </div>
      </section>

      {/* ── Methodology ───────────────────────────────────────── */}
      <section className="rp-section">
        <div className="container rp-content">

          <h2 className="display-3 rp-h2">Methodology</h2>

          {/* Toggles: What Is the Hype Cycle? + Plateau */}
          <div className="rp-toggles">
            <details className="rp-toggle">
              <summary className="rp-toggle-summary">
                <span className="rp-toggle-arrow" aria-hidden="true" />
                What Is the Hype Cycle?
              </summary>
              <div className="rp-toggle-body">
                <p>At Coinstruct, we&apos;re Tokenization advisory. We built a Digital Assets Hype Cycle to help financial institutions globally to answer: &quot;Is now the right time to invest in tokenization, or should we wait? And which initiatives are worth launching?&quot;</p>
                <p>Our methodology is based on The Gartner Hype Cycle. It is a graphical methodology developed by Gartner to illustrate the maturity, adoption rate, and business relevance of emerging technologies over time.</p>
                <p>The core idea is simple: technologies tend to follow a predictable pattern of intense enthusiasm, painful disillusionment, and a gradual, steady climb toward genuine productivity.</p>
                <p>The chart has two axes. The horizontal axis represents time, and the vertical axis represents expectations.</p>
              </div>
            </details>

            <details className="rp-toggle">
              <summary className="rp-toggle-summary">
                <span className="rp-toggle-arrow" aria-hidden="true" />
                What Exactly Is the &quot;Plateau&quot;?
              </summary>
              <div className="rp-toggle-body">
                <p>The Plateau of Productivity is the final, stable phase. It marks the point at which more users see real-world benefits and the innovation goes mainstream. At this stage:</p>
                <ul className="rp-list">
                  <li>The technology is readily produced and available as an off-the-shelf solution.</li>
                  <li>A growing community builds around it and an ecosystem of relevant products and services emerges.</li>
                  <li>Successful adoption stories across a variety of industry verticals are observed.</li>
                </ul>
                <p>Innovation shifts from foundational development to incremental enhancements and optimizations, as the core value proposition is firmly established and ROI becomes readily quantifiable. Think of cloud computing (IaaS) as a textbook example of a technology that reached this phase.</p>
              </div>
            </details>
          </div>

          {/* The Five Stages */}
          <div className="rp-stages-intro">
            <h3 className="rp-h3">The Five Stages</h3>
          </div>
          <div className="rp-toggles rp-toggles--stages">
            {STAGES.map((s) => (
              <details key={s.num} className="rp-toggle">
                <summary className="rp-toggle-summary">
                  <span className="rp-toggle-arrow" aria-hidden="true" />
                  <span className="rp-stage-num">{s.num}.</span>
                  {s.name}
                </summary>
                <div className="rp-toggle-body">
                  <p>{s.body}</p>
                </div>
              </details>
            ))}
          </div>

          {/* ── Asset tags ── */}
          <h2 className="display-3 rp-h2 rp-toc-label">Table of contents <span className="rp-toc-hint">(tap to navigate)</span></h2>
          <div className="rp-tags-wrap">
            {INSIGHT_TAGS.map((t) => (
              <a key={t.label} href={`#${t.id}`} className="hc-tag rp-toc-tag" style={{ background: t.bg, color: t.ink }}>
                {t.label}
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ── Digital Assets Plays ──────────────────────────────── */}
      <section className="rp-section rp-plays-section">
        <div className="container rp-content">

          {/* ── Play 1: Payment Stablecoins (USD) ── */}
          <article id="stablecoins-usd" className="play">

            {/* Play header: left (title + tags + cases) / right (stats) */}
            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">01</span> Payment Stablecoins (USD)</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">&lt;2 yrs (arrived)</span>
                  <span className="play-meta-tag play-meta-tag--position">Plateau of Productivity</span>
                </div>
                <div className="play-cases">
                  {STABLECOIN_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$313B</div>
                  <div className="play-stat-label">Market cap</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value play-stat-pos">+23%</div>
                  <div className="play-stat-label">2026 YTD</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">269M</div>
                  <div className="play-stat-label">On-chain addr.</div>
                </div>
              </div>
            </div>

            {/* Play body: editorial text + visual blocks */}
            <div className="play-body">

              {/* ── What's the technology about? ── */}
              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>A payment stablecoin is a digital token pegged one-to-one to the US dollar, backed by reserves (cash, Treasuries, short-term instruments) held off chain. It lives on public blockchains like Ethereum, Solana, Base, and Tron and can move between wallets anywhere in the world, 24/7, in seconds, without touching the correspondent banking network. The on-chain transaction itself is cheap and near-instant.</p>

                {/* Stablecoin sandwich visual */}
                <div className="play-sandwich">
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">Fiat on-ramp</div>
                    <div className="play-sandwich-sub">Exchange spreads · banking fees · currency conversion</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">High cost &amp; delay</span>
                  </div>
                  <div className="play-sandwich-divider">→</div>
                  <div className="play-sandwich-step play-sandwich-step--ok">
                    <div className="play-sandwich-label">Blockchain transfer</div>
                    <div className="play-sandwich-sub">Settles in seconds · near-zero fee · 24/7 availability</div>
                    <span className="play-sandwich-badge play-sandwich-badge--ok">Near-free</span>
                  </div>
                  <div className="play-sandwich-divider">→</div>
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">Fiat off-ramp</div>
                    <div className="play-sandwich-sub">Local banking · FX conversion · withdrawal limits</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">High cost &amp; delay</span>
                  </div>
                </div>

                <p>The practical experience depends entirely on what happens before and after the token moves. The industry calls this the <em>&ldquo;stablecoin sandwich&rdquo;</em> — a term coined by Banca d&apos;Italia in its July 2026 research paper — where the blockchain transfer sits between two fiat layers that carry most of the cost and delay.</p>
              </div>

              {/* ── Current progress & use-cases ── */}
              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>Stablecoins have crossed $313B in supply (up 93% in two years), and in February 2026 they settled $7.2 trillion in a single month, surpassing the US ACH network for the first time. Supply kept growing through the 2026 crypto downturn, confirming it has decoupled from the speculative cycle. The GENIUS Act (signed July 2025) and MiCA (full enforcement July 1, 2026) removed the regulatory ambiguity that held institutional adoption back.</p>

                {/* Key stats pull row */}
                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$7.2T</div>
                    <div className="play-stat-pull-label">Settled Feb 2026 — surpassed US ACH for the first time</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">+93%</div>
                    <div className="play-stat-pull-label">Supply growth over 2 years, decoupled from market cycle</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$350–550B</div>
                    <div className="play-stat-pull-label">Real economy volume in 2025, +60% YoY</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">41%</div>
                    <div className="play-stat-pull-label">Of corporates report ≥10% savings on cross-border B2B</div>
                  </div>
                </div>

                <p>M&amp;A activity confirmed the thesis is working at scale:</p>

                {/* M&A list */}
                <div className="play-ma-list">
                  <div className="play-ma-item">
                    <span className="play-ma-parties">Stripe acquired Bridge</span>
                    <span className="play-ma-amount">$1.1B</span>
                  </div>
                  <div className="play-ma-item">
                    <span className="play-ma-parties">Mastercard acquired BVNK</span>
                    <span className="play-ma-amount">$1.8B</span>
                  </div>
                  <div className="play-ma-item">
                    <span className="play-ma-parties">Visa stablecoin settlement run rate (Jan 2026)</span>
                    <span className="play-ma-amount">$4.5B ann.</span>
                  </div>
                </div>

                {/* Reality check callout */}
                <div className="play-callout">
                  <div className="play-callout-head">Reality check</div>
                  <p>Stablecoins still account for just 1% of global payment flows — unchanged since 2023. Banca d&apos;Italia&apos;s July 2026 mystery shopping exercise tested 200 real USDC remittances across 10 corridors and found total costs ranging from 0.30% to nearly 9%. Compared with Wise, USDC was cheaper in three corridors and more expensive in four. Almost all friction came from the fiat on- and off-ramps, not the blockchain leg. A March 2026 BIS paper separately identified weak interoperability, fragmented standards, and institutional differences as the main barriers — suggesting blockchain settlement alone cannot remove compliance, banking, and local currency bottlenecks.</p>
                </div>
              </div>

              {/* ── What's next? ── */}
              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>Three things need to happen for stablecoins to close the gap between their theoretical promise and their actual end-to-end economics.</p>

                {/* Forward-looking cards */}
                <div className="play-fwd-grid">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">On/off ramp infrastructure</div>
                    <div className="play-fwd-body">Today exchanges function as digital correspondent banks, controlling access, liquidity, pricing, and conversion. As Mastercard&apos;s EVP of Blockchain put it: <em>&ldquo;The technology is quite powerful, but that alone is not sufficient.&rdquo;</em> The category needs integrated providers that handle the full sandwich — fiat to stablecoin to fiat — as a single product.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Complements, not competitors</div>
                    <div className="play-fwd-body">Banca d&apos;Italia concluded the benefits could become <em>&ldquo;substantially higher&rdquo;</em> if users could spend stablecoins directly without converting to fiat first. Merchant acceptance, payroll disbursement, and direct spend require jurisdictions to recognize stablecoins as a valid payment instrument — not just a tradeable asset.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">03</div>
                    <div className="play-fwd-title">The yield question</div>
                    <div className="play-fwd-body">GENIUS Act and MiCA both prohibit issuers from paying interest, pushing yield into adjacent wrappers like tokenized MMFs. Meanwhile, Project Agorá demonstrated cross-border settlement in ~80 seconds using tokenized wholesale bank deposits — without leaving the regulated banking system. The competitive boundary between stablecoins and bank-issued alternatives is still being drawn.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 2: Tokenized MMFs ── */}
          <article id="tokenized-mmfs" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">02</span> Tokenized MMFs</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">&lt;2 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {MMF_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$15B+</div>
                  <div className="play-stat-label">AUM</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value play-stat-pos">~2×</div>
                  <div className="play-stat-label">2026 YTD</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">8+</div>
                  <div className="play-stat-label">BUIDL chains</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>A tokenized money market fund is a regulated fund whose shares exist as blockchain tokens. The fund holds the same things a traditional MMF holds: short-dated US government debt, Treasury bills, overnight repos. The difference is that each token represents a share in that portfolio and lives on chain, earning yield (typically 3.5% to 5.25% in the current rate environment) and settling 24/7 instead of waiting for the fund&apos;s T+1 cycle. The real unlock isn&apos;t the yield, it&apos;s composability: a BUIDL token can be posted as collateral on a derivatives platform, used as the cash leg of an on-chain trade, or held in a treasury wallet earning yield overnight, all without redeeming and repurchasing.</p>

                <div className="play-sandwich">
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">Conventional MMF</div>
                    <div className="play-sandwich-sub">Hours to pledge · T+1 settlement · siloed from DeFi · manual process</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">Slow collateral</span>
                  </div>
                  <div className="play-sandwich-divider">→</div>
                  <div className="play-sandwich-step play-sandwich-step--ok-end">
                    <div className="play-sandwich-label">Tokenized MMF</div>
                    <div className="play-sandwich-sub">Moves in seconds · 24/7 · composable as DeFi collateral · yield while posted</div>
                    <span className="play-sandwich-badge play-sandwich-badge--ok">Instant collateral</span>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>This category went from under $1B in early 2024 to over $15B by mid-2026, making it the fastest growing segment in tokenized real-world assets. BlackRock&apos;s BUIDL crossed $2.6B after expanding to eight networks, with Circle&apos;s USYC and Ondo&apos;s suite close behind. Franklin Templeton&apos;s BENJI was the first tokenized MMF (launched 2021 on Stellar) and has since expanded to Polygon, Canton, Ethereum, Arbitrum, Base, Aptos, Avalanche, and Solana. JPMorgan launched JLTXX in May 2026. The SEC&apos;s January 2026 guidance drew a clean line between issuer-sponsored tokens and third-party synthetic wrappers, removing the biggest legal ambiguity.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$15B+</div>
                    <div className="play-stat-pull-label">AUM mid-2026, up from under $1B in early 2024</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$311B</div>
                    <div className="play-stat-pull-label">BlackRock UCITS MMF AUM getting on-chain share classes</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">€7B</div>
                    <div className="play-stat-pull-label">ECB estimate of global tokenized MMF assets, Feb 2026</div>
                  </div>
                </div>

                <p>The most consequential move happened on August 4, 2026. BlackRock introduced 12 tokenized share classes across six existing UCITS money market funds in Europe, covering $311B in combined AUM, using Kinexys to mint tokens on public Ethereum. BlackRock did not tokenize $311B — it added on-chain share classes to funds managing that amount; the tokenized portion starts small and grows as institutional investors opt in. But the signal matters: this is the world&apos;s largest asset manager wrapping its existing, regulated, institutional-scale cash management platform with blockchain rails.</p>

                <div className="play-callout">
                  <div className="play-callout-head">The collateral unlock</div>
                  <p>The fund&apos;s tokens can now be posted as collateral on major derivatives platforms, turning a tokenized fund from a wrapper around an old product into something the old product could not do. A conventional MMF position takes hours to pledge. A BUIDL token moves in seconds.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>Three gaps remain before this category reaches full plateau.</p>
                <div className="play-fwd-grid">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">European adoption</div>
                    <div className="play-fwd-body">Most activity is US-dollar, US-product, US-issuer. The ECB noted only about €725M EU-domiciled as of February 2026. BlackRock&apos;s UCITS launch starts to close this gap, but real adoption depends on whether corporate treasurers and institutional allocators switch from existing share classes to on-chain ones.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">GENIUS Act demand floor</div>
                    <div className="play-fwd-body">The GENIUS Act permits payment stablecoin issuers to hold tokenized MMF shares as reserve assets, creating a structural demand floor: every regulated stablecoin issuer now has a reason to park reserves in BUIDL or equivalents. That&apos;s a potentially enormous wedge, but only materializes as GENIUS implementing rules finalize through 2026.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">03</div>
                    <div className="play-fwd-title">Distribution wins, not product</div>
                    <div className="play-fwd-body">The category is not winner-take-all. BlackRock, Circle, Ondo, Franklin Templeton, JPMorgan, and Superstate coexist with different value propositions — institutional credibility vs. DeFi composability vs. low minimums vs. multi-chain reach. The competitive question is which distribution channels win.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 3: Gold Tokenization ── */}
          <article id="gold-tokenization" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">03</span> Gold Tokenization</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">&lt;2 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {GOLD_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$5.5B</div>
                  <div className="play-stat-label">Market cap</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value play-stat-pos">+289%</div>
                  <div className="play-stat-label">Sector 15-mo</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">$90.7B</div>
                  <div className="play-stat-label">Q1 2026 vol.</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>A tokenized gold product is a blockchain token backed one-to-one by physical gold stored in audited vaults. Each token represents ownership of a specific weight of allocated gold (typically one fine troy ounce for PAXG and XAUT), redeemable for the physical metal or cash equivalent. The tokens live on blockchain and trade on both centralized and decentralized exchanges 24/7. The point is to give holders the exposure profile of gold — the safe-haven asset — with the operational profile of a crypto token: fractional ownership, instant settlement, composability as DeFi collateral, and no need to deal with storage, insurance, or delivery logistics.</p>

                <div className="play-sandwich">
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">Gold ETF (GLD)</div>
                    <div className="play-sandwich-sub">T+1 settlement · broker custody · no self-custody · not usable as DeFi collateral</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">Siloed</span>
                  </div>
                  <div className="play-sandwich-divider">→</div>
                  <div className="play-sandwich-step play-sandwich-step--ok-end">
                    <div className="play-sandwich-label">Tokenized Gold (PAXG / XAUT)</div>
                    <div className="play-sandwich-sub">24/7 trading · self-custody · DeFi collateral · fractional · instant settlement</div>
                    <span className="play-sandwich-badge play-sandwich-badge--ok">Composable</span>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>Tokenized gold has become one of the fastest growing categories in crypto. The tokenized commodities sector grew 289% over 15 months, climbing from $1.43B to $5.55B in market cap, with PAXG and XAUT together driving 89% of that expansion. PAXG had the stronger first quarter of 2026, posting a 51% increase in market cap and adding over $800M in value, while XAUT&apos;s wallet count nearly doubled, growing by close to 19,000 holders. The demand driver is macro, not narrative: gold hit fresh all-time highs in late 2025 and early 2026, and tokenized versions gave both retail and institutional traders a way to access that move with crypto-native speed and liquidity.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$90.7B</div>
                    <div className="play-stat-pull-label">Q1 2026 spot volume — already above full-year 2025&apos;s $84.6B</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">+51%</div>
                    <div className="play-stat-pull-label">PAXG market cap growth in Q1 2026 alone</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">11×</div>
                    <div className="play-stat-pull-label">Matrixdock XAUM growth; smaller players diversifying the category</div>
                  </div>
                </div>

                <p>The real differentiation from gold ETFs is on-chain utility. PAXG and XAUT can be used as collateral in lending protocols, traded against other tokens in DeFi, and held in self-custody wallets — none of which a GLD share can do. Smaller players are emerging with different value propositions: yield-bearing tokens like thGOLD, supply-chain focused tokens like AurusGOLD, and platform-specific offerings from regulated fintechs targeting India and the Gulf. This diversification is a sign of maturity, not fragmentation.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>Two things separate gold tokenization from a clean plateau.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Tax treatment</div>
                    <div className="play-fwd-body">In the US, the IRS classifies physical gold and most gold ETFs as collectibles, taxed at up to 28% on long-term gains rather than the standard 20%. As of mid-2026, whether tokenized gold follows the collectible rate or standard digital asset property rules remains an open question — a genuine deterrent for institutional allocation decisions.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Beyond gold</div>
                    <div className="play-fwd-body">Kinesis Silver (KAG) grew its market cap above $350M but its share fell to 4.8% of the commodities category, and attempts to tokenize oil, agricultural products, and industrial metals have repeatedly stalled. Gold works because it is fungible, storable, and carries massive retail demand. No other commodity has yet replicated the same product-market fit.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 4: ERC-3643 ── */}
          <article id="erc-3643" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">04</span> ERC-3643</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {ERC3643_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">$32B+</div>
                  <div className="play-stat-label">Tokenized</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">180+</div>
                  <div className="play-stat-label">Jurisdictions</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">2027</div>
                  <div className="play-stat-label">ISO target</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>ERC-3643 is an Ethereum token standard designed specifically for regulated securities. Unlike ERC-20, which lets any wallet receive tokens freely, ERC-3643 embeds compliance rules directly into the token contract. Non-compliant transfers are not prevented by policy or blocked by an off-chain system — they are architecturally impossible. Because it extends ERC-20, it remains compatible with the entire EVM ecosystem, meaning tokens built on it can interact with DeFi infrastructure while maintaining compliance guardrails.</p>

                <div className="play-arch-stack">
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">01</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Identity Registry (ONCHAINID)</div>
                      <div className="play-arch-desc">Verifies each wallet holder&apos;s KYC/AML credentials on chain — every participant is known before any transfer can occur</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">02</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Compliance Rules</div>
                      <div className="play-arch-desc">Issuer-set restrictions baked into the contract: jurisdictional limits, investor caps, lock-up periods</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">03</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Role-based Permissions</div>
                      <div className="play-arch-desc">Issuers, regulators, and transfer agents enforce restrictions. Non-compliant transfers are architecturally impossible — not just policy-blocked.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>The standard has reached the point where nobody seriously debates it anymore. Over $32B in real-world assets have been tokenized using ERC-3643 across 180+ jurisdictions. DTCC, which processes $3 quadrillion in securities transactions annually, joined the ERC3643 Association in March 2025 and committed to integrating the standard into its ComposerX tokenization platform. SEC Chairman Paul Atkins cited it by name in a July 2025 speech. MAS built Project Guardian on it. The ERC3643 Association now counts DTCC, Apex Group, Invesco, ABN AMRO, Fasanara, and numerous tokenization platforms as members.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$32B+</div>
                    <div className="play-stat-pull-label">Tokenized using ERC-3643 across 180+ jurisdictions</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$3Q</div>
                    <div className="play-stat-pull-label">DTCC annual settlement volume — now integrating ERC-3643 via ComposerX</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">2027</div>
                    <div className="play-stat-pull-label">Target year for ISO TC 307 ratification as international standard</div>
                  </div>
                </div>

                <p>The decision tree for a regulated issuer in 2026 is simple: if the token needs whitelists and compliance, use ERC-3643; if it&apos;s a permissionless utility or governance token, use ERC-20. The two are not competitors — they solve different problems. The liquidity tradeoff is real: ERC-3643 narrows the participant pool to verified entities only, but the resulting order book is cleaner — every bid and ask comes from a compliance-cleared counterparty, which speeds settlement and reduces post-trade friction.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>Three things stand between ERC-3643 and full plateau.</p>
                <div className="play-fwd-grid">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">ISO standardization</div>
                    <div className="play-fwd-body">The Spanish national correspondent committee of ISO TC 307 has submitted a New Work Item Proposal to formalize ERC-3643 as an international ISO standard. If adopted, it becomes the global reference for tokenized securities — but ISO processes take time, with a 2027 target at earliest.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Secondary market liquidity</div>
                    <div className="play-fwd-body">Distributors operate as isolated ecosystems. The standard enables shared liquidity in theory (ERC-20 compatible, any compliant wallet can participate), but in practice most ERC-3643 tokens trade on a single venue or not at all. A tokenized asset without active market makers is an illiquid asset with extra technology cost.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">03</div>
                    <div className="play-fwd-title">Cross-chain deployment</div>
                    <div className="play-fwd-body">ERC-3643 is EVM-native and most issuers deploy on a single chain. Multi-chain issuance via Chainlink CCIP is technically possible but not yet standard practice, which limits which pools of capital can access a given token. Plateau arrives when cross-chain compliance passporting becomes routine.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 5: CBDC (Productive Wholesale Deployments) ── */}
          <article id="cbdc" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">05</span> CBDC (Productive Wholesale Deployments)</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">&lt;2 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {CBDC_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">Dec&nbsp;&apos;24</div>
                  <div className="play-stat-label">Finality granted</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">10+</div>
                  <div className="play-stat-label">Fnality banks</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">~80s</div>
                  <div className="play-stat-label">Agorá settlement</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>This is not about retail digital currencies or the broader CBDC debate. This category refers specifically to DLT-based wholesale payment systems that settle in a digital representation of central bank money. Participating banks hold funds at the central bank, and those funds are tokenized on a distributed ledger. When two banks need to settle a securities trade, a repo, or a cross-currency payment, the tokenized central bank money moves on ledger in real time, with the credit quality of a central bank liability behind it. Fnality describes this as the <em>&ldquo;missing ingredient for novel digital asset markets: institutional-grade digital cash.&rdquo;</em></p>

                <div className="play-sandwich">
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">Traditional settlement</div>
                    <div className="play-sandwich-sub">Counterparty risk · hours or days · dependent on CHAPS/SWIFT · no intraday finality</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">Settlement risk</span>
                  </div>
                  <div className="play-sandwich-divider">→</div>
                  <div className="play-sandwich-step play-sandwich-step--ok-end">
                    <div className="play-sandwich-label">DLT wholesale settlement</div>
                    <div className="play-sandwich-sub">Central bank credit quality · real-time finality · atomic DvP · intraday collateral optimization</div>
                    <span className="play-sandwich-badge play-sandwich-badge--ok">Risk-free finality</span>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>The practical impact is narrow but deep. For the handful of banks plugged in, these systems eliminate settlement risk and enable same-day collateral optimization that traditional payment rails cannot do. The credit quality of central bank money removes counterparty risk from the equation entirely, which is why every major clearing institution (DTCC, Euroclear) has invested.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">Dec&nbsp;&apos;24</div>
                    <div className="play-stat-pull-label">UK government granted Fnality settlement finality — alongside CHAPS</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$3Q</div>
                    <div className="play-stat-pull-label">DTCC annual settlement volume — DTCC and Euroclear are now Fnality shareholders</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">~80s</div>
                    <div className="play-stat-pull-label">Project Agorá cross-border settlement time using tokenized deposits</div>
                  </div>
                </div>

                <p>Fnality launched the Sterling Fnality Payment System in December 2023, making it the world&apos;s first regulated DLT-based wholesale payment system settling in digital central bank money. In December 2024, the UK government granted it settlement finality designation, placing it alongside CHAPS and other systemically important UK payment systems. Fnality&apos;s shareholders now include Banco Santander, Bank of America, BNY Mellon, Barclays, BNP Paribas, Citi, Goldman Sachs, DTCC, Euroclear, and State Street. Meanwhile, the Swiss National Bank&apos;s Helvetia III project has moved from pilot to live multi-bond settlement, and Broadridge completed a collaboration with Fnality demonstrating real-time delivery-versus-payment settlement of intraday repo transactions.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>Central bank approvals are political and institutional processes, not just technical ones.</p>
                <div className="play-fwd-grid">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Fed and ECB timelines</div>
                    <div className="play-fwd-body">Neither the Fed nor the ECB has signaled imminent action. The category is near plateau for the Sterling system specifically, but multi-currency expansion is a 2-to-5-year process driven by politics and institutional mandate, not technology readiness.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Definitional overlap</div>
                    <div className="play-fwd-body">The category overlaps with tokenized deposits (JPMorgan&apos;s JPMD, HSBC&apos;s pilots) and regulated stablecoins. It&apos;s not yet clear whether wholesale CBDC infrastructure wins as the universal settlement layer or coexists as one option among several.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">03</div>
                    <div className="play-fwd-title">Competition not settled</div>
                    <div className="play-fwd-body">BlackRock chose Kinexys (JPMorgan&apos;s tokenized deposit rail) over Fnality for its European UCITS tokenization — a sign the competitive picture between wholesale CBDC, tokenized deposits, and regulated stablecoins as settlement rails is far from decided.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 6: Tokenized Private Credit ── */}
          <article id="tokenized-private-credit" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">06</span> Tokenized Private Credit</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {PRIVATE_CREDIT_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">$14B+</div>
                  <div className="play-stat-label">Active AUM</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value play-stat-pos">+180%</div>
                  <div className="play-stat-label">YoY growth</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">8–15%</div>
                  <div className="play-stat-label">Typical yield</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>Tokenized private credit is non-bank lending where the loan itself originates and gets serviced off-chain — a working capital line for a trading firm, receivables financing for an SME, fintech debt in an emerging market — but the claim on that loan&apos;s cash flows is represented as a token on-chain. Investors buy the token to get fractional exposure to the underlying loan pool, earn interest as borrowers repay, and can potentially trade their position on secondary markets. Unlike a tokenized Treasury that wraps a near-riskless government bond, private credit carries real underwriting risk on each borrower. The yield is higher (typically 8% to 15% annualized) and so is the dispersion of outcomes.</p>

                <div className="play-sandwich">
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">Traditional private credit</div>
                    <div className="play-sandwich-sub">Opaque terms · high minimums · quarterly liquidity at best · limited secondary market</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">Illiquid &amp; opaque</span>
                  </div>
                  <div className="play-sandwich-divider">→</div>
                  <div className="play-sandwich-step play-sandwich-step--ok-end">
                    <div className="play-sandwich-label">Tokenized private credit</div>
                    <div className="play-sandwich-sub">On-chain terms · fractional access · auditable loan pool · secondary market potential</div>
                    <span className="play-sandwich-badge play-sandwich-badge--ok">Transparent &amp; fractional</span>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>Private credit has become the largest non-Treasury segment of the tokenized asset market. Maple Finance leads with institutional lending pools where credit-assessed borrowers draw from depositor capital, and its syrupUSDC product launched on Base in January 2026 to make private credit yields accessible through familiar DeFi interfaces. Centrifuge focuses on structured credit and trade finance, with deep integration into the Sky protocol (formerly MakerDAO). Goldfinch targets emerging market fintech debt, where the highest yields and highest risks live. Apollo Global signed a four-year agreement to acquire up to 90 million MORPHO tokens (a 9% stake) in February 2026, signaling that traditional credit allocators see the on-chain model as worth committing to.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$14B+</div>
                    <div className="play-stat-pull-label">Active on-chain loans category-wide; Maple leads at ~$4B AUM</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">+180%</div>
                    <div className="play-stat-pull-label">YoY growth in active on-chain loans to $3.2B by March 2026</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$64B</div>
                    <div className="play-stat-pull-label">Blackstone BCRED — faced $3.7B in Q1 2026 redemption requests, exposing lock-up risk</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">The ironic catalyst</div>
                  <p>When Blackstone&apos;s BCRED (a $64B traditional private credit fund) faced $3.7B in Q1 2026 redemption requests and had to raise its repurchase cap from 5% to 7%, it highlighted exactly the problem tokenized private credit is designed to solve: lock-up mismatches in illiquid asset pools. On-chain structures make the terms transparent and the liquidity constraints visible from day one, rather than discovering them at redemption.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The honest risk is that on-chain credit hasn&apos;t been fully stress-tested yet.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Surviving a credit downcycle</div>
                    <div className="play-fwd-body">Maple CEO Sidney Powell openly expects defaults to test the system in coming years. Centrifuge&apos;s Codex Finance and Goldfinch&apos;s Tugende defaults from 2022–2023 are still institutional memory. The question is whether transparent, auditable blockchains make private credit markets genuinely safer when defaults happen — or just make the losses more visible in real time.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Beyond crypto-native borrowers</div>
                    <div className="play-fwd-body">The dominant borrower profile today is crypto-native trading firms. The category needs to prove it can scale into mainstream SME and corporate lending — a harder underwriting problem with less transparent financials and no on-chain collateral. Plateau depends on surviving a real credit downcycle with better outcomes than the opaque traditional alternatives.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 7: Tokenized Deposits ── */}
          <article id="tokenized-deposits" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">07</span> Tokenized Deposits</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {TOKENIZED_DEPOSIT_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">$2–5B</div>
                  <div className="play-stat-label">Kinexys daily</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value play-stat-pos">10×</div>
                  <div className="play-stat-label">Kinexys YoY</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">2027</div>
                  <div className="play-stat-label">Network target</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>A tokenized deposit is a regular bank deposit — backed by the same reserves, covered by the same deposit insurance, carrying the same credit risk as any other deposit at that bank — except the ownership record lives on a blockchain instead of the bank&apos;s internal ledger. The token moves on-chain 24/7, can be programmed for automatic payment flows, and settles in seconds. Crucially, the money never leaves the regulated banking system.</p>

                <div className="play-sandwich">
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">Stablecoin</div>
                    <div className="play-sandwich-sub">New liability from a non-bank issuer · outside deposit insurance · regulatory grey areas · bank-exit risk</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">Outside banking system</span>
                  </div>
                  <div className="play-sandwich-divider">→</div>
                  <div className="play-sandwich-step play-sandwich-step--ok-end">
                    <div className="play-sandwich-label">Tokenized Deposit</div>
                    <div className="play-sandwich-sub">Existing bank liability · deposit-insured · 24/7 programmable · settles in seconds</div>
                    <span className="play-sandwich-badge play-sandwich-badge--ok">Inside banking system</span>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>This category moved faster in 2026 than almost any observer expected. JPMorgan&apos;s Kinexys platform processes $2B to $5B in daily transaction volume, with payments growing 10× year over year. Its JPMD deposit token launched on Coinbase&apos;s Base L2 in late 2025 for institutional clients and expanded to Canton in 2026. Citi Token Services runs real-time digital transfers between New York, London, and Hong Kong. BNY launched its own tokenized deposit service in January 2026. Wells Fargo announced in August 2026 that it will begin offering tokenized deposits to corporate clients this fall.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$2–5B</div>
                    <div className="play-stat-pull-label">Kinexys daily transaction volume, 10× YoY growth</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">16+</div>
                    <div className="play-stat-pull-label">Major banks joining The Clearing House shared tokenized deposit network</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$2T+</div>
                    <div className="play-stat-pull-label">Daily volume on RTP and CHIPS — the rails the new network will link to</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">The defensive play</div>
                  <p>In June 2026, JPMorgan, Bank of America, Citi, Wells Fargo, and over a dozen other major banks announced plans for a shared tokenized deposit network operated by The Clearing House, targeting launch by mid-2027. The motivation is explicitly defensive: stablecoins have $263B in circulation and formed their own consortium (Open USD), and the banks want to keep deposits inside the regulated system rather than losing them to non-bank issuers.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The shift from &ldquo;each bank has its own token&rdquo; to &ldquo;a shared interbank network&rdquo; is the critical development.</p>
                <div className="play-fwd-grid">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">The interbank problem</div>
                    <div className="play-fwd-body">An individual bank&apos;s deposit token solves intra-bank transfers but doesn&apos;t help when a JPMorgan client needs to pay a Citi client in real time. That interbank problem is what The Clearing House network is designed to fix — and its success or failure will determine whether tokenized deposits become the dominant on-chain money form or remain confined to single-bank ecosystems.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Fungibility is harder than it looks</div>
                    <div className="play-fwd-body">Each deposit carries the credit risk, insurance treatment, and regulatory jurisdiction of its issuing bank, making true fungibility across issuers much harder than it is for stablecoins. A JPMD token and a Wells Fargo tokenized deposit represent liabilities of different entities with different risk profiles — the network has to handle that distinction without making it invisible to users.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">03</div>
                    <div className="play-fwd-title">Corporate treasurer adoption</div>
                    <div className="play-fwd-body">Plateau depends on whether corporate treasurers actually switch from existing payment rails to on-chain deposits — and whether the shared network launches on time in 2027. Given that the driving motivation is competitive defense against stablecoins rather than internal efficiency, the urgency is real: every quarter of delay is a quarter where stablecoin circulation grows.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 8: Permissioned Chains ── */}
          <article id="permissioned-chains" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">08</span> Permissioned Chains</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {PERM_CHAIN_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">$9T/mo</div>
                  <div className="play-stat-label">Broadridge DLR</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">$1.6B</div>
                  <div className="play-stat-label">Provenance TVL</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">Oct 2026</div>
                  <div className="play-stat-label">DTCC launch</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>Permissioned chains are blockchain networks designed specifically for regulated financial institutions. They differ from public chains like Ethereum in one critical way: they offer transaction-level privacy and legal-entity-scoped state, meaning participants can see only the data relevant to them while sharing a common ledger. Canton, the largest in this category, uses a &ldquo;network of networks&rdquo; model where each institution runs its own ledger but connects to others through privacy-preserving synchronization. Provenance takes a different approach as a Cosmos-based chain optimized for loan origination and securitization. Neither is a &ldquo;private chain&rdquo; in the old Hyperledger sense: both are open to new participants and settle (in Canton&apos;s case) or anchor to public infrastructure.</p>

                <div className="play-arch-stack">
                  <div className="play-arch-layer">
                    <div className="play-arch-badge" style={{background: '#6b3fa0'}}>C</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Canton Network — Network of networks</div>
                      <div className="play-arch-desc">Each institution runs its own ledger; connected through privacy-preserving synchronization. Goldman, DTCC, JPMorgan, Citadel, BNP Paribas as backers. Broadridge DLR processes up to $9T/month in repo.</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge" style={{background: '#2f6b3a'}}>P</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Provenance Blockchain — Loan origination layer</div>
                      <div className="play-arch-desc">Cosmos-based chain optimized for HELOC and mortgage securitization. Underpins Figure&apos;s $10B+ lending business, the largest RWA-specific chain by TVL at $1.6B.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>The institutional roster is genuinely impressive. Canton counts Goldman Sachs, DTCC, JPMorgan, Citadel Securities, BNP Paribas, and Circle Ventures as backers, and Broadridge&apos;s DLR repo platform — which processes up to $9T per month — runs on Canton. Provenance underpins Figure&apos;s home equity lending business. DTCC has partnered with Canton to tokenize a subset of DTC-custodied US Treasuries, with deployment scheduled to begin in H2 2026. On July 15, 2026, DTCC executed its first live production transactions featuring tokenized blue-chip equities and sovereign fixed-income instruments, with full commercial integration planned for October 2026.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$9T/mo</div>
                    <div className="play-stat-pull-label">Broadridge DLR repo volume on Canton, +490% YoY by Dec 2025</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">Jul 15</div>
                    <div className="play-stat-pull-label">DTCC first live production transactions with tokenized equities and sovereign bonds</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">−37%</div>
                    <div className="play-stat-pull-label">Canton token YTD — institutional adoption and token price have disconnected</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">Partnership vs. token price</div>
                  <p>The disconnect is between partnership announcements and token market performance. Canton&apos;s token fell 37% this year and Provenance dropped 71%, even as the underlying institutional deployment pipeline expanded. That gap reflects the market pricing in that production volume hasn&apos;t yet caught up to the narrative. Broadridge DLR is the clear counter-example: real volume at industrial scale, but it generates repo processing revenue, not token appreciation.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The existential question for permissioned chains is whether they win the institutional settlement layer or get squeezed out.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">The squeeze from two sides</div>
                    <div className="play-fwd-body">Public chains with compliance overlays (Ethereum plus ERC-3643) are one alternative. Tokenized deposit networks (The Clearing House&apos;s shared interbank system) are the other. Canton&apos;s strongest case is that both legs of a securities trade need to be synchronized in a single privacy-preserving environment — which public chains can&apos;t do natively and deposit networks weren&apos;t designed for.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">DTCC October as the real test</div>
                    <div className="play-fwd-body">DTCC&apos;s October 2026 commercial launch will be the first real test of whether Canton&apos;s pitch converts to production flow at scale. If it does, the Trough turns into an ascent. If edge cases or regulatory treatment slow the rollout, the category stays where it is. No permissioned chain has yet demonstrated DTCC-scale volume in production — October changes that or it doesn&apos;t.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 9: RWA-specific L2s ── */}
          <article id="rwa-specific-l2s" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">09</span> RWA-specific L2s</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {RWA_L2_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">$1B+</div>
                  <div className="play-stat-label">Plume TVL</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value play-stat-pos">+205%</div>
                  <div className="play-stat-label">Ondo TVL YTD</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">4M</div>
                  <div className="play-stat-label">RH testnet txns</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>RWA-specific L2s are purpose-built Layer 2 blockchains designed for tokenized real-world assets. They sit on top of Ethereum (or another L1) for security but add features that general-purpose L2s don&apos;t have: built-in KYC at the chain level, transfer-agent hooks for regulated securities, compliance-aware accounts, and issuer-controlled permissions. The pitch is that a general-purpose chain like Arbitrum or Base requires each issuer to bolt compliance on after the fact, while an RWA-native chain bakes it into the protocol layer.</p>

                <div className="play-sandwich">
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">General-purpose L2 + bolt-on compliance</div>
                    <div className="play-sandwich-sub">Each issuer adds KYC separately · no chain-level transfer hooks · compliance fragmented across contracts</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">Retrofitted</span>
                  </div>
                  <div className="play-sandwich-divider">→</div>
                  <div className="play-sandwich-step play-sandwich-step--ok-end">
                    <div className="play-sandwich-label">RWA-native L2</div>
                    <div className="play-sandwich-sub">KYC at chain level · built-in transfer-agent hooks · compliance-aware accounts · issuer permissions</div>
                    <span className="play-sandwich-badge play-sandwich-badge--ok">Native compliance</span>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>This category barely existed 12 months ago and now has multiple live networks. Robinhood Chain launched its mainnet on July 1, 2026 at a London keynote, built on the Arbitrum stack with 100-millisecond block times, Uniswap and Chainlink integrated from day one, and Stock Tokens available in over 120 countries. Its testnet logged 4 million transactions and 600,000 deployed contracts in its first week, and the testnet-to-mainnet cycle compressed to under five months, unusually fast. Plume Network reached over $1B in TVL as the first dedicated RWA L2 to cross that threshold. Ondo&apos;s ecosystem more than tripled its TVL. Converge, a joint venture between Ethena and Securitize, is building an L2 specifically for yield-bearing assets and institutional DeFi.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">Jul 1</div>
                    <div className="play-stat-pull-label">Robinhood Chain mainnet launch — 4M testnet transactions in the first week</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$1B+</div>
                    <div className="play-stat-pull-label">Plume Network TVL — first RWA-dedicated L2 to cross the billion-dollar threshold</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">120+</div>
                    <div className="play-stat-pull-label">Countries where Robinhood Chain Stock Tokens are available at launch</div>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The uncomfortable question nobody on these teams wants to answer: how many RWA-specific chains does the market actually need?</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">The fragmentation problem</div>
                    <div className="play-fwd-body">Fragmenting tokenized assets across five or six chains hurts the liquidity that makes tokenization valuable in the first place. Provenance already holds $1.6B in TVL. Canton has DTCC and Broadridge. Ethereum and Solana host the largest tokenized fund products. Adding Robinhood Chain, Plume, Ondo Chain, and Converge on top creates a fragmentation problem that the 2026 RWA report specifically identified as the main barrier to a unified market.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Winnowing cycle by 2028</div>
                    <div className="play-fwd-body">Expect one or two networks with real distribution partnerships to survive and the rest to merge, pivot, or shut down. Plateau depends on consolidation happening before the category loses credibility to the &ldquo;too many chains&rdquo; critique. The networks with the strongest issuer relationships and deepest secondary liquidity will win; the ones with only TVL will not.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 10: Atomic DvP ── */}
          <article id="atomic-dvp" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">10</span> Atomic DvP</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {ATOMIC_DVP_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">$384B/d</div>
                  <div className="play-stat-label">Broadridge DLR</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value play-stat-pos">&lt;5s</div>
                  <div className="play-stat-label">Cross-border PoC</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">Oct 2026</div>
                  <div className="play-stat-label">DTCC commercial</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>Atomic delivery-versus-payment means both sides of a trade — the security and the cash — move at the exact same instant, or neither moves at all. In traditional settlement, there&apos;s a one-to-two business day gap between trade execution and final settlement. During that window, both parties carry counterparty risk. If one side fails (as Lehman Brothers did in 2008, leaving thousands of open transactions dangling), the losses cascade. Atomic DvP eliminates that gap entirely. The technology requires both the asset and the payment to be tokenized on the same rail, or connected through a trusted bridge, so a single smart contract can execute both legs simultaneously.</p>

                <div className="play-sandwich">
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">Traditional T+1 / T+2 settlement</div>
                    <div className="play-sandwich-sub">1–2 day gap · bilateral counterparty risk · cascading failures if one side defaults · netting batched at EOD</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">Counterparty risk window</span>
                  </div>
                  <div className="play-sandwich-divider">→</div>
                  <div className="play-sandwich-step play-sandwich-step--ok-end">
                    <div className="play-sandwich-label">Atomic DvP</div>
                    <div className="play-sandwich-sub">Both legs settle simultaneously · zero-second counterparty exposure · smart contract enforces or reverts · 24/7</div>
                    <span className="play-sandwich-badge play-sandwich-badge--ok">Zero-exposure settlement</span>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>Broadridge&apos;s DLR platform is the clearest proof that atomic settlement works at institutional scale. It processed an average of $384B in daily repo transactions in December 2025, with volumes totaling nearly $9T for the month — a 490% year-over-year increase. Both Broadridge DLR and Kinexys operate on Canton Network, and their interoperability demonstration showed that the cash leg (via tokenized deposits) and the asset leg (via tokenized repo) can settle atomically in a single transaction.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$384B</div>
                    <div className="play-stat-pull-label">Broadridge DLR average daily repo volume Dec 2025, +490% YoY</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">Jul 15</div>
                    <div className="play-stat-pull-label">DTCC first live production atomic settlement with tokenized equities and sovereign bonds</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">&lt;5s</div>
                    <div className="play-stat-pull-label">Ondo/JPMorgan/Mastercard/Ripple cross-border DvP PoC, outside banking hours</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">The July 15 milestone</div>
                  <p>The DTCC milestone on July 15, 2026 was arguably the most consequential event for this category since the concept was proposed. DTCC executed live production transactions featuring tokenized blue-chip equities, ETFs, and sovereign bonds held directly in its depository — the first time the US post-trade infrastructure backbone processed atomic DvP with real securities. Full commercial availability is planned for October 2026.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The technology works. The question is how fast the legal and regulatory infrastructure catches up.</p>
                <div className="play-fwd-grid">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Rethinking netting and CCP</div>
                    <div className="play-fwd-body">Atomic settlement raises questions current rules weren&apos;t designed to answer: how do netting obligations work when trades settle instantly instead of batching at end of day? How does central counterparty clearing function when counterparty risk is eliminated by design? What happens to the margin models that assume a settlement lag? DTCC&apos;s October commercial launch is the first scaled test.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Regulators set the pace</div>
                    <div className="play-fwd-body">If DTCC&apos;s October 2026 rollout goes smoothly, the category moves rapidly up the Slope. If edge cases in regulatory treatment slow the rollout — jurisdictional questions on the cash leg, questions about finality in insolvency, cross-border recognition — it stays in the Trough for another cycle. The repo market is solved. Equities, cross-border FX, and derivatives are next.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">03</div>
                    <div className="play-fwd-title">Beyond repo</div>
                    <div className="play-fwd-body">Each harder category — equities, cross-border FX, derivatives — carries its own regulatory stack. The cross-border proof of concept (Ondo/JPMorgan/Mastercard/Ripple, under 5 seconds, outside banking hours) demonstrated the technology can handle multiple jurisdictions simultaneously. The bottleneck shifts from engineering to legal recognition: which regulators accept atomic finality, and under what conditions?</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 11: Tokenized Real Estate ── */}
          <article id="tokenized-real-estate" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">11</span> Tokenized Real Estate</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">5–10 yrs</span>
                  <span className="play-meta-tag play-meta-tag--trough">Trough of Disillusionment</span>
                </div>
                <div className="play-cases">
                  {REAL_ESTATE_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$3B</div>
                  <div className="play-stat-label">AUM category</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">Lagging</div>
                  <div className="play-stat-label">2026 YTD</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">$4T</div>
                  <div className="play-stat-label">Deloitte 2035 proj.</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>Tokenized real estate takes a physical property, places it inside a legal wrapper (usually a single-purpose LLC or SPV), and then issues blockchain tokens representing fractional ownership of that entity. Holders earn their share of rental income, paid out automatically via smart contract, and can sell their tokens on a secondary marketplace rather than waiting for the property itself to sell. There are three main models.</p>

                <div className="play-arch-stack">
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">01</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Fractional rental tokens (RealT, Lofty)</div>
                      <div className="play-arch-desc">You own a slice of a rental property and receive a proportional share of rent yield, distributed automatically on-chain</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">02</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Deed tokenization (Propy)</div>
                      <div className="play-arch-desc">The title transfer itself is recorded on-chain, targeting conveyancing efficiency rather than fractional ownership</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">03</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Debt or yield-only tokens</div>
                      <div className="play-arch-desc">Income exposure without direct ownership — closer to a tokenized mortgage-backed instrument than a fractional property stake</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>This category has been &ldquo;about to break out&rdquo; since 2018, and the data keeps saying otherwise. While tokenized Treasuries grew 72% and gold grew 36% this year, tokenized real estate lagged everything.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">~$3B</div>
                    <div className="play-stat-pull-label">Total AUM across all platforms — a fraction of every other tokenized RWA category</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">72% / 36%</div>
                    <div className="play-stat-pull-label">Tokenized Treasury and gold growth this year — real estate grew far less than both</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$4T</div>
                    <div className="play-stat-pull-label">Deloitte 2035 projection for real estate STOs — counting fractional rentals to MBS at 27%+ CAGR</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">Structural barriers, not technical ones</div>
                  <p>Real estate tokens are securities in most jurisdictions, adding compliance overhead to every issuance. Secondary liquidity is thin because holders are yield seekers who collect rent and don&apos;t trade — the opposite of what a liquid market needs. Property-level cash flow depends on off-chain operational infrastructure (maintenance, tenant management, insurance, tax compliance) that blockchain doesn&apos;t simplify.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The wedge that could pull this category out of the Trough is not direct property tokenization at all.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">The mortgage wedge</div>
                    <div className="play-fwd-body">Tokenized mortgages and MBS — the Figure model running on Provenance at multi-billion-dollar scale — is more likely to reach plateau first. Deloitte&apos;s $4T projection counts everything from fractional rentals to MBS. For the direct-ownership slice, the category lags far behind.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">G7 regime or secondary market</div>
                    <div className="play-fwd-body">For the direct-ownership slice, the category needs either a G7 jurisdiction to create a purpose-built real estate token regime (the way Dubai has), or the secondary market problem to be solved through active market makers and cross-platform liquidity. Neither is close. Plateau is 5 to 10 years at best.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 12: Utility Tokens ── */}
          <article id="utility-tokens" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">12</span> Utility Tokens</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--trough">Trough of Disillusionment</span>
                </div>
                <div className="play-cases">
                  {UTILITY_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$89.5B</div>
                  <div className="play-stat-label">Combined mcap</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value" style={{color: '#b84a2e'}}>−32.5%</div>
                  <div className="play-stat-label">2026 YTD avg.</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">~0</div>
                  <div className="play-stat-label">New ICO-era survivors</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>A utility token was supposed to be a digital key that unlocks access to a specific platform, application, or service. The concept emerged during the 2017–2018 ICO wave as a way for projects to raise capital while arguing they weren&apos;t selling securities: this isn&apos;t an investment, it&apos;s a product pre-purchase. In practice, almost nobody bought utility tokens to use the service. People bought them to speculate on price appreciation, and the &ldquo;utility&rdquo; narrative was a legal wrapper more than a product description.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>The handful of utility tokens that survived the 2018 collapse did so by evolving into something different. BNB became the native gas token for BNB Chain — essentially the equity-equivalent of a blockchain ecosystem rather than a key to a specific service. LINK powers Chainlink&apos;s oracle network, genuine infrastructure used by hundreds of DeFi protocols and now by institutional players like SWIFT and DTCC. UNI governs the largest decentralized exchange. POL secures Polygon&apos;s network. These are legitimate network tokens with real usage, but they trade like speculative assets — the uniform 30%+ decline this year across all four confirms it.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">−30.3%</div>
                    <div className="play-stat-pull-label">Chainlink LINK YTD — real infrastructure, speculative price action</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">−31.6%</div>
                    <div className="play-stat-pull-label">Uniswap UNI YTD — governs the largest DEX by volume</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">−27.3%</div>
                    <div className="play-stat-pull-label">Polygon POL YTD — network security token, not speculative play</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">Category collapse</div>
                  <p>The broader category — the thousands of tokens launched as &ldquo;utility&rdquo; between 2017 and 2022 — is effectively dead. The SEC&apos;s enforcement campaign from 2020 to 2024 treated most of them as unregistered securities, and MiCA&apos;s CASP regime in Europe raised the compliance bar higher still. The concept of a token that gives you &ldquo;access&rdquo; to a service, the original utility pitch, lost to subscription models and freemium tiers, which don&apos;t require holding a volatile asset.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The honest answer is that &ldquo;utility token&rdquo; as a distinct category probably shouldn&apos;t exist anymore.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Survivors reclassify</div>
                    <div className="play-fwd-body">The survivors have reclassified themselves as governance tokens, network tokens, or protocol tokens — categories with clearer value accrual mechanisms and more honest descriptions of what holders actually own. Recovery means the successful survivors keep growing as network infrastructure, but under a different label. The &ldquo;utility token&rdquo; framing itself has no forward path.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Access tokens lost to SaaS</div>
                    <div className="play-fwd-body">The original utility pitch — a token that gives you access to a service — lost to subscription models and freemium tiers. Holding a volatile asset to access software is a strictly worse UX than paying a monthly fee. No major application layer has reversed this dynamic, and none seems likely to.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 13: Tokenized Commodities (excl. gold) ── */}
          <article id="tokenized-commodities-excl-gold" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">13</span> Tokenized Commodities (excl. gold)</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">5–10 yrs</span>
                  <span className="play-meta-tag play-meta-tag--trough">Trough of Disillusionment</span>
                </div>
                <div className="play-cases">
                  {COMMODITY_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$350M</div>
                  <div className="play-stat-label">Silver (leader)</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">4.8%</div>
                  <div className="play-stat-label">Silver category share</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">0</div>
                  <div className="play-stat-label">Other commodities w/ traction</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>The idea is the same as tokenized gold: take a physical commodity, store it, and issue blockchain tokens backed one-to-one by the underlying asset. Holders get price exposure, fractional ownership, and 24/7 trading without dealing with physical delivery. In theory, this should work for any commodity. In practice, gold is the only one where it has. The reason comes down to four properties.</p>

                <div className="play-arch-stack">
                  <div className="play-arch-layer">
                    <div className="play-arch-badge play-arch-badge--ok">✓</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">High value density</div>
                      <div className="play-arch-desc">Gold and silver: yes — vault economics are favorable. Oil and agricultural: no — high volume, low value per unit means storage costs dominate.</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge play-arch-badge--ok">✓</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Indefinite storability</div>
                      <div className="play-arch-desc">Gold: yes. Silver: yes (with minor tarnish). Oil, gas, agricultural: no — they degrade, evaporate, or spoil, making long-term physical backing impractical.</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge play-arch-badge--ok">✓</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Perfect fungibility</div>
                      <div className="play-arch-desc">Gold: yes — one ounce is identical to any other. Oil, gas, agricultural: no — quality grades differ by source and batch. A WTI barrel is not identical to a Brent barrel.</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge play-arch-badge--ok">✓</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Retail investor demand</div>
                      <div className="play-arch-desc">Gold: massive — safe-haven narrative, heritage asset. Silver: moderate. Oil and industrial metals: institutional only — retail investors use ETFs and futures, not physical backing.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>Silver is the only non-gold commodity with even modest traction. Kinesis KAG grew its market cap above $350M, but its share of the total tokenized commodities category actually fell to 4.8% this year because gold grew so much faster. Matrixdock&apos;s XAUM grew 11× but from a base so small it rounds to a footnote. Everything beyond precious metals — oil, natural gas, agricultural commodities, industrial metals — has repeatedly launched and quietly wound down.</p>
                <p>The reason is structural. A tokenized barrel of crude doesn&apos;t solve a problem that WTI futures don&apos;t already solve better. Futures markets for oil, gas, and agricultural commodities are already extremely efficient at price discovery, highly liquid, and fully accessible to institutional and increasingly retail investors. There is no friction in those markets that tokenization removes.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>Most non-gold commodity tokenization may never reach a productivity plateau in the way gold has.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Silver&apos;s narrow path</div>
                    <div className="play-fwd-body">Silver has a plausible case if precious metals continue their bull run and DeFi collateral demand expands. It shares gold&apos;s core properties (fungibility, storability) at lower price per unit, which makes vault economics less favorable but not impossible. It remains the only non-gold commodity with a real on-chain product.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">A different model is needed</div>
                    <div className="play-fwd-body">Everything else needs a fundamentally different model — probably tokenized commodity derivatives or warehouse receipts rather than direct physical backing — and that model hasn&apos;t emerged yet. The four-criteria test (value density, storability, fungibility, retail demand) is effectively a filter: gold passes all four, silver three, everything else one or fewer.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 14: Tokenized Carbon Credits ── */}
          <article id="tokenized-carbon-credits" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">14</span> Tokenized Carbon Credits</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">5–10 yrs</span>
                  <span className="play-meta-tag play-meta-tag--trough">Trough of Disillusionment</span>
                </div>
                <div className="play-cases">
                  {CARBON_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$717K</div>
                  <div className="play-stat-label">Toucan TVL</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value" style={{color: '#b84a2e'}}>−99%+</div>
                  <div className="play-stat-label">KLIMA from ATH</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">182M</div>
                  <div className="play-stat-label">Annual retirements stable</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>Tokenized carbon credits take carbon offsets issued by registries like Verra or Gold Standard and represent them as blockchain tokens. Each token corresponds to one tonne of CO₂ avoided or removed. In theory, putting credits on chain makes the market more transparent, enables automated retirement (permanently removing credits from circulation), and opens carbon to DeFi composability. Toucan Protocol built the bridge that moved credits from Verra&apos;s registry onto Polygon, and KlimaDAO built a token economy on top designed to drive up carbon prices by locking supply in its treasury.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>The first wave of crypto carbon was spectacular and brief. In Toucan&apos;s first six months after launching in October 2021, more than a quarter of all Verra credit purchases flowed through its bridge. KlimaDAO&apos;s token hit ~$3,946. Over 20 million tonnes of carbon were bridged on chain. Then it collapsed almost as fast.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$3,946</div>
                    <div className="play-stat-pull-label">KlimaDAO ATH → now $0.04. Down 99%+ from peak.</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">~$717K</div>
                    <div className="play-stat-pull-label">Toucan TVL, down 83.3% YTD — from quarter of all Verra purchases to under $1M</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">182M t</div>
                    <div className="play-stat-pull-label">Voluntary carbon market annual retirements — demand for offsets never disappeared; confidence in the product did</div>
                  </div>
                </div>

                <p>The problem was quality. Much of what got swept onto the blockchain was old, low-quality, tied to long-dormant projects. Verra banned tokenization of retired credits in May 2022 and has not finalized a replacement framework as of 2026. KlimaDAO&apos;s OlympusDAO-style bonding model created sell pressure that overwhelmed any carbon-backing fundamentals.</p>

                <div className="play-callout">
                  <div className="play-callout-head">The second chapter</div>
                  <p>In 2026, Verra approved its first credits issued under a digital monitoring, reporting, and verification (dMRV) pilot — a solar project in the Comoros that can now receive credits monthly rather than waiting years. The registries themselves are moving toward on-chain infrastructure, a fundamentally different trajectory than third parties bridging credits without registry cooperation. Demand for offsets never disappeared; it just lost confidence in the product.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>Recovery depends entirely on carbon market reform, not tokenization reform.</p>
                <div className="play-fwd-grid">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">ICVCM integrity labels</div>
                    <div className="play-fwd-body">The ICVCM Core Carbon Principles labeling system needs to meaningfully differentiate high-integrity credits from the junk that flooded on-chain pools in 2021. Without a credible quality signal, the market can&apos;t distinguish good tokens from bad ones — and that ambiguity is what destroyed confidence in the category.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Compliance market demand</div>
                    <div className="play-fwd-body">Compliance markets (EU ETS, CBAM linkage, CORSIA Phase 2) need to create real regulatory demand for tokenized units. Voluntary market demand is there — 182M tonnes retired annually — but voluntary buyers won&apos;t pay a premium for on-chain credits over off-chain ones without either regulatory mandates or meaningful liquidity advantages.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">03</div>
                    <div className="play-fwd-title">Registry-native tokenization</div>
                    <div className="play-fwd-body">Registries like Verra need to finalize their own digital infrastructure, likely rendering the third-party bridge model (Toucan&apos;s original approach) obsolete in favor of registry-native issuance. Verra&apos;s dMRV pilot is the first signal this is coming. If all three conditions materialize, the category has a real path back. If they don&apos;t, it remains a cautionary tale.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 15: Private Chains ── */}
          <article id="private-chains" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">15</span> Private Chains</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">No growth</span>
                  <span className="play-meta-tag play-meta-tag--no-growth">Trough of Disillusionment</span>
                </div>
                <div className="play-cases">
                  {PRIVATE_CHAIN_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">20+</div>
                  <div className="play-stat-label">Live Corda networks</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">4</div>
                  <div className="play-stat-label">Consortium failures</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">0</div>
                  <div className="play-stat-label">New major consortia since 2022</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>Private blockchain networks restrict participation to a pre-approved set of organizations. Only members can validate transactions, read the ledger, or submit data. The technology emerged in the 2016–2020 period as the enterprise answer to public blockchains: banks and supply chain operators wanted the coordination benefits of a shared ledger without exposing data to the public internet. Hyperledger Fabric (Linux Foundation, contributed by IBM), R3 Corda (built specifically for financial institutions), and Quorum (JPMorgan&apos;s permissioned Ethereum fork) were the three dominant platforms.</p>

                <div className="play-sandwich">
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">Private chain (2016–2020 model)</div>
                    <div className="play-sandwich-sub">Privacy through restricted access · closed membership · no network effects · consortium coordination overhead</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">Ceiling: its own members</span>
                  </div>
                  <div className="play-sandwich-divider">→</div>
                  <div className="play-sandwich-step play-sandwich-step--ok-end">
                    <div className="play-sandwich-label">Open + privacy (Canton / ERC-3643)</div>
                    <div className="play-sandwich-sub">Privacy at transaction layer · open to new participants · composable with broader ecosystem · network effects possible</div>
                    <span className="play-sandwich-badge play-sandwich-badge--ok">No ceiling</span>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>Private chains solved the problem they were designed for: multi-party data sharing among known participants. Hyperledger Fabric powers IBM Food Trust (Walmart&apos;s supply chain traceability) and banking reconciliation systems. R3 Corda reports over 20 regulated finance networks running live, with $17B+ in tokenized real-world assets on chain. These are real deployments doing real work.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">4</div>
                    <div className="play-stat-pull-label">Major consortium failures: Marco Polo, we.trade, Contour, komgo — all wound down 2022</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">20+</div>
                    <div className="play-stat-pull-label">Live Corda networks with $17B+ in RWAs — existing deployments running, no new growth</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">0</div>
                    <div className="play-stat-pull-label">Major new private consortium chains launched successfully since 2022</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">JPMorgan&apos;s own pivot</div>
                  <p>Quorum, JPMorgan&apos;s original private chain, became Kinexys — which launched its deposit token on Coinbase&apos;s Base (a public L2) and now mints BlackRock&apos;s European tokenized fund shares on public Ethereum. The creator of the most prominent private blockchain pivoted to public rails. The institutional consensus has shifted toward models that offer privacy within a public or open network, rather than privacy through network restriction.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>Existing private chain deployments will run out their lifecycles, potentially for many years. But there is no forward growth path for the design pattern itself.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Legacy deployments persist</div>
                    <div className="play-fwd-body">Corda in particular retains a role in markets where its existing integrations are deep, like SIX Digital Exchange in Switzerland. Fabric-based supply chain systems will run for years. These are not growth stories — they are maintenance contracts on infrastructure that won&apos;t be replaced until it&apos;s ready to be decommissioned.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">The design pattern is superseded</div>
                    <div className="play-fwd-body">The structural limit that killed private chains was always the same: restricting participation by design means you can never achieve the network effects that make a shared ledger valuable at scale. The next generation solved this by providing privacy within open systems (Canton, ERC-3643, Ethereum + ZK proofs). No amount of improvement to the closed model recovers from that competitive disadvantage.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 16: NFTs ── */}
          <article id="nfts" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">16</span> NFTs</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">No growth</span>
                  <span className="play-meta-tag play-meta-tag--no-growth">No growth path</span>
                </div>
                <div className="play-cases">
                  {NFT_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$32M</div>
                  <div className="play-stat-label">30-day trading vol.</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value" style={{color: '#b84a2e'}}>−75%</div>
                  <div className="play-stat-label">Daily vol. YTD</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">1.34B</div>
                  <div className="play-stat-label">NFTs minted 2026 (record)</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>A non-fungible token is a blockchain record that certifies something is unique and owned by a specific wallet. Unlike a stablecoin where every unit is identical, each NFT is distinct. The technology was originally pitched as a way to prove ownership of digital art, collectibles, and media, creating scarcity in a world where digital files can be copied infinitely. The 2021 boom extended the concept to profile pictures, music, virtual land, and speculative collectibles, with OpenSea processing $3.7B in a single month at the January 2022 peak.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>The numbers tell the story clearly. Full-year 2025 trading volume was approximately $5.5B. That sounds significant until you compare it to January 2022 alone, when OpenSea processed $4.87B in one month. The market didn&apos;t just cool — it structurally contracted.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$4.87B</div>
                    <div className="play-stat-pull-label">OpenSea volume in January 2022 alone — vs $5.5B for all of full-year 2025</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">1.34B</div>
                    <div className="play-stat-pull-label">NFTs minted in 2026 — record high supply while annual sales revenue kept falling</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">52%</div>
                    <div className="play-stat-pull-label">Decline in combined transaction volume across art-focused platforms (SuperRare, Foundation, Makersplace)</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">K-shaped market</div>
                  <p>The Block describes 2026 as a &ldquo;K-shaped&rdquo; market: a tiny set of collections with cultural weight (Pudgy Penguins) or genuine utility at the top still attract liquidity, while the vast majority of 2021-era projects have volumes near zero and communities that have moved on. Supply exploded precisely as demand collapsed. In April 2026, Foundation shut down after a failed acquisition by Blackdove. Many smaller platforms could not afford the legal costs required to stay compliant after the SEC issued a Wells Notice to OpenSea in late 2024. OpenSea itself has pivoted toward becoming a broader crypto trading platform.</p>
                </div>

                <p>The surviving niches are real but small. Gaming NFTs captured 58% of institutional capital flowing into the broader NFT category, driven by utility and monetization models that collectibles never had. On-chain ticketing and identity tokens have functional use cases. But these are different categories with different economics — calling them &ldquo;NFTs&rdquo; obscures more than it clarifies.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>Nothing brings back the original NFT category as pitched in 2021. The structural problems are terminal: no cash flow, no scarcity model beyond social convention, no institutional demand, and a supply glut that keeps growing.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Survivors reclassify</div>
                    <div className="play-fwd-body">Gaming assets will be tracked under gaming. On-chain ticketing under event infrastructure. Identity tokens under on-chain credentials. The infrastructure that survives does so by solving a specific problem, not by being an NFT. The &ldquo;NFT&rdquo; label itself is becoming a historical artifact — a marker of a specific speculative moment rather than a durable technology category.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">No path for the original category</div>
                    <div className="play-fwd-body">Digital art NFTs require either institutional demand that never materialized or a cultural moment that doesn&apos;t repeat on command. The supply dynamic works against recovery: 1.34 billion new NFTs minted in 2026 means there is no scarcity argument left. Without cash flows, without institutional buyers, and with infinite supply, the original collectible NFT model has no mechanism for price recovery.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 17: AI Agent Payments ── */}
          <article id="ai-agent-payments" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">17</span> AI Agent Payments</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--peak">Peak of Inflated Expectations</span>
                </div>
                <div className="play-cases">
                  {AI_PAYMENT_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$50B</div>
                  <div className="play-stat-label">Cumulative volume</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">180M+</div>
                  <div className="play-stat-label">Transactions processed</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">40</div>
                  <div className="play-stat-label">x402 Foundation members</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>x402 revives a dormant piece of the internet&apos;s original plumbing. HTTP status code 402, &ldquo;Payment Required,&rdquo; was reserved when the web was designed in the 1990s but never implemented. x402 makes it work: when an AI agent requests a paid resource, the server responds with a 402 status and a price. The agent pays in stablecoins (typically USDC), attaches proof of payment, and retries. The entire handshake happens inside a standard web request, with no checkout page and no human in the loop.</p>

                <div className="play-arch-stack">
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">01</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Request → 402 response</div>
                      <div className="play-arch-desc">Agent requests a paid resource; server returns HTTP 402 with a machine-readable price and payment address — no checkout UI, no redirect</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">02</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">On-chain payment</div>
                      <div className="play-arch-desc">Agent pays in USDC on Base (or Solana); settlement confirms in ~200ms at sub-cent cost — economically viable for micropayments under $0.50 that card networks can&apos;t process</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">03</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Proof of payment → retry</div>
                      <div className="play-arch-desc">Agent attaches payment proof to the original request; server unlocks access — entire flow is autonomous, no human approval needed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>This category went from a Coinbase side project to the most consequential new payments standard of 2026 in under 12 months. On July 14, 2026, the Linux Foundation launched the x402 Foundation with 40 members — Visa, Mastercard, American Express, Google, Amazon, Stripe, Circle, Ripple, Cloudflare, Shopify, and the Solana Foundation. The protocol has processed over 180 million transactions and more than $50B in cumulative volume. Solana drives nearly 65% of x402 transaction volume.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$600M</div>
                    <div className="play-stat-pull-label">Annualized run rate (BlockEden estimate) — but 30-day window is $24M on 75M txns, mostly sub-$0.50</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">−92%</div>
                    <div className="play-stat-pull-label">Decline in peak daily transactions from Dec 2025 to Feb 2026 — early growth was spikier than cumulative numbers imply</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">65%</div>
                    <div className="play-stat-pull-label">Solana&apos;s share of x402 transaction volume — early momentum concentrated on one chain</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">Liability is unresolved</div>
                  <p>Stablecoin payments settled on chain via x402 fall outside card-network chargeback protections. The regulatory framework for who bears liability when an autonomous agent makes an unauthorized payment has not been established. Initial growth was also partly driven by a memecoin experiment (PING) that required x402 payments to mint tokens — raising questions about what fraction of the 180M transactions represent genuine commercial activity.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The category is at the top of the Peak because every major tech and payments company has made a move. The gap until &ldquo;reliable payment infrastructure&rdquo; is where Troughs are made.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Is agentic commerce real at scale?</div>
                    <div className="play-fwd-body">Visa, Mastercard, and Amex are all inside the x402 Foundation — which could mean they&apos;re supporting the standard or hedging against it. If card networks absorb stablecoin infrastructure and route agent payments through existing rails with a stablecoin settlement layer, x402 becomes middleware that survives but doesn&apos;t define the category. If agents genuinely need programmable, autonomous payments that existing rails can&apos;t support, x402 wins on its own terms.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Liability and regulatory clarity</div>
                    <div className="play-fwd-body">Google&apos;s AP2 uses x402 as its stablecoin settlement extension while managing the authorization layer above. Stripe&apos;s Machine Payments Protocol on Tempo adds fiat support alongside stablecoins. The architectures are not yet converged. Liability resolution — who is responsible when an agent overpays, gets defrauded, or makes an unauthorized purchase — is the regulatory question that will determine whether this reaches plateau or enters a Trough first.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 18: RWA Perpetuals ── */}
          <article id="rwa-perpetuals" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">18</span> RWA Perpetuals</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--peak">Peak of Inflated Expectations</span>
                </div>
                <div className="play-cases">
                  {RWA_PERP_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">$202.67B</div>
                  <div className="play-stat-label">Q2 2026 volume</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">16×</div>
                  <div className="play-stat-label">Quarterly growth (Q4→Q2)</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">~7.5%</div>
                  <div className="play-stat-label">Of total futures market</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>RWA perpetual futures are leveraged contracts that track the price of real-world assets — stocks, commodities, indices, forex — but never expire and never require delivery of the underlying asset. They use oracle price feeds to track the reference price, and a funding rate mechanism to keep the perpetual price anchored to the underlying market. Traders can go long or short with up to 50x leverage. The contracts settle entirely in stablecoins, and most trade on decentralized exchanges where listing a new market requires only an oracle feed and a risk parameter file — not a licensing negotiation.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>This is the fastest-growing category by raw dollar volume in all of digital assets. Quarterly volume jumped from $12.37B in Q4 2025 to $202.67B in Q2 2026 — a roughly 16x increase. May 2026 alone saw $211B in RWA perp volume, exceeding the entire Q4 2025 quarter by a factor of 17.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">99.2%</div>
                    <div className="play-stat-pull-label">7-day RWA perp volume as % of Bitcoin perp volume on the same venues — essentially at parity</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$66B</div>
                    <div className="play-stat-pull-label">SpaceX perp volume in June alone — the largest single contributor, followed by AI-linked semiconductor names</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">80%+</div>
                    <div className="play-stat-pull-label">Volume concentration at Binance, Hyperliquid, and OKX together</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">Building on regulatory tolerance, not clarity</div>
                  <p>If a major regulator decides that RWA perps constitute unregistered futures contracts, the consequences could be severe: wallets associated with US-based protocols could be blocked, and stablecoin issuers used as collateral could face legal action. There is also infrastructure concentration risk: Pyth Network handles more than half the market&apos;s price feeds, and any disruption could cascade through billions in open positions. Corporate actions — dividends, stock splits, symbol changes — don&apos;t settle on chain like token transfers, creating gaps that earlier tokenized equity products have struggled with.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The category is real and growing at an extraordinary pace, but the distinction between &ldquo;regulatory tolerance&rdquo; and &ldquo;regulatory clarity&rdquo; is what makes it Peak rather than Slope.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Regulatory risk is the ceiling</div>
                    <div className="play-fwd-body">The CFTC has jurisdiction over derivatives on US-listed assets. RWA perps on stocks like Apple, Nvidia, and SpaceX are derivatives on US-listed assets that are accessible to US persons via decentralized exchanges. That&apos;s not an ambiguous edge case. The question is enforcement priority, not legal exposure. Arcus (the dYdX-pedigree platform launched on Robinhood Chain) is attempting a regulated approach — if it succeeds, it provides a model; if it gets blocked, it proves the ceiling.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Oracle and corporate action infrastructure</div>
                    <div className="play-fwd-body">Pyth Network&apos;s concentration in price feed provision is a systemic dependency. A multi-oracle model that includes traditional financial data providers (Bloomberg, Refinitiv) would reduce this risk and also solve the corporate action gap — dividends and splits need a data source that understands both the on-chain token and the off-chain underlying. Until that infrastructure is built, the market remains technically fragile at scale.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 19: Tokenized Stocks ── */}
          <article id="tokenized-stocks" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">19</span> Tokenized Stocks</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {TOKENIZED_STOCK_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$2.3B</div>
                  <div className="play-stat-label">Market cap (Jul 2026)</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">752K</div>
                  <div className="play-stat-label">Holders (+92% in 30 days)</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">2×</div>
                  <div className="play-stat-label">Market cap since March</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>A tokenized stock is a blockchain token that represents ownership of (or economic exposure to) a share of a publicly traded company, backed one-to-one by actual shares held in custody. Holders can trade 24/7 on decentralized exchanges, use the tokens as DeFi collateral, and access markets that traditional brokerage hours or geographic restrictions would otherwise block. The catch is in the word &ldquo;represents.&rdquo; Different issuers use different legal structures, and the distinction matters enormously for what the token holder actually owns.</p>

                <div className="play-arch-stack">
                  <div className="play-arch-layer">
                    <div className="play-arch-badge" style={{background: '#2e6b52'}}>A</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Issuer-sponsored equity (Securitize SECZ)</div>
                      <div className="play-arch-desc">The company participates directly — token represents true ownership with shareholder rights. Highest legal clarity, lowest scalability (requires each company&apos;s cooperation)</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge" style={{background: '#2563b8'}}>B</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Custodial entitlements (Ondo Finance)</div>
                      <div className="play-arch-desc">Actual shares held in custody by a regulated entity; token represents entitlement to those shares. SEC-aligned model, scalable without issuer consent</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge" style={{background: '#8a5a17'}}>C</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Tracker certificates (Backed / xStocks)</div>
                      <div className="play-arch-desc">Issued under EU prospectus regime as certificates tracking the underlying stock. No shareholder rights; counterparty risk to issuer. Legally clear in Europe, uncertain in US</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge" style={{background: '#888'}}>D</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Tokenized debt (Robinhood)</div>
                      <div className="play-arch-desc">Token is a debt instrument issued through an offshore subsidiary (Jersey). Holder receives no shareholder rights — only economic exposure. OpenAI publicly flagged unauthorized use of its brand via this structure</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>Tokenized stocks hit $2.3B in market cap by mid-July 2026 and 752,000 holders — up 92% in just 30 days. Ondo leads at $955M, followed by Backed xStocks at $507M and Binance bStocks at $334M. Robinhood tells a different story: 328,000 holders but only $44M in total value, an average position of $134, confirming early growth is retail-driven with small positions.</p>
                <p>On July 2, Ondo launched SEC-aligned custodial tokens for BlackRock&apos;s IVV ETF and Micron shares on Ethereum. The same day, Securitize tokenized its own NYSE-listed SECZ shares on Solana and Avalanche at IPO — the first issuer-sponsored tokenized equity. The SEC&apos;s January 2026 guidance drew a sharp line: issuer-sponsored tokenized securities can represent true ownership; third-party products providing synthetic exposure or custodial entitlements face stricter scrutiny. Different token instruments referencing the same stock now trade simultaneously across separate programs with different issuer, collateral, and redemption risks, and no consolidated tape covers them.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The wrapper standardization cycle is the defining challenge. The market currently has four legal models all wearing the same &ldquo;tokenized stock&rdquo; label.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Enforcement and cleanup</div>
                    <div className="play-fwd-body">US transfer-agent groups are lobbying the SEC to prioritize issuer-backed tokens over unaffiliated wrappers. The issuer-sponsored model (Securitize) requires the company&apos;s own participation, limiting scalability. Third-party custodial models (Ondo) can tokenize any security without issuer consent but carry legal and reputational risk — as OpenAI publicly flagging Robinhood&apos;s unauthorized product demonstrated. Expect at least one enforcement action or fraud event that tests synthetic structures before the category consolidates.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Standard with corporate action support</div>
                    <div className="play-fwd-body">The model that eventually dominates needs real corporate action support — dividends, splits, voting rights — and a legal structure that gives holders clear recourse. That process takes 2 to 5 years. The category is on the Slope because the SEC guidance arrived, the first issuer-sponsored IPO happened, and the legal models are now defined. The cleanup, consolidation, and institutional adoption cycle that follows is the remaining work.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 20: Yield-bearing Stablecoins ── */}
          <article id="yield-bearing-stablecoins" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">20</span> Yield-bearing Stablecoins</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--peak">Peak of Inflated Expectations</span>
                </div>
                <div className="play-cases">
                  {YIELD_STABLE_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$17.2B</div>
                  <div className="play-stat-label">Combined supply</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value" style={{color: '#2e6b52'}}>+240%</div>
                  <div className="play-stat-label">USDY YTD (Treasury-backed)</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value" style={{color: '#b84a2e'}}>−55%</div>
                  <div className="play-stat-label">sUSDe YTD (basis-trade)</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>A yield-bearing stablecoin combines dollar-denominated stability with a return on the underlying reserves. The mechanics vary by issuer. Treasury-backed products (USDY, USDS) hold US Treasuries and other short-term instruments, passing yield through as token appreciation or rebasing. Basis-trade products (Ethena&apos;s USDe) use a delta-neutral strategy — long spot ETH, short ETH perpetual futures — capturing the funding rate spread. The pitch is straightforward: why hold a stablecoin earning zero when you could hold one earning 4% to 8%?</p>

                <div className="play-sandwich">
                  <div className="play-sandwich-step play-sandwich-step--ok">
                    <div className="play-sandwich-label">Treasury-backed (USDY, USDS)</div>
                    <div className="play-sandwich-sub">Fully collateralized · yield from T-bills · survives funding rate stress · stable under GENIUS Act scrutiny</div>
                    <span className="play-sandwich-badge play-sandwich-badge--ok">+240% YTD</span>
                  </div>
                  <div className="play-sandwich-divider">vs</div>
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">Basis-trade (USDe, sUSDe)</div>
                    <div className="play-sandwich-sub">Synthetic yield from funding rates · volatile when perps flip negative · regulatory target of GENIUS Act + MiCA</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">−55% YTD</span>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>The category crossed $17B in combined supply, but the year-to-date numbers reveal a sharp split between collateral models. Ondo&apos;s USDY, backed by Treasuries, more than tripled to $2.09B and is the standout performer of 2026. Sky&apos;s USDS grew steadily to $9.58B. On the other side, Ethena&apos;s basis-trade products had a difficult year: USDe fell 38% and sUSDe lost more than half its value. The divergence is real-time confirmation that Treasury-backed models hold up under stress while synthetic yield models that depend on derivatives funding rates are more fragile when conditions shift.</p>

                <div className="play-callout">
                  <div className="play-callout-head">Regulators are closing the door</div>
                  <p>The GENIUS Act explicitly prohibits stablecoin issuers from paying interest or yield to holders. MiCA prohibits interest on electronic money tokens. OCC and FDIC proposed rules in March and April 2026 went further, treating &ldquo;separate but coordinated&rdquo; affiliate structures — where a related entity provides yield on top of a non-interest-bearing stablecoin — as presumptively evasive. That language targets the exact architecture several yield-bearing products use today.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The category is being squeezed from both sides: regulators closing the door on stablecoin-native yield, and tokenized MMFs (BUIDL, USYC, BENJI) offering the same function with more regulatory clarity.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Treasury-backed merges into tokenized MMFs</div>
                    <div className="play-fwd-body">Products like USDY are conceptually indistinguishable from tokenized money market funds. The regulatory trajectory pushes them toward that category, which already has a clear framework. The &ldquo;yield-bearing stablecoin&rdquo; label for Treasury-backed products is likely to become a historical artifact as the MMF wrapper becomes the standard way to offer on-chain yield with regulatory cover.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Basis-trade products survive offshore</div>
                    <div className="play-fwd-body">Products that stay offshore keep their yield but lose institutional access — the exact institutions that would anchor scale and stability. Ethena&apos;s USDe survives as a higher-risk, crypto-native yield play for DeFi participants who accept the funding rate and smart-contract risk. Whether the &ldquo;yield-bearing stablecoin&rdquo; label survives as a standalone category or gets absorbed into adjacent ones is the open question that justifies Peak placement.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 21: Institutional DeFi ── */}
          <article id="institutional-defi" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">21</span> Institutional DeFi</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">5–10 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {INST_DEFI_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$37.9B</div>
                  <div className="play-stat-label">Aave + Morpho combined TVL</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">$580M</div>
                  <div className="play-stat-label">Aave Horizon net deposits (Dec 2025)</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value" style={{color: '#2e6b52'}}>+36.7%</div>
                  <div className="play-stat-label">Morpho TVL YTD</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>Institutional DeFi takes the mechanics that permissionless lending and trading protocols already use — automated interest rates, overcollateralized loans, liquidity pools — and wraps them in compliance infrastructure so that regulated financial institutions can participate. The key innovation is the permissioned pool: a KYC-gated subset of a larger protocol where every counterparty is identity-verified. Think of it as a private room inside a public building.</p>

                <div className="play-sandwich">
                  <div className="play-sandwich-step play-sandwich-step--friction">
                    <div className="play-sandwich-label">Permissionless DeFi</div>
                    <div className="play-sandwich-sub">Open to any wallet · pseudonymous · no KYC · regulated institutions cannot participate</div>
                    <span className="play-sandwich-badge play-sandwich-badge--warn">Not accessible to banks</span>
                  </div>
                  <div className="play-sandwich-divider">→</div>
                  <div className="play-sandwich-step play-sandwich-step--ok-end">
                    <div className="play-sandwich-label">Permissioned pool (Aave Horizon, Morpho vaults)</div>
                    <div className="play-sandwich-sub">KYC-gated subset · identity-verified counterparties · same DeFi settlement / pricing / collateral mechanics</div>
                    <span className="play-sandwich-badge play-sandwich-badge--ok">Institutions can participate</span>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>The category has moved past the &ldquo;interesting concept&rdquo; phase into real institutional engagement. Apollo Global signed a four-year agreement for up to 90 million MORPHO tokens (9% of supply), making a traditional credit giant a major governance participant in a DeFi lending protocol. Société Générale deploys through Morpho vaults. Aave&apos;s Horizon, launched August 2025 as a regulated RWA lending market with Circle, Ripple, Franklin Templeton, and VanEck as partners, reached $580M in net deposits by December 2025. Uniswap Labs introduced Permissioned Pools as part of its v4 upgrade, enabling compliance checks directly on-chain for regulated tokenized assets.</p>

                <div className="play-callout">
                  <div className="play-callout-head">The ECN parallel</div>
                  <p>Aave and Morpho are growing into something analogous to what ECNs (BATS, ARCA, EDGX) became to US equity markets in the early 2000s: execution venues that prime brokers integrated until they carried the majority of flow. The question is how long that integration takes — and whether the regulatory classification question gets answered before or after scale.</p>
                </div>

                <p>The protocol-wide TVL numbers ($25.9B Aave, $12B Morpho) are misleading because they include all permissionless activity. The institutional slice is orders of magnitude smaller. Aave TVL fell 53.4% YTD, while Morpho grew 36.7% — partly reflecting Morpho&apos;s modular vault architecture, which makes it easier to ring-fence institutional pools from the protocol&apos;s retail activity.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The defining uncertainty is regulatory classification: is a permissioned Aave pool a market, a fund, or a broker-dealer activity? No US regulator has issued an exemptive letter yet.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Compliance infrastructure wins</div>
                    <div className="play-fwd-body">Protocols that have invested in compliance architecture — KYC-gated pools, permissioned vaults, on-chain AML checks — are positioned for a world where institutional DeFi operates within regulatory frameworks. Those that haven&apos;t are betting regulatory engagement stays optional. Apollo&apos;s governance stake in Morpho is a signal about which model traditional finance believes will survive.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Regulatory classification drives timeline</div>
                    <div className="play-fwd-body">Plateau is 5 to 10 years because the institutional capital opportunity is genuinely large — the combined DeFi TVL reachable by institutions could be multiples of what moves through Aave Horizon today — but the legal infrastructure to support it at scale isn&apos;t yet built. The first exemptive letter, no-action letter, or pilot-program clearance from a US regulator will be the signal that the legal architecture is ready.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 22: Wholesale CBDC ── */}
          <article id="wholesale-cbdc" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">22</span> Wholesale CBDC</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">5–10 yrs</span>
                  <span className="play-meta-tag play-meta-tag--trigger">Innovation Trigger</span>
                </div>
                <div className="play-cases">
                  {WHOLESALE_CBDC_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">7</div>
                  <div className="play-stat-label">Central banks in BIS Agorá</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">~0</div>
                  <div className="play-stat-label">Production volume</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">2027–28</div>
                  <div className="play-stat-label">Production integration target</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>Wholesale CBDC is a digital form of central bank money designed for use between financial institutions rather than consumers. Unlike retail CBDCs (aimed at replacing or supplementing cash in wallets), wholesale CBDCs target interbank settlement: the final, risk-free layer where large transactions between banks are completed. They carry zero commercial bank credit risk because they are direct liabilities of the central bank — programmable, tokenized equivalents of reserve accounts that can settle transactions on distributed ledgers in real time, enabling atomic delivery-versus-payment and cross-border settlement without correspondent banking chains.</p>

                <div className="play-arch-stack">
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">01</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Wholesale CBDC (central bank settlement layer)</div>
                      <div className="play-arch-desc">Risk-free, programmable central bank money for interbank final settlement — the foundation layer being built by BIS Agorá and national central bank experiments</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">02</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Tokenized deposits (commercial banking layer)</div>
                      <div className="play-arch-desc">JPMorgan JPMD, The Clearing House network — commercial bank money on DLT. Delivering much of what wholesale CBDC promises, without waiting for central banks</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge">03</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Stablecoins + public blockchain (retail / DeFi layer)</div>
                      <div className="play-arch-desc">USDC, USDT, and public L2s — highest liquidity, most user reach, lowest institutional trust. The outermost ring where retail and DeFi activity happens</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>The most active CBDC experimentation in 2026 is wholesale, cross-border, and bank-to-bank. BIS Project Agorá brings together seven major central banks and a large group of private financial institutions — its design phase concluded in late 2025, with technical experimentation running through 2026. The ECB is pursuing two parallel tracks: Project Pontes (wholesale, targeted live Q3 2026) and a digital euro retail pilot with 36 payment service providers selected in 2026, with a 12-month test in H2 2027 and potential first issuance in 2029.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">7</div>
                    <div className="play-stat-pull-label">Central banks in BIS Agorá — Fed (NY), ECB, BoE, BoJ, SNB, BoK, Bank of Mexico</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">36</div>
                    <div className="play-stat-pull-label">Payment service providers selected by ECB for digital euro pilot in 2026 — 12-month test starts H2 2027</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">2029</div>
                    <div className="play-stat-pull-label">ECB target for potential first retail digital euro issuance — contingent on EU co-legislators adopting enabling regulation</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">Tokenized deposits may absorb the use case</div>
                  <p>The honest practitioner question is whether all three layers are necessary. Tokenized deposits (The Clearing House network, JPMorgan&apos;s JPMD) and Fnality&apos;s Sterling Payment System are delivering much of what wholesale CBDC promises using commercial bank money, without waiting for central banks to build new systems. If tokenized deposits solve the interbank settlement problem at commercial-bank risk levels, wholesale CBDC becomes a backstop — important but not primary.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>Innovation Trigger placement reflects the gap between the enormous number of active pilots and the near-zero amount of production volume. Plateau is 5 to 10 years — driven by institutional politics as much as technology.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Political and legal prerequisites</div>
                    <div className="play-fwd-body">The ECB&apos;s digital euro depends on EU co-legislators adopting the enabling regulation in 2026 — a step that is not guaranteed. In the US, the Fed cannot issue a CBDC without congressional authorization, and no such authorization is imminent. The Bundesbank, Bank of England, and BIS Agorá all indicate 2027 to 2028 for production integration. Every milestone is conditional on political decisions outside central banks&apos; control.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">The substitute rail question</div>
                    <div className="play-fwd-body">If commercial bank tokenized deposits (JPMD, The Clearing House) and Fnality reach critical mass before wholesale CBDC goes live, the demand case for wCBDC weakens. Central banks would still want a sovereign settlement rail for systemic stability reasons, but the commercial urgency disappears. The category succeeds either way — as primary rail or as backstop — but the plateau looks very different depending on which role it plays.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 23: Non-USD Stablecoins ── */}
          <article id="non-usd-stablecoins" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">23</span> Non-USD Stablecoins</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {NON_USD_STABLE_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$572M</div>
                  <div className="play-stat-label">Euro stablecoins combined</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value" style={{color: '#2e6b52'}}>+24.5%</div>
                  <div className="play-stat-label">Combined YTD</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">92%</div>
                  <div className="play-stat-label">Circle EURC market share</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>Non-USD stablecoins are blockchain tokens pegged one-to-one to currencies other than the US dollar, backed by reserves denominated in that local currency. They follow the same architecture as USDC or USDT but target domestic and regional use cases: euro-denominated settlement for European businesses, Hong Kong dollar rails for APAC commerce, local currency stablecoins for markets where dollar dominance creates friction. MiCA, which entered full enforcement in mid-2026, created the world&apos;s first comprehensive regulatory framework for non-dollar stablecoin issuance, requiring issuers to obtain authorization as electronic money institutions.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>MiCA opened the door, and roughly a dozen issuers secured authorization by Q1 2026 across France, the Netherlands, Finland, Malta, Luxembourg, and Germany. But the market is almost entirely a one-product story: Circle&apos;s EURC at $525M with 92% market share, growing 35.6% this year. The HKMA granted its first two HKD stablecoin licenses in April 2026 under the new Stablecoins Ordinance. In Latin America, Braza&apos;s BBRL and Bitso&apos;s MXNB are live or piloting.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">50×</div>
                    <div className="play-stat-pull-label">Dollar stablecoin supply advantage over euro — USDC alone is ~$62B vs ~$572M for all euro stablecoins combined</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">€5B</div>
                    <div className="play-stat-pull-label">MiCA &ldquo;significant&rdquo; threshold — no euro stablecoin approaches this level, which would trigger additional prudential requirements</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">0</div>
                    <div className="play-stat-pull-label">Interest allowed on MiCA e-money tokens — removes the one lever issuers could use to compete with dollar stablecoin yields</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">Economic gravity works against the category</div>
                  <p>Dollar-denominated stablecoins have 50x the supply, deeper DeFi liquidity, and higher yields (US Treasuries pay more than European equivalents). Cross-border users default to USDC or USDT even when a euro or peso alternative exists, because the dollar version is accepted everywhere. MiCA&apos;s prohibition on paying interest on e-money tokens removes one of the few levers euro stablecoin issuers could use to compete. Every jurisdiction that resents dollar dominance is politically motivated to support this category — but political motivation doesn&apos;t override liquidity gravity.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The category needs a domestic use case big enough to justify the friction of holding a non-dollar stablecoin. None has reached scale yet.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">The domestic use-case wedges</div>
                    <div className="play-fwd-body">Euro-denominated B2B settlement (where SEPA rails create natural on-ramps), Hong Kong trade finance flows (where an HKD stablecoin avoids dollar conversion costs), and LatAm remittances in local currency are the three most plausible wedges. EURC has the strongest case: Circle already dominates dollar stablecoins and understands distribution; European B2B payments are a large enough market to build on without needing DeFi composability. EURCV (SG-FORGE) is the institutional angle — a bank-issued euro stablecoin with built-in counterparty relationships.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Satellite vs. independent ecosystems</div>
                    <div className="play-fwd-body">The deeper structural question is whether non-USD stablecoins develop independent ecosystems or remain satellite products used mainly for the &ldquo;last mile&rdquo; of transactions that originate in dollars. Plateau is 2 to 5 years but depends heavily on jurisdiction. Circle&apos;s EURC has the best shot. Everything else is a rounding error until proven otherwise — and MiCA&apos;s prohibition on interest means the regulatory framework is not optimized for competition with dollar products.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 24: Tokenized Bonds ── */}
          <article id="tokenized-bonds" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">24</span> Tokenized Bonds</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">2–5 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {TOKENIZED_BOND_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">~$1.77B</div>
                  <div className="play-stat-label">Total outstanding</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">$3.5B+</div>
                  <div className="play-stat-label">HSBC Orion cumulative issuance</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">$1.3B</div>
                  <div className="play-stat-label">HK Green Bond II (largest single)</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>A tokenized bond is a standard debt instrument — coupon payments, maturity date, principal repayment — whose ownership record lives on a blockchain instead of in a central securities depository. Smart contracts can automate coupon distribution, enforce investor eligibility, and trigger redemption at maturity. The promise is faster settlement (minutes rather than T+2), fewer intermediaries, lower issuance costs, and a wider investor base through fractionalization. Three structural models exist:</p>

                <div className="play-arch-stack">
                  <div className="play-arch-layer">
                    <div className="play-arch-badge" style={{background: '#2e6b52'}}>A</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Native digital bonds (EIB D7 CP, DZ BANK)</div>
                      <div className="play-arch-desc">Issued directly on-chain from inception — ownership, coupon, and redemption all on the ledger. Intraday settlement in central bank money is achievable. The gold standard but requires end-to-end DLT infrastructure</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge" style={{background: '#2563b8'}}>B</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Tokenized wrappers (HSBC Orion, Siemens)</div>
                      <div className="play-arch-desc">Off-chain bond held by custodian; on-chain token represents ownership. Easier to issue within existing legal frameworks; settlement still at T+0 possible for the token layer</div>
                    </div>
                  </div>
                  <div className="play-arch-layer">
                    <div className="play-arch-badge" style={{background: '#8a5a17'}}>C</div>
                    <div className="play-arch-content">
                      <div className="play-arch-name">Structured credit fund tokens (Apollo, Ondo)</div>
                      <div className="play-arch-desc">Token gives exposure to a portfolio of fixed-income instruments — closer to a tokenized ETF than a bond. Fractionalization benefit is highest; direct bond economics are indirect</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>Issuance frequency is accelerating. In June 2026, the EIB issued the first DLT-native commercial paper on Clearstream&apos;s D7 platform, with Citi as sole dealer and participation from DekaBank, DZ BANK, and Eurex Clearing. DekaBank and Eurex were then able to mobilize the DLT instrument through Clearstream&apos;s triparty collateral management and the ECB&apos;s ECMS for financing with the Bundesbank — end-to-end connectivity in European digital bond markets. HM Treasury selected HSBC Orion as the platform for the UK&apos;s DIGIT pilot, positioning the UK to issue the first G7 tokenized sovereign bond. The ECB announced in January 2026 that DLT-based assets would become eligible as Eurosystem collateral.</p>

                <div className="play-callout">
                  <div className="play-callout-head">Siemens: the before-and-after case study</div>
                  <p>Siemens provides the clearest evolution in the market. Its 2023 bond settled in T+2. Its 2024 issuance settled intraday in central bank money. It later traded on a regulated secondary venue. The progression from &ldquo;proof of concept&rdquo; to &ldquo;operationally superior&rdquo; happened within a single issuer&apos;s bond program. The ECB&apos;s decision to accept DLT-based assets as eligible Eurosystem collateral could transform demand substantially: banks can now use tokenized bonds in repo and refinancing operations with the central bank.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>Most tokenized bonds are still held to maturity — the secondary market is effectively nonexistent for most issuances. That&apos;s the core gap.</p>
                <div className="play-fwd-grid play-fwd-grid--2col">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">Secondary liquidity is the unlock</div>
                    <div className="play-fwd-body">A bond that can&apos;t be traded after issuance is operationally cheaper to issue but doesn&apos;t fundamentally change how bond markets work. The UK&apos;s DIGIT pilot, if it proceeds to a benchmark-sized issuance, would be the first time a G7 sovereign puts real volume behind the concept. That&apos;s the signal the market needs to start building secondary infrastructure in earnest — the same way US Treasuries becoming liquid drove the development of repo markets.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Three parallel problems</div>
                    <div className="play-fwd-body">McKinsey estimates tokenized bonds could exceed $1T in outstanding by 2030 — but that requires the secondary liquidity problem, the CSD interoperability problem (Clearstream D7 and HSBC Orion don&apos;t yet interoperate cleanly), and the cross-jurisdictional prospectus problem (a bond issued under Germany&apos;s eWpG framework may not be eligible in UK or US investor portfolios) to all be solved in parallel. Plateau is 2 to 5 years.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

          {/* ── Play 25: Tokenized PE/VC ── */}
          <article id="tokenized-pe-vc" className="play">

            <div className="play-header">
              <div className="play-header-left">
                <h3 className="play-name"><span className="play-num">25</span> Tokenized PE / VC</h3>
                <div className="play-meta-tags">
                  <span className="play-meta-tag">5–10 yrs</span>
                  <span className="play-meta-tag play-meta-tag--position">Slope of Enlightenment</span>
                </div>
                <div className="play-cases">
                  {PE_VC_CASES.map((c) => (
                    <div key={c.ticker} className="play-case">
                      <span className="play-case-ticker">{c.ticker}</span>
                      <span className="play-case-issuer">{c.issuer}</span>
                      <span className="play-case-amount">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="play-stats">
                <div className="play-stat">
                  <div className="play-stat-value">&lt;$1B</div>
                  <div className="play-stat-label">Tokenized PE fund AUM</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">$4B+</div>
                  <div className="play-stat-label">Securitize all tokenized assets</div>
                </div>
                <div className="play-stat-sep" />
                <div className="play-stat">
                  <div className="play-stat-value">$600B–$1.3T</div>
                  <div className="play-stat-label">BCG 2030 projection</div>
                </div>
              </div>
            </div>

            <div className="play-body">

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s the technology about?</h4>
                <p>Tokenized private equity converts ownership interests in a fund into digital tokens on a blockchain, using an SPV or feeder fund: the fund manager creates a separate legal entity holding actual fund interests, then issues tokens representing fractional ownership of that entity. Smart contracts can automate capital calls, distributions, lock-up enforcement, and compliance checks. The practical effect is that minimum investments drop from $5M to as low as $20K, investor onboarding becomes digital, and tokens can potentially trade on regulated secondary venues — giving LPs a path to exit before the fund&apos;s natural maturity.</p>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">Current progress &amp; use-cases</h4>
                <p>Securitize is the common thread across nearly every major tokenized PE implementation. It holds registrations as an SEC transfer agent, FINRA broker-dealer, and fund administrator, and has tokenized over $4B in assets through partnerships with BlackRock, Apollo, Hamilton Lane, KKR, and VanEck. In July 2026, Securitize went public on NASDAQ as SECZ — and in a first for any company, tokenized its own equity on Solana and Avalanche at IPO. Its backers (BlackRock, ARK Invest, Morgan Stanley, Hamilton Lane, Jump Crypto) rolled 100% of their stakes into the combined entity.</p>

                <div className="play-stat-row">
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$20K</div>
                    <div className="play-stat-pull-label">Hamilton Lane minimum investment in tokenized feeder — down from $5M traditional LP minimum</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$170M</div>
                    <div className="play-stat-pull-label">Apollo tokenized diversified credit fund AUM (November 2025) — launched January 2025 across six blockchains</div>
                  </div>
                  <div className="play-stat-pull-sep" />
                  <div className="play-stat-pull-item">
                    <div className="play-stat-pull-num">$15T+</div>
                    <div className="play-stat-pull-label">Global private markets size — tokenized PE fund AUM is under $1B of this today</div>
                  </div>
                </div>

                <div className="play-callout">
                  <div className="play-callout-head">Republic Mirror: the line gets drawn</div>
                  <p>Republic&apos;s Mirror tokens gave retail investors synthetic exposure to SpaceX and OpenAI. OpenAI publicly stated that Robinhood&apos;s linked product — which offered similar exposure — had not been authorized. The incident illustrated a structural tension: tokenizing exposure to a private company without that company&apos;s participation creates reputational and legal risk that may trigger public pushback, making the most interesting targets (pre-IPO unicorns) the hardest to tokenize without cooperation.</p>
                </div>
              </div>

              <div className="play-text-block">
                <h4 className="play-text-heading">What&apos;s next?</h4>
                <p>The category has proven the concept and attracted genuine institutional commitment. Scale remains tiny relative to the $15T+ global private markets. Three structural barriers persist:</p>
                <div className="play-fwd-grid">
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">01</div>
                    <div className="play-fwd-title">LP agreement and ERISA constraints</div>
                    <div className="play-fwd-body">GP-LP agreements typically contain transfer restrictions written long before tokens existed — changing them requires LP consent. ERISA constraints limit how pension fund capital can flow into tokenized structures. These are legal, not technical problems, and they require the GP community to standardize new fund document language before tokenization becomes routine rather than exceptional.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">02</div>
                    <div className="play-fwd-title">Secondary market infrastructure</div>
                    <div className="play-fwd-body">Tokenizing the wrapper doesn&apos;t change the cash flow profile of a 10-year PE fund. Securitize&apos;s ATS can match buyers and sellers, but real liquidity requires enough participants with enough capital to create a functioning order book. Without secondary liquidity, the fractionalization benefit is limited to lower entry minimums — valuable for wealth management but not transformative for institutional markets.</div>
                  </div>
                  <div className="play-fwd-item">
                    <div className="play-fwd-num">03</div>
                    <div className="play-fwd-title">The flagship fund signal</div>
                    <div className="play-fwd-body">The Peak arrives when a top-quartile PE firm with $50B or more in AUM tokenizes a flagship fund at launch rather than wrapping an existing product after the fact. That event would force peers to respond, standardize legal templates, and drive secondary market infrastructure investment simultaneously. It is 5 to 10 years out — but Securitize&apos;s NASDAQ IPO and Apollo&apos;s governance move at Morpho suggest the direction of travel is set.</div>
                  </div>
                </div>
              </div>

            </div>
          </article>

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

      {/* ── Footer bar ────────────────────────────────────────── */}
      <footer className="footer-bar">
        <div className="container row">
          <div>© 2026 Coinstruct Labs Kft.</div>
          <div>Building for the Modern Finance</div>
        </div>
      </footer>

      <style>{`
        .rp-page { background: #fff; position: relative; overflow-x: hidden; }

        /* ── Hero ── */
        .rp-hero {
          padding: 80px 0 56px;
          position: relative;
          z-index: 1;
        }
        .rp-hero-inner { position: relative; z-index: 1; }
        .rp-kicker {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 20px;
        }
        .rp-title {
          color: var(--ink);
          margin: 0;
          max-width: 800px;
        }

        /* ── Ambient background blobs ── */
        .rp-ambient-layer {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
          mask-image: linear-gradient(to bottom, black 0%, black 70%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 70%, transparent 100%);
        }
        .rp-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
        }
        .rp-blob-1 {
          top: -160px; left: 6%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(101,145,255,0.28), transparent 70%);
        }
        .rp-blob-2 {
          top: -100px; right: 5%;
          width: 440px; height: 440px;
          background: radial-gradient(circle, rgba(150,130,255,0.22), transparent 70%);
        }
        .rp-blob-3 {
          top: 420px; left: -80px;
          width: 460px; height: 460px;
          background: radial-gradient(circle, rgba(120,190,255,0.24), transparent 70%);
        }
        .rp-blob-4 {
          top: 560px; right: -60px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(140,170,255,0.20), transparent 70%);
        }

        /* ── Chart ── */
        .rp-chart-section {
          padding: 0;
          position: relative;
          z-index: 1;
        }
        .rp-chart-outer {
          max-width: 70%;
          margin: 0 auto;
          border: 1.5px solid rgba(101,145,255,0.40);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 0 0 4px rgba(101,145,255,0.10);
        }
        .rp-chart-wrap {
          position: relative;
          aspect-ratio: 1.50 / 1;
          overflow: hidden;
          background: transparent;
        }
        .rp-chart-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        /* ── Section base ── */
        .rp-section {
          padding: 72px 0;
        }
        .rp-content {
          max-width: 900px;
        }
        .rp-h2 {
          color: var(--ink);
          margin: 0 0 40px;
        }
        .rp-h3 {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--ink-2);
          margin: 48px 0 0;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 11px;
        }

        /* ── Toggles ── */
        .rp-toggles { margin-top: 0; }
        .rp-toggles--stages { margin-top: 16px; }

        .rp-toggle {
          border-bottom: 1px solid var(--line);
        }
        .rp-toggle:first-child { border-top: 1px solid var(--line); }

        .rp-toggle summary {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 0;
          cursor: pointer;
          list-style: none;
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 500;
          color: var(--ink);
          line-height: 1.3;
          user-select: none;
        }
        .rp-toggle summary::-webkit-details-marker { display: none; }
        .rp-toggle summary::marker { display: none; }
        .rp-toggle summary:hover { color: var(--blue); }

        .rp-toggle-arrow {
          display: inline-block;
          flex-shrink: 0;
          width: 0; height: 0;
          border-style: solid;
          border-width: 5px 0 5px 7px;
          border-color: transparent transparent transparent var(--ink-2);
          transition: transform 0.18s ease;
        }
        details[open] > .rp-toggle-summary .rp-toggle-arrow {
          transform: rotate(90deg);
        }

        .rp-stage-num {
          color: var(--ink-2);
          font-size: 13px;
          font-weight: 400;
          min-width: 18px;
        }

        .rp-toggle-body {
          padding: 0 0 24px 19px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .rp-toggle-body p {
          font-size: 15px;
          line-height: 1.75;
          color: var(--ink-2);
          margin: 0;
        }

        .rp-list {
          margin: 0;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .rp-list li {
          font-size: 15px;
          line-height: 1.7;
          color: var(--ink-2);
        }

        .rp-stages-intro { margin-bottom: 0; }

        /* ── Plays section ── */
        .rp-plays-section { padding: 16px 0 80px; border-bottom: none; }

        /* ── Play card ── */
        .play {
          padding: 48px 0;
        }

        .play-header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: start;
          margin-bottom: 40px;
        }

        .play-name {
          font-family: var(--font-display);
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 500;
          letter-spacing: -0.025em;
          color: var(--ink);
          margin: 0 0 14px;
          line-height: 1.1;
        }

        .play-num {
          font-family: var(--font-display);
          font-size: 1em;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--blue);
          margin-right: 0.25em;
        }

        .play-meta-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }
        .play-meta-tag {
          display: inline-flex;
          align-items: center;
          font-size: 11.5px;
          font-weight: 500;
          color: var(--ink-2);
          background: rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.09);
          border-radius: 5px;
          padding: 3px 10px;
          white-space: nowrap;
        }
        .play-meta-tag--position {
          color: #2e6b52;
          background: #e6f0ec;
          border-color: rgba(46,107,82,0.22);
        }
        .play-meta-tag--trough {
          color: #8a5a17;
          background: #fff4e0;
          border-color: rgba(138,90,23,0.22);
        }
        .play-meta-tag--no-growth {
          color: #555;
          background: rgba(0,0,0,0.06);
          border-color: rgba(0,0,0,0.14);
        }
        .play-meta-tag--peak {
          color: #8a2e17;
          background: #fdf0ec;
          border-color: rgba(138,46,23,0.22);
        }
        .play-meta-tag--trigger {
          color: #17538a;
          background: #ecf4fd;
          border-color: rgba(23,83,138,0.22);
        }

        .play-cases {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .play-case {
          display: inline-flex;
          flex-direction: column;
          gap: 2px;
          background: var(--surface);
          border: 1px solid var(--line-strong);
          border-radius: 8px;
          padding: 8px 12px;
          min-width: 72px;
        }
        .play-case-ticker {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
          letter-spacing: 0.02em;
          line-height: 1.2;
        }
        .play-case-issuer {
          font-size: 10.5px;
          color: var(--ink-2);
          line-height: 1.2;
        }

        /* Stats: side by side, not stacked */
        .play-stats {
          display: flex;
          align-items: stretch;
          border: 1px solid var(--line-strong);
          border-radius: 12px;
          overflow: hidden;
          background: var(--surface);
          flex-shrink: 0;
        }
        .play-stat {
          padding: 18px 24px;
        }
        .play-stat-sep {
          width: 1px;
          background: var(--line-strong);
          flex-shrink: 0;
        }
        .play-stat-value {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 600;
          color: var(--ink);
          letter-spacing: -0.03em;
          line-height: 1;
          white-space: nowrap;
        }
        .play-stat-neg { color: #b83030; }
        .play-stat-label {
          font-size: 10px;
          font-weight: 500;
          color: var(--ink-2);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 6px;
        }

        /* Play body text */
        .play-body {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .play-text-block { }
        .play-text-heading {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ink);
          margin: 0 0 12px;
        }
        .play-text-block p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--ink-2);
          margin: 0;
          max-width: 780px;
        }
        .play-text-block p + p { margin-top: 14px; }

        /* ── Asset tags ── */
        .rp-toc-label {
          padding-top: 40px;
          margin-bottom: 20px;
        }
        .rp-toc-hint {
          font-size: 0.55em;
          font-weight: 400;
          color: var(--ink-2);
          letter-spacing: 0;
        }
        .rp-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-bottom: 8px;
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
        a.rp-toc-tag {
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.15s;
        }
        a.rp-toc-tag:hover { opacity: 0.78; }
        .play { scroll-margin-top: 80px; }

        /* ── Play visual blocks ── */

        .play-stat-pos { color: #2e6b52; }

        .play-case-amount {
          font-size: 9.5px;
          color: var(--ink-2);
          opacity: 0.7;
          line-height: 1.2;
        }

        /* Stablecoin sandwich */
        .play-sandwich {
          display: flex;
          align-items: stretch;
          border: 1px solid var(--line);
          border-radius: 12px;
          overflow: hidden;
          margin: 24px 0 20px;
        }
        .play-sandwich-step {
          flex: 1;
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .play-sandwich-step--friction { background: #fdf8f4; }
        .play-sandwich-step--ok {
          background: #f3f8f5;
          border-left: 1px solid var(--line);
          border-right: 1px solid var(--line);
        }
        .play-sandwich-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          flex-shrink: 0;
          color: var(--ink-2);
          font-size: 16px;
          background: var(--surface);
        }
        .play-sandwich-label {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          line-height: 1.2;
        }
        .play-sandwich-sub {
          font-size: 12px;
          color: var(--ink-2);
          line-height: 1.45;
          flex: 1;
        }
        .play-sandwich-badge {
          display: inline-block;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.03em;
          padding: 3px 8px;
          border-radius: 4px;
          width: fit-content;
        }
        .play-sandwich-badge--warn { background: #fbe9e0; color: #b84a2e; }
        .play-sandwich-badge--ok  { background: #e2f0e8; color: #2e6b52; }

        /* Key stats pull row */
        .play-stat-row {
          display: flex;
          align-items: stretch;
          border: 1px solid var(--line);
          border-radius: 12px;
          overflow: hidden;
          margin: 24px 0;
          background: var(--surface);
        }
        .play-stat-pull-item {
          flex: 1;
          padding: 18px 20px;
        }
        .play-stat-pull-sep {
          width: 1px;
          background: var(--line);
          flex-shrink: 0;
        }
        .play-stat-pull-num {
          font-family: var(--font-display);
          font-size: clamp(16px, 2vw, 24px);
          font-weight: 600;
          color: var(--ink);
          letter-spacing: -0.03em;
          line-height: 1;
          white-space: nowrap;
          margin-bottom: 6px;
        }
        .play-stat-pull-label {
          font-size: 11px;
          color: var(--ink-2);
          line-height: 1.4;
        }

        /* M&A list */
        .play-ma-list {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--line);
          border-radius: 10px;
          overflow: hidden;
          margin: 16px 0 4px;
        }
        .play-ma-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 13px 20px;
          border-bottom: 1px solid var(--line);
        }
        .play-ma-item:last-child { border-bottom: none; }
        .play-ma-parties { font-size: 14px; color: var(--ink); }
        .play-ma-amount {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
          letter-spacing: 0.02em;
          white-space: nowrap;
          margin-left: 16px;
        }

        /* Reality check callout */
        .play-callout {
          border: 1px solid rgba(101, 145, 255, 0.25);
          border-left: 3px solid rgba(101, 145, 255, 0.6);
          background: #ecf4fd;
          border-radius: 0 10px 10px 0;
          padding: 20px 24px;
          margin: 20px 0 0;
        }
        .play-callout-head {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2a5fa8;
          margin-bottom: 10px;
        }
        .play-callout p { font-size: 15px; line-height: 1.75; color: var(--ink-2); margin: 0; max-width: none; }

        /* Forward-looking cards */
        .play-fwd-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 24px;
        }
        .play-fwd-item {
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .play-fwd-num {
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--blue);
        }
        .play-fwd-title {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 500;
          color: var(--ink);
          line-height: 1.25;
        }
        .play-fwd-body {
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--ink-2);
        }

        /* Architecture stack (ERC-3643) */
        .play-arch-stack {
          border: 1px solid var(--line);
          border-radius: 12px;
          overflow: hidden;
          margin: 24px 0 20px;
        }
        .play-arch-layer {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 20px;
          border-bottom: 1px solid var(--line);
          background: var(--surface);
        }
        .play-arch-layer:last-child { border-bottom: none; }
        .play-arch-badge {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--blue);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .play-arch-badge--ok { background: #2e6b52; font-size: 13px; }
        .play-arch-content { flex: 1; }
        .play-arch-name {
          font-weight: 600;
          font-size: 14px;
          color: var(--ink);
          margin-bottom: 4px;
        }
        .play-arch-desc {
          font-size: 13px;
          color: var(--ink-2);
          line-height: 1.5;
        }

        /* 2-panel sandwich end panel (no right border) */
        .play-sandwich-step--ok-end {
          flex: 1;
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: #f3f8f5;
          border-left: 1px solid var(--line);
        }

        /* 2-col forward grid variant */
        .play-fwd-grid--2col { grid-template-columns: repeat(2, 1fr); }

        /* ── Mobile ── */
        @media (max-width: 820px) {
          .rp-hero { padding: 56px 0 36px; }
          .rp-chart-section { padding: 0; }
          .rp-section { padding: 48px 0; }
          .rp-plays-section { padding: 48px 0 56px; }
          .rp-h2 { margin-bottom: 28px; }
          .play-header {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .play-stats { align-self: start; width: fit-content; }
          .play-stat { padding: 14px 18px; }
          .play-stat-value { font-size: 22px; }
          .play-text-block p { font-size: 15px; }
          .rp-toggle summary { font-size: 15px; }
          .play-sandwich { flex-direction: column; }
          .play-sandwich-step--ok { border-left: none; border-right: none; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
          .play-sandwich-divider { display: none; }
          .play-stat-row { flex-direction: column; }
          .play-stat-pull-sep { width: auto; height: 1px; }
          .play-fwd-grid { grid-template-columns: 1fr; }
          .play-fwd-grid--2col { grid-template-columns: 1fr; }
          .play-sandwich-step--ok-end { border-left: none; border-top: 1px solid var(--line); }
        }

        @media (max-width: 480px) {
          .play-cases { gap: 6px; }
          .play-case { padding: 6px 10px; min-width: 64px; }
        }
      `}</style>
    </div>
  )
}
