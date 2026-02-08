# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Arafat Kamal, a Full-Stack Engineer. Built with React 19, TypeScript, Vite, and Tailwind CSS. Features a custom "Liquid Glass" design system with comprehensive dark/light theme support.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

## Tech Stack

- **React 19.1.0** with TypeScript in strict mode
- **Vite 7.2.2** for builds and dev server
- **Tailwind CSS 4.1.17** with Vite plugin
- **Zustand 5.0.0** for state management
- **React Router DOM 7.6.3** for client-side routing

Additional UI libraries: React Icons, React Particles, React Parallax Tilt, Typewriter Effect, React GitHub Calendar, React PDF.

## Architecture

### State Management

Zustand stores in `src/stores/`:
- `uiStore.ts` - Theme state (dark/light mode with localStorage persistence) and loading states
- `portfolioStore.ts` - Navigation state (active section tracking)

Theme switching is centralized through Zustand and persists across sessions using localStorage.

### Routing Structure

Route-based lazy loading with error boundaries:
```
/           # Home (hero section)
/project    # Projects showcase
/about      # About section
/resume     # Resume/CV viewer
```

### Component Organization

- `src/components/Home/` - Hero and landing components
- `src/components/About/` - About section components
- `src/components/Projects/` - Project showcase components
- `src/components/Resume/` - Resume display components
- `src/components/Common/` - Shared components (Navbar, Footer, etc.)

Key conventions:
- Functional components with React hooks
- Props typed with TypeScript interfaces
- `React.memo` for performance optimization where appropriate
- Default exports for consistency

### Styling System

**Liquid Glass Design System**: Custom glassmorphism effects using CSS variables and backdrop blur. Applied consistently across navigation, cards, buttons, and mobile menu.

**Theme System**:
- CSS variables for theme colors (`--bg-primary`, `--text-primary`, etc.)
- Dark/light mode toggled through Zustand store
- Smooth CSS transitions for theme changes
- Theme-aware scrollbars and UI elements

**Tailwind Integration**: Utility classes combined with custom CSS. Custom components layer on top of Tailwind for glass effects and animations.

### Path Aliases (configured in tsconfig.json)

```
@/         → src/
@/components/ → src/components/
@/assets/   → src/Assets/
```

## Testing

Jest with React Testing Library. Assets are comprehensively mocked to prevent import errors during tests.

## Performance Patterns

- Route-based code splitting with lazy loading
- Image optimization (WebP, compressed assets)
- Component memoization for re-render prevention
- Custom hooks for reusable logic (e.g., `useScroll` in `src/hooks/`)
