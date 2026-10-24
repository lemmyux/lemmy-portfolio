// Gallery page content for both portfolio sites (website/gallery/<site>.html, made by generate.js).
// The gallery shows every screen from the case studies (content.js) plus the extra designs listed below.
//
// To add a design:
//   1. Put the image in website/img/gallery/ (PNG or JPG, ideally 2000px wide).
//   2. Add an entry to `extras` below. Newest first: extras show before the case study screens.
//   3. Run: node website/work/generate.js && sh website/vercel/build.sh
module.exports = {
  // Filter tabs, in order. Each gallery item has one of these as its `type`.
  types: ['Mobile app', 'Dashboard', 'Website', 'Other'],

  // Which filter each case study's screens fall under.
  caseStudies: {
    'rana': 'Mobile app',
    'soin-attention-market': 'Dashboard',
    'soin-talent-marketplace': 'Dashboard',
    'vitashield': 'Website',
  },

  // Screens that are diagrams rather than designs, left out of the gallery.
  skip: ['soin-talent-marketplace/process.jpg'],

  // Designs without a case study. Example:
  // { src: 'crypto-wallet.jpg', title: 'Crypto wallet', alt: 'Wallet home screen with balances', type: 'Mobile app', year: 2025 },
  extras: [],
};
