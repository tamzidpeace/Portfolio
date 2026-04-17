# Portfolio Website

Personal portfolio website for Arafat Kamal, built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Liquid Glass inspired UI design system
- Dark and light theme support with persistence
- Route-based pages for Home, Projects, About, and Resume
- Project showcase and interactive portfolio sections
- Performance-focused setup with lazy loading and memoization patterns

## Tech Stack

- React 19
- TypeScript (strict mode)
- Vite
- Tailwind CSS
- Zustand (state management)
- React Router DOM
- Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (recommended)

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm run test
```

## Project Structure

```
src/
	components/
		About/
		Home/
		Projects/
		Resume/
	stores/
	hooks/
	styles/
	Assets/
```

## Routing

- `/` → Home
- `/project` → Projects
- `/about` → About
- `/resume` → Resume

## Theme and State

- Theme and UI state are managed with Zustand stores in `src/stores/`
- Theme preference is persisted via localStorage

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - build production bundle
- `npm run test` - run test suite

## Notes

- Asset mocks for tests are located in `__mocks__/`
- Main app entry is `src/index.tsx`


