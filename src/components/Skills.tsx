import { skills } from "@/data/skills";
import { IconZap } from "@/components/icons";

export default function Skills() {
  return (
    <section id="skills" className="section scroll-mt-24">
      <p className="section-label"><IconZap />My Skills</p>

      <ul className="skill-grid">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-badge">
            <span className="skill-icon" style={{ color: skill.color }} aria-hidden>
              {skill.icon}
            </span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
