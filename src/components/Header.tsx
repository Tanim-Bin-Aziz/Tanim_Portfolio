import { site } from "@/data/site";
import { IconPin } from "@/components/icons";
import LocalTime from "@/components/LocalTime";
import SocialLinks from "@/components/SocialLinks";

export default function Header() {
  return (
    <header id="home" className="scroll-mt-24">
      <div className="header-top">
        <img className="avatar" src={site.avatar} alt={site.name} />

        <div>
          <h1 className="name">{site.name}</h1>
          <p className="role">{site.role}</p>
          <div className="meta">
            <IconPin />
            <span>{site.location}</span>
            <span className="meta-dot">·</span>
            <LocalTime />
          </div>
        </div>
      </div>

      <SocialLinks />
    </header>
  );
}
