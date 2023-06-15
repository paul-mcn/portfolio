import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experiences from "@/components/Experience";
import Skills from "@/components/Skills";
import { useRef } from "react";
// import Leadership from "./Leadership";
import Projects from "./Projects";
import ShakeButton from "@/components/buttons/ShakeButton";

const LandingPage = () => {
  const refs = useRef([]);
  const elements = [
    {
      elementId: "home",
      elementNode: <CallToAction />,
      label: "Home",
    },
    {
      elementId: "experience",
      elementNode: <Experiences />,
      label: "Experience",
    },
    {
      elementId: "about",
      elementNode: <About />,
      label: "About",
    },
    {
      elementId: "skills",
      elementNode: <Skills />,
      label: "Skills",
    },
    {
      elementId: "projects",
      elementNode: <Projects />,
      label: "Projects",
    },
  ];

  const links = elements.map(({ elementId, label }) => ({
    href: elementId === "home" ? "/" : `#${elementId}`,
    label,
    elementId,
  }));

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col relative min-h-screen text-slate-100 bg-slate-800 font-sans pb-20">
      <Navbar sectionRefs={refs} links={links} />
      {elements.map(({ elementId, elementNode }) => (
        <div
          id={elementId}
          key={elementId}
          ref={(ref) => (refs.current[elementId] = ref)}
        >
          {elementNode}
        </div>
      ))}
      <div className="bottom-0 max-w-4xl px-4 mx-auto">
        <ShakeButton onClick={handleScrollToTop} />
      </div>
    </div>
  );
};

export default LandingPage;
