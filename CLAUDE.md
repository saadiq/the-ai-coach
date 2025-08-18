# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
bun dev

# Production build
bun run build

# Start production server
bun run start

# Run linting
bun run lint
```

## Project Architecture

This is a Next.js 15 application with the App Router, built for an AI coaching and transformation consulting landing page.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Package Manager**: Bun (preferred over npm)
- **Styling**: Tailwind CSS with tailwindcss-animate
- **UI Components**: shadcn/ui components (Button, Card)
- **Icons**: lucide-react
- **Analytics**: Google Analytics (gtag.js) with conversion tracking
- **Performance**: Vercel Speed Insights

### Key Implementation Details

#### Component Structure
- Components use client-side rendering (`'use client'`) for interactive features
- UI components are in `src/components/ui/` following shadcn patterns
- Main landing page component handles conversion tracking

#### Analytics Integration
- Google Analytics is configured in `src/app/layout.tsx` using Next.js Script component
- Conversion events are tracked on CTA button clicks
- Window.gtag TypeScript declarations are included in components that use analytics

#### Styling Conventions
- Uses Tailwind CSS utility classes
- Color scheme: pink-500/600 for CTAs, slate color palette for content
- Responsive design with max-width containers