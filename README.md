# sumitkanwal

Personal site for **Sumit Singh Kanwal** — backend lead, software engineer, builder.

Built with [Next.js 15](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and statically exported for GitHub Pages.

Live site: https://kloudd.github.io/sumitkanwal/

## Local development

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Build for production

```bash
pnpm build
```

The static site is emitted to `out/`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. Enable Pages via
**Settings → Pages → Build and deployment → Source: GitHub Actions**.
