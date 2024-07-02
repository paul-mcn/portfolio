import Navbar from "@/components/Navbar";
import { useRef } from "react";
import ShakeButton from "@/components/buttons/ShakeButton";
import Footer from "./Footer";
import getLinks from "../util/getLinks";

const LandingPage = () => {
	const refs = useRef([]);
	const { links, elements } = getLinks();

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="flex flex-col relative min-h-screen text-slate-100 bg-slate-800 font-sans">
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
			<div className="mt-4 max-w-4xl px-4 mx-auto">
				<ShakeButton onClick={handleScrollToTop} />
			</div>
			<div className="mt-3 border-t border-slate-600 py-4">
				<Footer />
			</div>
		</div>
	);
};

export default LandingPage;
