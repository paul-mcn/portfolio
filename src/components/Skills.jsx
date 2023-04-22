import Card from "./Card"
import Heading from "./Heading"
import Wrapper from "./Wrapper"

const transferableSkills = [
  { skill: "Communication", desc: "Great written and oral communication skills demonstrated through my time working at Gecko by delivering web-based features that solved customer requirements." },
  { skill: "Teamwork", desc: "Exhibited strong collaboration at Gecko by utilising the agile development process to effectively cooperate within a team of five, increasing the efficiency and quality of deliverables." },
  { skill: "Resilience", desc: "Consistently achieved and exceeded expectations in a fast-paced and high stress environment at Pharmacare and Gecko." },
  { skill: "Organisation", desc: "Managed tasks and time effectively by prioritising tasks using agile methodologies, Fibonacci sequence and Trello." },
  { skill: "Problem Solving", desc: "Solved customers’ problems by eliciting their requirements and effectively developing web-based features." },
  { skill: "Attention to Detail", desc: "Analysed customer requirements and user stories, and reviewed code effectively to ensure an optimised development pipeline." },
]

const technicalSkills = ["Next.js", "React.js", "Vue", "Svelte", "Apollo", "ExpressJS", "Flask", "NodeJS"]


const Skills = () => {
  return (
    <div className="text-slate-100">
      <Wrapper>
        <Heading text="Skills" />
        <div className="mt-4">
          <h3 className="text-xl font-bold">Transferable</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            {transferableSkills.map(({ skill, desc }) => (
              <li key={skill}>
                <Card className="flex h-full flex-col gap-1">
                  <div className="font-bold">
                    {skill}
                  </div>
                  <div>
                    {desc}
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Technical</h3>
          <div className="flex flex-row gap-4">
            <Card className="w-full mt-2">
              {technicalSkills.join(", ")}
            </Card>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Skills

