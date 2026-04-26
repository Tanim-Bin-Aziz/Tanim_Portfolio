import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import Skill from "./Skill";
import Image from "next/image";
import logo from "../../public/AI Logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 md:px-8 lg:px-10 xl:px-12"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12 xl:gap-16">
        {/* Left Content */}
        <div className="mx-auto w-full max-w-3xl text-center lg:mx-0 lg:text-left">
          <p className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(195,204,155,0.28)] bg-white/4.5 px-3.75 py-2 text-xs font-semibold tracking-[0.01em] text-(--accent) backdrop-blur-xl sm:text-sm lg:mx-0">
            <Image
              src={logo}
              alt="AI Logo"
              width={18}
              height={18}
              className="h-4.5 w-4.5 shrink-0 object-contain"
              priority
            />

            <span>Junior Full Stack Developer</span>
          </p>
          <h1 className="mx-auto max-w-4xl text-[42px] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:mx-0 lg:text-6xl xl:text-7xl">
            Hello, I&apos;m <br />
            <span className="text-[#C2D099]">Tanim Bin Aziz</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-base md:text-lg md:leading-8 lg:mx-0">
            I build fast, responsive, and scalable web applications using React,
            Next.js, TypeScript, Node.js, Express, PostgreSQL and modern UI
            technologies.
          </p>

          {/* Tech Tags */}
          <div className="mt-4 flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:justify-start">
            {[
              "React.Js",
              "Next.Js",
              "TypeScript",
              "Node.Js",
              "Express.Js",
              "PostgreSQL",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/4.5 px-3.5 py-2 text-xs font-medium text-[#C2D099] backdrop-blur-xl transition hover:border-(--accent)/40 hover:text-(--accent) sm:px-4 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex h-11 w-42.5 items-center justify-center rounded-full bg-(--accent) px-5 text-xs font-bold text-[#071717] shadow-[0_18px_45px_rgba(195,204,155,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(195,204,155,0.28)] sm:h-auto sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
            >
              View Projects
              <span className="ml-1.5 transition duration-300 group-hover:translate-x-1 sm:ml-2">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="hidden items-center justify-center rounded-full border border-white/12 bg-white/4.5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-(--accent)/45 hover:text-(--accent) sm:inline-flex"
            >
              Contact Me
            </a>
          </div>
          {/* Social Icons */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {[
              {
                label: "GitHub",
                href: "https://github.com/Tanim-Bin-Aziz",
                icon: FaGithub,
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/tanim-bin-aziz",
                icon: FaLinkedinIn,
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/",
                icon: FaFacebookF,
              },
              {
                label: "WhatsApp",
                href: "https://wa.me/8801719000060",
                icon: FaWhatsapp,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/4.5 text-[#C2D099] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-(--accent)/45 hover:bg-(--accent)/10 hover:text-(--accent) hover:shadow-[0_18px_45px_rgba(195,204,155,0.12)] sm:h-12 sm:w-12"
                >
                  <Icon className="text-[17px] transition duration-300 group-hover:scale-110 sm:text-[18px]" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Skill Area */}
        <div className="mx-auto w-full max-w-85 pb-10 sm:max-w-130 md:max-w-155 lg:mx-0 lg:max-w-none lg:pb-0">
          <Skill />
        </div>
      </div>
    </section>
  );
};

export default Hero;
