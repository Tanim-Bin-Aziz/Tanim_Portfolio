"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, Lightbulb, type LucideIcon } from "lucide-react";

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
    liveLink: "",
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

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-br from-(--accent)/10 to-[#194547]/25 mix-blend-overlay" />

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
                  className="rounded-md border border-[rgba(195,204,155,0.22)] bg-[linear-gradient(135deg,rgba(195,204,155,0.14),rgba(25,69,71,0.18))] px-2.5 py-1 text-[10px] font-semibold text-[#E7EDC8]"
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
              className="group inline-flex h-10 px-4 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-[#C3CC9B] backdrop-blur-xl transition-all duration-300 hover:border-[#C3CC9B]/30 hover:bg-white/10"
            >
              <FiGithub
                size={17}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm font-medium">Code</span>
            </Link>
          </div>
        </div>

        {/* Shimmer */}
        <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)] opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 3);
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
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="rounded-xl border border-[#C3CC9B]/30 bg-white/5 px-6 py-3 text-sm font-medium text-[#E7EDC8] backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
        >
          {showMore ? "Show Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
