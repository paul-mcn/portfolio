import dynamic from "next/dynamic";
const CallToAction = dynamic(() => import("@/components/CallToAction"), {
	ssr: false,
});
import About from "@/components/About";
import Experiences from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

/**
 * returns links for the elements on the home page
 */
const getLinks = () => {
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

	return { links, elements };
};

export default getLinks;
