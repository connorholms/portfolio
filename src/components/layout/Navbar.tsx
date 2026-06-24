interface NavBarProps {
  handleScroll: (text: string) => void;
}

export default function Navbar({ handleScroll }: NavBarProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = e.currentTarget.textContent.toLowerCase();
    handleScroll(buttonName);
  };
  return (
    <div className="flex justify-center">
      <span>
        <div>Connor Holmstrom =&gt; Full Stack Engineer || </div>
      </span>
      <nav className="flex ml-2 gap-2">
        <button onClick={handleClick}>About</button>
        <button onClick={handleClick}>Projects</button>
        <button onClick={handleClick}>Contact</button>
      </nav>
    </div>
  );
}
