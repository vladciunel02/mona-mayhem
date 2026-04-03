# Project Guidelines

## Overview

Mona Mayhem is an Astro project configured for Server-Side Rendering (SSR) using the `@astrojs/node` adapter in `standalone` mode.

## Build and Dev Commands

- **Dev Server**: `npm run dev` (starts the local Astro development server)
- **Build**: `npm run build` (builds the project for production)
- **Preview**: `npm run preview` (previews the production build locally)
- **Astro CLI**: `npm run astro`

## Astro Best Practices

- Use `.astro` files for components and pages to leverage Astro's Island architecture.
- The project is configured for SSR (`output: 'server'`), meaning API endpoints (like those in `src/pages/api/`) and pages will be rendered on the server per request.
- Keep client-side JavaScript to a minimum by default. Use `client:*` directives (like `client:load`, `client:visible`) only when client-side interactivity is explicitly required.
- Place static assets in the `public/` directory and reference them using root-relative paths.
- Write scoped CSS within `<style>` tags in `.astro` components for component-specific styling.
