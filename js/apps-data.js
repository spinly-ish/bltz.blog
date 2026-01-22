/**
 * bltz.blog - Apps Database
 * Centralized apps data storage
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
 * - screenshots: array of screenshot paths (optional)
 */

const appsData = [
    // ============================================
    // PRODUCTIVITY APPS
    // ============================================
    {
        id: 1,
        name: "Things 3",
        tagline: "The best task manager for macOS and iOS",
        category: "productivity",
        categoryDisplay: "Productivity",
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
        description: `<p>Things 3 is an elegant and powerful task manager that implements the GTD methodology. Features beautiful design and thoughtful UX.</p>`,
        features: [
            { title: "GTD Methodology", desc: "Inbox, Today, Upcoming, Anytime, Someday — full GTD implementation." },
            { title: "Quick Entry", desc: "Global hotkey for quickly adding tasks from any app." },
            { title: "Repeating Tasks", desc: "Flexible recurring tasks with multiple options." },
            { title: "Calendar Integration", desc: "Calendar integration to view events alongside tasks." }
        ],
        whyWeLoveIt: "Things 3 is that rare case when an app is both beautiful and functional.",
        whoItsFor: "For those who appreciate quality design and want to organize tasks using GTD."
    },
    {
        id: 2,
        name: "Bear",
        tagline: "Beautiful Markdown notes",
        category: "productivity",
        categoryDisplay: "Productivity",
        rating: 4.7,
        reviewsCount: "42K",
        iconImage: "/assets/icons/bear.png",
        appStoreUrl: "https://apps.apple.com/app/bear/id1091189122",
        websiteUrl: "https://bear.app/",
        price: "Free with Bear Pro subscription",
        developer: "Shiny Frog",
        size: "45.8 MB",
        compatibility: "macOS 11.0+, iOS 15.0+",
        languages: "English, Italian, German, French, Spanish, Japanese, Chinese",
        ageRating: "4+",
        description: `<p>Bear is a note-taking app with Markdown support that combines simplicity and power.</p>`,
        features: [
            { title: "Markdown Support", desc: "Full Markdown support with live preview." },
            { title: "Tag System", desc: "Organize notes with tags instead of folders." },
            { title: "Beautiful Themes", desc: "Many built-in themes including dark variants." },
            { title: "Export Options", desc: "Export to PDF, HTML, DOCX, MD, and other formats." }
        ],
        whyWeLoveIt: "Bear found the perfect balance between simplicity and functionality.",
        whoItsFor: "For writers, developers, students."
    },
    {
        id: 3,
        name: "Obsidian",
        tagline: "Personal knowledge base on Markdown",
        category: "productivity",
        categoryDisplay: "Productivity",
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
        description: `<p>Obsidian is a powerful knowledge base that works with local Markdown files.</p>`,
        features: [
            { title: "Graph View", desc: "Visualize connections between notes." },
            { title: "Backlinks", desc: "Automatic tracking of backlinks." },
            { title: "Plugins", desc: "Over 1000 community plugins." },
            { title: "Local Storage", desc: "All data stored locally." }
        ],
        whyWeLoveIt: "Obsidian gives you full control over your data.",
        whoItsFor: "For researchers, writers, developers."
    },
    {
        id: 4,
        name: "Notion Calendar",
        tagline: "Smart calendar for planning",
        category: "productivity",
        categoryDisplay: "Productivity",
        rating: 4.6,
        reviewsCount: "8.5K",
        iconImage: "/assets/icons/notion-calendar.jpg",
        appStoreUrl: "https://apps.apple.com/app/notion-calendar/id1607562761",
        websiteUrl: "https://www.notion.so/product/calendar",
        price: "Free",
        developer: "Notion Labs",
        size: "89 MB",
        compatibility: "macOS 12.0+, iOS 15.0+",
        languages: "English, French, German, Spanish, Portuguese, Japanese, Korean",
        ageRating: "4+",
        description: `<p>Notion Calendar is a modern calendar that integrates with Notion.</p>`,
        features: [
            { title: "Multi-calendar", desc: "Combine multiple calendars in one view." },
            { title: "Scheduling Links", desc: "Create links for scheduling meetings." },
            { title: "Time Blocking", desc: "Visual time block planning." },
            { title: "Notion Integration", desc: "Direct integration with Notion databases." }
        ],
        whyWeLoveIt: "Notion Calendar reimagines calendar work.",
        whoItsFor: "For Notion users and anyone who wants a modern calendar."
    },
    {
        id: 5,
        name: "Spark",
        tagline: "Smart email client",
        category: "productivity",
        categoryDisplay: "Productivity",
        rating: 4.5,
        reviewsCount: "85K",
        iconImage: "/assets/icons/spark.png",
        appStoreUrl: "https://apps.apple.com/app/spark-email-app-by-readdle/id1176895641",
        websiteUrl: "https://sparkmailapp.com/",
        price: "Free with Spark Premium",
        developer: "Readdle Technologies Limited",
        size: "198 MB",
        compatibility: "macOS 11.0+, iOS 14.0+",
        languages: "English, Russian, German, French, Spanish, Japanese, Chinese, and more",
        ageRating: "4+",
        description: `<p>Spark is a smart email client that automatically sorts emails by importance.</p>`,
        features: [
            { title: "Smart Inbox", desc: "Automatic email sorting by importance." },
            { title: "Send Later", desc: "Schedule emails." },
            { title: "Email Templates", desc: "Templates for quick replies." },
            { title: "Team Features", desc: "Collaborate on emails." }
        ],
        whyWeLoveIt: "Spark makes email manageable again.",
        whoItsFor: "For everyone who receives a lot of email."
    },

    // ============================================
    // UTILITIES APPS
    // ============================================
    {
        id: 6,
        name: "Paste",
        tagline: "Clipboard manager",
        category: "utilities",
        categoryDisplay: "Utilities",
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
        description: `<p>Paste is a clipboard manager that saves the history of everything you copy.</p>`,
        features: [
            { title: "Unlimited History", desc: "Unlimited clipboard history." },
            { title: "Pinboards", desc: "Pinned collections for frequently used items." },
            { title: "iCloud Sync", desc: "Sync between Mac and iOS." },
            { title: "Smart Search", desc: "Fast search through history." }
        ],
        whyWeLoveIt: "Paste turns the clipboard into a powerful tool.",
        whoItsFor: "For everyone who frequently copies and pastes."
    },
    {
        id: 7,
        name: "Caramba Switcher",
        tagline: "Auto keyboard layout switcher",
        category: "utilities",
        categoryDisplay: "Utilities",
        rating: 4.8,
        reviewsCount: "3.2K",
        iconImage: "/assets/icons/caramba.png",
        appStoreUrl: "https://apps.apple.com/app/caramba-switcher/id1565826179",
        websiteUrl: "https://caramba.tools/",
        price: "Free with Pro version",
        developer: "Caramba Tools",
        size: "12.8 MB",
        compatibility: "macOS 11.0+",
        languages: "English, Russian",
        ageRating: "4+",
        description: `<p>Caramba Switcher automatically detects the language and switches the keyboard layout.</p>`,
        features: [
            { title: "Auto-switching", desc: "Automatic layout switching." },
            { title: "Text Correction", desc: "Fix text typed in wrong layout." },
            { title: "Dictionaries", desc: "Support for custom dictionaries." },
            { title: "Hotkeys", desc: "Customizable keyboard shortcuts." }
        ],
        whyWeLoveIt: "Caramba solves one of the most annoying problems when working with multiple languages.",
        whoItsFor: "For everyone who types in multiple languages."
    },
    {
        id: 8,
        name: "Rectangle",
        tagline: "Window management with keyboard",
        category: "utilities",
        categoryDisplay: "Utilities",
        rating: 4.9,
        reviewsCount: "15K",
        iconImage: "/assets/icons/rectangle.svg",
        appStoreUrl: null,
        websiteUrl: "https://rectangleapp.com/",
        price: "Free (Open Source)",
        developer: "Ryan Hanson",
        size: "8.2 MB",
        compatibility: "macOS 10.15+",
        languages: "English",
        ageRating: "4+",
        description: `<p>Rectangle is a free open-source app for window management.</p>`,
        features: [
            { title: "Keyboard Shortcuts", desc: "Quick window positioning using hotkeys." },
            { title: "Snap Areas", desc: "Drag windows to screen edges." },
            { title: "Multiple Displays", desc: "Multi-monitor support." },
            { title: "Open Source", desc: "Free, open source, no ads." }
        ],
        whyWeLoveIt: "Rectangle is a must-have for productive Mac work.",
        whoItsFor: "For all Mac users."
    },
    {
        id: 9,
        name: "Bartender",
        tagline: "Menu bar organization",
        category: "utilities",
        categoryDisplay: "Utilities",
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
        description: `<p>Bartender lets you organize icons in the macOS menu bar.</p>`,
        features: [
            { title: "Hide Icons", desc: "Hide icons to a secondary bar." },
            { title: "Show on Update", desc: "Show icons when state changes." },
            { title: "Search", desc: "Quick search through menu bar icons." },
            { title: "Hotkeys", desc: "Keyboard shortcuts for hidden icons." }
        ],
        whyWeLoveIt: "Bartender is the only solution for an overcrowded menu bar.",
        whoItsFor: "For users with many menu bar apps."
    },

    // ============================================
    // DESIGN APPS
    // ============================================
    {
        id: 10,
        name: "Figma",
        tagline: "Design and prototyping in the browser",
        category: "design",
        categoryDisplay: "Design",
        rating: 4.8,
        reviewsCount: "120K",
        iconImage: "/assets/icons/figma.svg",
        appStoreUrl: null,
        websiteUrl: "https://www.figma.com/",
        price: "Free for individuals, paid teams",
        developer: "Figma, Inc.",
        size: "Web app / Desktop app",
        compatibility: "Web, macOS, Windows",
        languages: "English, Japanese",
        ageRating: "4+",
        description: `<p>Figma is a professional interface design tool.</p>`,
        features: [
            { title: "Real-time Collaboration", desc: "Multiple designers can work simultaneously." },
            { title: "Components", desc: "Reusable components with variants." },
            { title: "Prototyping", desc: "Create interactive prototypes." },
            { title: "Plugins", desc: "Huge plugin library." }
        ],
        whyWeLoveIt: "Figma changed the approach to interface design.",
        whoItsFor: "For UI/UX designers and product teams."
    },

    // ============================================
    // VPN APPS
    // ============================================
    {
        id: 11,
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
        description: `<p>ExpressVPN is the #1 trusted VPN service with over 3,000 servers in 105 countries.</p>`,
        features: [
            { title: "3,000+ Servers", desc: "Connect to servers in 105 countries." },
            { title: "Lightway Protocol", desc: "Proprietary protocol for faster speeds." },
            { title: "Split Tunneling", desc: "Choose which apps use VPN." },
            { title: "No-Logs Policy", desc: "Independently audited no-logs policy." }
        ],
        whyWeLoveIt: "ExpressVPN consistently delivers the fastest speeds while maintaining rock-solid security.",
        whoItsFor: "Power users who want the best combination of speed, security, and reliability."
    },
    {
        id: 12,
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
        description: `<p>CyberGhost VPN offers one of the largest server networks with over 9,000 servers.</p>`,
        features: [
            { title: "9,000+ Servers", desc: "Massive network across 91 countries." },
            { title: "Streaming Servers", desc: "Dedicated servers for Netflix, Disney+." },
            { title: "Gaming Servers", desc: "Low-latency servers for gaming." },
            { title: "45-Day Guarantee", desc: "Extended money-back guarantee." }
        ],
        whyWeLoveIt: "CyberGhost takes the guesswork out of streaming.",
        whoItsFor: "Streaming enthusiasts who want hassle-free access to geo-restricted content."
    },
    {
        id: 13,
        name: "Private Internet Access",
        tagline: "Proven no-logs VPN",
        category: "vpn",
        categoryDisplay: "VPN",
        rating: 4.6,
        reviewsCount: "156K",
        iconImage: "/assets/icons/pia.jpg",
        appStoreUrl: "https://apps.apple.com/app/private-internet-access-vpn/id955626407",
        websiteUrl: "https://www.privateinternetaccess.com/",
        price: "Free with Subscription",
        developer: "Private Internet Access, Inc.",
        size: "89.7 MB",
        compatibility: "iOS 14.0 or later, macOS",
        languages: "English, Spanish, German, French, Dutch, Russian, and 12 more",
        ageRating: "4+",
        description: `<p>Private Internet Access (PIA) is a veteran VPN service with a proven track record.</p>`,
        features: [
            { title: "Unlimited Devices", desc: "Connect as many devices as you want." },
            { title: "Court-Proven No-Logs", desc: "No-logs policy verified in court." },
            { title: "WireGuard Protocol", desc: "Modern protocol for fast speeds." },
            { title: "Open Source Apps", desc: "Fully open-source apps." }
        ],
        whyWeLoveIt: "PIA's no-logs policy isn't just marketing – it's been proven in court.",
        whoItsFor: "Privacy-focused users who want a proven, trustworthy VPN."
    },
    {
        id: 14,
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
        description: `<p>NordVPN is one of the most popular VPN services worldwide.</p>`,
        features: [
            { title: "6,000+ Servers", desc: "Massive network across 111 countries." },
            { title: "Threat Protection", desc: "Blocks ads, trackers, and malware." },
            { title: "Double VPN", desc: "Route traffic through two servers." },
            { title: "Dark Web Monitor", desc: "Alerts if credentials appear on dark web." }
        ],
        whyWeLoveIt: "NordVPN goes beyond basic VPN protection.",
        whoItsFor: "Users who want comprehensive online protection beyond just VPN."
    },
    {
        id: 15,
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
        description: `<p>Surfshark offers premium VPN features at an affordable price.</p>`,
        features: [
            { title: "Unlimited Devices", desc: "Connect all your devices with one subscription." },
            { title: "3,200+ Servers", desc: "Fast servers across 100 countries." },
            { title: "CleanWeb", desc: "Blocks ads, trackers, and malware." },
            { title: "NoBorders Mode", desc: "Works in restrictive regions." }
        ],
        whyWeLoveIt: "Surfshark delivers premium features at a fraction of the price.",
        whoItsFor: "Budget-conscious users who don't want to compromise on features."
    }
];

// Export data globally
window.appsData = appsData;

// Helper functions for working with data

/**
 * Get app by ID
 * @param {number} id - App ID
 * @returns {Object|undefined} - App object or undefined
 */
window.getAppById = function(id) {
    return appsData.find(app => app.id === parseInt(id));
};

/**
 * Get apps by category
 * @param {string} category - Category
 * @returns {Array} - Array of apps
 */
window.getAppsByCategory = function(category) {
    if (category === 'all') return appsData;
    return appsData.filter(app => app.category === category);
};

/**
 * Get all unique categories
 * @returns {Array} - Array of category objects
 */
window.getCategories = function() {
    const categories = [...new Set(appsData.map(app => app.category))];
    return categories.map(cat => {
        const app = appsData.find(a => a.category === cat);
        return {
            id: cat,
            name: app.categoryDisplay
        };
    });
};
