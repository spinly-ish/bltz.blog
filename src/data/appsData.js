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
 * - screenshots: array of screenshot paths (optional)
 */

export const appsData = [
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
        whoItsFor: "For those who appreciate quality design and want to organize tasks using GTD methodology without unnecessary complexity."
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
        description: `<p>Bear is a note-taking app with Markdown support that combines simplicity and power. Perfect for writing, taking notes, creating lists, and even coding.</p>
        <p>The unique tagging system replaces traditional folders and allows flexible note organization. Nested tags support provides even more possibilities.</p>`,
        features: [
            { title: "Markdown Support", desc: "Full Markdown support with live preview and custom syntax." },
            { title: "Tag System", desc: "Organize notes with tags instead of folders — a more flexible approach." },
            { title: "Beautiful Themes", desc: "Many built-in themes including dark variants." },
            { title: "Export Options", desc: "Export to PDF, HTML, DOCX, MD, and other formats." },
            { title: "Wiki Links", desc: "Link notes together using [[wiki links]]." },
            { title: "Focus Mode", desc: "Focus mode for distraction-free writing." }
        ],
        whyWeLoveIt: "Bear found the perfect balance between simplicity and functionality. Writing in it is a pleasure thanks to excellent typography and a thoughtful editor.",
        whoItsFor: "For writers, developers, students, and anyone who appreciates a beautiful and functional note-taking tool."
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
        description: `<p>Notion Calendar (formerly Cron) is a modern calendar that integrates with Notion and other services. Features clean design and smart planning capabilities.</p>
        <p>Multi-calendar support, Google Calendar integration, and time blocking make it an excellent choice for productive work.</p>`,
        features: [
            { title: "Multi-calendar", desc: "Combine multiple Google and Notion calendars in one view." },
            { title: "Scheduling Links", desc: "Create links for scheduling meetings without back-and-forth." },
            { title: "Time Blocking", desc: "Visual time block planning for tasks." },
            { title: "Menu Bar App", desc: "Quick access to schedule from the menu bar." },
            { title: "Notion Integration", desc: "Direct integration with Notion databases." },
            { title: "Keyboard First", desc: "Fast navigation using keyboard shortcuts." }
        ],
        whyWeLoveIt: "Notion Calendar reimagines calendar work. The scheduling links feature saves tons of time on meeting coordination.",
        whoItsFor: "For Notion users and anyone who wants a modern and functional calendar."
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
        description: `<p>Spark is a smart email client that automatically sorts emails by importance and helps achieve inbox zero. Features beautiful design and powerful team collaboration features.</p>
        <p>Smart Inbox groups emails by categories: Personal, Notifications, Newsletters, helping you focus on what's important.</p>`,
        features: [
            { title: "Smart Inbox", desc: "Automatic email sorting by importance and categories." },
            { title: "Send Later", desc: "Schedule emails to be sent at a specific time." },
            { title: "Email Templates", desc: "Templates for quick replies to common emails." },
            { title: "Team Features", desc: "Collaborate on emails, comments, delegation." },
            { title: "Snooze", desc: "Snooze emails until the right moment." },
            { title: "Quick Replies", desc: "Quick replies directly from notifications." }
        ],
        whyWeLoveIt: "Spark makes email manageable again. Smart Inbox actually works and helps you not drown in the email flood.",
        whoItsFor: "For everyone who receives a lot of email and wants to manage it more effectively. Especially useful for teams."
    },
    {
        id: 21,
        name: "OmniFocus 4",
        tagline: "The most powerful GTD task manager",
        category: "productivity",
        categoryDisplay: "Productivity",
        rating: 4.8,
        reviewsCount: "15K",
        iconImage: "/assets/icons/omnifocus.jpg",
        appStoreUrl: "https://apps.apple.com/app/omnifocus-4/id1542143627",
        websiteUrl: "https://www.omnigroup.com/omnifocus",
        price: "$9.99/month or $149.99 (one-time)",
        developer: "The Omni Group",
        size: "68.4 MB",
        compatibility: "macOS 13.0+, iOS 16.0+",
        languages: "English, German, French, Spanish, Japanese, Chinese",
        ageRating: "4+",
        description: `<p>OmniFocus 4 is the gold standard for GTD (Getting Things Done) implementation. This powerhouse task manager offers unmatched flexibility and depth for organizing complex projects and tasks.</p>
        <p>With custom perspectives, powerful review mode, and seamless Apple ecosystem integration, OmniFocus helps you maintain complete control over your commitments and projects.</p>`,
        features: [
            { title: "Custom Perspectives", desc: "Create personalized views to see exactly what you need, when you need it." },
            { title: "Review Mode", desc: "Built-in weekly review feature to keep your system current and trusted." },
            { title: "Forecast View", desc: "See tasks and calendar events together for better planning." },
            { title: "Tags & Contexts", desc: "Organize tasks by location, tool, energy level, or any criteria." },
            { title: "Defer Dates", desc: "Hide tasks until you can actually work on them." },
            { title: "Shortcuts & Siri", desc: "Deep integration with iOS automation and voice control." }
        ],
        whyWeLoveIt: "OmniFocus is for serious GTD practitioners who need maximum flexibility. The review feature is exceptional — it actually makes weekly reviews enjoyable. No other task manager matches its depth.",
        whoItsFor: "GTD practitioners managing complex projects and multiple areas of responsibility. Ideal for professionals who need a trusted system they can customize completely."
    },
    {
        id: 22,
        name: "Nirvana",
        tagline: "Pure GTD methodology in a clean interface",
        category: "productivity",
        categoryDisplay: "Productivity",
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
    {
        id: 23,
        name: "Todoist",
        tagline: "Simple yet powerful task management for everyone",
        category: "productivity",
        categoryDisplay: "Productivity",
        rating: 4.8,
        reviewsCount: "580K",
        iconImage: "/assets/icons/todoist.png",
        appStoreUrl: "https://apps.apple.com/app/todoist-to-do-list-planner/id585829637",
        websiteUrl: "https://todoist.com/",
        price: "Free / $4/month Pro",
        developer: "Doist Inc.",
        size: "98.2 MB",
        compatibility: "macOS 10.15+, iOS 14.0+, Windows, Android, Web",
        languages: "English, Russian, German, French, Spanish, Portuguese, Japanese, Chinese, and 10+ more",
        ageRating: "4+",
        description: `<p>Todoist is the most popular task manager in the world for a reason. It strikes the perfect balance between simplicity and power, making it accessible to beginners while offering enough features for power users.</p>
        <p>With natural language input, powerful filters, and integrations with 80+ apps, Todoist fits seamlessly into any workflow. The generous free tier makes it easy to get started.</p>`,
        features: [
            { title: "Natural Language", desc: "Type 'call mom tomorrow at 3pm' and Todoist understands." },
            { title: "Projects & Sections", desc: "Organize tasks into projects with sections and sub-tasks." },
            { title: "Labels & Filters", desc: "Create custom views with powerful filter queries." },
            { title: "Karma System", desc: "Gamification to build and maintain productivity habits." },
            { title: "80+ Integrations", desc: "Connect with Gmail, Slack, Calendar, and more." },
            { title: "Cross-Platform", desc: "Works everywhere — Mac, iOS, Windows, Android, Web." }
        ],
        whyWeLoveIt: "Todoist just works. The natural language input is the best in class, and the free tier is genuinely useful. It's the easiest recommendation for anyone starting with task management.",
        whoItsFor: "Everyone — from students to executives. Perfect for GTD beginners, teams, and anyone who wants reliable task management without complexity."
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
        description: `<p>Caramba Switcher automatically detects the language you're typing in and switches the keyboard layout. Especially useful for those who write in multiple languages.</p>
        <p>The app uses dictionary analysis and machine learning to detect input language.</p>`,
        features: [
            { title: "Auto-switching", desc: "Automatic layout switching while typing." },
            { title: "Text Correction", desc: "Fix text typed in wrong layout." },
            { title: "Dictionaries", desc: "Support for custom dictionaries and technical terms." },
            { title: "App-specific Rules", desc: "Different settings for different apps." },
            { title: "Statistics", desc: "Switch statistics and time saved." },
            { title: "Hotkeys", desc: "Customizable keyboard shortcuts." }
        ],
        whyWeLoveIt: "Caramba solves one of the most annoying problems when working with multiple languages. Just type — the app will figure it out.",
        whoItsFor: "For everyone who regularly types in multiple languages and is tired of manual layout switching."
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
        description: `<p>Rectangle is a free open-source app for window management using keyboard shortcuts. Quickly position windows to half, quarter of the screen, or other positions.</p>
        <p>Based on Spectacle code but actively developed and supports modern macOS versions.</p>`,
        features: [
            { title: "Keyboard Shortcuts", desc: "Quick window positioning using hotkeys." },
            { title: "Snap Areas", desc: "Drag windows to screen edges for automatic resizing." },
            { title: "Multiple Displays", desc: "Multi-monitor support." },
            { title: "Customizable", desc: "Full keyboard shortcut customization." },
            { title: "Open Source", desc: "Free, open source, no ads." },
            { title: "Menu Bar App", desc: "Minimal system presence." }
        ],
        whyWeLoveIt: "Rectangle is a must-have for productive Mac work. Free, simple, and does exactly what you need.",
        whoItsFor: "For all Mac users who work with multiple windows simultaneously."
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
        description: `<p>Figma is a professional interface design tool that works in the browser. Features powerful real-time collaboration capabilities.</p>
        <p>Became the industry standard for UI/UX design thanks to its convenience and team collaboration features.</p>`,
        features: [
            { title: "Real-time Collaboration", desc: "Multiple designers can work on a file simultaneously." },
            { title: "Components", desc: "Reusable components with variants and auto layout." },
            { title: "Prototyping", desc: "Create interactive prototypes without code." },
            { title: "Dev Mode", desc: "Developer mode with code and specs." },
            { title: "Plugins", desc: "Huge plugin library for extended capabilities." },
            { title: "Version History", desc: "Version history with rollback capability." }
        ],
        whyWeLoveIt: "Figma changed the approach to interface design. Collaboration, browser accessibility, and powerful functionality — all in one.",
        whoItsFor: "For UI/UX designers, product teams, and anyone creating interfaces."
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
        description: `<p>Private Internet Access (PIA) is a veteran VPN service with a proven track record of protecting user privacy. Their no-logs policy has been tested in court multiple times, always confirming they keep no user data.</p>
        <p>With unlimited device connections and highly customizable settings, PIA is a favorite among tech-savvy users who want full control over their VPN experience.</p>`,
        features: [
            { title: "Unlimited Devices", desc: "Connect as many devices as you want with one subscription." },
            { title: "Court-Proven No-Logs", desc: "No-logs policy verified in multiple legal cases." },
            { title: "WireGuard Protocol", desc: "Modern protocol for fast speeds and strong security." },
            { title: "MACE Ad Blocker", desc: "Built-in ad and malware blocker." },
            { title: "Port Forwarding", desc: "Advanced feature for torrenting and hosting." },
            { title: "Open Source Apps", desc: "Fully open-source apps for transparency." }
        ],
        whyWeLoveIt: "PIA's no-logs policy isn't just marketing – it's been proven in court. The unlimited device connections make it incredible value, and the open-source apps mean you can verify the security yourself. Advanced users will love the customization options.",
        whoItsFor: "Privacy-focused users who want a proven, trustworthy VPN. Great for families with the unlimited device policy."
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

    // ============================================
    // VOICE DICTATION APPS
    // ============================================
    {
        id: 16,
        name: "Wispr Flow",
        tagline: "AI-powered voice typing that works everywhere",
        category: "voice",
        categoryDisplay: "Voice Dictation",
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
    },
    {
        id: 17,
        name: "Superwhisper",
        tagline: "Private AI dictation that stays on your Mac",
        category: "voice",
        categoryDisplay: "Voice Dictation",
        rating: 4.9,
        reviewsCount: "12K",
        iconImage: "/assets/icons/superwhisper.jpg",
        appStoreUrl: null,
        websiteUrl: "https://superwhisper.com/",
        price: "$10/month or $99/year",
        developer: "Superwhisper",
        size: "1.2 GB (includes AI models)",
        compatibility: "macOS 13.0+ (Apple Silicon recommended)",
        languages: "English, Spanish, French, German, Italian, Portuguese, Japanese, Chinese, and 90+ more",
        ageRating: "4+",
        description: `<p>Superwhisper runs OpenAI's Whisper model entirely on your Mac — no cloud, no internet required, complete privacy. Your voice never leaves your device.</p>
        <p>The standout feature is custom "modes" — create prompts for different tasks like formal emails, casual messages, or meeting notes. Each mode transforms your speech differently.</p>`,
        features: [
            { title: "100% Local", desc: "All processing happens on-device. Your voice data never leaves your Mac." },
            { title: "Custom Modes", desc: "Create prompts for different contexts — formal, casual, technical, etc." },
            { title: "Offline Ready", desc: "Works without internet once models are downloaded." },
            { title: "Apple Silicon Optimized", desc: "Blazing fast on M1/M2/M3 Macs with Neural Engine." },
            { title: "Global Hotkey", desc: "Start dictating from any app with a keyboard shortcut." },
            { title: "99+ Languages", desc: "Whisper supports nearly 100 languages." }
        ],
        whyWeLoveIt: "For anyone handling sensitive information — legal, medical, financial — Superwhisper is the only choice. Zero data leaves your Mac. The custom modes feature is brilliant for adapting output to different contexts.",
        whoItsFor: "Privacy-conscious professionals, healthcare workers, lawyers, journalists, or anyone who can't risk their voice data in the cloud."
    },
    {
        id: 18,
        name: "MacWhisper",
        tagline: "Transcribe audio files with Whisper AI locally",
        category: "voice",
        categoryDisplay: "Voice Dictation",
        rating: 4.7,
        reviewsCount: "8.5K",
        iconImage: "/assets/icons/macwhisper.png",
        appStoreUrl: null,
        websiteUrl: "https://goodsnooze.gumroad.com/l/macwhisper",
        price: "Free / $29 Pro (one-time)",
        developer: "Good Snooze",
        size: "150 MB - 3 GB (depends on model)",
        compatibility: "macOS 13.0+ (Apple Silicon)",
        languages: "99 languages supported by Whisper",
        ageRating: "4+",
        description: `<p>MacWhisper brings OpenAI's Whisper speech recognition to your Mac as a native app. Drag and drop audio or video files to get accurate transcriptions — all processed locally on your device.</p>
        <p>Perfect for transcribing meetings, interviews, podcasts, or any recorded audio. The Pro version adds real-time dictation and advanced export options.</p>`,
        features: [
            { title: "Local Processing", desc: "All transcription happens on your Mac — completely offline capable." },
            { title: "Drag & Drop", desc: "Simply drop audio/video files to transcribe." },
            { title: "Multiple Formats", desc: "Supports MP3, WAV, M4A, MP4, MOV, and more." },
            { title: "Timestamps", desc: "Get word-level timestamps for easy navigation." },
            { title: "Export Options", desc: "Export as TXT, SRT, VTT, CSV, or JSON." },
            { title: "Batch Processing", desc: "Transcribe multiple files at once (Pro)." }
        ],
        whyWeLoveIt: "MacWhisper is the simplest way to transcribe audio on Mac. No accounts, no subscriptions for basic use, no uploading files anywhere. The free version is genuinely useful, and the Pro upgrade is a one-time purchase.",
        whoItsFor: "Journalists, podcasters, researchers, students — anyone who needs to transcribe recordings. Great for meeting notes and interview transcription."
    },
    {
        id: 19,
        name: "VoiceInk",
        tagline: "Free, open-source voice typing for Mac",
        category: "voice",
        categoryDisplay: "Voice Dictation",
        rating: 4.6,
        reviewsCount: "5.2K",
        iconImage: "/assets/icons/voiceink.png",
        appStoreUrl: null,
        websiteUrl: "https://github.com/VoiceInk/VoiceInk",
        price: "Free (Open Source)",
        developer: "VoiceInk Community",
        size: "500 MB - 2 GB (with models)",
        compatibility: "macOS 12.0+",
        languages: "100+ languages via Whisper models",
        ageRating: "4+",
        description: `<p>VoiceInk is a free, open-source voice-to-text application for macOS that leverages OpenAI's Whisper models for accurate transcription. All processing happens locally — your voice data stays on your device.</p>
        <p>As an open-source project, VoiceInk is transparent, customizable, and community-driven. No subscriptions, no accounts, no data collection.</p>`,
        features: [
            { title: "100% Free", desc: "Completely free and open-source. No hidden costs or subscriptions." },
            { title: "Privacy First", desc: "All processing is local. No internet required after model download." },
            { title: "100+ Languages", desc: "Supports all languages available in Whisper models." },
            { title: "System-wide", desc: "Works across all applications via system integration." },
            { title: "Customizable", desc: "Open-source means you can modify and extend it." },
            { title: "Active Community", desc: "Regular updates and community-driven improvements." }
        ],
        whyWeLoveIt: "VoiceInk proves that excellent voice typing doesn't have to cost anything. It's completely free, respects your privacy, and the community keeps improving it. Perfect for users who value open-source software.",
        whoItsFor: "Open-source enthusiasts, privacy advocates, developers, and anyone who wants powerful voice typing without paying for subscriptions."
    },
    {
        id: 20,
        name: "Voicy",
        tagline: "Fast, accurate voice typing across all apps",
        category: "voice",
        categoryDisplay: "Voice Dictation",
        rating: 4.7,
        reviewsCount: "9.8K",
        iconImage: "/assets/icons/voicy.png",
        appStoreUrl: null,
        websiteUrl: "https://usevoicy.com/",
        price: "$8.49/month or $220 lifetime",
        developer: "Voicy",
        size: "95 MB",
        compatibility: "macOS 12.0+, Windows 10+",
        languages: "50+ languages with 99%+ accuracy",
        ageRating: "4+",
        description: `<p>Voicy delivers professional-grade voice typing with over 99% accuracy in 50+ languages. It works across all your applications and features smart punctuation, formatting, and voice commands.</p>
        <p>The app offers both cloud and local processing options, letting you choose between maximum speed or complete privacy.</p>`,
        features: [
            { title: "99%+ Accuracy", desc: "Industry-leading accuracy across 50+ languages." },
            { title: "Hybrid Processing", desc: "Choose between cloud (faster) or local (private) processing." },
            { title: "Voice Commands", desc: "Control your Mac with voice — open apps, navigate, format text." },
            { title: "Custom Vocabulary", desc: "Add technical terms, names, and jargon for better recognition." },
            { title: "Lifetime Option", desc: "One-time payment option available — no ongoing subscription." },
            { title: "Cross-Platform", desc: "Works on both macOS and Windows." }
        ],
        whyWeLoveIt: "Voicy hits the sweet spot between features and price. The lifetime license option is great for users who hate subscriptions. The hybrid processing model lets you choose speed or privacy based on the task.",
        whoItsFor: "Professionals who want reliable voice typing without the premium price. Great for bilingual users with its excellent multi-language support."
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
    { id: 'productivity', name: 'Productivity', icon: '⚡' },
    { id: 'utilities', name: 'Utilities', icon: '🔧' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'vpn', name: 'VPN', icon: '🛡️' },
    { id: 'voice', name: 'Voice Dictation', icon: '🎙️' },
];

/**
 * Setups - curated app collections for specific use cases
 * Apps can belong to multiple setups (many-to-many relationship)
 */
export const setups = [
    {
        id: 'product-manager',
        name: 'Product Manager Kit',
        icon: '📊',
        description: 'Essential apps for product managers',
        appIds: [1, 3, 4, 5, 6, 10] // Things 3, Obsidian, Notion Calendar, Spark, Paste, Figma
    },
    {
        id: 'macos-newcomer',
        name: 'macOS Newcomer Kit',
        icon: '🍎',
        description: 'Must-have apps for Windows switchers',
        appIds: [6, 7, 8, 9] // Paste, Caramba Switcher, Rectangle, Bartender
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
