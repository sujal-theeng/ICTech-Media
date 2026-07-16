# I C Tech Media Pvt. Ltd. - Website

Leading innovation and excellence in Nepal's technology and media landscape through comprehensive digital solutions.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM 7
- **SEO:** React Helmet Async

## Features

- Responsive design (mobile-first)
- Code splitting with React.lazy()
- Lazy loading images
- SEO optimized (meta tags, Open Graph, JSON-LD)
- PWA support
- Google Analytics integration
- Error boundary handling
- Accessible (ARIA labels, skip-to-content)

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/ictech-media.git

# Navigate to project directory
cd ictech-media

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## Deployment

### Netlify

1. Push to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Framework preset: Vite
4. Deploy

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_SITE_URL=https://ictechmedia.com
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Project Structure

```
ictech/
├── public/
│   ├── images/          # Static images
│   ├── manifest.json    # PWA manifest
│   ├── robots.txt       # SEO
│   └── sitemap.xml      # SEO
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app
│   └── main.jsx         # Entry point
├── index.html
├── netlify.toml         # Netlify config
├── vercel.json          # Vercel config
└── package.json
```

## License

UNLICENSED - I C Tech Media Pvt. Ltd.
