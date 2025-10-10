# Claude Plugin Directory

A community-driven marketplace for discovering, installing, and sharing Claude Code plugins and templates.

## Features

- 🎨 Modern, clean UI inspired by MCP.so
- 🌙 Dark mode support with next-themes
- 🔍 Search functionality for plugins
- 🎯 Filter tabs (Today, Featured, Latest, Plugins, Marketplaces, Official)
- 📦 Plugin cards with icons, descriptions, and badges
- ⚡ Fast static site built with Next.js
- 🎨 Styled with Tailwind CSS v4
- 📱 Fully responsive design

## Tech Stack

- **Next.js 15** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type safety
- **React Icons** - Icon library
- **next-themes** - Dark mode support

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
# Create production build
npm run build

# The static site will be exported to the /out directory
```

## Deployment

This site is configured for static export and can be deployed to:

- **Cloudflare Pages** (recommended)
- Vercel
- Netlify
- Any static hosting service

### Deploy to Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `out`

## Project Structure

```
claude-plugins/
├── app/              # Next.js App Router
│   ├── layout.tsx   # Root layout with theme provider
│   ├── page.tsx     # Home page
│   └── globals.css  # Global styles
├── components/       # React components
│   ├── Hero.tsx
│   ├── SearchBar.tsx
│   ├── FilterTabs.tsx
│   ├── PluginCard.tsx
│   ├── PluginGrid.tsx
│   ├── CodeBlock.tsx
│   ├── FAQ.tsx
│   └── Header.tsx
├── lib/             # Data and utilities
│   └── data.ts      # Mock plugin data
├── types/           # TypeScript types
│   └── plugin.ts
└── public/          # Static assets
```

## Contributing

Contributions are welcome! Feel free to:

- Submit plugin suggestions
- Report bugs
- Improve documentation
- Add new features

## License

ISC

---

Built with ❤️ by the community
