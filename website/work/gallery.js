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

  // Designs without a case study. `project` and `year` are optional and show in the caption. Example:
  // { src: 'crypto-wallet.jpg', title: 'Crypto wallet', alt: 'Wallet home screen with balances', type: 'Mobile app', project: 'Wallet', year: 2025 },
  extras: [
    // Bolter, a mobile AI agent chat app (Figma file gz9VLE3Bqrmsuw0l2O8G6j, section "screenshots", node 181:5389).
    { src: 'bolter-chat-list.jpg', title: 'Chat list', alt: 'Chats with pinned workflow agents, filters and team conversations', type: 'Mobile app', project: 'Bolter' },
    { src: 'bolter-agent-home.jpg', title: 'Agent home', alt: 'Talk to Bolter: an empty chat with a row of workflow agents', type: 'Mobile app', project: 'Bolter' },
    { src: 'bolter-notion-approval.jpg', title: 'Access approval', alt: 'Bolter asking to grant Notion read and write access, then editing a page', type: 'Mobile app', project: 'Bolter' },
    { src: 'bolter-group-chats-dark.jpg', title: 'Group chats, dark', alt: 'Dark mode group chat bubbles with member counts', type: 'Mobile app', project: 'Bolter' },
    { src: 'bolter-chat-circles.jpg', title: 'Chat circles', alt: 'Groups, agents and friends as circles with unread badges', type: 'Mobile app', project: 'Bolter' },
    { src: 'bolter-conversation-summaries.jpg', title: 'Conversation summaries', alt: 'Chat list with AI summaries and session tags', type: 'Mobile app', project: 'Bolter' },
    { src: 'bolter-quick-actions.jpg', title: 'Quick actions', alt: 'Agent prompt chips: read docs, deep research, evaluate code, planning, manage team', type: 'Mobile app', project: 'Bolter' },
    { src: 'bolter-agent-new-chat.jpg', title: 'New agent chat', alt: 'Agent Anon greeting with a Slack workflow selector', type: 'Mobile app', project: 'Bolter' },
    { src: 'bolter-agent-team-chat.jpg', title: 'Team chat with an agent', alt: 'An agent and teammates replying in one thread', type: 'Mobile app', project: 'Bolter' },
    { src: 'bolter-chat-list-b.jpg', title: 'Chat list, alternative', alt: 'Alternative chat list layout with pinned agents and filters', type: 'Mobile app', project: 'Bolter' },
  ],
};
