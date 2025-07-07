# Chanaka Karunarathne - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Optimized for Vercel deployment.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic dark/light theme switching
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Extensible Architecture**: Easy to add new sections and projects
- **Mobile Navigation**: Collapsible menu for mobile devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Icons**: Heroicons (embedded SVGs)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
└── components/
    ├── Navigation.tsx      # Header navigation component
    └── ProjectCard.tsx     # Reusable project card component
```

## 🔧 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📝 Adding New Projects

To add a new project to the portfolio, edit the Projects section in `src/app/page.tsx`:

```tsx
<ProjectCard
  title="Your Project Name"
  description="Brief description of your project"
  technologies={["React", "Node.js", "MongoDB"]}
  liveUrl="https://your-project.com"
  githubUrl="https://github.com/yourusername/project"
  imageUrl="/path-to-screenshot.jpg"
/>
```

### ProjectCard Props

- `title`: Project name
- `description`: Brief project description
- `technologies`: Array of tech stack items (optional)
- `liveUrl`: Link to live demo (optional)
- `githubUrl`: Link to GitHub repository (optional)
- `imageUrl`: Project screenshot (optional)
- `isComingSoon`: Show as placeholder (optional)

## 🎨 Customization

### Updating Personal Information

Edit the following files to update your information:

1. **src/app/layout.tsx**: Update metadata (title, description)
2. **src/app/page.tsx**: Update:
   - Hero section content
   - About section text
   - Experience details
   - Skills list
   - Contact information

### Adding New Sections

1. Create a new section in `src/app/page.tsx`
2. Add the navigation link in `src/components/Navigation.tsx`
3. Follow the existing pattern with proper styling classes

### Color Scheme

The website uses a professional blue/slate color scheme. To customize colors, update the Tailwind classes in the components:

- Primary: `blue-600`, `blue-700`
- Background: `slate-50`, `slate-100` (light), `slate-900`, `slate-800` (dark)
- Text: `slate-900` (dark), `slate-600` (medium), `slate-300` (light on dark)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push to main branch

### Manual Deployment

```bash
npm run build
npm start
```

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design approach
- Collapsible navigation menu
- Touch-friendly button sizes
- Optimized text and spacing for mobile screens

## 🔮 Future Enhancements

The portfolio is designed to be easily extensible. Consider adding:

- **Blog section** for technical articles
- **Interactive games** or demos
- **Contact form** with form handling
- **Animation libraries** like Framer Motion
- **CMS integration** for easy content management
- **Analytics** integration
- **Performance monitoring**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ by Chanaka Karunarathne
