const highlights = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express.js",
];

export default function About() {
  return (
    <section className="section">
      <p className="section-label">About</p>

      <p className="body-text">
        Full-stack developer specializing in creating modern, high-performance, and
        responsive web applications. I work with{" "}
        {highlights.map((tech, i) => (
          <span key={tech}>
            <span className="underline-link">{tech}</span>
            {i < highlights.length - 2 ? ", " : i === highlights.length - 2 ? " and " : ""}
          </span>
        ))}
        , and the modern web ecosystem.
      </p>

      <p className="body-text">
        Autonomous across the entire project — from backend architecture to user
        interface — I pay particular attention to code quality, performance, and user
        experience. Curious and constantly learning, I enjoy exploring new technologies
        to build concrete and sustainable solutions.
      </p>
    </section>
  );
}
