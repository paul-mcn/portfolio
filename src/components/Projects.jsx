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
        <Heading text="Projects & Research" />
        <div className="flex flex-row flex-wrap gap-4 mt-6 text-slate-300">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 rounded-lg shadow-lg"
            >
              <div className="flex flex-col gap-2  py-4 rounded-lg">
                <div className="font-bold text-lg px-4">{project.title}</div>
                <div className="px-4">{project.description}</div>
                {project.link && (
                  <div className="shadow-md w-fit mx-4 px-2 py-1 text-blue-500 rounded-md">
                    <Link href={project.link} target="_blank">
                      <div className="flex flex-row items-stretch gap-2">
                        View Here
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </div>
                    </Link>
                  </div>
                )}
                <div className="border-t border-white">
                  <div className="font-bold px-4 py-2">Learning outcomes</div>
                  <ul className="flex flex-row flex-wrap gap-2 px-4">
                    {project.learnings.map((learning) => (
                      <li
                        key={learning}
                        className="bg-slate-500 px-3 py-1 text-sm text-slate-300 rounded-full shadow-slate-900/10 shadow-md"
                      >
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Projects;
