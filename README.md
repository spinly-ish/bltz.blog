# bltz.blog

iOS App Reviews & Recommendations — affiliate website for curated iOS apps.

## 🚀 Project Overview

A dynamic website showcasing iOS app reviews with affiliate links to the App Store. Built as a learning project, now powered by **React + Vite**.

## 📁 Project Structure

```
bltz.blog/
├── index.html              # Entry point for Vite
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Root component (state management)
│   ├── index.css           # Global styles (CSS Variables)
│   ├── components/
│   │   ├── Header.jsx      # Site header
│   │   ├── Sidebar.jsx     # Category navigation (controlled)
│   │   ├── AppGrid.jsx     # Grid of app cards
│   │   ├── AppCard.jsx     # Reusable app card component ⭐
│   │   └── Footer.jsx      # Site footer
│   └── data/
│       └── appsData.js     # Centralized app database (ES6 module)
├── docs/                   # Learning documentation (gitignored)
└── README.md
```

## 🎨 Features

- **Dark theme** inspired by modern app stores
- **Responsive design** (mobile-first approach)
- **React components** with proper prop validation
- **Category filtering** with useState
- **Real VPN apps** with actual App Store links

## 🛡️ VPN Apps (Real)

Based on [vpnMentor's Top 5 VPNs 2026](https://www.vpnmentor.com):

1. **ExpressVPN** — Fast, secure & easy to use
2. **CyberGhost** — Streaming-optimized servers
3. **Private Internet Access** — Proven no-logs VPN
4. **NordVPN** — Advanced security features
5. **Surfshark** — Unlimited devices, great value

## 🛠️ Tech Stack

**Current (Phase 3):**
- React 18
- Vite 5
- CSS3 (CSS Variables, Flexbox, Grid)
- PropTypes for component validation

**Planned (Phase 4):**
- React Router (for app detail pages)
- TypeScript
- Tailwind CSS (optional)

## 🏃 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Development Roadmap

### Phase 1: Static HTML/CSS/JS ✅
- [x] Header with logo and auth buttons
- [x] Sidebar with categories
- [x] App cards grid
- [x] App detail page
- [x] Category filtering
- [x] Responsive design

### Phase 2: Dynamic Data ✅
- [x] Centralized data store (apps-data.js)
- [x] Dynamic card generation
- [x] URL-based routing for details
- [x] Real VPN apps with App Store links
- [x] Related apps section

### Phase 3: React Migration ⏳
- [x] Set up Vite + React
- [x] Convert to components (AppCard, AppGrid, Sidebar)
- [x] State management (useState)
- [x] PropTypes validation
- [ ] Add React Router
- [ ] App detail page in React

### Phase 4: Production
- [ ] Real app reviews & content
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Affiliate link tracking

## 📄 License

MIT License

---

Made with ⚡ by bltz.blog
