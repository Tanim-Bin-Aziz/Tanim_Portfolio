import type { Project } from "@/types";

/**
 * Real repos from github.com/Tanim-Bin-Aziz.
 * Projects match resume descriptions.
 */
export const projects: Project[] = [
  {
    name: "Tanim Portfolio",
    stack: "Next.js, TypeScript, Tailwind CSS",
    desc: "This site — a dashboard-styled portfolio with a live GitHub contribution graph.",
    github: "https://github.com/Tanim-Bin-Aziz/Tanim_Portfolio",
    link: "https://tanim-bin-aziz.vercel.app",
  },
  {
    name: "Health App",
    stack: "Next.js, Tailwind CSS, Node.js, Express.js",
    desc: "A scalable full-stack healthcare web application enabling users to browse doctors, book appointments, and access role-based dashboards. Optimized API performance and component reusability, improving load time and development efficiency by 25–30%.",
    github: "https://github.com/Tanim-Bin-Aziz/health_app",
    link: "https://health-app-psi-one.vercel.app",
  },
  {
    name: "Transport Management System",
    stack: "React.js, TypeScript, Node.js, Express.js, PostgreSQL, Prisma",
    desc: "A Transport Management Module for a School System with vehicle, route, pickup point, and student transport assignment features. Includes an automated system that generates student transport fees instantly upon route assignment, with scalable APIs and database relations for efficient transport and billing management.",
    github: "https://github.com/Tanim-Bin-Aziz/transport_frontend",
    link: "https://transport-frontend-pi.vercel.app",
  },
];
