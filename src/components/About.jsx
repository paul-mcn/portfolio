import { useEffect, useRef, useState } from "react";
import Heading from "./Heading";
import Wrapper from "./Wrapper";
import debounce from "lodash/debounce";

const About = () => {
	const ref = useRef();
	const aboutMeSections = [
		{
			title: "Passion for Design",
			text: "I love design. From a young age, I’ve always tinkered and experimented with things to see how they work together. I also enjoy the captivating world of movie visual effects (VFX) and video games. So from year 10 onwards, inspired by YouTube channels FreddieW and Corridor Digital I started learning Photoshop, After Effects, and Maya.",
			imageURL: "/images/after-effects.jpg",
		},
		{
			title: "Formal Education and Skill Enhancement",
			text: "During years 10 through 12 I enrolled in a game art and VFX course alongside school. It was a great course that further enhanced my design skills, introduced me to industry standard practices and working within a team.",
			imageURL: "/images/design.webp",
		},
		{
			title: "Advanced Training and Professional Experience",
			text: "As soon as I graduated, I enrolled in an even more advanced game art and VFX course and worked at a graphics studio part time. While working at this graphics studio, I started developing small scripts using Python and MEL to improve my workflow in Maya. I was intrigued by how much these small python scripts improved my workflow. The efficiency gains were insane!",
			imageURL: "/images/maya.jpeg",
		},
		{
			title: "Script Development for Workflow Optimization",
			text: "Because of this, I wanted to learn more about programming, and I eventually stumbled across web design and full stack development. I spent a bit of time learning the basics like HTML, CSS, JS and design principles by following tutorials and creating landing pages and Todo apps. At the beginning, it was a bit confusing, strange, and frustrating. However, as I further developed my skills and started working on my own projects, web dev became much more enjoyable.",
			imageURL: "/images/code.jpg", //
		},
		{
			title: "Exploration of Programming and Web Development",
			text: "Being able to tinker and experiment on code satisfied my itch for curiosity. Once I realised I was able to combine my love of design with my newfound desire to program, and make a career out of it, I knew that this was exactly what I wanted to do.",
			imageURL: "/images/hackerman.webp", //
		},
	];

	useEffect(() => {
		// div pos on page - div height - bias
		const startY = ref.current.offsetTop - ref.current.offsetHeight / 2 - 300;
		const handleScroll = debounce(() => {
			if (window.scrollY > startY) {
				[...ref.current.children].forEach((child) => {
					const textCard = child.children[0].children[0];
					const classList = [
						"scale-110",
						"bg-slate-700/70",
						"shadow-2xl",
						"shadow-slate-900",
						"outline",
						"outline-slate-400",
						// "outline-offset-4",
					];
					// console.log({ child });
					const imageElement = child.querySelector("img");
					if (window.scrollY + window.screen.height / 2 > child.offsetTop) {
						textCard.classList.add(...classList);
						imageElement.style.opacity = 0.3;
					} else {
						textCard.classList.remove(...classList);
						imageElement.style.opacity = 0;
					}
					if (
						window.scrollY + window.screen.height / 2 >
						child.offsetTop + child.offsetHeight
					) {
						imageElement.style.opacity = 0;
					}
				});
			}
		}, 5);
		window.addEventListener("scroll", handleScroll);
		return () => {
			handleScroll();
			window.removeEventListener("scroll", handleScroll);
		};
	}, [ref]);

	return (
		<div className="bg-slate-700">
			<Wrapper>
				<Heading text="About" className="z-10 relative" />
				<div className="flex flex-col mt-32" ref={ref}>
					{aboutMeSections.map(({ title, text, imageURL }, idx) => (
						<div
							key={title}
							className={`relative flex ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
						>
							<div
								className={`text-xs ${idx % 2 !== 0 ? "md:pl-32 px-16" : "md:pr-32 px-16"} py-8 w-full text-center z-10`}
							>
								<div className="bg-slate-600/40 backdrop-blur-xl backdrop-opacity-90 transition duration-700 p-4 rounded-lg z-10">
									{text}
								</div>
							</div>
							<div className="w-full md:block hidden" />
							<div
								className={`absolute w-1.5 right-1.5 md:left-1/2 md:-translate-x-1/2 bg-white z-10 ${idx === aboutMeSections.length - 1 ? "bottom-1/2" : "bottom-0"} ${idx === 0 ? "top-1/2" : "top-0"}`}
							></div>
							<div className="absolute w-4 right-0.5 md:left-1/2 md:-translate-x-1/2 h-4 bg-white top-1/2 z-10 -translate-y-1/2 rounded-full border-4 border-slate-700 outline"></div>
							<img
								src={imageURL}
								className="fixed left-0 pointer-events-none top-0 w-screen z-0 h-screen brightness-75 object-cover opacity-0 transition-opacity duration-700"
							/>
						</div>
					))}
				</div>
			</Wrapper>
		</div>
	);
};

export default About;
