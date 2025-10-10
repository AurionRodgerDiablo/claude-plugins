# Claude Plugin Directory – Landing Page Plan

## 🎯 Goal
Create a fast, developer-focused landing page to introduce the **Claude Plugin Directory** — an open community hub for discovering, installing, and sharing Claude Code plugins and marketplaces.

The first version should:
- Explain what the site is for (Claude Code plugins)
- Provide SEO-optimized text
- Showcase several example plugins
- Include copyable install commands
- Be clean, fast, and ready for Cloudflare Pages deployment

## 🛠️ Tech Stack

**Framework & Styling**
- **Next.js** - React framework with SSG/SSR capabilities
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **TypeScript** - Type safety and better developer experience

**UI & Icons**
- **Lucide React** or **React Icons** - Icon library for UI elements
- **Heroicons** (optional) - Tailwind's official icon set

**Additional Libraries**
- **next-themes** - Dark mode support
- **framer-motion** (optional) - Smooth animations
- **react-syntax-highlighter** - Code block highlighting for install commands

**Deployment**
- **Cloudflare Pages** - Fast global CDN delivery with zero config

---

## 🧱 Page Structure

Inspired by **MCP.so** marketplace design with clean cards, filters, and organized sections.

### 1. Hero Section
**Headline (H1)**
> Find Awesome **Claude Code** Plugins and Marketplaces

**Subheadline**
> Claude Plugin Directory is a community-driven hub with **[count]** plugins collected.
> Browse, install, and build extensions for Anthropic's AI coding assistant.

**Prominent Search Bar**
- Large centered search input with icon
- Placeholder: "Search with keywords"

**Filter Tabs** (horizontally scrollable)
- 🔥 Today
- ⭐ Featured
- 🆕 Latest
- 🔌 Plugins
- 🏪 Marketplaces
- ✅ Official

**CTAs (Secondary)**
- Submit Your Plugin
- View on GitHub

**SEO Keywords (to include naturally)**
`Claude Code plugins, Claude Plugin Directory, Claude marketplaces, Claude extensions, Anthropic Claude plugins, Claude developer tools, Claude integrations`

---

### 2. Featured Plugins Section
**Layout:** Grid of plugin cards (3-4 columns on desktop, responsive)

**Each Plugin Card Contains:**
- Plugin icon/logo (left side)
- Plugin name (bold heading)
- Short description (1-2 lines, truncated)
- Star/favorite button (top right)
- Optional "Sponsor" badge for featured items
- Hover effect with subtle shadow

**Section Header:**
- "Featured Plugins" with "View All →" link on right

---

### 3. Browse by Category
Similar card grid organized by:
- Code Tools
- Database & APIs
- Development Utilities
- AI & ML Tools
- Project Templates

Each category shows 3-6 top plugins, with "View All" link

---

### 4. Setup Instructions
**Developer-friendly command box** with syntax highlighting:
```bash
# Install via Claude Code CLI
claude plugin install [plugin-name]
```

Copy button on hover, similar to Anthropic docs style

---

### 5. FAQ Section
**Expandable accordion items:**
- What is Claude Plugin Directory?
- How do I install a plugin?
- How can I submit my plugin?
- What are Claude Code marketplaces?
- Is this official?

Clean, minimal design with numbered questions

