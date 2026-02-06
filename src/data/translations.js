export const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      badge: "Available for Remote Work",
      title: "Backend Developer",
      subtitle:
        "Building scalable SaaS platforms, APIs, and high-performance backend systems using Laravel and Node.js",
      cta: {
        hire: "Hire Me",
        projects: "View Projects",
        cv: "Download CV",
      },
    },

    // About Section
    about: {
      label: "About Me",
      title: "Crafting robust backends since 2022",
      description: [
        "I'm a Laravel Backend Developer based in Egypt, working remotely with clients across Saudi Arabia and beyond. I specialize in building production-grade SaaS platforms, e-commerce systems, and multi-tenant applications that scale.",
        "My work focuses on turning complex business requirements into clean, maintainable code. From architecting RESTful APIs and payment integrations to building admin dashboards and notification systems, I deliver solutions that solve real problems.",
        "With experience across transportation, education, nutrition, finance, and healthcare platforms, I understand how to build systems that handle real user traffic and business complexity.",
      ],
      stats: {
        experience: "Years Exp",
        projects: "Projects",
        companies: "Companies",
      },
    },

    // Skills Section
    skills: {
      label: "Technical Skills",
      title: "Technologies I work with",
      description:
        "A curated set of tools and frameworks I use daily to build reliable, high-performance applications",
      categories: {
        backend: {
          title: "Backend Development",
          items: [
            "PHP",
            "Laravel",
            "Laravel Nova",
            "Node.js",
            "Express.js",
            "RESTful APIs",
            "MVC",
            "OOP",
            "Queues & Jobs",
          ],
        },
        frontend: {
          title: "Frontend",
          items: [
            "Vue.js 3",
            "Inertia.js",
            "Blade Templates",
            "HTML5",
            "CSS3",
            "JavaScript",
            "jQuery",
            "Ajax",
          ],
        },
        database: {
          title: "Databases",
          items: [
            "MySQL",
            "PostgreSQL",
            "MariaDB",
            "MongoDB",
            "Eloquent ORM",
            "Redis",
            "Query Optimization",
          ],
        },
        auth: {
          title: "Auth & Security",
          items: ["JWT", "Passport", "Sanctum", "Middleware", "Authorization"],
        },
        devops: {
          title: "DevOps & Cloud",
          items: [
            "Docker",
            "AWS",
            "CI/CD Pipelines",
            "Cron Jobs",
            "Deployment Automation",
          ],
        },
        integrations: {
          title: "Integrations",
          items: [
            "Stripe",
            "PayTabs",
            "Noon",
            "Al Rajhi",
            "WhatsApp API",
            "SMS",
            "OneSignal",
            "Google Maps",
          ],
        },
        testing: {
          title: "Testing & Tools",
          items: [
            "PHPUnit",
            "Postman",
            "Git",
            "GitHub",
            "GitLab",
            "Composer",
            "Jira",
          ],
        },
        other: {
          title: "Other",
          items: [
            "RTL/LTR",
            "WebSocket",
            "QR Code",
            "Clean Code",
            "Modular Architecture",
          ],
        },
      },
    },
    // Experience Section
    experience: {
      label: "Professional Journey",
      title: "Experience",
      description:
        "A track record of delivering production systems across diverse industries",
      current: "Current",
      companies: [
        {
          name: "Digital Servers Company",
          role: "Backend Developer",
          location: "Jeddah, Saudi Arabia",
          period: "Sep 2023 – Present",
          description:
            "Building scalable SaaS platforms and production systems for diverse business needs",
          highlights: [
            "Rebuilt entire system architectures and developed comprehensive admin dashboards",
            "Integrated payment gateways (PayTabs, Noon, Al Rajhi) with secure transaction processing",
            "Built multi-provider notification systems with dynamic templates",
            "Developed subscription systems, gamification engines, and CMS platforms",
            "Delivered stable, high-performance platforms with strong scalability",
          ],
        },
        {
          name: "In-Code Hub",
          role: "Backend Developer",
          location: "Cairo, Egypt",
          period: "Feb 2023 – Aug 2023",
          description: "Developed mobile backend APIs and AI-powered solutions",
          highlights: [
            "Built backend features for event management and hotel booking platforms",
            "Implemented subscription systems with GPS tracking integration",
            "Created comprehensive API documentation for mobile applications",
            "Developed secure payment integrations and booking confirmation systems",
          ],
        },
        {
          name: "YallaWeb",
          role: "Backend Developer",
          location: "Qena, Egypt",
          period: "Jan 2022 – Jan 2023",
          description:
            "Built modular backend systems and enhanced platform stability",
          highlights: [
            "Developed backend and admin panels for multi-vendor marketplace",
            "Rebuilt charity platform with custom payment modules",
            "Enhanced platform architecture to support flexible module usage",
            "Improved stability and scalability across multiple platforms",
          ],
        },
      ],
    },

    // Projects Section
    projects: {
      label: "Featured Work",
      title: "Production Projects",
      description: "Real platforms serving thousands of users",
      items: [
        {
          title: "Masaraty Global",
          category: "Transportation Platform",
          description:
            "Complete transportation platform with trip management, driver coordination, and payment processing",
          problem:
            "Need for a scalable ride-booking system with real-time tracking",
          solution:
            "Built comprehensive admin dashboard with Google Maps integration, PayTabs payment gateway, and dynamic notification system",
          outcome:
            "Stable platform handling thousands of trips with automated driver management",
          tech: [
            "Laravel",
            "Google Maps",
            "PayTabs",
            "Notifications",
            "OTP",
            "CMS",
          ],
        },
        {
          title: "Majara",
          category: "Educational Platform",
          description:
            "Multi-level education platform with gamification and exam management",
          problem: "Complex educational structure across multiple grade levels",
          solution:
            "Rebuilt platform with structured curriculum management, Noon payment integration, and full gamification engine",
          outcome:
            "Successful product launch with stable exam system and subscription management",
          tech: [
            "Laravel",
            "Inertia.js",
            "Noon Gateway",
            "Gamification",
            "Excel Import",
          ],
        },
        {
          title: "Cortra",
          category: "SaaS Nutrition Platform",
          description:
            "Multi-tenant meal subscription and nutrition tracking system",
          problem:
            "Need for flexible SaaS platform supporting multiple businesses",
          solution:
            "Built multi-tenant architecture with meal subscriptions, delivery scheduling, and modular payment system",
          outcome:
            "Scalable SaaS platform with comprehensive admin dashboard for branches and delivery teams",
          tech: [
            "Multi-tenant",
            "Laravel",
            "Noon",
            "Al Rajhi",
            "Delivery System",
            "Nutrition Tracking",
          ],
        },
        {
          title: "Mezanyati",
          category: "Finance Management",
          description: "Personal finance tracking application",
          problem: "Users need clear insights into financial behavior",
          solution:
            "Built comprehensive tracking system for income, expenses, debts, and lending",
          outcome:
            "Intuitive platform helping users make better money-management decisions",
          tech: ["Laravel", "Financial Analytics", "Dashboard"],
        },
        {
          title: "Takaful AlArabiya",
          category: "Healthcare Platform",
          description:
            "Medical offers and discounts platform for Saudi customers",
          problem: "Validate membership through government systems",
          solution:
            "Integrated government API for membership validation with automated verification",
          outcome: "Seamless platform connecting users with healthcare offers",
          tech: ["Laravel", "Government API", "Healthcare Integration"],
        },
        {
          title: "Smart Schedule",
          category: "Automotive SaaS",
          description: "Car maintenance tracking and scheduling system",
          problem: "Car owners need automated maintenance reminders",
          solution:
            "Built subscription-based scheduler with Al Rajhi payments and web scraper for car data",
          outcome:
            "Automated system helping users maintain their vehicles efficiently",
          tech: [
            "Laravel",
            "Al Rajhi Bank",
            "Web Scraper",
            "Notifications",
            "Subscriptions",
          ],
        },
      ],
    },

    // Services Section
    services: {
      label: "What I Offer",
      title: "Services",
      description:
        "Specialized backend development services for modern web applications",
      items: [
        {
          icon: "🚀",
          title: "Scalable Backend & API Development",
          description:
            "Building robust RESTful APIs and backend systems that scale with your business growth",
          features: [
            "RESTful API Design",
            "Database Optimization",
            "Authentication & Authorization",
            "Queue Management",
            "Performance Tuning",
          ],
        },
        {
          icon: "⚙️",
          title: "SaaS Architecture & Admin Dashboards",
          description:
            "Complete SaaS solutions with multi-tenant architecture and powerful admin interfaces",
          features: [
            "Multi-tenant Systems",
            "Admin Dashboards",
            "Subscription Management",
            "Role-based Access",
            "Analytics & Reporting",
          ],
        },
        {
          icon: "🔗",
          title: "Integrations, Payments & Automation",
          description:
            "Seamless integration of third-party services and payment gateways",
          features: [
            "Payment Gateways",
            "WhatsApp & SMS",
            "Email Automation",
            "Google Maps",
            "Government APIs",
          ],
        },
      ],
    },

    // Contact Section
    contact: {
      label: "Get in Touch",
      title: "Let's work together",
      description:
        "Available for remote work and freelance opportunities. Let's discuss your project.",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try email directly.",
      },
      info: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        locationValue: "Egypt (Remote)",
      },
    },

    // Footer
    footer: {
      copyright: "© 2026 Mostafa Essa Ahmed. All rights reserved.",
      built: "Built with Vue 3 + Vite + Tailwind CSS",
      social: "Connect with me",
    },
  },
  ar: {
    // Navigation
    nav: {
      about: "نبذة",
      skills: "المهارات",
      experience: "الخبرة",
      projects: "المشاريع",
      services: "الخدمات",
      contact: "تواصل",
    },

    // Hero Section
    hero: {
      badge: "متاح للعمل عن بعد",
      title: "مطور Backend",
      subtitle:
        "متخصص في بناء منصات SaaS قابلة للتوسع وواجهات API وأنظمة خلفية عالية الأداء باستخدام Laravel و Node.js",
      cta: {
        hire: "وظفني",
        projects: "شاهد المشاريع",
        cv: "تحميل السيرة الذاتية",
      },
    },

    // About Section
    about: {
      label: "نبذة عني",
      title: "بناء أنظمة خلفية قوية منذ 2022",
      description: [
        "أنا مطور Backend متخصص في Laravel، مقيم في مصر وأعمل عن بُعد مع عملاء في السعودية وخارجها. أتخصص في بناء منصات SaaS جاهزة للإنتاج، أنظمة التجارة الإلكترونية، والتطبيقات متعددة المستأجرين القابلة للتوسع.",
        "يركز عملي على تحويل المتطلبات المعقدة إلى كود نظيف وقابل للصيانة. من بناء واجهات RESTful APIs وتكامل بوابات الدفع إلى بناء لوحات التحكم وأنظمة الإشعارات، أقدم حلولاً تحل مشاكل حقيقية.",
        "مع خبرة عبر منصات النقل والتعليم والتغذية والمالية والرعاية الصحية، أفهم كيفية بناء أنظمة تتعامل مع حركة المستخدمين الفعلية وتعقيد الأعمال.",
      ],
      stats: {
        experience: "سنوات خبرة",
        projects: "مشروع",
        companies: "شركات",
      },
    },

    // Skills Section
    skills: {
      label: "المهارات التقنية",
      title: "التقنيات التي أعمل بها",
      description:
        "مجموعة مختارة من الأدوات والأطر التي أستخدمها يومياً لبناء تطبيقات موثوقة وعالية الأداء",
      categories: {
        backend: {
          title: "تطوير الخلفية",
          items: [
            "PHP",
            "Laravel",
            "Laravel Nova",
            "Node.js",
            "Express.js",
            "RESTful APIs",
            "MVC",
            "OOP",
            "Queues & Jobs",
          ],
        },
        frontend: {
          title: "الواجهة الأمامية",
          items: [
            "Vue.js 3",
            "Inertia.js",
            "Blade Templates",
            "HTML5",
            "CSS3",
            "JavaScript",
            "jQuery",
            "Ajax",
          ],
        },
        database: {
          title: "قواعد البيانات",
          items: [
            "MySQL",
            "PostgreSQL",
            "MariaDB",
            "MongoDB",
            "Eloquent ORM",
            "Redis",
            "تحسين الاستعلامات",
          ],
        },
        auth: {
          title: "المصادقة والأمان",
          items: ["JWT", "Passport", "Sanctum", "Middleware", "التفويض"],
        },
        devops: {
          title: "DevOps والسحابة",
          items: [
            "Docker",
            "AWS",
            "CI/CD Pipelines",
            "Cron Jobs",
            "أتمتة النشر",
          ],
        },
        integrations: {
          title: "التكاملات",
          items: [
            "Stripe",
            "PayTabs",
            "Noon",
            "الراجحي",
            "WhatsApp API",
            "SMS",
            "OneSignal",
            "Google Maps",
          ],
        },
        testing: {
          title: "الاختبار والأدوات",
          items: [
            "PHPUnit",
            "Postman",
            "Git",
            "GitHub",
            "GitLab",
            "Composer",
            "Jira",
          ],
        },
        other: {
          title: "أخرى",
          items: ["RTL/LTR", "WebSocket", "QR Code", "كود نظيف", "بنية نمطية"],
        },
      },
    },

    // Experience Section
    experience: {
      label: "المسيرة المهنية",
      title: "الخبرة",
      description: "سجل حافل في تقديم أنظمة إنتاجية عبر صناعات متنوعة",
      current: "الحالي",
      companies: [
        {
          name: "Digital Servers Company",
          role: "مطور Backend",
          location: "جدة، السعودية",
          period: "سبتمبر 2023 – الحالي",
          description:
            "بناء منصات SaaS قابلة للتوسع وأنظمة إنتاجية لاحتياجات أعمال متنوعة",
          highlights: [
            "إعادة بناء بنية أنظمة كاملة وتطوير لوحات تحكم شاملة",
            "تكامل بوابات الدفع (PayTabs، Noon، الراجحي) مع معالجة معاملات آمنة",
            "بناء أنظمة إشعارات متعددة المزودين مع قوالب ديناميكية",
            "تطوير أنظمة اشتراكات، محركات تلعيب، ومنصات CMS",
            "تقديم منصات مستقرة عالية الأداء مع قابلية توسع قوية",
          ],
        },
        {
          name: "In-Code Hub",
          role: "مطور Backend",
          location: "القاهرة، مصر",
          period: "فبراير 2023 – أغسطس 2023",
          description:
            "تطوير واجهات برمجية للموبايل وحلول مدعومة بالذكاء الاصطناعي",
          highlights: [
            "بناء ميزات خلفية لمنصات إدارة الفعاليات وحجز الفنادق",
            "تنفيذ أنظمة اشتراكات مع تكامل تتبع GPS",
            "إنشاء توثيق API شامل لتطبيقات الموبايل",
            "تطوير تكاملات دفع آمنة وأنظمة تأكيد الحجوزات",
          ],
        },
        {
          name: "YallaWeb",
          role: "مطور Backend",
          location: "قنا، مصر",
          period: "يناير 2022 – يناير 2023",
          description: "بناء أنظمة خلفية نمطية وتحسين استقرار المنصات",
          highlights: [
            "تطوير الخلفية ولوحات الإدارة لسوق متعدد البائعين",
            "إعادة بناء منصة خيرية مع وحدات دفع مخصصة",
            "تحسين بنية المنصة لدعم استخدام وحدات مرنة",
            "تحسين الاستقرار وقابلية التوسع عبر منصات متعددة",
          ],
        },
      ],
    },

    // Projects Section
    projects: {
      label: "أعمال مميزة",
      title: "مشاريع إنتاجية",
      description: "منصات حقيقية تخدم آلاف المستخدمين",
      items: [
        {
          title: "Masaraty Global",
          category: "منصة نقل",
          description:
            "منصة نقل متكاملة مع إدارة الرحلات وتنسيق السائقين ومعالجة الدفع",
          problem: "الحاجة لنظام حجز رحلات قابل للتوسع مع تتبع فوري",
          solution:
            "بناء لوحة تحكم شاملة مع تكامل Google Maps، بوابة PayTabs، ونظام إشعارات ديناميكي",
          outcome:
            "منصة مستقرة تتعامل مع آلاف الرحلات مع إدارة تلقائية للسائقين",
          tech: ["Laravel", "Google Maps", "PayTabs", "إشعارات", "OTP", "CMS"],
        },
        {
          title: "Majara",
          category: "منصة تعليمية",
          description:
            "منصة تعليمية متعددة المستويات مع تلعيب وإدارة الامتحانات",
          problem: "بنية تعليمية معقدة عبر مستويات دراسية متعددة",
          solution:
            "إعادة بناء المنصة مع إدارة منهج منظمة، تكامل Noon، ومحرك تلعيب كامل",
          outcome: "إطلاق منتج ناجح مع نظام امتحانات مستقر وإدارة اشتراكات",
          tech: [
            "Laravel",
            "Inertia.js",
            "Noon Gateway",
            "تلعيب",
            "استيراد Excel",
          ],
        },
        {
          title: "Cortra",
          category: "منصة SaaS للتغذية",
          description: "نظام اشتراكات وجبات وتتبع تغذية متعدد المستأجرين",
          problem: "الحاجة لمنصة SaaS مرنة تدعم أعمال متعددة",
          solution:
            "بناء بنية متعددة المستأجرين مع اشتراكات وجبات، جدولة توصيل، ونظام دفع نمطي",
          outcome:
            "منصة SaaS قابلة للتوسع مع لوحة تحكم شاملة للفروع وفرق التوصيل",
          tech: [
            "Multi-tenant",
            "Laravel",
            "Noon",
            "الراجحي",
            "نظام توصيل",
            "تتبع التغذية",
          ],
        },
        {
          title: "Mezanyati",
          category: "إدارة مالية",
          description: "تطبيق تتبع مالي شخصي",
          problem: "المستخدمون يحتاجون رؤى واضحة للسلوك المالي",
          solution: "بناء نظام تتبع شامل للدخل والمصروفات والديون والإقراض",
          outcome: "منصة بديهية تساعد المستخدمين على اتخاذ قرارات مالية أفضل",
          tech: ["Laravel", "تحليلات مالية", "لوحة تحكم"],
        },
        {
          title: "Takaful AlArabiya",
          category: "منصة صحية",
          description: "منصة عروض طبية وخصومات للعملاء السعوديين",
          problem: "التحقق من العضوية عبر الأنظمة الحكومية",
          solution: "تكامل API حكومي للتحقق من العضوية مع تأكيد تلقائي",
          outcome: "منصة سلسة تربط المستخدمين بعروض الرعاية الصحية",
          tech: ["Laravel", "Government API", "تكامل صحي"],
        },
        {
          title: "Smart Schedule",
          category: "SaaS سيارات",
          description: "نظام تتبع وجدولة صيانة السيارات",
          problem: "أصحاب السيارات يحتاجون تذكيرات صيانة تلقائية",
          solution:
            "بناء جدولة قائمة على الاشتراك مع مدفوعات الراجحي وكاشط ويب لبيانات السيارات",
          outcome: "نظام تلقائي يساعد المستخدمين على صيانة مركباتهم بكفاءة",
          tech: ["Laravel", "بنك الراجحي", "كاشط ويب", "إشعارات", "اشتراكات"],
        },
      ],
    },

    // Services Section
    services: {
      label: "ما أقدمه",
      title: "الخدمات",
      description: "خدمات تطوير خلفية متخصصة لتطبيقات الويب الحديثة",
      items: [
        {
          icon: "🚀",
          title: "تطوير Backend وAPI قابل للتوسع",
          description:
            "بناء واجهات RESTful APIs وأنظمة خلفية قوية تتوسع مع نمو أعمالك",
          features: [
            "تصميم RESTful API",
            "تحسين قواعد البيانات",
            "المصادقة والتفويض",
            "إدارة الطوابير",
            "ضبط الأداء",
          ],
        },
        {
          icon: "⚙️",
          title: "بنية SaaS ولوحات التحكم",
          description:
            "حلول SaaS متكاملة مع بنية متعددة المستأجرين وواجهات إدارة قوية",
          features: [
            "أنظمة متعددة المستأجرين",
            "لوحات التحكم",
            "إدارة الاشتراكات",
            "صلاحيات قائمة على الأدوار",
            "تحليلات وتقارير",
          ],
        },
        {
          icon: "🔗",
          title: "التكاملات والمدفوعات والأتمتة",
          description: "تكامل سلس للخدمات الخارجية وبوابات الدفع",
          features: [
            "بوابات الدفع",
            "واتساب و SMS",
            "أتمتة البريد",
            "خرائط جوجل",
            "واجهات حكومية",
          ],
        },
      ],
    },

    // Contact Section
    contact: {
      label: "تواصل معي",
      title: "لنعمل معاً",
      description: "متاح للعمل عن بُعد وفرص العمل الحر. لنناقش مشروعك.",
      form: {
        name: "اسمك",
        email: "بريدك الإلكتروني",
        message: "رسالتك",
        send: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        success: "تم إرسال الرسالة بنجاح!",
        error: "فشل إرسال الرسالة. الرجاء المحاولة عبر البريد مباشرة.",
      },
      info: {
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        location: "الموقع",
        locationValue: "مصر (عن بُعد)",
      },
    },

    // Footer
    footer: {
      copyright: "© 2026 مصطفى عيسى أحمد. جميع الحقوق محفوظة.",
      built: "مبني بـ Vue 3 + Vite + Tailwind CSS",
      social: "تواصل معي",
    },
  },
};