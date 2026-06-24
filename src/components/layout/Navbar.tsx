export default function Navbar(handleScroll) {
  return (
    <div className="flex justify-center">
      <span>
        <div>Connor Holmstrom =&gt; Full Stack Engineer || </div>
      </span>
      <nav className="flex ml-2 gap-2">
        <button>About</button>
        <button>Projects</button>
        <button>Contact</button>
      </nav>
    </div>
  );
}
