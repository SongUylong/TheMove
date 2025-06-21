# 🏎️ TheMove - Modern Racing Game Website

A stunning, interactive racing game website featuring smooth animations, video transitions, and a modern UI design showcasing the ultimate racing experience.

## ✨ Live Features

- Dynamic video transitions with GSAP animations
- Interactive bento grid layout with tilt effects
- Smooth scroll animations and transitions
- Responsive design with mobile optimization
- Custom loading animations
- Modern UI components with hover effects

## 🎮 Game Features Showcase

- **Career Mode** - Epic racing career with dynamic storylines
- **Garage** - Extensive car customization and upgrades
- **Tracks** - Diverse racing locations and environments
- **Multiplayer** - Online competitions and tournaments
- **More Coming Soon!**

## 🛠️ Tech Stack

### Core
- **Vite** - Next-generation frontend tooling
- **React 19** - Latest React version for optimal performance
- **TypeScript** - For type-safe code
- **GSAP** - Professional-grade animations
- **Tailwind CSS** - Utility-first styling

### Key Dependencies
```json
{
  "@gsap/react": "^2.1.2",
  "gsap": "^3.13.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0"
}
```

### Development Tools
- **ESLint** - Code quality and consistency
- **TypeScript** - Version ~5.8.3
- **Vite** - Version ^6.3.5
- **SWC** - Fast React compilation

## 🎯 Project Structure

```
src/
├── components/
│   ├── Hero.tsx         # Main landing section
│   ├── Features.tsx     # Game features showcase
│   ├── AnimatedTitle.tsx# Custom animated title
│   ├── VideoPreview.tsx # Video preview component
│   ├── About.tsx        # About section
│   ├── Story.tsx        # Game story section
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer section
│   ├── Navbar.tsx       # Navigation bar
│   └── Button.tsx       # Reusable button component
├── assets/              # Static assets
├── App.tsx             # Main app component
├── index.css           # Global styles
└── main.tsx           # Entry point
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/themove.git

# Navigate to project directory
cd themove

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Scripts

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## 💫 Key Features Implementation

### Video Transitions
The Hero section features smooth video transitions using GSAP:
- Dynamic video switching with scale animations
- Custom clip-path transitions
- Loading states for video elements

### Bento Grid Layout
The Features section implements:
- Interactive tilt effects on hover
- Dynamic cursor-following gradients
- Responsive grid layout
- Video background integration

### Custom Animations
- GSAP ScrollTrigger for scroll-based animations
- Custom hover effects with radial gradients
- Smooth page transitions
- Loading state animations

## 🎨 Styling

The project uses Tailwind CSS with custom utilities:
- Custom color palette
- Responsive design utilities
- Special font implementations
- Modern UI components

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Your Name]
