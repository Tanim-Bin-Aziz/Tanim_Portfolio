"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Clock,
  CheckCircle2,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import { DiGithub } from "react-icons/di";

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
    liveLink: "https://health-app-psi-one.vercel.app",
    codeLink: "https://github.com/Tanim-Bin-Aziz/health_app",
    image:
      "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
  {
    title: "Hotel Management System",
    description:
      "Complete hotel management system with booking, check-in/check-out, billing, invoice generation, and admin dashboard.",
    technologies: ["PHP", "Laravel", "MySQL", "Blade"],
    liveLink: "",
    codeLink: "https://github.com/Tanim-Bin-Aziz/hotel-management",
    image:
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1200",
    status: "completed",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;
  const projectUrl = project.liveLink || project.codeLink;

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-full transform-gpu"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-[linear-gradient(135deg,rgba(195,204,155,0.55),rgba(120,150,120,0.35),rgba(25,69,71,0.55))] opacity-0 blur-[22px] transition duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        {/* Image */}
        <div className="relative h-48 shrink-0 overflow-hidden sm:h-52">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[#194547]/25 mix-blend-overlay" />

          <div
            className={`absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-xl border px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${status.className}`}
          >
            <StatusIcon size={12} />
            <span>{status.label}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex grow flex-col p-5 sm:p-6">
          <div className="grow">
            <h3 className="mb-2 text-lg font-bold text-white">
              {project.title}
            </h3>

            <p className="line-clamp-2 text-sm leading-relaxed text-white/70">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[rgba(195,204,155,0.22)] bg-[linear-gradient(135deg,rgba(195,204,155,0.14),rgba(25,69,71,0.18))] px-2.5 py-1 text-[10px] font-semibold text-[#E7EDC8]"
                >
                  {tech}
                </span>
              ))}

              {project.technologies.length > 3 && (
                <span className="rounded-lg border border-[rgba(195,204,155,0.22)] bg-[linear-gradient(135deg,rgba(195,204,155,0.14),rgba(25,69,71,0.18))] px-2.5 py-1 text-[10px] font-semibold text-[#E7EDC8]">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 flex gap-3">
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl border border-[rgba(195,204,155,0.22)] bg-[linear-gradient(135deg,rgba(195,204,155,0.16),rgba(25,69,71,0.28))] px-4 py-2 text-xs font-bold text-[#F4F7E8] shadow-[0_10px_30px_rgba(25,69,71,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]" />
              <span className="relative z-10 flex items-center gap-2">
                <ExternalLink size={16} />
                View Project
              </span>
            </Link>

            <Link
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
              className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-[rgba(195,204,155,0.18)] bg-[linear-gradient(135deg,rgba(195,204,155,0.10),rgba(25,69,71,0.24))] p-3 text-[#DCE5B5] shadow-[0_10px_25px_rgba(25,69,71,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:scale-[1.04]"
            >
              <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
              <DiGithub size={18} className="relative z-10" />
            </Link>
          </div>
        </div>

        {/* Shimmer */}
        <div className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)] opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#C3CC9B] sm:text-4xl">
            Projects
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            A few things I&apos;ve built recently — glassy UI, clean code, and
            real-world projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
