// About page content for both portfolio sites (website/about/<site>.html, made by generate.js).
// Sources: Lemmy's CV (Google Drive) and the Notion portfolio page.
// In text fields, {{...}} highlights a metric and [text](url) makes a link.
module.exports = {
  photo: { src: 'lemmy.jpg', alt: 'Portrait of Lemmy Jnr', w: 900, h: 900 },
  location: 'Lagos, Nigeria',

  story: [
    "I'm Lemmy, a senior product designer based in Lagos, Nigeria. I design products across B2C and B2B software, conversational AI, fintech and crypto, for teams in India, Dubai, the UK and the US.",
    'Most recently, I led product design at SOIN Global, a social intelligence and influencer marketplace for crypto brands and creators. Alongside it, I took [Travon](https://claude.ai/artifact/TZV8JohBEuEKk5NEneYutP), a multi-chain meme coin trading terminal, from discovery to MVP.',
    'Before that, I spent a year leading design at [Alpha Blockz](https://alphablockz.io/), a $100M startup incubator, shipping websites, design systems and investor decks that helped its startups raise {{$5M+}}. Over the same stretch I worked with Avinya Labs in Dubai on an AI-powered crypto trading app and Telegram mini-games.',
    'I started in 2022 at BeCreative Agency, redesigning client websites, then moved into enterprise software at Hydrogen HR, working on HR, payroll and job board platforms. I studied Computer Science at the University of Nigeria, Nsukka.',
    "Altogether, the startups I've designed for have secured over {{$10M in funding}} and reached {{50k+ users}}.",
  ],

  facts: [
    ['Based in', 'Lagos, Nigeria'],
    ['Designing since', '2022'],
    ['Focus', 'B2B & B2C software, AI, Fintech & Crypto'],
    ['Status', 'Open to work'],
  ],

  clients: [
    ['Holcim', 'https://www.holcim.com/'],
    ['Tenset 2.0', 'https://redacted.tenset.io/'],
    ['Travon', 'https://claude.ai/artifact/TZV8JohBEuEKk5NEneYutP'],
    ['Alphablockz', 'https://alphablockz.io/'],
    ['SOIN Global'],
    ['Avinya Labs'],
    ['Hydrogen HR'],
    ['VitaShield'],
    ['BoG Intelligence'],
  ],

  experience: [
    {
      company: 'SOIN Global', role: 'Product Designer', place: 'India', dates: 'Jul 2025 – Jan 2026',
      summary: 'End-to-end design of a social intelligence and influencer marketplace platform, from discovery and UX architecture to high-fidelity UI and developer handoff.',
      points: [
        'Researched crypto analytics and growth platforms such as Cookie3 and Kaito, contributing to a {{30%}} improvement in feature clarity for first-time users.',
        'Designed analytics dashboards and profile systems for influencer performance, brand trust and campaign tracking, cutting user decision time by {{25%}}.',
        'Set up a modular design system and interaction patterns that made feature iteration {{40%}} faster.',
      ],
    },
    {
      company: 'Travon Trading Terminal', role: 'Product Designer, contract', place: 'Lagos', dates: 'Oct 2025 – Dec 2025',
      summary: 'Product design for a multi-chain meme coin trading terminal, owning UX strategy, research, wireframes, UI and handoff from discovery to MVP.',
      points: [
        'Simplified token selection, gas visibility and slippage controls in the core trading and swap flows, reducing user friction by {{35–40%}}.',
        'Designed a non-custodial copy trading experience that fixes the fund-control and transparency issues seen in competitors.',
        'Built wallet and trader analytics (PnL, ROI, win rate) that cut the time to find profitable wallets by {{45–50%}}.',
      ],
    },
    {
      company: 'Alpha Blockz', role: 'Product Designer', place: 'British Virgin Islands (UK)', dates: 'Oct 2024 – Oct 2025',
      summary: 'Design strategy and shared systems for a $100M startup incubator and its portfolio companies.',
      points: [
        'Shipped consumer websites across gaming, AI and social apps, each with its own reusable design system.',
        'Created investor-ready pitch decks and product narratives that supported {{$5M+}} in secured capital.',
        'Improved delivery speed and cross-project alignment by {{30%+}} through centralised design leadership.',
      ],
    },
    {
      company: 'Avinya Labs', role: 'UI/UX Designer', place: 'Dubai', dates: 'Sep 2024 – May 2025',
      summary: 'Product design across 6+ teams in a startup incubator, from an AI-powered crypto trading app to consumer gaming products.',
      points: [
        'Led UX/UI for Telegram mini-games and crypto casino games, driving a {{65%}} increase in engagement and {{30%}} growth in daily active users.',
        'Acted as project manager across design, engineering and marketing, reducing cycle time by {{25%+}}.',
      ],
    },
    {
      company: 'Hydrogen HR', role: 'UI/UX Designer, contract', place: 'Lagos', dates: 'Mar 2023 – Aug 2023',
      summary: 'Migration to a modern, accessible HR and job board platform, alongside payroll and learning products.',
      points: [
        'Wireframes and interactive prototypes that led to a {{50%}} increase in employer integration and payroll adoption.',
      ],
    },
    {
      company: 'BeCreative Agency', role: 'Product Designer', place: 'Port Harcourt', dates: 'Jan 2022 – Mar 2023',
      summary: 'Website redesigns, user research and A/B testing for agency clients.',
      points: [
        'Improved navigation, layout and content hierarchy, lifting visitor retention by {{20%}}.',
        'A/B tested 3 key features, raising conversion by {{30%}} and cutting drop-offs by {{25%}}.',
      ],
    },
  ],

  services: ['Product Design', 'UX Research', 'Design Systems', 'Interaction & Motion', 'Prototyping & Testing', 'UX Writing', 'Pitch Decks'],
  tools: 'I design in Figma and Framer, animate in Jitter, make visuals in Illustrator and Photoshop, plan in Notion, and use ChatGPT and other AI tools to research and prototype faster.',

  education: [
    ['University of Nigeria, Nsukka', 'BSc Computer Science (Honours)', '2020 – 2024'],
    ['Udemy', 'Zero Web & Mobile Design UI/UX course', '2021 – 2022'],
  ],

  elsewhere: [
    ['LinkedIn', 'https://www.linkedin.com/in/ugochukwu-lemmy-1ab9521b3/'],
    ['X', 'https://x.com/lemmyux'],
    ['Dribbble', 'https://dribbble.com/Lemmyux'],
    ['Resume', 'https://drive.google.com/file/d/1aKHTNvx0FsJgjQCnflHkWIIyESehs_f0/view?usp=drive_link'],
  ],
};
