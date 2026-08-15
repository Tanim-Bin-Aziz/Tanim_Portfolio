"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  Lightbulb,
  type LucideIcon,
  FolderCode,
  Layers,
} from "lucide-react";

import { FiArrowUpRight, FiGithub } from "react-icons/fi";

type ProjectStatus = "completed" | "in-progress" | "planning";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  codeLink: string;
  image: string;
  status: ProjectStatus;
};

type StatusConfig = {
  icon: LucideIcon;
  label: string;
  className: string;
};

const statusConfig: Record<ProjectStatus, StatusConfig> = {
  completed: {
    icon: CheckCircle2,
    label: "Completed",
    className: "border-green-500/30 bg-green-500/20 text-green-300",
  },
  "in-progress": {
    icon: Clock,
    label: "In Progress",
    className: "border-yellow-500/30 bg-yellow-500/20 text-yellow-300",
  },
  planning: {
    icon: Lightbulb,
    label: "Planning",
    className: "border-blue-500/30 bg-blue-500/20 text-blue-300",
  },
};

// Tech name -> local icon (SVGs already shipped in /public/icons), tech chip
// gulo purely text-only na thakle o extra kono network request lage na
const techIconMap: Record<string, string> = {
  React: "/icons/react.svg",
  TypeScript: "/icons/typescript.svg",
  JavaScript: "/icons/javascript.svg",
  "Node.js": "/icons/nodejs.svg",
  PostgreSQL: "/icons/postgresql.svg",
  MongoDB: "/icons/mongodb.svg",
  Docker: "/icons/docker.svg",
  Figma: "/icons/figma.svg",
};

const projects: Project[] = [
  {
    title: "HealthCare Web App (Frontend)",
    description:
      "Frontend for a healthcare platform built with Next.js and TypeScript. Features patient flows, clean UI, and fast routing.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
    liveLink: "https://next-dent.vercel.app",
    codeLink: "https://github.com/Tanim-Bin-Aziz/next_dent_page",
    image: "/images/projects/hospital.png",
    status: "completed",
  },
  {
    title: "Restaurant Management System",
    description:
      "A full-stack restaurant management platform with order processing, table reservations, menu management, kitchen workflow, billing system, and admin dashboard.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    liveLink: "https://restaurant-test-self.vercel.app",
    codeLink: "https://github.com/yourgithub/restaurant-management",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    status: "completed",
  },
  {
    title: "Transport Management System",
    description:
      "A full-featured transport management frontend built with React and TypeScript. Includes transport tracking, route management, and an intuitive dashboard interface.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveLink: "https://transport-frontend-pi.vercel.app",
    codeLink: "https://github.com/Tanim-Bin-Aziz/transport_frontend",
    image:
      "https://images.pexels.com/photos/32322673/pexels-photo-32322673.jpeg?auto=compress&cs=tinysrgb&w=1200",
    status: "completed",
  },
  {
    title: "HealthCare Server",
    description:
      "Backend API for the healthcare platform with a TypeScript codebase, Prisma setup, REST APIs, and file upload support.",
    technologies: ["Node.js", "TypeScript", "Prisma", "REST API"],
    liveLink: "",
    codeLink: "https://github.com/Tanim-Bin-Aziz/health_server",
    image: "/images/projects/backend project.png",
    status: "completed",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;
  const projectUrl = project.liveLink || project.codeLink;

  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold tracking-tight text-[#C3CC9B] sm:text-3xl">
            <FolderCode className="size-6 stroke-[2.5] sm:size-7" />
            <span>Projects</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            A collection of projects crafted with modern technologies,
            thoughtful design, and a focus on creating fast, functional, and
            engaging digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[190px_minmax(0,1fr)_230px] lg:gap-5">
          {/* Project list: horizontal scroll on mobile, vertical column on desktop */}
          <div className="order-1 flex gap-2 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {projects.map((p, index) => {
              const isActive = index === selected;

              return (
                <button
                  key={p.title}
                  onClick={() => setSelected(index)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 text-left text-xs font-medium backdrop-blur-xl transition-all duration-300 lg:shrink lg:text-sm ${
                    isActive
                      ? "border-[#C3CC9B]/50 bg-[#C3CC9B]/12 text-[#E7EDC8]"
                      : "border-white/10 bg-white/5 text-white/65 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span
                    className={`text-[10px] font-semibold ${isActive ? "text-[#C3CC9B]" : "text-white/35"}`}
                  >
                    0{index + 1}
                  </span>
                  <span className="max-w-[140px] truncate lg:max-w-none">
                    {p.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main preview */}
          <div className="order-2 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <div className="relative h-56 shrink-0 overflow-hidden sm:h-72 lg:h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={selected === 0}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
                  <div
                    className={`absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-xl border px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${status.className}`}
                  >
                    <StatusIcon size={12} />
                    <span>{status.label}</span>
                  </div>
                </div>

                <div className="flex grow flex-col p-5 sm:p-6">
                  <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2">
                    <Link
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-[#F4F7E8] backdrop-blur-xl transition-all duration-300 hover:border-[#C3CC9B]/30 hover:bg-white/10"
                    >
                      <FiArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                      Live Demo
                    </Link>

                    <Link
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source code on GitHub"
                      className="group inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-[#C3CC9B] backdrop-blur-xl transition-all duration-300 hover:border-[#C3CC9B]/30 hover:bg-white/10"
                    >
                      <FiGithub
                        size={17}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-sm font-medium">Code</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Stack panel */}
          <div className="order-3 lg:order-3">
            <div className="flex h-full flex-col rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl sm:p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#C3CC9B]">
                <Layers size={16} />
                <span>Tech Stack</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.ul
                  key={project.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-2"
                >
                  {project.technologies.map((tech) => {
                    const icon = techIconMap[tech];

                    return (
                      <li
                        key={tech}
                        className="flex items-center gap-2 rounded-lg border border-[rgba(195,204,155,0.18)] bg-[linear-gradient(135deg,rgba(195,204,155,0.1),rgba(25,69,71,0.14))] px-2.5 py-1.5 text-xs font-medium text-[#E7EDC8]"
                      >
                        {icon ? (
                          <Image
                            src={icon}
                            alt=""
                            width={14}
                            height={14}
                            className="shrink-0"
                          />
                        ) : (
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C3CC9B]/60" />
                        )}
                        <span className="truncate">{tech}</span>
                      </li>
                    );
                  })}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
