import { getProfessionalExperiences, getAcademicExperiences } from "@/util/getExperiences"
import { useState } from "react"
import SwitchButton from "./buttons/SwitchButton"
import ExperienceCard from "./ExperienceCard"
import Heading from "./Heading"
import Wrapper from "./Wrapper"

const ProfessionalExperiences = () => {
  const [selectedExperienceType, setSelectedExperienceType] = useState("professional")

  const experienceTypes = ["professional", "academic"]

  return (
    <div className="text-slate-100 px-4">
      <Wrapper>
        <Heading text="Experience" />
        <SwitchButton labels={experienceTypes} onClick={label => setSelectedExperienceType(label)} />
        <div className="">
          {selectedExperienceType === "professional" ? (
            <div className="flex flex-col gap-10 mt-4">
              {getProfessionalExperiences()
                .map(({ title, responsibilities, learnings, achievements, dates }) => (
                  <ExperienceCard
                    title={title}
                    key={title}
                    dates={dates}
                    responsibilities={responsibilities}
                    achievements={achievements}
                    learnings={learnings}
                  />
                ))}
            </div>) : (
            <div className="flex flex-col gap-10 mt-4">
              {getAcademicExperiences()
                .map(({ title, responsibilities, learnings, achievements }) => (
                  <ExperienceCard
                    title={title}
                    key={title}
                    responsibilities={responsibilities}
                    achievements={achievements}
                    learnings={learnings}
                  />
                ))}
            </div>
          )}
        </div>
      </Wrapper>
    </div >
  )
}

export default ProfessionalExperiences
