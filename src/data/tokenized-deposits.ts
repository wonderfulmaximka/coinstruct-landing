export type ProgramStatus = 'live' | 'pilot' | 'sandbox' | 'building'

export type StatItem = {
  value: string
  label: string
}

export type DepositProgram = {
  id: string
  name: string
  program: string
  country: string
  status: ProgramStatus
  summary: string
  note?: string
  currencies?: string[]
  ledgerLabel?: string
  ledgerTags: string[]
  stats: StatItem[]
  clientsLabel?: string
  clients: string[]
  differentiator: string
  roadmap: string[]
  /** Path under /public, e.g. "/logos/jpm.png". Omit to fall back to the monogram badge. */
  logo?: string
}

export type TokenizedDepositsData = {
  banks: DepositProgram[]
  consortia: DepositProgram[]
}

export const STATUS_LABEL: Record<ProgramStatus, string> = {
  live: 'Live',
  pilot: 'Pilot',
  sandbox: 'Sandbox',
  building: 'Building',
}

export const COUNTRY_FLAG: Record<string, string> = {
  US: '🇺🇸',
  UK: '🇬🇧',
  SG: '🇸🇬',
  DE: '🇩🇪',
}

export const TOKENIZED_DEPOSITS_DATA: TokenizedDepositsData = {
  banks: [
    {
      id: 'jpm',
      name: 'JPMorgan',
      program: 'Kinexys / JPM Coin (JPMD)',
      country: 'US',
      status: 'live',
      logo: '/logos/jpm.png',
      summary:
        'The most mature tokenized deposit program in the market. JPM Coin is a USD deposit token, and JPMorgan is the first bank to issue a deposit token on a public blockchain.',
      currencies: ['USD', 'EUR', 'GBP', 'AUD', 'HKD', 'JPY', 'CNY', 'SGD'],
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['JPM Private Chain', 'Base (Ethereum L2)', 'Canton Network (planned)', 'Mastercard Multi-Token Network'],
      stats: [
        { value: '$4T+', label: 'Cumulative volume' },
        { value: '$7B', label: 'Average daily volume, 2026' },
        { value: '$10B', label: 'Daily volume target' },
        { value: '8', label: 'Currencies supported' },
      ],
      clientsLabel: 'Key clients',
      clients: ['BMW Group', 'FirstRand', 'Mitsubishi Corp', 'B2C2', 'Siemens', 'Coinbase'],
      differentiator:
        'Only bank bridging a private deposit ledger to a public chain. Also runs Kinexys Fund Flow and the Tokenized Collateral Network.',
      roadmap: ['Canton Network integration', 'Expand APAC currency support', 'Reach $10B average daily volume'],
    },
    {
      id: 'citi',
      name: 'Citi',
      program: 'Citi Token Services (CTS)',
      country: 'US',
      status: 'live',
      logo: '/logos/citi.png',
      summary:
        "Enables near-instant movement of tokenized deposits across Citi's branch network, 24/7. Named a 2025 American Banker Innovation of the Year.",
      currencies: ['USD', 'EUR'],
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['Citi Integrated Digital Assets Platform', 'Swift Digital Ledger (bridge)'],
      stats: [
        { value: '5', label: 'Live markets' },
        { value: '1', label: 'External bank onboarded' },
        { value: '2025', label: 'Innovation of the Year' },
        { value: '2026', label: 'Japan launch, planned' },
      ],
      clientsLabel: 'Key clients',
      clients: ['Siam Commercial Bank', 'Phillip Securities Thailand'],
      differentiator:
        "First foreign bank offering tokenized deposit remittances in Japan. Tied into Citi's 24/7 USD Clearing rail.",
      roadmap: ['Launch in Japan', 'Expand across Asia-Pacific', "Enable transfers beyond Citi's own network"],
    },
    {
      id: 'dbs',
      name: 'DBS',
      program: 'DBS Token Services',
      country: 'SG',
      status: 'live',
      logo: '/logos/dbs.png',
      summary:
        'A suite of blockchain-based services for 24/7 programmable transfers, including Treasury Tokens for internal liquidity management.',
      currencies: ['SGD', 'USD'],
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['DBS Private Chain', "Swift Digital Ledger (core design group)"],
      stats: [
        { value: '12', label: "Banks in Swift's core design group" },
        { value: 'Minutes', label: 'Weekend USD settlement time' },
        { value: '2 days', label: 'Prior industry norm' },
        { value: '2026', label: 'Retail gold token, planned' },
      ],
      clientsLabel: 'Key clients',
      clients: ['Citi (interbank pilot)'],
      differentiator: "Only Asia-headquartered bank in Swift's 12-bank core design group for the Digital Ledger.",
      roadmap: ['Launch retail tokenized gold', 'Deepen interoperability with Kinexys', 'Expand weekend settlement corridors'],
    },
    {
      id: 'hsbc',
      name: 'HSBC',
      program: 'Tokenised Deposit Service (TDS)',
      country: 'UK',
      status: 'live',
      logo: '/logos/hsbc.png',
      summary:
        'Lets corporate clients move tokenized deposits between their own HSBC accounts, instantly and 24/7, across the widest currency and market footprint of any single-bank program.',
      note: 'Currently intra-bank only. The same client can move funds between their own HSBC branches; transfers between different HSBC clients are not yet live.',
      currencies: ['USD', 'EUR', 'GBP', 'SGD', 'HKD', 'CNY'],
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['HSBC Private DLT', 'Swift ISO 20022 messaging'],
      stats: [
        { value: '6', label: 'Live markets' },
        { value: '6', label: 'Currencies supported' },
        { value: '1', label: 'Publicly named client' },
        { value: '0', label: 'Inter-client transfers live' },
      ],
      clientsLabel: 'Key clients',
      clients: ['Ant International'],
      differentiator: 'Widest geographic and currency footprint of any single-bank program.',
      roadmap: ['Enable inter-client transfers', 'Extend Swift ISO 20022 integration', 'Expand beyond intra-bank use cases'],
    },
    {
      id: 'bny',
      name: 'BNY',
      program: 'Tokenized Deposits (Digital Assets Platform)',
      country: 'US',
      status: 'live',
      logo: '/logos/bny.png',
      summary:
        'Mirrors institutional client deposit balances on a private blockchain, enabling near real time transfers for collateral, margin and payments. Sits inside a broader digital assets stack that also spans custody and stablecoin services.',
      currencies: ['USD'],
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['BNY Digital Assets Platform (private)', 'On-chain deposit mirror'],
      stats: [
        { value: '$59T', label: 'Assets under custody and administration' },
        { value: 'Jan 2026', label: 'Platform launched' },
        { value: '1st', label: 'G-SIB with regulated digital asset custody' },
        { value: '2+', label: 'Named early participants' },
      ],
      clientsLabel: 'Key clients',
      clients: ['Citadel Securities', 'Circle', 'Ripple Prime (custody)'],
      differentiator:
        "World's largest custodian bank, bringing tokenized deposits into an already deep custody and stablecoin infrastructure stack.",
      roadmap: [
        'Expand rules based real time cash movements',
        'Connect deposits to the Digital Transfer Agency platform',
        'Extend to more institutional client segments',
      ],
    },
    {
      id: 'sc',
      name: 'Standard Chartered',
      program: 'Tokenised Deposit Solution',
      country: 'UK',
      status: 'live',
      logo: '/logos/sc.png',
      summary:
        "Real time treasury and liquidity transfers built on Ant International's Whale platform, live in Hong Kong and Singapore. In August 2026, completed the first live interbank tokenized deposit transaction with HSBC on Swift's Digital Ledger.",
      currencies: ['HKD', 'SGD', 'USD', 'CNH'],
      ledgerLabel: 'Infrastructure',
      ledgerTags: ["Ant International's Whale platform", 'Swift Digital Ledger (interbank)'],
      stats: [
        { value: '1st', label: "Live interbank transaction on Swift's ledger" },
        { value: '2', label: 'Live markets: Hong Kong, Singapore' },
        { value: 'Aug 2026', label: 'First interbank transaction, with HSBC' },
        { value: '4', label: 'Currencies supported' },
      ],
      clientsLabel: 'Key clients',
      clients: ['Ant International'],
      differentiator:
        "First bank, alongside HSBC, to complete a live cross-border tokenized deposit transaction between two different institutions on Swift's Digital Ledger.",
      roadmap: ['Expand beyond Hong Kong and Singapore', 'Onboard more interbank counterparties via Swift', 'Broaden currency coverage'],
    },
    {
      id: 'wf',
      name: 'Wells Fargo',
      program: 'Tokenized Deposit Service',
      country: 'US',
      status: 'building',
      logo: '/logos/wf.png',
      summary:
        "Building its own tokenized deposit service for corporate and commercial clients, in parallel with its participation in The Clearing House's shared network.",
      currencies: ['USD', 'GBP'],
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['Proprietary ledger (not yet disclosed)'],
      stats: [
        { value: 'Fall 2026', label: 'Planned initial rollout' },
        { value: '2', label: 'Currencies at launch: USD, GBP' },
        { value: '2027', label: 'More clients and countries planned' },
        { value: '2', label: 'Parallel tracks: proprietary and Clearing House' },
      ],
      clientsLabel: 'Key clients',
      clients: ['Selected corporate clients (not yet named)'],
      differentiator:
        'Pursuing a dual track strategy, building a proprietary service while also backing The Clearing House’s shared network.',
      roadmap: ['Launch USD to GBP transfers this fall', 'Add clients and currencies through 2027', 'Expand country coverage'],
    },
  ],
  consortia: [
    {
      id: 'tch',
      name: 'The Clearing House',
      program: 'US Shared Tokenized Deposit Network',
      country: 'US',
      status: 'building',
      logo: '/logos/tch.png',
      summary:
        'A 25-bank consortium building shared infrastructure for interbank tokenized deposit transfers, bridging into CHIPS and RTP rails.',
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['Vendor not yet selected', 'Bridges to CHIPS', 'Bridges to RTP'],
      stats: [
        { value: '25', label: 'Member banks' },
        { value: '$6.6T', label: 'US deposits at stake' },
        { value: '$263B+', label: 'Circulating stablecoins' },
        { value: 'H1 2027', label: 'Target launch' },
      ],
      clientsLabel: 'Members',
      clients: ['JPMorgan', 'Bank of America', 'Citi', 'Wells Fargo', 'HSBC', 'BNY', 'PNC', 'Truist', 'U.S. Bank', '+16 more'],
      differentiator:
        "The industry's largest coordinated response to stablecoins, connecting tokenized deposits to existing CHIPS and RTP rails.",
      roadmap: ['Select a blockchain vendor', 'Complete member onboarding', 'Launch in H1 2027'],
    },
    {
      id: 'cbmt',
      name: 'CBMT',
      program: 'Commercial Bank Money Token',
      country: 'DE',
      status: 'sandbox',
      summary:
        'A European consortium building multi-issuer, multi-chain, multi-currency deposit tokens for industrial and corporate payments, with each bank issuing its own token.',
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['CBMT Bridge', 'UDPN messaging', 'Multi-chain, multi-issuer'],
      stats: [
        { value: '7', label: 'Participating banks' },
        { value: '5', label: 'Enterprise partners' },
        { value: '2025', label: 'Sandbox launched' },
        { value: 'EU', label: 'Expanding beyond Germany' },
      ],
      clientsLabel: 'Members',
      clients: ['DZ Bank', 'Deutsche Bank', 'Commerzbank', 'UniCredit', 'Helaba', 'BNP Paribas', 'ABN AMRO'],
      differentiator: 'Each bank issues its own token. The CBMT Bridge keeps them interoperable across chains and currencies.',
      roadmap: ['Complete pre-production sandbox', 'Onboard banks outside Germany', 'Move toward live production'],
    },
    {
      id: 'gbtd',
      name: 'GBTD',
      program: 'Great British Tokenised Deposits',
      country: 'UK',
      status: 'pilot',
      summary:
        'A live UK Finance pilot testing tokenized sterling deposits across three real-world use cases, built on the Regulated Liability Network.',
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['Quant Network', 'Regulated Liability Network'],
      stats: [
        { value: '6', label: 'Participating banks' },
        { value: '3', label: 'Use cases tested' },
        { value: 'Mid-2026', label: 'Pilot end date' },
        { value: '300+', label: 'UK Finance member institutions' },
      ],
      clientsLabel: 'Members',
      clients: ['Barclays', 'HSBC', 'Lloyds', 'NatWest', 'Nationwide', 'Santander'],
      differentiator: 'Offers tokenization as a service, so banks without in-house capability can still participate.',
      roadmap: ['Complete pilot use cases', 'Publish pilot findings', 'Feed results into the wider RLN rollout'],
    },
    {
      id: 'cari',
      name: 'Cari Network',
      program: 'Regional Bank Tokenized Deposits',
      country: 'US',
      status: 'pilot',
      summary:
        'A bank-governed, FDIC-eligible tokenized deposit network purpose-built for US regional and community banks, competing directly with stablecoins on retail rails.',
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['ZKsync Prividium', 'Fireblocks', 'Ethereum-anchored L2'],
      stats: [
        { value: '5', label: 'Founding banks' },
        { value: '$8T+', label: 'Combined assets' },
        { value: 'Q3 2026', label: 'Pilot' },
        { value: 'Q4 2026', label: 'Customer launch target' },
      ],
      clientsLabel: 'Members',
      clients: ['Huntington', 'First Horizon', 'M&T Bank', 'KeyBank', 'Old National'],
      differentiator:
        'Built for regional and community banks that cannot justify a proprietary blockchain build alone. FDIC-eligible by design.',
      roadmap: ['Run Q3 2026 pilot', 'Launch customer-facing product in Q4 2026', 'Expand to more regional banks'],
    },
    {
      id: 'bankchain',
      name: 'BankChain Alliance',
      program: 'Industry Owned State Bank Network',
      country: 'US',
      status: 'building',
      summary:
        '39 US state bankers associations, representing 3,283 banks and $21.8T in assets, building a shared, industry owned blockchain for tokenized deposits, stablecoins, programmable payments and automated settlement.',
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['Technology partner not yet selected'],
      stats: [
        { value: '39', label: 'Founding state associations' },
        { value: '3,283', label: 'Represented banks' },
        { value: '$21.8T', label: 'Represented assets' },
        { value: '2027', label: 'Target launch' },
      ],
      clientsLabel: 'Members',
      clients: ['Florida Bankers Association', 'Texas Bankers Association', 'Indiana Bankers Association', '+36 more state associations'],
      differentiator:
        'The broadest coalition by bank count, built to give community and regional banks ownership rather than access bought from a megabank led network.',
      roadmap: ['Select a technology partner', 'Move associations to direct bank commitments', 'Launch in 2027'],
    },
    {
      id: 'dtx',
      name: 'DTX Consortium',
      program: 'Community Bank Tokenized Deposit Network',
      country: 'US',
      status: 'pilot',
      summary:
        'Formed by the Independent Bankers Association of Texas for community banks that wanted their own seat at the table rather than adopting infrastructure built by larger institutions.',
      ledgerLabel: 'Infrastructure',
      ledgerTags: ['DTX LLC (IBAT subsidiary)'],
      stats: [
        { value: '50+', label: 'Member banks' },
        { value: 'Dec 2025', label: 'Founded' },
        { value: '1', label: 'State association behind it: IBAT' },
        { value: '2026', label: 'Pilot in preparation' },
      ],
      clientsLabel: 'Members',
      clients: ['Independent Bankers Association of Texas', '50+ community banks'],
      differentiator:
        'Earliest community bank consortium to organize, formed specifically to avoid larger banks dictating the terms of shared infrastructure.',
      roadmap: ['Complete governance and risk frameworks', 'Run tokenized deposit pilot', 'Scale membership beyond Texas'],
    },
  ],
}
