import { getExperiences } from "@/util/getText";
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import Heading from "./Heading";
import Wrapper from "./Wrapper";
import ImageWithFallback from "./ImageWithFallback";
import {
  BookOpenIcon,
  BriefcaseIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

const ProfessionalExperiences = () => {
  return (
    <div className="text-slate-100 px-4">
      <Wrapper className="shadow-inner shadow-white">
        <Heading text="Experience" />
        <div className="mt-10 flex flex-row gap-4">
          {getExperiences().map(
            ({
              title,
              imagePath,
              experienceType,
              responsibilities,
              learnings,
              achievements,
              dates,
            }) => (
              <div className="w-56 rounded-lg overflow-hidden bg-slate-50 cursor-pointer group relative">
                <ImageWithFallback
                  src={imagePath}
                  height={128}
                  width={224}
                  className="h-32 object-cover"
                />
                <div className="text-slate-900 p-3 flex flex-col gap-1">
                  <div className="font-bold">{title}</div>
                  <div className="text-slate-400 text-xs flex flex-row gap-1">
                    {experienceType === "Study" ? (
                      <BookOpenIcon className="w-4 h-4" />
                    ) : (
                      <BriefcaseIcon className="w-4 h-4" />
                    )}
                    {experienceType}
                  </div>
                  {dates && (
                    <div className="text-slate-400 text-xs flex flex-row gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      {dates}
                    </div>
                  )}
                </div>
                {/* <div className="opacity-0 hover:opacity-100 absolute -inset-4 bg-amber-400"></div> */}
              </div>
            )
          )}
          {/*         <ExperienceCard */}
          {/*           title={title} */}
          {/*           key={title} */}
          {/*           dates={dates} */}
          {/*           responsibilities={responsibilities} */}
          {/*           achievements={achievements} */}
          {/*           learnings={learnings} */}
          {/*         <ExperienceCard */}
          {/*           title={title} */}
          {/*           key={title} */}
          {/*           responsibilities={responsibilities} */}
          {/*           achievements={achievements} */}
          {/*           learnings={learnings} */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProfessionalExperiences;
