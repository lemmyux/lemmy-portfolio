// About page content for both portfolio sites (website/about/<site>.html, made by generate.js).
// Sources: Lemmy's CV (Google Drive) and the Notion portfolio page.
// In text fields, {{...}} highlights a metric and [text](url) makes a link.
module.exports = {
  photo: { src: 'lemmy.jpg', alt: 'Portrait of Lemmy Jnr', w: 900, h: 900 },
  location: 'Lagos, Nigeria',

  story: [
    "I'm Lemmy, a senior product designer based in Lagos, Nigeria. I design products across B2C and B2B software, conversational AI, fintech and crypto, for teams in India, Dubai, the UK and the US.",
    'Most recently, I led product design at SOIN Global, a social intelligence and influencer marketplace for crypto brands and creators. Alongside it, I took [Clona](https://claude.ai/artifact/TZV8JohBEuEKk5NEneYutP), a multi-chain trading terminal, from discovery to MVP.',
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
    ['Clona', 'https://claude.ai/artifact/TZV8JohBEuEKk5NEneYutP'],
    ['Alphablockz', 'https://alphablockz.io/'],
    ['SOIN Global'],
    ['Avinya Labs'],
    ['Hydrogen HR'],
    ['VitaShield'],
    ['BoG Intelligence'],
  ],


  services: ['Product Design', 'UX Research', 'Design Systems', 'Interaction & Motion', 'Prototyping & Testing', 'UX Writing', 'Pitch Decks'],
  tools: 'I design in Figma and Framer, animate in Jitter, make visuals in Illustrator and Photoshop, plan in Notion, and use ChatGPT and other AI tools to research and prototype faster.',


  elsewhere: [
    ['LinkedIn', 'https://www.linkedin.com/in/ugochukwu-lemmy-1ab9521b3/'],
    ['X', 'https://x.com/lemmyux'],
    ['Dribbble', 'https://dribbble.com/Lemmyux'],
    ['Resume', 'https://drive.google.com/file/d/1aKHTNvx0FsJgjQCnflHkWIIyESehs_f0/view?usp=drive_link'],
  ],
};
