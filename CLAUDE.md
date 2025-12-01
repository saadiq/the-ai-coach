# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
bun dev

# Production build (generates static output to dist/)
bun run build

# Preview production build locally
bun run preview
```

## Project Architecture

This is an Astro static site for an AI coaching and transformation consulting landing page, deployed to Cloudflare Pages.

### Tech Stack
- **Framework**: Astro 5 (static output mode)
- **Package Manager**: Bun
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Font**: Outfit (via @fontsource)
- **Deployment**: Cloudflare Pages (wrangler in devDependencies)
- **Analytics**: Google Analytics (gtag.js) with conversion tracking

### Project Structure
- `src/pages/` - Astro pages (file-based routing)
- `src/layouts/` - Base layout with head, analytics, and global scripts
- `src/components/` - Astro components for page sections
- `src/styles/globals.css` - Tailwind config with CSS custom properties and utility classes

### Key Patterns

**Conversion Tracking**: CTA buttons use `data-track-conversion` attribute. Event delegation in `BaseLayout.astro` handles clicks and fires GA events before opening cal.com booking link.

**Typography System**: Custom utility classes (`type-hero`, `type-section`, `type-body-lg`, etc.) defined in globals.css provide consistent typography across components.

**Layout System**: Swiss-inspired grid with `swiss-container` and `swiss-grid` classes for consistent spacing and layout.

**Path Aliases**: `@/*` maps to `./src/*` for imports.
