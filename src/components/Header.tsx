import { site } from "@/data/site";
import { IconPin } from "@/components/icons";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header id="home" className="scroll-mt-24 reveal" data-reveal data-reveal-delay="0">
      <ThemeToggle />

      <div className="header-top">
        <img className="avatar" src={site.avatar} alt={site.name} />

        <div>
          <h1 className="name">{site.name}</h1>
          <p className="role">{site.role}</p>
          <div className="meta">
            <IconPin />
            <span>{site.location}</span>
          </div>
        </div>
      </div>

      <SocialLinks />
    </header>
  );
}
