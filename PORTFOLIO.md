# Premium Developer Portfolio

A futuristic, recruiter-friendly portfolio inspired by [aadityapadiya.vercel.app](https://aadityapadiya.vercel.app/), built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, and Shadcn-style UI primitives.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Shadcn UI** (Button, Card, Badge, Input, Textarea)
- **Lucide React**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize Content

Edit files in `data/`:

| File | Purpose |
|------|---------|
| `data/personal.ts` | Name, bio, SEO, resume URL |
| `data/social.ts` | GitHub, LinkedIn, Twitter, Email |
| `data/skills.ts` | Skill categories & focus areas |
| `data/experience.ts` | Timeline roles |
| `data/projects.ts` | Project showcase |
| `data/certifications.ts` | Credentials |
| `data/navigation.ts` | Navbar links |

Replace `public/resume.pdf` with your actual resume.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Deploy.

Or use the CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
app/              # Layout, page, global styles
components/
  layout/         # Navbar, footer, loader
  sections/       # Hero, about, skills, etc.
  shared/         # Reusable UI helpers
  ui/             # Shadcn primitives
data/             # Content configuration
hooks/            # Scroll spy, reduced motion
lib/              # Utilities (cn)
public/           # Static assets
```

## Build

```bash
npm run build
npm start
```

## Notes

- Contact form opens the user's mail client via `mailto:`.
- Project images use Unsplash URLs (configured in `next.config.ts`).
- Dark theme is default; animations respect `prefers-reduced-motion`.
