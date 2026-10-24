# Lemmy Jnr — Portfolio

Personal portfolio for Lemmy Jnr, Senior Product Designer (AI, Fintech, Web3), in two layout variations.

- **Variation A** (Turbo-inspired): https://lemmy-portfolio-a.vercel.app
- **Variation B** (Ace-inspired): https://lemmy-portfolio-b.vercel.app

## What's here

| Path | What it is |
|---|---|
| `website/lemmy-portfolio-a.html`, `website/lemmy-portfolio-b.html` | The two homepages |
| `website/work/content.js` | Case study text (Rana, SOIN Attention Market, VitaShield, SOIN Talent Marketplace) |
| `website/work/about.js` | About page content (story, experience, clients, education), from the CV and Notion |
| `website/work/booking.js` | Book a call settings (Google Calendar appointment schedule, call length) |
| `website/work/generate.js` | Builds the case study pages (`website/work/{a,b}/`), Book a call pages (`website/book/`) and About pages (`website/about/`) |
| `website/img/` | Project covers and case study screens |
| `website/vercel/build.sh` | Wraps everything into deployable sites for Vercel |

## Build and deploy

```sh
node website/work/generate.js        # after editing content.js, about.js or booking.js
sh website/vercel/build.sh           # makes website/vercel/lemmy-portfolio-{a,b}/
cd website/vercel/lemmy-portfolio-a && vercel deploy --prod --yes
cd ../lemmy-portfolio-b && vercel deploy --prod --yes
```

Plain HTML, CSS and JavaScript — no framework or build tooling beyond Node for the generator.
Fonts: Instrument Sans and Fragment Mono (Google Fonts). Interface sounds are synthesised with the Web Audio API.
