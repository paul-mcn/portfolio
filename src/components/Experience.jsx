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
import Button from "@/components/buttons/Button";

const ProfessionalExperiences = () => {
  const [cardDetails, setCardDetails] = useState(false);
  const handleClickExperienceCard = (experienceDetails) => {
    console.log(experienceDetails);
    setCardDetails(experienceDetails);
  };
  return (
    <div className="text-slate-100 px-4">
      <Wrapper className="shadow-inner shadow-white">
        <Heading text="Experience" />
        <div className="mt-10 flex flex-row gap-4">
          {getExperiences().map((experience) => {
            const {
              title,
              imagePath,
              experienceType,
              responsibilities,
              learnings,
              achievements,
              dates,
            } = experience;

            return (
              <div
                key={title}
                onClick={() => handleClickExperienceCard(experience)}
                className="w-64 flex flex-col rounded-lg overflow-hidden bg-slate-700 cursor-pointer hover:brightness-110 transition-all relative"
              >
                <div className="mx-auto mt-2 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={imagePath}
                    alt={`Logo for ${title}`}
                    height={128}
                    width={240}
                  />
                </div>
                <div className="text-slate-200 p-3 flex flex-col gap-1">
                  <div className="">{title}</div>
                  <div className="text-slate-300/90 text-xs flex flex-row gap-1">
                    {experienceType === "Study" ? (
                      <BookOpenIcon className="w-4 h-4" />
                    ) : (
                      <BriefcaseIcon className="w-4 h-4" />
                    )}
                    {experienceType}
                  </div>
                  {dates && (
                    <div className="text-slate-300/90 text-xs flex flex-row gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      {dates}
                    </div>
                  )}
                  <div className="self-end mt-auto pt-4">
                    <Button
                      label={<div className="mx-auto">Learn more</div>}
                      className="text-amber-400 bg-amber-400/20 w-24 text-sm !p-0.5 text-center rounded-lg"
                    />
                  </div>
                </div>
                <div
                  style={{
                    background: "radial-gradient(at bottom, #e674644f, #000)",
                  }}
                  className="h-full w-full bg-gradient-to-t mix-blend-screen absolute opacity-0 hover:opacity-40 transition-opacity"
                ></div>
              </div>
            );
          })}
          {cardDetails && (
            <ExperienceCard
              title={cardDetails.title}
              key={cardDetails.title}
              dates={cardDetails.dates}
              responsibilities={cardDetails.responsibilities}
              achievements={cardDetails.achievements}
              learnings={cardDetails.learnings}
              onClose={() => handleClickExperienceCard(false)}
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProfessionalExperiences;
