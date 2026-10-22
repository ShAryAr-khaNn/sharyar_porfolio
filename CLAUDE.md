# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Sharyar Khan, deployed on Vercel at https://www.sharyarkhanshinka.online/. Built with React 18 + Vite 6, Tailwind CSS 3, and React Router 6. Plain JavaScript (JSX); `src/vlog/Vlog.tsx` is the only TypeScript file.

## Commands

Vite 6 needs Node 18+. On this machine the nvm default is Node 16 (build fails with `crypto.getRandomValues is not a function`); use `/usr/bin/node` (v18) or switch nvm versions.

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/` (also generates `sitemap.xml` via `vite-plugin-sitemap`)
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint with `--max-warnings 0`. Note: there is no ESLint config file in the repo, so this command will fail until one is added.

There is no test suite.

## Architecture

- `src/main.jsx` wraps `<App />` in `BrowserRouter`. `src/App.jsx` defines all routes inside a persistent `Header`/`Footer` layout, plus `ScrollToTop` and a `*` 404 route. Old URLs (`/home`, `/projects`, `/contact`) redirect to `/`, `/project`, `/contactme`. `/vlog1234` is an unlinked personal page left in its original styling.
- **All site content lives in `src/Data.js`**: `profile`, `socials`, `homeInfo`, `aboutInfo`, `skillGroups`, `projects` (with imported images, tags, and a `featured` flag for the home page), and `educationInfo` (whose `url` links to a document gallery page). Edit content there, not in components.
- Shared UI is in `src/components/` (`PageHeader`, `ProjectCard`, `DocumentGallery`, `SocialIcon`). Page components live in their own folders (`Home/`, `AboutMe/`, `Dailywork/`, `Academia/`, `Contactme/`, `ImageShow/`).
- Styling is Tailwind only. Design tokens (colors `paper`, `ink`, `line`, `accent`; fonts `sans` = Inter, `display` = Fraunces, loaded in `index.html`) are in `tailwind.config.js`, and reusable classes (`container-page`, `eyebrow`, `heading`, `btn-primary`, `btn-ghost`, `card`, `tag`, `link`) are in `src/index.css`. Reuse these rather than adding per-component CSS files.
- Use React Router `Link`/`NavLink` for internal navigation (not `<a href>`) so pages don't fully reload.
- Images are imported from `src/` folders; `public/` holds only the favicon `shary.png`.
- `vercel.json` rewrites all paths to `/` so client-side routing works on refresh.

## Repo notes

- There is no `.gitignore`; `node_modules/` (including `.vite/` cache) is committed to git. Avoid committing further changes under `node_modules/`.
