import { supabase } from '@/lib/supabase'

export const revalidate = 300

export default async function Home() {
  const { data: articles } = await supabase
    .from('articles')
    .select('slug, title, subtitle, excerpt, thumbnail_url, published_at, category')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(3)

  return (
    <>
      {/* ================== NAV ================== */}
      <nav className="top">
        <div className="container row">
          <a href="/" className="logo" aria-label="Coinstruct home">
            <img src="/assets/logos/coinstruct-logo.png" alt="Coinstruct" className="logo-mark" />
          </a>
          <div className="links">
            <a href="#expertise">Expertise</a>
            <a href="#serve">Who we serve</a>
            <a href="#approach">How we work</a>
            <a href="/research">Research</a>
            <a href="/blog">Blog</a>
          </div>
          <div className="spacer"></div>
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

      {/* ================== HERO ================== */}
      <section className="hero">
        <div className="container">
          <div className="hero-stack">
            <div className="hero-copy">
              <h1 className="display-1">
                Helping financial firms<br />adopt <span className="accent">tokenization</span>
              </h1>
              <p className="lead">
                Coinstruct is a tokenization advisory firm that helps financial institutions launch tokenization initiatives.
              </p>
              <div className="cta-row">
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
                <a href="https://coinstruct.net/" target="_blank" rel="noopener" className="btn btn-secondary">
                  Access platform
                  <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hero-map" aria-hidden="true">
              <img src="/assets/coinstruct-map.png" alt="" />
            </div>
          </div>

          <div className="trust">
            <div className="label">Trusted by financial institutions and asset owners</div>
            <div className="marquee" aria-hidden="true">
              <div className="marquee-track">
                <div className="marquee-group">
                  <img className="logo-img" src="/assets/logos/arcams.jpeg" alt="Arcams" />
                  <img className="logo-img" src="/assets/logos/currency.png" alt="Currency" />
                  <img className="logo-img" src="/assets/logos/gator.webp" alt="Gator" />
                  <img className="logo-img" src="/assets/logos/mpx.jpeg" alt="MPX" />
                  <img className="logo-img" src="/assets/logos/perpetuals.svg" alt="Perpetuals" />
                  <img className="logo-img" src="/assets/logos/win.webp" alt="Win" />
                </div>
                <div className="marquee-group" aria-hidden="true">
                  <img className="logo-img" src="/assets/logos/arcams.jpeg" alt="" />
                  <img className="logo-img" src="/assets/logos/currency.png" alt="" />
                  <img className="logo-img" src="/assets/logos/gator.webp" alt="" />
                  <img className="logo-img" src="/assets/logos/mpx.jpeg" alt="" />
                  <img className="logo-img" src="/assets/logos/perpetuals.svg" alt="" />
                  <img className="logo-img" src="/assets/logos/win.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== AREAS OF EXPERTISE ================== */}
      <section id="expertise">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Three directions of our work</div>
              <h2 className="display-2" style={{ margin: '20px 0 0' }}>Areas of Expertise</h2>
            </div>
            <div className="right">
              <p className="lead">Covering Strategic, Legal and Technical parts of Tokenization.</p>
            </div>
          </div>

          <div className="areas">
            <div className="area">
              <div className="num"><span>01 / Crypto Expansion</span><span></span></div>
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                  <path d="M5 22 L11 14 L15 18 L23 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 6 L23 6 L23 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Crypto Expansion</h3>
              <p>For trading firms, brokers, and financial platforms looking to add digital assets to their offering.</p>
              <ul>
                <li>Spot, derivatives, staking, custody</li>
                <li>MiCA / CySEC / FCA pathway mapping</li>
                <li>Custody and wallet infrastructure</li>
                <li>Liquidity and market-making setup</li>
              </ul>
            </div>

            <div className="area">
              <div className="num"><span>02 / Asset Tokenization</span><span></span></div>
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M9 12 L12 15 L9 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 18 L19 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Asset Tokenization</h3>
              <p>For businesses looking to tokenize and unlock liquidity from real-world assets.</p>
              <ul>
                <li>Deposits, debt</li>
                <li>Token economics and supply design</li>
                <li>Primary and secondary markets</li>
                <li>Investor onboarding and KYC</li>
              </ul>
            </div>

            <div className="area">
              <div className="num"><span>03 / Blockchain Integration</span><span></span></div>
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M14 8 L14 14 L18 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="14" cy="14" r="1.6" fill="currentColor" />
                </svg>
              </div>
              <h3>Blockchain Integration</h3>
              <p>For companies looking to integrate blockchain into their existing infrastructure.</p>
              <ul>
                <li>On-chain data anchoring</li>
                <li>Smart-contract architecture</li>
                <li>Hybrid cloud and chain stacks</li>
                <li>Regulatory and audit alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================== OUR SERVICES ================== */}
      <section id="services">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Our services</div>
              <h2 className="display-2" style={{ margin: '20px 0 0' }}>Advisory and Execution for Institutional Tokenization</h2>
            </div>
            <div className="right">
              <p className="lead">We support tokenization programs with expert guidance across regulation, provider evaluation, operating model design, and structured execution planning.</p>
              <a
                href="https://calendly.com/max-coinstruct/30min?back=1&month=2025-11"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
                style={{ marginTop: '28px' }}
              >
                Talk to Expert
                <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="services-grid">
            {/* Tokenization Strategy */}
            <div className="service-card">
              <div className="svc-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"/><path d="M7 16l4-5 4 3 4-6"/>
                </svg>
              </div>
              <div className="svc-title">Tokenization Strategy &amp; Advisory</div>
              <div className="svc-desc">Building a complete tokenization strategy: what assets to tokenize, model type, infrastructure selection, GTM plan, tech stack selection and asset economic modelling.</div>
            </div>

            {/* Workshops */}
            <div className="service-card">
              <div className="svc-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <div className="svc-title">Workshops and Training Programs</div>
              <div className="svc-desc">Custom sessions to educate company executives on the blockchain market landscape, successful cases, compliance and present the options available for tokenization.</div>
            </div>

            {/* Token Economy */}
            <div className="service-card">
              <div className="svc-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/>
                  <path d="M6 7l4 3M14 9l4-3M6 17l4-3M14 15l4 3"/>
                </svg>
              </div>
              <div className="svc-title">Token Economy Modeling</div>
              <div className="svc-desc">We design the token economy: supply-side, mechanics, internal parameters and create a technical specification ready for execution in smart-contracts.</div>
            </div>

            {/* Compliance */}
            <div className="service-card">
              <div className="svc-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <div className="svc-title">Compliance Strategy</div>
              <div className="svc-desc">Documentation, application preparation, AML/CFT policies, custody policies, and governance frameworks: built to avoid delays from incomplete submissions.</div>
            </div>

            {/* Technical */}
            <div className="service-card">
              <div className="svc-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="svc-title">Technical Build-Up</div>
              <div className="svc-desc">Smart-contract development, platform integration into DigiShares, InvestaX and similar, token deployment and all tech-related cases.</div>
            </div>

            {/* GTM */}
            <div className="service-card">
              <div className="svc-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div className="svc-title">Go-To-Market Support</div>
              <div className="svc-desc">Managing partnerships with leading blockchain &amp; DeFi ecosystems, arranging conversations with exchanges and trading vendors for the asset launch &amp; listings.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== WHO WE SERVE ================== */}
      <section id="serve" className="cases-bg">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Who we serve</div>
              <h2 className="display-2" style={{ margin: '20px 0 0' }}>Built for institutions that move capital.</h2>
            </div>
            <div className="right">
              <p className="lead">From regulated balance sheets to high-velocity trading desks, we work alongside teams that need conviction, not slideware.</p>
            </div>
          </div>

          <div className="serve">
            <div className="serve-card">
              <div className="num">01 / Banks</div>
              <h3>Banks</h3>
              <p>Custody, tokenized deposits, settlement rails, and on-chain treasury, designed to slot into existing bank operations without breaking the licence.</p>
            </div>
            <div className="serve-card">
              <div className="num">02 / Trading &amp; exchanges</div>
              <h3>Trading &amp; exchanges</h3>
              <p>Spot and derivatives expansion, listings strategy, custody and KYT, market-making and liquidity sourcing for venues going regulated.</p>
            </div>
            <div className="serve-card">
              <div className="num">03 / Fintech</div>
              <h3>Fintech</h3>
              <p>Wallets, on/off-ramps, embedded crypto and tokenized products, integrated into your stack with the compliance posture investors expect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================== HOW WE WORK ================== */}
      <section id="approach">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">How We Work</div>
              <h2 className="display-2" style={{ margin: '20px 0 0' }}>Two Phases</h2>
            </div>
            <div className="right">
              <p className="lead">Two phases, one team. Scaling your Tokenization project to pilot and beyond.</p>
            </div>
          </div>

          <div className="how">
            <div className="phase">
              <div className="phase-num">Phase 01</div>
              <h3>Strategy</h3>
              <div className="sub">We design your tokenization strategy, backed by our intelligence platform.</div>
              <div className="body-text">Our platform tracks how firms globally adopt digital assets: what works, how it&apos;s structured, and what the ROI is. We use that data to shape an executable strategy for your firm.</div>
              <ul className="streams">
                <li><span className="n">01</span><span>Business and market assessment</span></li>
                <li><span className="n">02</span><span>Regulatory pathway mapping (MiCA, CASP)</span></li>
                <li><span className="n">03</span><span>Target operating model and tech architecture</span></li>
                <li><span className="n">04</span><span>Liquidity and go-to-market sequencing</span></li>
              </ul>
              <div className="deliverable">
                <span className="label">Deliverable</span>
                <span>A board-ready strategy document, commercial models, compliance plan, and executive presentation.</span>
              </div>
            </div>

            <div className="phase dark">
              <div className="phase-num">Phase 02</div>
              <h3>Execution</h3>
              <div className="sub">We execute as the crypto lead on your team.</div>
              <div className="body-text">From technical integration to product buildout and regulatory compliance. We coordinate every workstream and ensure nothing falls through the gaps between legal, technology, and operations.</div>
              <ul className="streams">
                <li><span className="n">01</span><span>Regulatory &amp; compliance execution (CASP, AML/CFT)</span></li>
                <li><span className="n">02</span><span>Technology &amp; infrastructure partner management</span></li>
                <li><span className="n">03</span><span>Liquidity &amp; market-making setup</span></li>
                <li><span className="n">04</span><span>Operational readiness &amp; launch support</span></li>
              </ul>
              <div className="deliverable">
                <span className="label">Deliverable</span>
                <span>A live product, an internally trained team, and a documented operational playbook.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== OUR INSIGHTS ================== */}
      {articles && articles.length > 0 && (
        <section id="insights">
          <div className="container">
            <div className="section-head">
              <div className="left">
                <h2 className="display-2">Latest from our blog</h2>
              </div>
              <div className="right" style={{ display: 'flex', alignItems: 'flex-end' }}>
                <a href="/blog" className="btn btn-secondary">
                  View all articles
                  <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="insights-grid">
              {articles.map((article) => (
                <a key={article.slug} href={`/blog/${article.slug}`} className="insight-card">
                  {article.thumbnail_url && (
                    <div className="insight-thumb thumb-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={article.thumbnail_url} alt={article.title} />
                      {article.category && (
                        <span className="thumb-badge">{article.category}</span>
                      )}
                    </div>
                  )}
                  <div className="insight-body">
                    {article.published_at && (
                      <div className="insight-date">
                        {new Date(article.published_at).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'long', day: 'numeric',
                        })}
                      </div>
                    )}
                    <div className="insight-title">{article.title}</div>
                    {(article.excerpt || article.subtitle) && (
                      <div className="insight-excerpt">{article.excerpt || article.subtitle}</div>
                    )}
                    <div className="insight-read">Read article →</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================== FOOTER CTA ================== */}
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

      {/* ================== FOOTER BAR ================== */}
      <footer className="footer-bar">
        <div className="container row">
          <div>© 2026 Coinstruct Labs Kft.</div>
          <div>Building for the Modern Finance</div>
        </div>
      </footer>
    </>
  );
}
