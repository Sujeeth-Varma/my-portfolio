import Link from "next/link";
import { profile } from "@/data/profile";

const navigation = [
  { label: "Work", href: "/projects", external: false },
  { label: "Email", href: `mailto:${profile.email}`, external: false },
] as const;

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-mark" aria-label={`${profile.name}, home`}>
        {profile.name}
      </Link>

      <nav aria-label="Primary navigation">
        <ul className="site-nav">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="nav-link"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
