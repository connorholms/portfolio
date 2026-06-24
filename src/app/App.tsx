import Navbar from "../components/layout/Navbar";
import About from "../features/about/About";

export default function App() {
  const handleScroll = (sectionName: string) => {
    const element = document.getElementById(sectionName);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <Navbar handleScroll={handleScroll}></Navbar>
      <hr />
      <About id="about" />
    </div>
  );
}
