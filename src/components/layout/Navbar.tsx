import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <span>
        <div>Connor Holmstrom =&gt; Full Stack Engineer</div>
      </span>
      <nav className="flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
