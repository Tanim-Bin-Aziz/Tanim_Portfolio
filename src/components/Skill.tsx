"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type SkillItem = {
  name: string;
  logo: string;
};

const skills: SkillItem[] = [
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Github",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
];

const shuffleArray = (arr: SkillItem[]): SkillItem[] => {
  const newArr = [...arr];

  for (let i = newArr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
};

const Skill = () => {
  const [cards, setCards] = useState<SkillItem[]>(skills);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCards((prev) => shuffleArray(prev));
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:grid-cols-5 lg:gap-4">
        <AnimatePresence>
          {cards.map((item) => (
            <motion.div
              key={item.name}
              layout
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 22,
                mass: 0.8,
              }}
              className="flex aspect-square w-full flex-col items-center justify-center rounded-[7px] border border-white/20 bg-white/10 p-2 backdrop-blur-lg transition-colors duration-300 hover:border-[var(--accent)]/40 hover:bg-white/[0.14] sm:rounded-xl sm:p-3 lg:h-[88px] lg:w-[88px] lg:p-2 xl:h-[96px] xl:w-[96px]"
            >
              <div className="mb-1 flex h-[62%] w-[62%] items-center justify-center sm:h-3/4 sm:w-3/4 lg:h-3/5 lg:w-3/5">
                <img
                  src={item.logo}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="max-w-full truncate text-center text-[8px] font-semibold leading-none text-white sm:text-xs md:text-sm lg:text-xs xl:text-sm">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skill;
