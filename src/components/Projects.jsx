import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Heading from "./Heading";
import Wrapper from "./Wrapper";

const Projects = () => {
	const projects = [
		{
			title: "Organise My Meals (W.I.P)",
			description:
				"A website that generates weekly meal plans, saving users time and simplifying meal preparation. Users can select recipes and customize their plan based on dietary preferences. The website also provides a shopping list for the week, streamlining the meal planning process.",
			link: "https://organisemymeals.com",
			learnings: [
				"NextJs",
				"UI/UX",
				"MongoDB",
				"Docker",
				"Ideation",
				"Deployment pipeline",
			],
		},
		{
			title: "Terrain simulation for ground robot navigation",
			description:
				"This engineering capstone project aims to develop fast ground robots that can navigate challenging outdoor environments. The task is to create randomized terrain models for Gazebo simulation using Python software to automatically generate 3D meshes. The project aims to test the local planning module for safe navigation through rough terrain and obstacles before implementing it on physical robots.",
			link: "https://github.com/paul-mcn/gazebo-terrain-generator",
			learnings: [
				"Python",
				"Terrain Generation",
				"Academic paper writing",
				"Literature review",
			],
		},
	];

	return (
		<div className="bg-slate-700">
			<Wrapper>
				<Heading text="Projects" />
				<div className="flex flex-row flex-wrap gap-5 mt-6 text-slate-300">
					{projects.map((project) => (
						<div
							key={project.title}
							className="bg-slate-600 rounded-lg shadow-lg"
						>
							<div className="flex flex-col gap-2 py-4 rounded-lg">
								<div className="flex flex-row justify-between items-center">
									<div
										className="font-bold w-2/3 sm:text-lg px-4"
										title={project.title}
									>
										{project.title}
									</div>
									{project.link && (
										<div className="shadow-md w-28 sm:w-32 mx-4 px-2 py-0.5 text-amber-400 bg-amber-400/20 transition-colors rounded-md">
											<Link href={project.link} target="_blank">
												<div className="flex flex-row items-center gap-2 justify-center text-sm sm:text-base">
													View Here
													<ArrowTopRightOnSquareIcon className="w-4 h-4 sm:w-5 sm:h-5" />
												</div>
											</Link>
										</div>
									)}
								</div>
								<div className="px-4">{project.description}</div>
								<ul className="flex flex-row flex-wrap gap-2 px-4 text-gray-300 mt-2">
									{project.learnings.map((learning) => (
										<li
											key={learning}
											className="bg-white/10 px-3 py-1 text-xs rounded-full"
										>
											{learning}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</Wrapper>
		</div>
	);
};

export default Projects;
