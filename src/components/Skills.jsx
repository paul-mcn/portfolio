import Card from "./Card";
import Heading from "./Heading";
import Wrapper from "./Wrapper";
import { technicalSkills, transferableSkills } from "@/util/getText";
import GlassCard from "@/components/GlassCard";

const Skills = () => {
  return (
    <div className="text-slate-100">
      <Wrapper>
        <Heading text="Skills" />
        <div className="mt-4">
          <h3 className="text-xl font-bold">Transferable</h3>
          <GlassCard className="">
            <ul className="bg-slate-700 p-4 rounded-lg flex flex-col gap-3">
              {transferableSkills.map(({ skill, desc }) => (
                <li key={skill}>
                  <div className="flex h-full flex-col gap-1 ">
                    <div className="font-bold">{skill}</div>
                    <div>{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Technical</h3>
          <div className="flex flex-row gap-4">
            <Card className="w-full mt-2">{technicalSkills.join(", ")}</Card>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Skills;
