"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  ClipboardList,
  Layers,
  Code2,
  FlaskConical,
  Rocket,
  Check,
  ChevronRight,
} from "lucide-react";

type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  border: string;
  items: string[];
};

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    description:
      "Understanding your needs and goals through consultation and research.",
    icon: Search,
    color: "#60A5FA",
    bg: "rgba(37, 99, 235, 0.14)",
    border: "rgba(96, 165, 250, 0.35)",
    items: [
      "Initial consultation",
      "Project requirements analysis",
      "Market research",
      "Competitor analysis",
      "Goal setting",
    ],
  },
  {
    id: 2,
    title: "Planning",
    description: "Creating a detailed roadmap and strategy for your project.",
    icon: ClipboardList,
    color: "#A855F7",
    bg: "rgba(126, 34, 206, 0.18)",
    border: "rgba(168, 85, 247, 0.38)",
    items: [
      "Project scope definition",
      "Timeline creation",
      "Resource allocation",
      "Technology selection",
      "Risk assessment",
    ],
  },
  {
    id: 3,
    title: "Design",
    description: "Crafting visually stunning and user-friendly interfaces.",
    icon: Layers,
    color: "#F43F5E",
    bg: "rgba(190, 18, 60, 0.16)",
    border: "rgba(244, 63, 94, 0.38)",
    items: [
      "Wireframing",
      "UI/UX design",
      "Prototype development",
      "Client feedback integration",
      "Design finalization",
    ],
  },
  {
    id: 4,
    title: "Development",
    description:
      "Building robust and scalable solutions with modern technologies.",
    icon: Code2,
    color: "#F59E0B",
    bg: "rgba(180, 83, 9, 0.16)",
    border: "rgba(245, 158, 11, 0.36)",
    items: [
      "Frontend development",
      "Backend implementation",
      "Database integration",
      "API development",
      "Code optimization",
    ],
  },
  {
    id: 5,
    title: "Testing",
    description:
      "Ensuring functionality, performance, and compatibility across devices.",
    icon: FlaskConical,
    color: "#10B981",
    bg: "rgba(5, 150, 105, 0.16)",
    border: "rgba(16, 185, 129, 0.36)",
    items: [
      "Functionality testing",
      "Performance optimization",
      "Cross-browser compatibility",
      "Mobile responsiveness",
      "Security testing",
    ],
  },
  {
    id: 6,
    title: "Launch",
    description:
      "Deploying your project with a smooth transition to the live environment.",
    icon: Rocket,
    color: "#06B6D4",
    bg: "rgba(8, 145, 178, 0.16)",
    border: "rgba(6, 182, 212, 0.36)",
    items: [
      "Final review",
      "Deployment preparation",
      "Go-live execution",
      "Post-launch monitoring",
      "Client training",
    ],
  },
];

const panelVariants = {
  initial: { opacity: 0, x: -18, y: 8 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 18, y: -6 },
};

const cardVariants = {
  initial: { opacity: 0, x: 24, scale: 0.985 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -20, scale: 0.985 },
};

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisibleRef = useRef(true);

  const activeStep = processSteps[activeIndex];
  const ActiveIcon = activeStep.icon;

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      // Section-ta viewport-e na thakle ba tab background-e gele autoplay off
      if (document.hidden || !isVisibleRef.current) return;
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-transparent px-5 py-12 text-white sm:px-6 lg:px-10 xl:px-14"
    >
      <div className="relative z-10 mx-auto w-full max-w-280">
        {/* Top Stepper */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10"
        >
          <div className="absolute left-[6%] right-[6%] top-6.25 hidden h-px bg-white/12 md:block" />

          <div className="grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-3">
            {processSteps.map((step, index) => {
              const isActive = index === activeIndex;
              const isCompleted = index < activeIndex;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group relative flex flex-col items-center gap-2 text-center"
                >
                  <span
                    className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300 sm:h-12 sm:w-12 md:h-13 md:w-13 ${
                      isActive
                        ? "border-white bg-white text-black shadow-[0_0_0_7px_rgba(255,255,255,0.07)]"
                        : isCompleted
                          ? "border-white/60 bg-white/10 text-white"
                          : "border-white/20 bg-[#080808] text-white"
                    }`}
                  >
                    {isCompleted ? <Check className="h-4 w-4" /> : step.id}
                  </span>

                  <span
                    className={`text-xs font-semibold transition-colors duration-300 sm:text-sm ${
                      isActive
                        ? "text-white"
                        : isCompleted
                          ? "text-white/70"
                          : "text-white/50 group-hover:text-white"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-8 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-10">
          {/* Left Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${activeStep.id}`}
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="w-full ml-6 lg:ml-14 max-w-82.5 justify-self-start"
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white/75">
                <span>Step</span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
                <span className="font-bold text-white">
                  {String(activeStep.id).padStart(2, "0")}
                </span>
              </div>

              {/* Icon beside title */}
              <div className="flex items-center gap-4">
                <motion.div
                  key={`icon-${activeStep.id}`}
                  initial={{ scale: 0.9, opacity: 0, rotate: -8 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border sm:h-15 sm:w-15"
                  style={{
                    background: activeStep.bg,
                    borderColor: activeStep.border,
                    boxShadow: `0 16px 38px ${activeStep.bg}`,
                  }}
                >
                  <ActiveIcon className="h-7 w-7 text-white" />
                </motion.div>

                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {activeStep.title}
                </h2>
              </div>

              <p className="mt-5 max-w-82.5 text-base leading-7 text-white/72">
                {activeStep.description}
              </p>

              <ul className="mt-5 space-y-3">
                {activeStep.items.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.28,
                      delay: index * 0.035,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-3 text-sm text-white/78 sm:text-base"
                  >
                    <ChevronRight className="h-4 w-4 shrink-0 text-white" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Right Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${activeStep.id}`}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full lg:mr-14 max-w-90 lg:max-w-147.5 justify-self-end"
            >
              <div
                className="relative min-h-55 overflow-hidden rounded-3xl border p-5 shadow-2xl sm:min-h-60 sm:p-6"
                style={{
                  background: `linear-gradient(135deg, ${activeStep.bg}, rgba(5,5,5,0.96))`,
                  borderColor: activeStep.border,
                }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[20%] left-[13%] h-14 w-14 rounded-full bg-white/7.5 shadow-[inset_0_0_24px_rgba(255,255,255,0.04)] sm:h-16 sm:w-16"
                />

                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[13%] top-[22%] h-16 w-16 rounded-full bg-white/7.5 shadow-[inset_0_0_24px_rgba(255,255,255,0.04)] sm:h-20 sm:w-20"
                />

                <div className="relative z-10 flex min-h-44.5 flex-col items-center justify-center text-center sm:min-h-48.75">
                  <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/45 shadow-xl sm:h-18 sm:w-18"
                  >
                    <ActiveIcon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {activeStep.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/65 sm:text-base">
                    {activeStep.description}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 right-4 flex h-18 w-18 items-center justify-center rounded-2xl border border-white/15 bg-[#080808] shadow-2xl sm:h-20 sm:w-20"
              >
                <span
                  className="text-3xl font-black sm:text-4xl"
                  style={{
                    color: activeStep.color,
                    textShadow: `0 0 22px ${activeStep.color}`,
                  }}
                >
                  {String(activeStep.id).padStart(2, "0")}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
