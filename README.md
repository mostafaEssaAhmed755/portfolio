# Mostafa Essa - Portfolio

A premium, bilingual (English/Arabic), animated developer portfolio built with Vue 3, Vite, and Tailwind CSS.

## 🚀 Features

- ✨ **Premium Animations** - Smooth scroll animations, floating particles, gradient effects
- 🌐 **Bilingual Support** - Full English and Arabic support with RTL layout
- 🌙 **Dark/Light Mode** - Theme switching with persistent user preference
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Blazing Fast** - Built with Vite for optimal performance
- 🎨 **Modern Design** - Glassmorphism, gradients, and contemporary UI patterns
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: Vue Router
- **Deployment**: GitHub Pages

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/mostafaEssaAhmed755/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment to GitHub Pages

### Option 1: Automated Deployment (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

The GitHub Actions workflow will automatically build and deploy your site.

### Option 2: Manual Deployment
```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm install -g gh-pages
gh-pages -d dist
```

Your portfolio will be live at: `https://mostafaEssaAhmed755.github.io/portfolio/`

## 📁 Project Structure
```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Vue components
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   └── ScrollToTop.vue
│   ├── composables/     # Vue composables
│   │   ├── useLanguage.js
│   │   └── useScrollAnimation.js
│   ├── data/           # Data files
│   │   └── translations.js
│   ├── views/          # Page components
│   │   └── Home.vue
│   ├── App.vue         # Root component
│   ├── main.js         # Entry point
│   └── style.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Update Content

Edit `src/data/translations.js` to update:
- Personal information
- Skills and technologies
- Work experience
- Projects
- Services (currently disabled)
- Contact details

### Modify Theme Colors

Update `tailwind.config.js` to change:
- Primary/accent colors
- Dark mode colors
- Custom animations
- Font families

### Add/Remove Sections

Modify `src/views/Home.vue` to add or remove sections as needed.

## 📝 License

© 2026 Mostafa Essa. All rights reserved.

## 🤝 Contact

- **Email**: mostafa.essa.ahmed755@gmail.com
- **LinkedIn**: [mostafa-essa-a540bb1ab](https://www.linkedin.com/in/mostafa-essa-a540bb1ab)
- **GitHub**: [mostafaEssaAhmed755](https://github.com/mostafaEssaAhmed755)

---

Built with ❤️ using Vue 3, Vite, and Tailwind CSS