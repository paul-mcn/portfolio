import Card from "./Card"
import Heading from "./Heading"
import Wrapper from "./Wrapper"
import { technicalSkills, transferableSkills } from "@/util/getText"

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

