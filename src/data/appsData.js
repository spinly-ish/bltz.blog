/**
 * appsData.js — Centralized apps database
 *
 * ES6 Module version
 *
 * App object structure:
 * - id: unique identifier
 * - name: app name
 * - tagline: short description (1 line)
 * - category: category for filtering
 * - categoryDisplay: displayed category name
 * - rating: rating (number)
 * - reviewsCount: number of reviews
 * - iconImage: path to app icon
 * - appStoreUrl: App Store or website link
 * - websiteUrl: official website link (optional)
 * - price: price or payment model
 * - developer: developer name
 * - size: app size
 * - compatibility: compatibility info
 * - languages: supported languages
 * - ageRating: age rating
 * - description: full description (HTML)
 * - features: array of key features
 * - whyWeLoveIt: why we recommend it
 * - whoItsFor: target audience
 * - videoUrl: path to demo video (optional)
 * - videoPoster: path to video preview image (optional)
 */

export const appsData = [
    // ============================================
    // TASK MANAGEMENT APPS
    // ============================================
    {
        id: 1,
        slug: "things-3",
        name: "Things 3",
        tagline: "The best task manager for macOS and iOS",
        category: "task-management",
        categoryDisplay: "Task Management",
        rating: 4.8,
        reviewsCount: "25K",
        iconImage: "/assets/icons/things3.png",
        appStoreUrl: "https://apps.apple.com/app/things-3/id904280696",
        websiteUrl: "https://culturedcode.com/things/",
        price: "$49.99 (Mac), $9.99 (iOS)",
        developer: "Cultured Code",
        size: "24.5 MB",
        compatibility: "macOS 12.0+, iOS 15.0+",
        languages: "English, German, French, Spanish, Japanese, Chinese, and more",
        ageRating: "4+",
        description: `<p>Things 3 is an elegant and powerful task manager that implements the GTD (Getting Things Done) methodology. The app features beautiful design and thoughtful UX that makes task management enjoyable.</p>
        <p>The unique organization system with Areas, Projects, and Tags allows you to structure tasks of any complexity. Headings support within projects helps break down large tasks into logical blocks.</p>`,
        features: [
            { title: "GTD Methodology", desc: "Inbox, Today, Upcoming, Anytime, Someday — full GTD implementation." },
            { title: "Quick Entry", desc: "Global hotkey for quickly adding tasks from any app." },
            { title: "Repeating Tasks", desc: "Flexible recurring tasks with multiple options." },
            { title: "Calendar Integration", desc: "Calendar integration to view events alongside tasks." },
            { title: "Shortcuts Support", desc: "Full Shortcuts support for automation." },
            { title: "Beautiful Design", desc: "Apple Design Award winning design." }
        ],
        whyWeLoveIt: "Things 3 is that rare case when an app is both beautiful and functional. It's not overloaded with features but has everything you need. Sync is instant, and the native design is a joy to use.",
        whoItsFor: "For those who appreciate quality design and want to organize tasks using GTD methodology without unnecessary complexity.",
        videoUrl: "/assets/videos/things.mp4",
        videoPoster: "/assets/videos/things-poster.jpg"
    },
    {
        id: 3,
        slug: "obsidian",
        name: "Obsidian",
        tagline: "Personal knowledge base on Markdown",
        category: "task-management",
        categoryDisplay: "Task Management",
        rating: 4.9,
        reviewsCount: "18K",
        iconImage: "/assets/icons/obsidian.jpg",
        appStoreUrl: "https://apps.apple.com/app/obsidian-connected-notes/id1557175442",
        websiteUrl: "https://obsidian.md/",
        price: "Free for personal use",
        developer: "Dynalist Inc.",
        size: "156 MB",
        compatibility: "macOS 11.0+, iOS 14.0+, Windows, Linux",
        languages: "English and community translations",
        ageRating: "4+",
        description: `<p>Obsidian is a powerful knowledge base that works with local Markdown files. The main feature is the linking system between notes, which allows you to build a true "second brain."</p>
        <p>Thanks to the huge plugin library, Obsidian can be customized for any needs: from simple notes to complex project management systems.</p>`,
        features: [
            { title: "Graph View", desc: "Visualize connections between notes as an interactive graph." },
            { title: "Backlinks", desc: "Automatic tracking of backlinks between notes." },
            { title: "Plugins", desc: "Over 1000 community plugins for extended functionality." },
            { title: "Local Storage", desc: "All data stored locally in regular .md files — full control." },
            { title: "Canvas", desc: "Visual representation of ideas on an infinite canvas." },
            { title: "Themes", desc: "Huge number of community themes." }
        ],
        whyWeLoveIt: "Obsidian gives you full control over your data and allows you to build a note system of any complexity. It's the perfect tool for creating a personal knowledge base.",
        whoItsFor: "For researchers, writers, developers, and anyone who wants to build a connected knowledge system."
    },
    {
        id: 22,
        slug: "nirvana",
        name: "Nirvana",
        tagline: "Pure GTD methodology in a clean interface",
        category: "task-management",
        categoryDisplay: "Task Management",
        rating: 4.6,
        reviewsCount: "8K",
        iconImage: "/assets/icons/nirvana.jpg",
        appStoreUrl: "https://apps.apple.com/app/nirvana-gtd/id455751886",
        websiteUrl: "https://nirvanahq.com/",
        price: "Free / $5/month Pro",
        developer: "Nirvana Labs",
        size: "12.5 MB",
        compatibility: "iOS 12.0+, Web",
        languages: "English",
        ageRating: "4+",
        description: `<p>Nirvana is built from the ground up around the GTD methodology. Unlike other task managers that adapt to GTD, Nirvana was designed specifically to implement David Allen's system faithfully.</p>
        <p>With dedicated lists for Next Actions, Waiting For, Someday/Maybe, and a Focus view for today's priorities, Nirvana keeps you in the GTD flow without unnecessary complexity.</p>`,
        features: [
            { title: "True GTD Design", desc: "Built specifically for GTD — not adapted, but designed for it." },
            { title: "Focus View", desc: "Star important tasks to see them in a dedicated Focus list." },
            { title: "Next Actions", desc: "Clearly defined next actions for each project." },
            { title: "Waiting For", desc: "Track delegated tasks and things you're waiting on." },
            { title: "Someday/Maybe", desc: "Capture ideas without cluttering your active lists." },
            { title: "Weekly Review", desc: "Guided review process to maintain your system." }
        ],
        whyWeLoveIt: "Nirvana is GTD done right. No bloat, no unnecessary features — just a clean implementation of the methodology. The Focus view is brilliant for selecting what to work on today.",
        whoItsFor: "GTD purists who want a system that follows the methodology without extra complexity. Great for those new to GTD who want proper guidance."
    },

    // ============================================
    // TYPING & CLIPBOARD APPS
    // ============================================
    {
        id: 6,
        slug: "paste",
        name: "Paste",
        tagline: "Clipboard manager",
        category: "typing-clipboard",
        categoryDisplay: "Typing & Clipboard",
        rating: 4.7,
        reviewsCount: "12K",
        iconImage: "/assets/icons/paste.jpg",
        appStoreUrl: "https://apps.apple.com/app/paste-clipboard-manager/id967805235",
        websiteUrl: "https://pasteapp.io/",
        price: "$1.99/month or $14.99/year",
        developer: "Paste Team",
        size: "28.4 MB",
        compatibility: "macOS 11.0+, iOS 14.0+",
        languages: "English, Russian, German, French, Spanish, Japanese, Chinese",
        ageRating: "4+",
        description: `<p>Paste is a clipboard manager that saves the history of everything you copy. Never lose copied text, images, or files again.</p>
        <p>The beautiful ribbon-style interface makes navigating through history intuitive. Pinboards support allows you to save frequently used items.</p>`,
        features: [
            { title: "Unlimited History", desc: "Unlimited clipboard history with search." },
            { title: "Pinboards", desc: "Pinned collections for frequently used items." },
            { title: "Quick Look", desc: "Preview content before pasting." },
            { title: "iCloud Sync", desc: "Sync between Mac and iOS devices." },
            { title: "Smart Search", desc: "Fast search through entire history." },
            { title: "Direct Paste", desc: "Paste directly into active app via hotkey." }
        ],
        whyWeLoveIt: "Paste turns the clipboard into a powerful tool. Once you get used to it, you can't work without it.",
        whoItsFor: "For everyone who frequently copies and pastes: designers, developers, writers, managers."
    },
    // ============================================
    // SYSTEM TOOLS
    // ============================================
    {
        id: 9,
        slug: "bartender",
        name: "Bartender",
        tagline: "Menu bar organization",
        category: "system-tools",
        categoryDisplay: "System Tools",
        rating: 4.6,
        reviewsCount: "8.7K",
        iconImage: "/assets/icons/bartender.svg",
        appStoreUrl: null,
        websiteUrl: "https://www.macbartender.com/",
        price: "$16",
        developer: "Surtees Studios",
        size: "15.3 MB",
        compatibility: "macOS 12.0+",
        languages: "English",
        ageRating: "4+",
        description: `<p>Bartender lets you organize icons in the macOS menu bar. Hide rarely used icons, group them, and show only when needed.</p>
        <p>With Bartender, the menu bar stays clean and organized, even if you have many apps installed.</p>`,
        features: [
            { title: "Hide Icons", desc: "Hide icons to a secondary bar or completely." },
            { title: "Show on Update", desc: "Show icons only when their state changes." },
            { title: "Search", desc: "Quick search through all menu bar icons." },
            { title: "Hotkeys", desc: "Keyboard shortcuts to show hidden icons." },
            { title: "Triggers", desc: "Automatic show/hide based on triggers." },
            { title: "Presets", desc: "Different visible icon sets for different tasks." }
        ],
        whyWeLoveIt: "Bartender is the only solution for those with an overcrowded menu bar. After installing, you wonder how you lived without it.",
        whoItsFor: "For users with many menu bar apps who want organization."
    },

    // ============================================
    // VPN APPS
    // ============================================
    {
        id: 11,
        slug: "expressvpn",
        name: "ExpressVPN",
        tagline: "Fast, secure & easy to use",
        category: "vpn",
        categoryDisplay: "VPN",
        rating: 4.7,
        reviewsCount: "294K",
        iconImage: "/assets/icons/expressvpn.jpg",
        appStoreUrl: "https://apps.apple.com/app/expressvpn-vpn-fast-secure/id886492891",
        websiteUrl: "https://www.expressvpn.com/",
        price: "Free with Subscription",
        developer: "ExpressVPN",
        size: "98.5 MB",
        compatibility: "iOS 15.0 or later, macOS",
        languages: "English, Spanish, German, French, Japanese, Korean, Chinese, and 10 more",
        ageRating: "4+",
        description: `<p>ExpressVPN is the #1 trusted VPN service with over 3,000 servers in 105 countries. It offers industry-leading speed, security, and privacy protection for all your online activities.</p>
        <p>Whether you're streaming your favorite shows, working remotely on public Wi-Fi, or simply browsing the web, ExpressVPN keeps your connection secure and private.</p>`,
        features: [
            { title: "3,000+ Servers", desc: "Connect to servers in 105 countries for unrestricted access." },
            { title: "Lightway Protocol", desc: "Proprietary protocol for faster speeds and better battery life." },
            { title: "Split Tunneling", desc: "Choose which apps use VPN and which don't." },
            { title: "Network Lock", desc: "Kill switch that protects your data if VPN connection drops." },
            { title: "No-Logs Policy", desc: "Independently audited no-logs policy ensures your privacy." },
            { title: "24/7 Support", desc: "Live chat support available around the clock." }
        ],
        whyWeLoveIt: "ExpressVPN consistently delivers the fastest speeds in our tests while maintaining rock-solid security. The Lightway protocol is a game-changer for mobile users, offering quick connections and minimal battery drain. Their commitment to privacy has been verified by independent audits.",
        whoItsFor: "Power users who want the best combination of speed, security, and reliability. Perfect for streaming, gaming, and working remotely."
    },
    {
        id: 12,
        slug: "cyberghost-vpn",
        name: "CyberGhost VPN",
        tagline: "Streaming-optimized servers",
        category: "vpn",
        categoryDisplay: "VPN",
        rating: 4.4,
        reviewsCount: "87K",
        iconImage: "/assets/icons/cyberghost.jpg",
        appStoreUrl: "https://apps.apple.com/app/cyberghost-vpn-wifi-proxy/id583009522",
        websiteUrl: "https://www.cyberghostvpn.com/",
        price: "Free with Subscription",
        developer: "CyberGhost S.R.L.",
        size: "112.3 MB",
        compatibility: "iOS 14.0 or later, macOS",
        languages: "English, German, French, Spanish, Italian, Portuguese, and 8 more",
        ageRating: "4+",
        description: `<p>CyberGhost VPN offers one of the largest server networks with over 9,000 servers in 91 countries. It's specially optimized for streaming, with dedicated servers for Netflix, Disney+, BBC iPlayer, and more.</p>
        <p>The user-friendly interface makes it easy to connect with one tap, while advanced users can customize their experience with detailed settings.</p>`,
        features: [
            { title: "9,000+ Servers", desc: "Massive network across 91 countries for global coverage." },
            { title: "Streaming Servers", desc: "Dedicated servers optimized for Netflix, Disney+, HBO Max, and more." },
            { title: "Gaming Servers", desc: "Low-latency servers optimized for online gaming." },
            { title: "NoSpy Servers", desc: "Premium servers in Romania for maximum privacy." },
            { title: "7 Devices", desc: "Protect up to 7 devices simultaneously." },
            { title: "45-Day Guarantee", desc: "Extended money-back guarantee for peace of mind." }
        ],
        whyWeLoveIt: "CyberGhost takes the guesswork out of streaming with clearly labeled servers for each platform. If you want to watch Netflix US or BBC iPlayer, just pick the right server and you're done. The 45-day money-back guarantee is the longest in the industry.",
        whoItsFor: "Streaming enthusiasts who want hassle-free access to geo-restricted content. Also great for VPN beginners thanks to its simple interface."
    },
    {
        id: 14,
        slug: "nordvpn",
        name: "NordVPN",
        tagline: "Advanced security features",
        category: "vpn",
        categoryDisplay: "VPN",
        rating: 4.6,
        reviewsCount: "412K",
        iconImage: "/assets/icons/nordvpn.jpg",
        appStoreUrl: "https://apps.apple.com/app/nordvpn-vpn-fast-secure/id905953485",
        websiteUrl: "https://nordvpn.com/",
        price: "Free with Subscription",
        developer: "Nordvpn S.A.",
        size: "124.8 MB",
        compatibility: "iOS 15.0 or later, macOS",
        languages: "English, Spanish, German, French, Italian, Japanese, Korean, Chinese, and 15 more",
        ageRating: "4+",
        description: `<p>NordVPN is one of the most popular VPN services worldwide, known for its advanced security features and large server network. With 6,000+ servers in 111 countries, you'll always find a fast connection nearby.</p>
        <p>The Threat Protection feature goes beyond traditional VPN protection, blocking ads, trackers, and malware even when you're not connected to the VPN.</p>`,
        features: [
            { title: "6,000+ Servers", desc: "Massive network across 111 countries worldwide." },
            { title: "Threat Protection", desc: "Blocks ads, trackers, and malware automatically." },
            { title: "Double VPN", desc: "Route traffic through two servers for extra security." },
            { title: "Meshnet", desc: "Create your own secure network between devices." },
            { title: "Dark Web Monitor", desc: "Alerts if your credentials appear on the dark web." },
            { title: "10 Devices", desc: "Protect up to 10 devices simultaneously." }
        ],
        whyWeLoveIt: "NordVPN goes beyond basic VPN protection with features like Threat Protection and Dark Web Monitor. The Meshnet feature is unique and incredibly useful for remote access to your home devices. Consistently fast speeds across all servers.",
        whoItsFor: "Users who want comprehensive online protection beyond just VPN. Great for security-conscious individuals and remote workers."
    },
    {
        id: 15,
        slug: "surfshark",
        name: "Surfshark",
        tagline: "Unlimited devices, great value",
        category: "vpn",
        categoryDisplay: "VPN",
        rating: 4.5,
        reviewsCount: "198K",
        iconImage: "/assets/icons/surfshark.jpg",
        appStoreUrl: "https://apps.apple.com/app/surfshark-vpn-proxy/id1391782046",
        websiteUrl: "https://surfshark.com/",
        price: "Free with Subscription",
        developer: "Surfshark B.V.",
        size: "95.2 MB",
        compatibility: "iOS 14.0 or later, macOS",
        languages: "English, Spanish, German, French, Italian, Portuguese, Russian, and 10 more",
        ageRating: "4+",
        description: `<p>Surfshark offers premium VPN features at an affordable price, with unlimited simultaneous connections on a single subscription. With 3,200+ servers in 100 countries, it delivers fast speeds and reliable connections.</p>
        <p>The CleanWeb feature blocks ads and malware, while Camouflage Mode makes your VPN traffic look like regular traffic, helping you bypass VPN blocks.</p>`,
        features: [
            { title: "Unlimited Devices", desc: "Connect all your devices with one subscription." },
            { title: "3,200+ Servers", desc: "Fast servers across 100 countries." },
            { title: "CleanWeb", desc: "Blocks ads, trackers, and malware." },
            { title: "Camouflage Mode", desc: "Makes VPN traffic undetectable." },
            { title: "MultiHop", desc: "Connect via multiple countries for extra privacy." },
            { title: "NoBorders Mode", desc: "Works in restrictive regions like China." }
        ],
        whyWeLoveIt: "Surfshark delivers premium features at a fraction of the price of competitors. Unlimited device connections make it perfect for households. The Camouflage Mode is excellent for users in countries with VPN restrictions.",
        whoItsFor: "Budget-conscious users who don't want to compromise on features. Perfect for families and users in restrictive countries."
    },

    {
        id: 16,
        slug: "wispr-flow",
        name: "Wispr Flow",
        tagline: "AI-powered voice typing that works everywhere",
        category: "typing-clipboard",
        categoryDisplay: "Typing & Clipboard",
        rating: 4.8,
        reviewsCount: "45K",
        iconImage: "/assets/icons/wisprflow.png",
        appStoreUrl: "https://apps.apple.com/app/wispr-flow-voice-to-text/id6462950860",
        websiteUrl: "https://wisprflow.ai/",
        price: "Free (2K words/week) / $12/month Pro",
        developer: "Wispr AI, Inc.",
        size: "85.2 MB",
        compatibility: "macOS 12.0+, Windows 10+, iOS 16.0+",
        languages: "English, Spanish, French, German, Portuguese, Italian, Japanese, Chinese, and 90+ more",
        ageRating: "4+",
        description: `<p>Wispr Flow is the leading AI voice dictation app that works universally across all your apps. Just talk, and Flow types for you — cleaning up your speech in real-time, removing filler words, and adding proper punctuation.</p>
        <p>The AI understands context and adjusts tone based on the app you're using. Write emails professionally, message friends casually, or code with technical precision — all by voice.</p>`,
        features: [
            { title: "97%+ Accuracy", desc: "Industry-leading transcription accuracy with AI auto-editing." },
            { title: "Works Everywhere", desc: "Use in any app — emails, Slack, docs, even code editors." },
            { title: "Whisper Mode", desc: "Speak quietly in public spaces — Flow still understands you." },
            { title: "Command Mode", desc: "Highlight text and give voice commands to rewrite or format." },
            { title: "Context-Aware", desc: "Adjusts tone and style based on the app you're using." },
            { title: "90+ Languages", desc: "Dictate in over 90 languages with automatic detection." }
        ],
        whyWeLoveIt: "Wispr Flow genuinely replaces your keyboard for most typing tasks. The AI editing is remarkably good at understanding what you meant to say, not just what you said. At 170+ words per minute, it's 3-4x faster than typing.",
        whoItsFor: "Anyone who types a lot — writers, developers, professionals. Especially valuable for people with RSI or those who think faster than they type."
    }
];

// ============================================
// Helper Functions
// ============================================

/**
 * Get app by ID
 * @param {number|string} id - App ID
 * @returns {Object|undefined} - App object or undefined
 */
export function getAppById(id) {
    return appsData.find(app => app.id === parseInt(id));
}

/**
 * Get app by slug
 * @param {string} slug - App slug
 * @returns {Object|undefined} - App object or undefined
 */
export function getAppBySlug(slug) {
    return appsData.find(app => app.slug === slug);
}

/**
 * Resolve app by slug or numeric id (for legacy /app/:id URLs)
 * @param {string} slugOrId - slug or numeric id
 * @returns {Object|undefined}
 */
export function getAppByParam(slugOrId) {
    if (!slugOrId) return undefined;
    if (/^\d+$/.test(slugOrId)) return getAppById(slugOrId);
    return getAppBySlug(slugOrId);
}

/**
 * Get apps by category
 * @param {string} category - Category
 * @returns {Array} - Array of apps
 */
export function getAppsByCategory(category) {
    if (category === 'all') return appsData;
    return appsData.filter(app => app.category === category);
}

/**
 * Get all unique categories
 * @returns {Array} - Array of category objects
 */
export function getCategories() {
    const categories = [...new Set(appsData.map(app => app.category))];
    return categories.map(cat => {
        const app = appsData.find(a => a.category === cat);
        return {
            id: cat,
            name: app.categoryDisplay
        };
    });
}

/**
 * Categories list for navigation
 */
export const categories = [
    { id: 'all', name: 'All Apps', icon: '🔥' },
    { id: 'vpn', name: 'VPN', icon: '🛡️' },
    { id: 'task-management', name: 'Task Management', icon: '⚡' },
    { id: 'typing-clipboard', name: 'Typing & Clipboard', icon: '⌨️' },
    { id: 'system-tools', name: 'System Tools', icon: '🔧' },
];

/**
 * Setups - curated app collections for specific use cases
 * Apps can belong to multiple setups (many-to-many relationship)
 */
export const setups = [
    {
        id: 'macos-newcomer',
        name: 'macOS Newcomer Kit',
        icon: '🍎',
        description: 'Must-have apps for Windows switchers',
        appIds: [6, 9, 16, 11, 1] // Paste, Bartender, Wispr Flow, ExpressVPN, Things 3
    }
];

/**
 * Get apps by setup ID
 * @param {string} setupId - Setup ID
 * @returns {Array} - Array of apps in this setup
 */
export function getAppsBySetup(setupId) {
    const setup = setups.find(s => s.id === setupId);
    if (!setup) return [];
    return appsData.filter(app => setup.appIds.includes(app.id));
}

/**
 * Get setup by ID
 * @param {string} setupId - Setup ID
 * @returns {Object|undefined} - Setup object or undefined
 */
export function getSetupById(setupId) {
    return setups.find(s => s.id === setupId);
}
