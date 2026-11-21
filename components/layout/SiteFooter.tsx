import Link from "next/link";
import { profile } from "@/data/profile";

const socialLinks = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "X", href: profile.links.x },
] as const;

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <p className="footer-heading">Want to connect?</p>
        <a className="footer-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>

      <div className="footer-meta">
        <ul className="footer-links" aria-label="Social links">
          {socialLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
