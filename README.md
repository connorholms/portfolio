# Connor Holmstrom — Portfolio

Personal portfolio site for Connor Holmstrom, a full-stack software engineer. Built as a single-page React application showcasing background, technical skills, and selected projects, with a lightweight in-page navigation experience.

## Tech Stack

- **[React 19](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)** — component-based UI with static typing
- **[Vite](https://vite.dev/)** — dev server and build tooling
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling via `@tailwindcss/vite`
- **[Radix Icons](https://www.radix-ui.com/icons)** — iconography for contact/social links
- **[ESLint](https://eslint.org/)** + **typescript-eslint** — linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the dev server with hot module replacement:

```bash
npm run dev
```

### Build

Type-check and produce a production build:

```bash
npm run build
```

### Preview

Serve the production build locally:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/                  # Root App component and global styles
├── assets/               # Images, resume, and technology logos
├── components/
│   ├── layout/           # Navbar and other layout shells
│   └── ui/               # Reusable primitives (IconLink, Tooltip)
├── constants/            # Shared static values (e.g. contact links)
├── features/
│   ├── about/             # Bio and contact link section
│   ├── contact/            # Footer / "let's connect" section
│   ├── projects/           # Project list, cards, and highlight detail view
│   └── skills/             # Core and familiar technology grids
├── types/                # Shared/app-wide TypeScript types
├── index.css             # Tailwind entry point and global styles
└── main.tsx              # Application entry point
```

The app follows a **feature-based organization**: each section of the page (About, Skills, Projects, Contact) lives in its own directory under `src/features`, colocated with the types and constants it needs. Shared layout and UI primitives live under `src/components`.

## Sections

The site is a single scrolling page with in-page navigation handled by scroll-into-view refs (see [App.tsx](src/app/App.tsx)):

- **About** — introduction, bio, and links to GitHub, LinkedIn, and resume
- **Skills** — core tech stack and technologies the author is familiar with, rendered as icon grids
- **Projects** — a selectable grid of professional and personal projects with a detail panel showing description, role type, and stack used
- **Contact** — closing call-to-action with links to GitHub, LinkedIn, and resume

## Deployment

This is a static site produced by `npm run build`, output to `dist/`, and can be deployed to any static hosting provider (e.g. Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## License

Personal project — all rights reserved.
