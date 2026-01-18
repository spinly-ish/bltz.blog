/**
 * bltz.blog - Apps Database
 * Централизованное хранилище данных всех приложений
 * 
 * Структура объекта приложения:
 * - id: уникальный идентификатор
 * - name: название приложения
 * - tagline: короткое описание (1 строка)
 * - category: категория для фильтрации
 * - categoryDisplay: отображаемое название категории
 * - rating: рейтинг (число)
 * - reviewsCount: количество отзывов
 * - icon: эмодзи иконка
 * - gradient: CSS градиент для фона иконки
 * - appStoreUrl: реальная ссылка на App Store
 * - price: цена или модель оплаты
 * - developer: разработчик
 * - size: размер приложения
 * - compatibility: совместимость
 * - languages: поддерживаемые языки
 * - ageRating: возрастной рейтинг
 * - description: полное описание (HTML)
 * - features: массив ключевых особенностей
 * - whyWeLoveIt: почему мы рекомендуем
 * - whoItsFor: для кого это приложение
 */

const appsData = [
    // ============================================
    // PRODUCTIVITY APPS
    // ============================================
    {
        id: 1,
        name: "TaskFlow Pro",
        tagline: "Smart task management",
        category: "productivity",
        categoryDisplay: "Productivity",
        rating: 4.8,
        reviewsCount: "2.4K",
        icon: "📝",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        appStoreUrl: "https://apps.apple.com",
        price: "Free with In-App Purchases",
        developer: "TaskFlow Inc.",
        size: "45.2 MB",
        compatibility: "iOS 15.0 or later",
        languages: "English, Spanish, German, French",
        ageRating: "4+",
        description: `<p>TaskFlow Pro is the ultimate task management app designed for busy professionals who want to stay organized and productive. With its intuitive interface and powerful features, you can easily manage your daily tasks, projects, and goals all in one place.</p>`,
        features: [
            { title: "Smart Task Organization", desc: "Automatically categorize and prioritize your tasks based on deadlines and importance." },
            { title: "Calendar Integration", desc: "Seamlessly sync with your iOS calendar for a unified view of your schedule." },
            { title: "Collaboration Tools", desc: "Share tasks and projects with team members and track progress together." },
            { title: "Custom Reminders", desc: "Set flexible reminders with location-based and time-based triggers." },
            { title: "Beautiful Widgets", desc: "Quick access to your tasks right from your home screen." },
            { title: "Dark Mode", desc: "Easy on the eyes with full dark mode support." }
        ],
        whyWeLoveIt: "TaskFlow Pro stands out from other task managers with its clean design and thoughtful features. The app strikes the perfect balance between simplicity and functionality.",
        whoItsFor: "Whether you're a freelancer juggling multiple projects, a student managing assignments, or a professional looking to boost productivity, TaskFlow Pro adapts to your workflow."
    },
    {
        id: 8,
        name: "CalSync",
        tagline: "Smart calendar assistant",
        category: "productivity",
        categoryDisplay: "Productivity",
        rating: 4.5,
        reviewsCount: "1.8K",
        icon: "📅",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        appStoreUrl: "https://apps.apple.com",
        price: "Free with Premium",
        developer: "CalSync Labs",
        size: "38.5 MB",
        compatibility: "iOS 14.0 or later",
        languages: "English, Japanese, Korean",
        ageRating: "4+",
        description: `<p>CalSync revolutionizes how you manage your time by intelligently syncing all your calendars and providing smart scheduling suggestions.</p>`,
        features: [
            { title: "Multi-Calendar Sync", desc: "Sync Google, Outlook, and iCloud calendars in one place." },
            { title: "Smart Scheduling", desc: "AI-powered suggestions for optimal meeting times." },
            { title: "Time Blocking", desc: "Visual time blocking for focused work sessions." }
        ],
        whyWeLoveIt: "CalSync makes calendar management effortless with its intelligent sync and beautiful interface.",
        whoItsFor: "Perfect for professionals who juggle multiple calendars and need smart scheduling assistance."
    },

    // ============================================
    // DESIGN APPS
    // ============================================
    {
        id: 2,
        name: "PixelCraft",
        tagline: "Intuitive photo editor",
        category: "design",
        categoryDisplay: "Design",
        rating: 4.9,
        reviewsCount: "5.2K",
        icon: "🎨",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        appStoreUrl: "https://apps.apple.com",
        price: "$4.99",
        developer: "PixelCraft Studio",
        size: "89.3 MB",
        compatibility: "iOS 15.0 or later",
        languages: "English, Spanish, French, German, Italian",
        ageRating: "4+",
        description: `<p>PixelCraft is a professional-grade photo editor that brings desktop-level editing capabilities to your iPhone. With over 200 filters and advanced editing tools, transform your photos into stunning works of art.</p>`,
        features: [
            { title: "200+ Filters", desc: "Professional-grade filters for every mood and style." },
            { title: "Layer Support", desc: "Work with multiple layers like in desktop editors." },
            { title: "RAW Editing", desc: "Full support for RAW photo editing." },
            { title: "Export Options", desc: "Export in multiple formats including PSD." }
        ],
        whyWeLoveIt: "PixelCraft brings professional editing to mobile without compromising on features or quality.",
        whoItsFor: "Photographers and designers who need powerful editing tools on the go."
    },

    // ============================================
    // WRITING APPS
    // ============================================
    {
        id: 3,
        name: "WriteSpace",
        tagline: "Distraction-free writing",
        category: "writing",
        categoryDisplay: "Writing",
        rating: 4.7,
        reviewsCount: "3.1K",
        icon: "✍️",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        appStoreUrl: "https://apps.apple.com",
        price: "Free with Premium",
        developer: "WriteSpace Inc.",
        size: "28.7 MB",
        compatibility: "iOS 14.0 or later",
        languages: "English, Spanish, Portuguese",
        ageRating: "4+",
        description: `<p>WriteSpace provides a clean, distraction-free environment for writers. Whether you're working on a novel, blog post, or journal entry, WriteSpace helps you focus on what matters most – your words.</p>`,
        features: [
            { title: "Focus Mode", desc: "Highlight only the paragraph you're working on." },
            { title: "Markdown Support", desc: "Write in Markdown with live preview." },
            { title: "iCloud Sync", desc: "Access your documents across all devices." },
            { title: "Export Options", desc: "Export to PDF, Word, or plain text." }
        ],
        whyWeLoveIt: "WriteSpace eliminates distractions and lets you focus purely on writing.",
        whoItsFor: "Writers, bloggers, and anyone who values a clean writing environment."
    },

    // ============================================
    // HEALTH & FITNESS APPS
    // ============================================
    {
        id: 4,
        name: "FitTrack",
        tagline: "Your fitness companion",
        category: "health",
        categoryDisplay: "Health & Fitness",
        rating: 4.6,
        reviewsCount: "8.9K",
        icon: "🏃",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        appStoreUrl: "https://apps.apple.com",
        price: "Free with Subscription",
        developer: "FitTrack Health",
        size: "67.4 MB",
        compatibility: "iOS 15.0 or later",
        languages: "English, Spanish, German, French, Japanese",
        ageRating: "4+",
        description: `<p>FitTrack is your all-in-one fitness companion that helps you track workouts, monitor nutrition, and achieve your health goals with personalized insights.</p>`,
        features: [
            { title: "Workout Tracking", desc: "Log over 300 different exercises with detailed metrics." },
            { title: "Apple Watch Integration", desc: "Seamless sync with Apple Watch for real-time tracking." },
            { title: "Nutrition Logging", desc: "Track calories and macros with a database of 1M+ foods." },
            { title: "Progress Photos", desc: "Visual progress tracking with side-by-side comparisons." }
        ],
        whyWeLoveIt: "FitTrack combines workout and nutrition tracking in one beautiful, easy-to-use app.",
        whoItsFor: "Anyone serious about fitness who wants comprehensive tracking without complexity."
    },

    // ============================================
    // FINANCE APPS
    // ============================================
    {
        id: 5,
        name: "BudgetWise",
        tagline: "Personal finance tracker",
        category: "finance",
        categoryDisplay: "Finance",
        rating: 4.8,
        reviewsCount: "4.3K",
        icon: "💵",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        appStoreUrl: "https://apps.apple.com",
        price: "Free with Premium",
        developer: "BudgetWise LLC",
        size: "42.1 MB",
        compatibility: "iOS 14.0 or later",
        languages: "English, Spanish, German",
        ageRating: "4+",
        description: `<p>BudgetWise helps you take control of your finances with smart budgeting tools, expense tracking, and insightful reports that show where your money goes.</p>`,
        features: [
            { title: "Smart Budgets", desc: "Create budgets that adapt to your spending patterns." },
            { title: "Bank Sync", desc: "Automatically import transactions from your bank." },
            { title: "Bill Reminders", desc: "Never miss a payment with smart reminders." },
            { title: "Reports & Insights", desc: "Visualize your spending with beautiful charts." }
        ],
        whyWeLoveIt: "BudgetWise makes personal finance accessible with its intuitive design and smart features.",
        whoItsFor: "Anyone looking to get better control of their finances without spreadsheet complexity."
    },

    // ============================================
    // PHOTO & VIDEO APPS
    // ============================================
    {
        id: 6,
        name: "SnapEnhance",
        tagline: "AI-powered photo editing",
        category: "photo",
        categoryDisplay: "Photo & Video",
        rating: 4.9,
        reviewsCount: "12.4K",
        icon: "📸",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        appStoreUrl: "https://apps.apple.com",
        price: "$2.99",
        developer: "SnapEnhance AI",
        size: "156.8 MB",
        compatibility: "iOS 15.0 or later",
        languages: "English, Chinese, Japanese, Korean",
        ageRating: "4+",
        description: `<p>SnapEnhance uses cutting-edge AI to automatically enhance your photos. One tap transforms ordinary shots into professional-looking images.</p>`,
        features: [
            { title: "AI Enhancement", desc: "One-tap automatic photo enhancement powered by AI." },
            { title: "Portrait Mode", desc: "Add professional bokeh effect to any photo." },
            { title: "Sky Replacement", desc: "Replace dull skies with stunning alternatives." },
            { title: "Batch Processing", desc: "Enhance multiple photos at once." }
        ],
        whyWeLoveIt: "SnapEnhance makes professional photo editing accessible to everyone with its AI-powered tools.",
        whoItsFor: "Anyone who wants stunning photos without learning complex editing software."
    },

    // ============================================
    // UTILITIES APPS
    // ============================================
    {
        id: 7,
        name: "VaultKey",
        tagline: "Secure password manager",
        category: "utilities",
        categoryDisplay: "Utilities",
        rating: 4.7,
        reviewsCount: "6.7K",
        icon: "🔐",
        gradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
        appStoreUrl: "https://apps.apple.com",
        price: "Free with Premium",
        developer: "VaultKey Security",
        size: "34.2 MB",
        compatibility: "iOS 14.0 or later",
        languages: "English, German, French, Spanish",
        ageRating: "4+",
        description: `<p>VaultKey is a secure password manager that keeps all your passwords safe with military-grade encryption. Generate strong passwords and autofill them across apps and websites.</p>`,
        features: [
            { title: "Military-Grade Encryption", desc: "AES-256 encryption keeps your data safe." },
            { title: "Password Generator", desc: "Create strong, unique passwords instantly." },
            { title: "Autofill", desc: "Seamlessly autofill passwords in apps and Safari." },
            { title: "Secure Notes", desc: "Store sensitive information securely." }
        ],
        whyWeLoveIt: "VaultKey combines top-tier security with an easy-to-use interface.",
        whoItsFor: "Everyone who wants to improve their online security without complexity."
    },

    // ============================================
    // SOCIAL APPS
    // ============================================
    {
        id: 9,
        name: "ChatBubble",
        tagline: "Connect with friends",
        category: "social",
        categoryDisplay: "Social",
        rating: 4.4,
        reviewsCount: "15.2K",
        icon: "💬",
        gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        appStoreUrl: "https://apps.apple.com",
        price: "Free",
        developer: "ChatBubble Inc.",
        size: "78.9 MB",
        compatibility: "iOS 14.0 or later",
        languages: "English, Spanish, Portuguese, French",
        ageRating: "12+",
        description: `<p>ChatBubble is a modern messaging app that makes staying connected with friends and family fun and easy with unique features and beautiful design.</p>`,
        features: [
            { title: "Group Chats", desc: "Create groups with up to 500 members." },
            { title: "Voice Messages", desc: "Send voice messages with fun effects." },
            { title: "Custom Themes", desc: "Personalize your chat experience." },
            { title: "End-to-End Encryption", desc: "Your conversations stay private." }
        ],
        whyWeLoveIt: "ChatBubble makes messaging fun again with its playful features and solid privacy.",
        whoItsFor: "Anyone looking for a fresh, fun way to stay connected with their circle."
    },

    // ============================================
    // TRENDING APPS
    // ============================================
    {
        id: 10,
        name: "BeatMaker",
        tagline: "Create music anywhere",
        category: "trending",
        categoryDisplay: "Trending",
        rating: 4.8,
        reviewsCount: "9.1K",
        icon: "🎵",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        appStoreUrl: "https://apps.apple.com",
        price: "$9.99",
        developer: "BeatMaker Studios",
        size: "234.5 MB",
        compatibility: "iOS 15.0 or later",
        languages: "English, Japanese, Korean, German",
        ageRating: "4+",
        description: `<p>BeatMaker is a professional music production studio in your pocket. Create beats, record vocals, and produce full tracks with studio-quality tools.</p>`,
        features: [
            { title: "Beat Sequencer", desc: "Create beats with an intuitive step sequencer." },
            { title: "Sound Library", desc: "Access 10,000+ professional sounds and loops." },
            { title: "Multi-Track Recording", desc: "Record and mix up to 24 tracks." },
            { title: "Export & Share", desc: "Export in WAV, MP3, or share directly to platforms." }
        ],
        whyWeLoveIt: "BeatMaker brings professional music production to mobile without compromising on quality.",
        whoItsFor: "Musicians, producers, and anyone who wants to create music on the go."
    },

    // ============================================
    // VPN APPS (Real apps from vpnMentor Top 5)
    // ============================================
    {
        id: 11,
        name: "ExpressVPN",
        tagline: "Fast, secure & easy to use",
        category: "vpn",
        categoryDisplay: "VPN",
        rating: 4.7,
        reviewsCount: "294K",
        icon: "🛡️",
        gradient: "linear-gradient(135deg, #DA3940 0%, #8B0000 100%)",
        appStoreUrl: "https://apps.apple.com/app/expressvpn-vpn-fast-secure/id886492891",
        price: "Free with Subscription",
        developer: "ExpressVPN",
        size: "98.5 MB",
        compatibility: "iOS 15.0 or later",
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
        icon: "👻",
        gradient: "linear-gradient(135deg, #FFCC00 0%, #FF9500 100%)",
        appStoreUrl: "https://apps.apple.com/app/cyberghost-vpn-wifi-proxy/id583009522",
        price: "Free with Subscription",
        developer: "CyberGhost S.R.L.",
        size: "112.3 MB",
        compatibility: "iOS 14.0 or later",
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
        icon: "🔒",
        gradient: "linear-gradient(135deg, #4BB543 0%, #2E7D32 100%)",
        appStoreUrl: "https://apps.apple.com/app/private-internet-access-vpn/id955626407",
        price: "Free with Subscription",
        developer: "Private Internet Access, Inc.",
        size: "89.7 MB",
        compatibility: "iOS 14.0 or later",
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
        icon: "🏔️",
        gradient: "linear-gradient(135deg, #4687FF 0%, #1A237E 100%)",
        appStoreUrl: "https://apps.apple.com/app/nordvpn-vpn-fast-secure/id905953485",
        price: "Free with Subscription",
        developer: "Nordvpn S.A.",
        size: "124.8 MB",
        compatibility: "iOS 15.0 or later",
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
        icon: "🦈",
        gradient: "linear-gradient(135deg, #1ECAD3 0%, #0D5C63 100%)",
        appStoreUrl: "https://apps.apple.com/app/surfshark-vpn-proxy/id1391782046",
        price: "Free with Subscription",
        developer: "Surfshark B.V.",
        size: "95.2 MB",
        compatibility: "iOS 14.0 or later",
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
    }
];

// Экспортируем данные глобально
window.appsData = appsData;

// Вспомогательные функции для работы с данными

/**
 * Получить приложение по ID
 * @param {number} id - ID приложения
 * @returns {Object|undefined} - Объект приложения или undefined
 */
window.getAppById = function(id) {
    return appsData.find(app => app.id === parseInt(id));
};

/**
 * Получить приложения по категории
 * @param {string} category - Категория
 * @returns {Array} - Массив приложений
 */
window.getAppsByCategory = function(category) {
    if (category === 'all') return appsData;
    return appsData.filter(app => app.category === category);
};

/**
 * Получить все уникальные категории
 * @returns {Array} - Массив объектов категорий
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
