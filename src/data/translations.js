export const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      // services: "Services",  // Commented out - Services section disabled
      contact: "Contact",
    },

    // Hero Section
    hero: {
      badge: "Available for Remote Work",
      title: "Backend Developer",
      subtitle1: "Backend Engineer specializing in building scalable SaaS platforms, multi-tenant systems, and production-grade APIs using Laravel.",
      subtitle2: "I design and build systems that handle real users, real traffic, and real business operations.",
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
        "Backend Engineer specializing in building scalable SaaS platforms and production-grade backend systems.",
        "I design and develop high-performance APIs, multi-tenant architectures, and complex backend systems that support real-world business operations.",
        "Experienced in translating business requirements into clean, maintainable, and scalable solutions, with a focus on performance, reliability, and system design.",
        "Worked across transportation, education, finance, and subscription-based platforms serving real users in production environments.",
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
          title: "Core Backend",
          items: [
            "PHP",
            "Laravel",
            "Node.js",
            "Express.js",
            "RESTful APIs",
            "OOP",
            "MVC",
            "Clean Architecture",
            "Queues",
            "Events",
            "Design Patterns",
          ],
        },
        database: {
          title: "Databases & Performance",
          items: [
            "MySQL",
            "PostgreSQL",
            "Redis",
            "Eloquent ORM",
            "Query Optimization",
            "Database Indexing",
          ],
        },
        architecture: {
          title: "System Design & Architecture",
          items: [
            "SaaS Architecture",
            "Multi-tenant Systems",
            "Modular Architecture",
            "Scalability",
            "Distributed Systems Basics",
          ],
        },
        integrations: {
          title: "Integrations & Payments",
          items: [
            "Payment Gateway Integrations",
            "Third-party APIs",
            "WhatsApp API",
            "SMS Gateways",
            "Google Maps Platform",
          ],
        },
        devops: {
          title: "DevOps & Deployment",
          items: [
            "Docker",
            "AWS",
            "CI/CD",
            "Linux",
            "Deployment Automation",
            "Cron Jobs",
          ],
        },
        tools: {
          title: "Tools & Workflow",
          items: ["Git", "GitHub", "Postman", "Jira", "Composer"],
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
          role: "Backend Developer (Laravel) (Remote, Full-time)",
          location: "Jeddah, Saudi Arabia",
          period: "Sep 2023 – Present",
          description:
            "Backend development of scalable SaaS and production systems for transportation and enterprise platforms in Saudi Arabia.",
          highlights: [
            "Led backend development of a large-scale transportation SaaS platform handling trips, drivers, and payment workflows in production.",
            "Designed and implemented multi-tenant SaaS architecture for scalable subscription-based systems.",
            "Integrated multiple payment gateways (PayTabs, Noon, Al Rajhi) ensuring secure and reliable transactions.",
            "Built a dynamic notification system supporting Email, SMS, WhatsApp, and Push notifications.",
            "Developed admin dashboards and CMS systems for complex business operations and workflows.",
            "Improved system performance and stability across production services through backend optimization and architecture refactoring.",
          ],
        },
        {
          name: "In-Code Hub",
          role: "Backend Developer (Hybrid, Full-time)",
          location: "Cairo, Egypt",
          period: "Feb 2023 – Aug 2023",
          description: "Backend API development for mobile applications and production systems including event management and booking platforms.",
          highlights: [
            "Built backend APIs for event management and hotel booking platforms with scalable architecture.",
            "Implemented GPS-based tracking system to verify user presence during events.",
            "Developed and documented RESTful APIs for mobile applications ensuring stable integration.",
            "Integrated secure payment systems and handled full booking lifecycle workflows.",
            "Improved API performance and reliability under high-traffic production usage.",
          ],
        },
        {
          name: "YallaWeb",
          role: "Backend Developer (Onsite, Full-time)",
          location: "Qena, Egypt",
          period: "Jan 2022 – Jan 2023",
          description:
            "Backend development and system enhancement for multi-vendor marketplace and donation platforms.",
          highlights: [
            "Developed backend systems for multi-vendor marketplace including product and vendor management modules.",
            "Rebuilt donation platform backend using modular architecture for better scalability and maintainability.",
            "Designed and integrated custom payment system for secure online transactions.",
            "Enhanced CMS features including media handling, content workflows, and dynamic content management.",
            "Resolved critical production issues and improved system stability and performance.",
          ],
        },
      ],
    },

    // Projects Section
    projects: {
      label: "Featured Work",
      title: "Production Projects",
      description: "Real platforms serving thousands of users",
      problem: "Problem",
      solution: "Solution",
      outcome: "Outcome",
      technologiesUsed: "Technologies Used",
      viewCaseStudy: "Click to view case study →",
      items: [
        {
          title: "Masaraty Global",
          category: "Transportation Platform",
          description:
            "Complete transportation platform with trip management, driver coordination, and payment processing",
          url: "https://app.masaraty.sa/",
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
          url: "https://new.mahaali.sa/",
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
          url: "https://cortra.net/",
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
          url: "https://mezanyati.com/",
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
          url: "https://app.takafulalarabia.com/",
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
          url: "https://app.smartschedule.sa/",
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
        locationValue: "Egypt",
        availability: "Availability",
        availabilityValue: "Open to Remote & Relocation",
      },
    },

    // Footer
    footer: {
      copyright: "© 2026 Mostafa Essa. All rights reserved.",
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
      // services: "الخدمات",  // Commented out - Services section disabled
      contact: "تواصل",
    },

    // Hero Section
    hero: {
      badge: "متاح للعمل عن بعد",
      title: "مطور Backend",
      subtitle1: "مطور Backend متخصص في بناء منصات SaaS قابلة للتوسع، وأنظمة متعددة المستأجرين، وواجهات API جاهزة للإنتاج باستخدام Laravel.",
      subtitle2: "أقوم بتصميم وبناء أنظمة تتعامل مع مستخدمين حقيقيين، وحركة استخدام فعلية، وعمليات أعمال حقيقية.",
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
        " مطور Backend متخصص في بناء أنظمة SaaS قابلة للتوسع وأنظمة خلفية جاهزة للإنتاج (Production-Grade Systems).",
        "أقوم بتصميم وتطوير واجهات API عالية الأداء، وأنظمة متعددة المستأجرين (Multi-tenant Architectures)، وحلول خلفية معقدة تدعم عمليات أعمال حقيقية على نطاق واسع.",
        "أمتلك خبرة في تحويل متطلبات الأعمال إلى حلول برمجية نظيفة وقابلة للصيانة والتوسع، مع التركيز على الأداء، الاعتمادية، وتصميم الأنظمة.",
        "عملت على مشاريع في مجالات النقل، التعليم، المالية، وأنظمة الاشتراكات، تخدم مستخدمين حقيقيين في بيئات إنتاجية.",
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
        backend: {
          title: "الواجهة الخلفية الأساسية",
          items: [
            "PHP",
            "Laravel",
            "Node.js",
            "Express.js",
            "RESTful APIs",
            "OOP",
            "MVC",
            "Clean Architecture",
            "Queues",
            "Events",
          ],
        },
        database: {
          title: "قواعد البيانات والأداء",
          items: [
            "MySQL",
            "PostgreSQL",
            "Redis",
            "Eloquent ORM",
            "Query Optimization",
            "Indexing",
          ],
        },
        architecture: {
          title: "تصميم النظام والهيكل",
          items: [
            "SaaS Architecture",
            "Multi-tenant Systems",
            "Modular Design",
            "Scalability",
            "Distributed Systems Basics",
          ],
        },
        integrations: {
          title: "التكاملات والمدفوعات",
          items: [
            "Payment Gateways (PayTabs, Noon, Al Rajhi)",
            "Third-party APIs",
            "WhatsApp API",
            "SMS",
            "Google Maps",
          ],
        },
        devops: {
          title: "DevOps والنشر",
          items: [
            "Docker",
            "AWS",
            "CI/CD",
            "Linux Basics",
            "Deployment Automation",
            "Cron Jobs",
          ],
        },
        tools: {
          title: "الأدوات وبيئة العمل",
          items: ["Git", "GitHub", "Postman", "Jira", "Composer"],
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
          role: "مطور Backend (Laravel) (عن بُعد، full-time)",
          location: "جدة، السعودية",
          period: "سبتمبر 2023 – الحالي",
          description:
            "تطوير Backend لمنصات SaaS قابلة للتوسع وأنظمة إنتاجية للمشاريع في السعودية.",
          highlights: [
            "قادت تطوير الواجهة الخلفية لمنصة نقل SaaS كبيرة تتعامل مع الرحلات والسائقين وسير العمل الخاص بالمدفوعات في بيئة إنتاجية.",
            "صممت ونفذت بنية SaaS متعددة المستأجرين لأنظمة اشتراكات قابلة للتوسع.",
            "دمجت عدة بوابات دفع مثل PayTabs وNoon وAl Rajhi لضمان معاملات آمنة وموثوقة.",
            "بنيت نظام إشعارات ديناميكي يدعم البريد الإلكتروني والرسائل القصيرة وواتساب والإشعارات.push.",
            "طورت لوحات تحكم وأنظمة CMS لإدارة العمليات والمهام التشغيلية المعقدة.",
            "حسنت من أداء النظام والاستقرار عبر الخدمات الإنتاجية من خلال تحسين البنية وال backend.",
          ],
        },
        {
          name: "In-Code Hub",
          role: "مطور Backend (Hybrid, full-time)",
          location: "القاهرة، مصر",
          period: "فبراير 2023 – أغسطس 2023",
          description:
            "تطوير APIs خلفية لتطبيقات الجوال والنظامات الإنتاجية، بما في ذلك منصات إدارة الفعاليات والحجز.",
          highlights: [
            "بنيت APIs خلفية لمنصات إدارة الفعاليات وحجز الفنادق مع بنية قابلة للتوسع.",
            "نفذت نظام تتبع قائم على GPS للتحقق من حضور المستخدم خلال الفعاليات.",
            "طورت ووثقت واجهات RESTful للتطبيقات المحمولة لضمان تكامل مستقر.",
            "دمجت أنظمة دفع آمنة ومعالجة دورة حياة الحجوزات بالكامل.",
            "حسنت من أداء وموثوقية الـ APIs تحت ضغط استخدام إنتاجي مرتفع.",
          ],
        },
        {
          name: "YallaWeb",
          role: "مطور Backend (Onsite, full-time)",
          location: "قنا، مصر",
          period: "يناير 2022 – يناير 2023",
          description:
            "تطوير Backend وتحسين الأنظمة لمنصات السوق المتعدد البائعين والمنصات الخيرية.",
          highlights: [
            "طورت أنظمة خلفية لسوق متعدد البائعين يشمل إدارة المنتجات والبائعين.",
            "أعاد بناء Backend لمنصة خيرية باستخدام بنية modular لتحسين القابلية للتوسع والصيانة.",
            "صممت ودمجت نظام دفع مخصص للمعاملات الإلكترونية الآمنة.",
            "حسنت من ميزات CMS بما فيها إدارة الوسائط وسير العمل للمحتوى.",
            "حللت مشكلات إنتاجية حرجة وحسنت من استقرار وأداء الأنظمة.",
          ],
        },
      ],
    },

    // Projects Section
    projects: {
      label: "أعمال مميزة",
      title: "مشاريع إنتاجية",
      description: "منصات حقيقية تخدم آلاف المستخدمين",
      problem: "التحدي",
      solution: "الحل",
      outcome: "النتيجة",
      technologiesUsed: "التقنيات المستخدمة",
      viewCaseStudy: "انقر لعرض دراسة الحالة ←",
      items: [
        {
          title: "Masaraty Global",
          category: "منصة نقل",
          description:
            "منصة نقل متكاملة مع إدارة الرحلات وتنسيق السائقين ومعالجة الدفع",
          url: "https://app.masaraty.sa/",
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
          url: "https://new.mahaali.sa/",
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
          url: "https://cortra.net/",
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
          url: "https://mezanyati.com/",
          problem: "المستخدمون يحتاجون رؤى واضحة للسلوك المالي",
          solution: "بناء نظام تتبع شامل للدخل والمصروفات والديون والإقراض",
          outcome: "منصة بديهية تساعد المستخدمين على اتخاذ قرارات مالية أفضل",
          tech: ["Laravel", "تحليلات مالية", "لوحة تحكم"],
        },
        {
          title: "Takaful AlArabiya",
          category: "منصة صحية",
          description: "منصة عروض طبية وخصومات للعملاء السعوديين",
          url: "https://app.takafulalarabia.com/",
          problem: "التحقق من العضوية عبر الأنظمة الحكومية",
          solution: "تكامل API حكومي للتحقق من العضوية مع تأكيد تلقائي",
          outcome: "منصة سلسة تربط المستخدمين بعروض الرعاية الصحية",
          tech: ["Laravel", "Government API", "تكامل صحي"],
        },
        {
          title: "Smart Schedule",
          category: "SaaS سيارات",
          description: "نظام تتبع وجدولة صيانة السيارات",
          url: "https://app.smartschedule.sa/",
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
        locationValue: "مصر",
        availability: "التوفر",
        availabilityValue: "متاح للعمل عن بُعد والانتقال",
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
