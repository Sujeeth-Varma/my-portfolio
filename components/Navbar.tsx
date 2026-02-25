import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar-shell">
      <div className="flex items-center gap-2">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/projects" className="nav-link">
          Projects
        </Link>
      </div>
    </header>
  );
}
