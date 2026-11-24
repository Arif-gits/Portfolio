# Arif Bin Islam — ML/AI Portfolio

A single-page, data-driven portfolio built with React + TypeScript + Vite + Tailwind CSS +
Framer Motion. Black background, dotted grid texture, one blue accent (`#3d8bfd`), and a
signature interactive **Skill Mastery Map** instead of generic progress bars.

## 1. Install & run locally

You need [Node.js](https://nodejs.org) 18+ installed. Then, from this folder:

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Edit any file in `src/` — the page
hot-reloads instantly.

## 2. Edit your content — no code required

Everything on the page is driven by data files in `src/data/`. To update content, edit these
files only:

| File | Controls |
|---|---|
| `src/data/experience.ts` | Experience timeline |
| `src/data/projects.ts` | Project cards (filterable by category) |
| `src/data/skills.ts` | The Skill Mastery Map — domains, concepts, mastery status |
| `src/data/publications.ts` | Research/thesis cards |
| `src/data/education.ts` | Education timeline |
| `src/data/contact.ts` | Email, GitHub, LinkedIn, resume link |

Each file is fully typed (see `src/types/index.ts`), so your editor will warn you if a field is
missing. Add or remove array entries freely — the UI renders whatever is there.

**To add your resume PDF:** drop the file at `public/resume.pdf` (exact name). The "Download
Resume" buttons already point there.

**Skill status icons** (`✓` mastered, `◐` learning, `○` future) come from the `status` field on
each concept in `skills.ts` — set it to `'completed' | 'learning' | 'future'`.

## 3. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with `npm run preview`.

## 4. Deploy — completely free

Pick **one**. All three are free for a personal portfolio.

### Option A — Vercel (easiest, recommended)
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub → "Add New Project" → select
   your repo.
3. Framework preset: **Vite**. Leave build settings as default (`npm run build`, output `dist`).
4. Click Deploy. You get a free `your-project.vercel.app` URL, HTTPS included, and every future
   `git push` auto-deploys.

### Option B — Netlify
1. Push to GitHub.
2. [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project".
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy — free `your-project.netlify.app` URL with HTTPS.

### Option C — GitHub Pages (no third-party account needed beyond GitHub)
1. Push this project to a GitHub repo, e.g. `github.com/Arif-gits/portfolio`.
2. Set the base path so assets resolve correctly under `/portfolio/`:
   ```bash
   VITE_BASE_PATH=/portfolio/ npm run build
   ```
   (Replace `portfolio` with your actual repo name. Skip this step entirely if you're using a
   custom domain or deploying to `<username>.github.io` as the root repo.)
3. Deploy with the included script:
   ```bash
   npm run deploy
   ```
   This uses `gh-pages` to push `dist/` to a `gh-pages` branch.
4. In your GitHub repo → Settings → Pages → set source to the `gh-pages` branch. Your site goes
   live at `https://<username>.github.io/<repo>/`.

All three options are $0/month for this project's traffic and size — no credit card required.

## 5. Custom domain (optional, still free-to-cheap)

Vercel and Netlify both let you attach a custom domain for free (you only pay the domain
registrar, e.g. ~$10–12/year for a `.com`, or use a free subdomain provider). Add it under
Project Settings → Domains on either platform.

## Project structure

```
src/
  components/
    layout/      Navbar
    sections/    Hero, Experience, Projects, Skills, Publications, Education, Contact
    ui/          SectionHeading, SkillNode, ProjectCard — reusable pieces
  data/          All editable content lives here
  hooks/         useActiveSection (scroll spy), useIsTouchDevice
  types/         Shared TypeScript interfaces for every data file
  utils/         scrollToSection helper
  styles/        Tailwind entry + global CSS (dotted background, focus states)
```

## Notes

- The contact form uses a `mailto:` link (opens the visitor's email client with the message
  pre-filled) so it works with zero backend on any static host. If you later want form
  submissions to land in an inbox without opening the visitor's mail client, wire it to a free
  tier of [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) — just swap
  the `handleSubmit` function in `src/components/sections/Contact.tsx`.
- Reduced-motion preference is respected sitewide (`prefers-reduced-motion`).
- Keyboard focus is visible on every interactive element.
