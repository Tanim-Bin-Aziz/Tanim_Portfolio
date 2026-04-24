"use client";

import { motion } from "framer-motion";

type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
};

const experiences: Experience[] = [
  {
    year: "Dec 2025 - Present",
    role: "Junior Full-Stack Developer",
    company: "Synex Digital",
    description:
      "Contributed to the development of scalable web applications using React, Next.js, Node.js, and modern backend tools, improving user experience, performance, and maintainability.",
  },
  {
    year: "July 2025 - Nov 2025",
    role: "Full Stack Developer Intern",
    company: "Synex Digital",
    description:
      "Assisted in building and maintaining web applications, collaborating with the development team to implement features, debug issues, and improve frontend-backend integration.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/8 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <p className="mx-auto mb-4 w-fit rounded-full border border-[rgba(195,204,155,0.25)] bg-white/[0.045] px-4 py-2 text-sm font-semibold text-[var(--accent)] backdrop-blur-xl">
            Career Journey
          </p>

          <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#C3CC9B] sm:text-4xl">
            Experience
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            My professional journey as a full-stack developer, working across
            frontend, backend, APIs, and production-level web applications.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[15px] top-0 w-[3px] overflow-hidden rounded-full bg-white/15 shadow-[0_0_22px_rgba(195,204,155,0.10)] sm:left-[23px] md:left-1/2 md:-translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-[#E7EDC8] via-[#2c7678] to-cyan-400/60 shadow-[0_0_18px_rgba(195,204,155,0.35)]"
            />
          </div>

          <div className="space-y-10 sm:space-y-14">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={`${exp.role}-${exp.year}`} className="relative">
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute left-[11px] top-7 z-10 sm:left-[19px] md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="block h-3.5 w-3.5 rounded-full border border-white/50 bg-white/40 shadow-[0_0_18px_rgba(195,204,155,0.45)] backdrop-blur-md" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -34 : 34,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.58,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`ml-10 sm:ml-14 md:ml-0 ${
                      isLeft ? "md:mr-[54%] md:text-right" : "md:ml-[54%]"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30 hover:bg-white/[0.08] sm:p-6">
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-[var(--accent)]/[0.035] opacity-0 transition duration-300 group-hover:opacity-100" />

                      <div className="relative">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#C3CC9B]/90 sm:text-sm">
                          {exp.year}
                        </p>

                        <h3 className="text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
                          {exp.role}
                        </h3>

                        <p className="mt-1 font-medium text-[#C3CC9B]">
                          {exp.company}
                        </p>

                        <p className="mt-4 text-sm leading-7 text-white/75">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
