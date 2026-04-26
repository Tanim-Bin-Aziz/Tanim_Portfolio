"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type SkillItem = {
  name: string;
  logo: string;
};

const skills: SkillItem[] = [
  { name: "Git", logo: "/icons/git.svg" },
  { name: "Postman", logo: "/icons/postman.svg" },
  { name: "Docker", logo: "/icons/docker.svg" },
  { name: "Express", logo: "/icons/express.svg" },
  { name: "Github", logo: "/icons/github.svg" },
  { name: "MongoDB", logo: "/icons/mongodb.svg" },
  { name: "Firebase", logo: "/icons/firebase.svg" },
  { name: "React", logo: "/icons/react.svg" },
  { name: "Linux", logo: "/icons/linux.svg" },
  { name: "AWS", logo: "/icons/aws.svg" },
  { name: "PostgreSQL", logo: "/icons/postgresql.svg" },
  { name: "TypeScript", logo: "/icons/typescript.svg" },
  { name: "Node.js", logo: "/icons/nodejs.svg" },
  { name: "Figma", logo: "/icons/figma.svg" },
  { name: "VS Code", logo: "/icons/vscode.svg" },
  { name: "JavaScript", logo: "/icons/javascript.svg" },
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
              <div className="relative mb-1 h-[62%] w-[62%] sm:h-3/4 sm:w-3/4 lg:h-3/5 lg:w-3/5">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 20vw, (max-width: 1024px) 12vw, 58px"
                  unoptimized
                  draggable={false}
                  className="object-contain"
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
