# Tanim Bin Aziz — Portfolio (Next.js + TypeScript)

Tomar single-file React component ta Next.js App Router + TypeScript e convert kora hoyeche.
Design hubohu same — shudhu Next.js-specific bug gulo fix kora hoyeche.

## Folder structure

```
src/
├─ app/
│  ├─ layout.tsx          # fonts, metadata, theme anti-flash script
│  ├─ page.tsx            # shudhu section gulo compose kore
│  └─ globals.css         # shob design token + class (grid-bg, project-card, ...)
├─ components/
│  ├─ Header.tsx          # avatar + name + location (Server Component)
│  ├─ LocalTime.tsx       # live clock (Client)
│  ├─ SocialLinks.tsx     # header row + footer pill — duitai ekhan theke
│  ├─ About.tsx           # description
│  ├─ Experience.tsx      # timeline + See more (Client)
│  ├─ Projects.tsx        # project card list
│  ├─ GithubActivity.tsx  # contribution grid (Server)
│  ├─ Skills.tsx          # skill badges
│  ├─ Contact.tsx         # footer pill + copyright
│  ├─ BottomNav.tsx       # floating nav + theme toggle (Client)
│  └─ icons/index.tsx     # shob inline SVG icon
├─ data/                  # skills.ts, projects.ts, experiences.ts, site.ts
├─ lib/contributions.ts   # seeded contribution generator
└─ types/index.ts         # shob interface
```

## Setup

```bash
npm install
npm run dev
```

Tailwind v4 use kora hoyeche (`@import "tailwindcss"` + `@tailwindcss/postcss`).
Tailwind v3 use korle `globals.css` er prothom line ta replace koro:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Ki ki fix kora hoyeche

1. **Hydration error (sob theke boro bug)** — `Math.random()` module scope e chilo, tai server
   ar client e alada grid render hoto. Ekhon `mulberry32` seeded PRNG use kora hoyeche +
   `GithubActivity` ekta Server Component, so mismatch impossible.
2. **Month label misalignment** — age 12 ta label ke equal width diye bhag kora hocchilo.
   Ekhon protita label real date theke week index calculate kore absolute position e boshe.
3. **Hardcoded time `6:00 AM`** — `LocalTime.tsx` `Intl.DateTimeFormat` diye Asia/Dhaka er
   real time dekhay, mount er por (hydration-safe).
4. **Hardcoded `958 contributions`** — ekhon actual grid theke total count hoy.
5. **`experiences.slice(0, 3)`** — hardcoded 3 er bodole `experiences.length` base kora.
6. **`<button>` er bodole `<a>`** — GitHub/LinkedIn/Email/project link gulo ekhon real anchor,
   SEO + keyboard accessible.
7. **Inline style er pahar → CSS classes** — shob `style={{...}}` globals.css e shift kora,
   hover gulo ar `onMouseEnter` diye JS e handle korte hocche na (CSS `:hover`).
8. **Nav button gulo ekhon kaj kore** — IntersectionObserver diye active section detect,
   smooth scroll, ar theme toggle (dark/light) with localStorage + no-flash script.
9. **Accessibility** — `:focus-visible` outline, `aria-label`, `aria-expanded`,
   `prefers-reduced-motion` respect.

## Customize korar jaygagulo

- Personal info: `src/data/site.ts` (name, location, social links)
- Projects: `src/data/projects.ts` — `hasGithub: true` er bodole ekhon direct URL dao
- Experience: `src/data/experiences.ts`
- Skills: `src/data/skills.ts` — emoji rakhte na chaile devicon CDN use koro:
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`
- Avatar: `Header.tsx` e emoji ache; real chobi chaile `next/image` diye
  `/public/images/profile.webp` boshiye dao.
- Real GitHub data chaile `lib/contributions.ts` er jaygay GitHub GraphQL API
  (`contributionsCollection`) call koro ekta Server Component / route handler theke.
