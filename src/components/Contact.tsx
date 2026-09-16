import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer scroll-mt-24">
      <SocialLinks variant="pill" />
      <p className="copyright">© {year} My Portfolio. All rights reserved.</p>
    </footer>
  );
}
