"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Download,
  Menu,
  X,
  Home,
  FolderCode,
  UserRound,
  Mail,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  id: string;
  icon: LucideIcon;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "#home", id: "home", icon: Home },
  { name: "Projects", href: "#projects", id: "projects", icon: FolderCode },
  {
    name: "Experience",
    href: "#experience",
    id: "experience",
    icon: BriefcaseBusiness,
  },
  { name: "About", href: "#about", id: "about", icon: UserRound },
  { name: "Contact", href: "#contact", id: "contact", icon: Mail },
];

const glassClass =
  "border border-white/20 bg-white/10 shadow-lg backdrop-blur-[28px] backdrop-saturate-150";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 sm:py-6 md:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-4 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr] ${glassClass}`}
      >
        {/* Left Nav - Desktop */}
        <nav className="hidden min-w-0 items-center gap-4 justify-self-start md:flex lg:gap-6">
          {navLinks.map(({ name, href, id, icon: Icon }) => {
            const isActive = activeSection === id;

            return (
              <Link
                key={name}
                href={href}
                onClick={() => handleNavClick(id)}
                className={`group relative inline-flex items-center gap-2 whitespace-nowrap py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-(--accent)"
                    : "text-white/90 hover:text-(--accent)"
                }`}
              >
                <Icon
                  className={`h-4.25 w-4.25 transition-all duration-300 ${
                    isActive ? "stroke-[2.3]" : "stroke-2 group-hover:scale-110"
                  }`}
                />

                <span>{name}</span>

                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-linear-to-r from-[#194547] to-(--accent) transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Brand */}
        <Link
          href="#home"
          onClick={() => handleNavClick("home")}
          className="min-w-0 truncate text-lg font-bold text-(--accent) transition-colors duration-300 hover:text-[#DDE8AE] sm:text-xl md:justify-self-center md:text-center"
        >
          Tanim Bin Aziz
        </Link>

        {/* Right Action - Desktop */}
        <div className="hidden justify-self-end md:block">
          <a
            href="/resume/Tanim-Bin-Aziz-Resume.pdf"
            download
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-(--accent)/35 bg-(--accent)/15 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-(--accent) hover:text-[#071717]"
          >
            <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="rounded-lg p-2 text-white transition-colors duration-300 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl p-4 md:hidden ${glassClass}`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map(({ name, href, id, icon: Icon }) => {
                const isActive = activeSection === id;

                return (
                  <Link
                    key={name}
                    href={href}
                    onClick={() => handleNavClick(id)}
                    className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors duration-300 ${
                      isActive
                        ? "bg-(--accent)/15 text-(--accent)"
                        : "text-white hover:bg-white/10 hover:text-(--accent)"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {name}
                  </Link>
                );
              })}

              <a
                href="/resume/Tanim Bin Aziz.pdf"
                download
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-(--accent) px-4 py-2 text-sm font-semibold text-[#071717] transition-transform duration-300 hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
