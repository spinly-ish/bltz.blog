# bltz.blog

iOS App Reviews & Recommendations — affiliate website for curated iOS apps.

## 🚀 Project Overview

A dynamic website showcasing iOS app reviews with affiliate links to the App Store. Built as a learning project with plans to migrate to React.

## 📁 Project Structure

```
bltz.blog/
├── index.html          # Main page (cards generated dynamically)
├── app-detail.html     # App detail page (loads data from URL params)
├── css/
│   └── styles.css      # All styles (CSS variables, responsive)
├── js/
│   ├── apps-data.js    # Centralized app database (15 apps)
│   └── main.js         # Dynamic rendering & routing
├── docs/
│   └── LEARNING_GUIDE.md  # Educational documentation (gitignored)
└── README.md
```

## 🎨 Features

- **Dark theme** inspired by modern app stores
- **Responsive design** (mobile-first approach)
- **Dynamic card generation** from JavaScript data
- **URL-based routing** for app detail pages
- **Category filtering** with real-time updates
- **Real VPN apps** with actual App Store links

## 🛡️ VPN Apps (Real)

Based on [vpnMentor's Top 5 VPNs 2026](https://www.vpnmentor.com):

1. **ExpressVPN** — Fast, secure & easy to use
2. **CyberGhost** — Streaming-optimized servers
3. **Private Internet Access** — Proven no-logs VPN
4. **NordVPN** — Advanced security features
5. **Surfshark** — Unlimited devices, great value

## 🛠️ Tech Stack

**Current (Phase 1-2):**
- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (Dynamic rendering, URL params)

**Planned (Phase 3):**
- React
- TypeScript
- React Router
- Tailwind CSS

## 🏃 Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Or use a local server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx serve
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

### Phase 3: React Migration
- [ ] Set up Vite + React
- [ ] Convert to components (AppCard, AppDetail)
- [ ] Add React Router
- [ ] State management (useState, useContext)

### Phase 4: Production
- [ ] Real app reviews & content
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Affiliate link tracking

## 📄 License

MIT License

---

Made with ⚡ by bltz.blog
