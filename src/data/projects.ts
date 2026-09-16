import type { Project } from "@/types";

/**
 * Real repos from github.com/Tanim-Bin-Aziz.
 * `stack` ekhono shudhu API er language + Vercel deployment —
 * chaile aro detail add korte paro.
 */
export const projects: Project[] = [
  {
    name: "Tanim Portfolio",
    stack: "TypeScript, Vercel",
    desc: "This site — a dashboard-styled portfolio with a live GitHub contribution graph.",
    github: "https://github.com/Tanim-Bin-Aziz/Tanim_Portfolio",
    link: "https://tanim-bin-aziz.vercel.app",
  },
  {
    name: "Mini ERP",
    stack: "TypeScript, Vercel",
    desc: "A small ERP system split into a client and a separate backend service.",
    github: "https://github.com/Tanim-Bin-Aziz/Mini-ERP-Frontend",
    link: "https://mini-erp-frontend-rho.vercel.app",
  },
  {
    name: "Shop",
    stack: "TypeScript, Vercel",
    desc: "An e-commerce storefront built with a separate client and server.",
    github: "https://github.com/Tanim-Bin-Aziz/shop",
    link: "https://shop-chi-gold.vercel.app",
  },
  {
    name: "Transport Management",
    stack: "TypeScript, Vercel",
    desc: "A transport management frontend backed by its own API service.",
    github: "https://github.com/Tanim-Bin-Aziz/transport_frontend",
    link: "https://transport-frontend-pi.vercel.app",
  },
  {
    name: "Health App",
    stack: "TypeScript, Vercel",
    desc: "A health tracking app with a dedicated backend server.",
    github: "https://github.com/Tanim-Bin-Aziz/health_app",
    link: "https://health-app-psi-one.vercel.app",
  },
  {
    name: "Feynlab",
    stack: "TypeScript, Vercel",
    desc: "An interactive TypeScript web app.",
    github: "https://github.com/Tanim-Bin-Aziz/feynlab",
    link: "https://feynlab.vercel.app",
  },
];
