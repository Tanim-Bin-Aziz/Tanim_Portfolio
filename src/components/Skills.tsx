import { skills } from "@/data/skills";
import { IconZap } from "@/components/icons";

export default function Skills() {
  return (
    <section id="skills" className="section scroll-mt-24 reveal" data-reveal data-reveal-delay="500">
      <p className="section-label"><IconZap />My Skills</p>

      <ul className="skill-grid">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <li key={skill.name} className="skill-badge">
              <span className="skill-icon" style={{ color: skill.color }}>
                <Icon size={14} />
              </span>
              <span>{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
