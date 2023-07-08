import { getExperiences } from "@/util/getText";
import { useEffect, useState } from "react";
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
import GlassCard from "./GlassCard";

const ProfessionalExperiences = () => {
  const [cardDetails, setCardDetails] = useState(false);
  const handleClickExperienceCard = (experienceDetails) => {
    setCardDetails(experienceDetails);
  };

  useEffect(() => {
    document.body.style.overflow = cardDetails ? "hidden" : "initial";
    document.body.style.overflow = cardDetails ? "hidden" : "initial";
  }, [cardDetails]);

  return (
    <div className="text-slate-100 px-4">
      <Wrapper>
        <Heading text="Experience" />
        <div className="mt-10 flex flex-row gap-4">
          {getExperiences().map((experience) => {
            const { title, imagePath, experienceType, dates } = experience;

            return (
              <GlassCard
                key={title}
                className="from-slate-200 bg-bottom via-slate-600 to-slate-700 transition-colors"
              >
                <div
                  onClick={() => handleClickExperienceCard(experience)}
                  className="w-64 flex flex-col rounded-lg overflow-hidden shadow-[0_0_0_inset_#fff0] hover:shadow-[0_0_43px_inset_#fff1] bg-slate-700 cursor-pointer transition-all relative"
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
                    <div className="self-end mt-4 pt-4">
                      <Button
                        label={<div className="mx-auto">Learn more</div>}
                        className="text-amber-400 bg-amber-400/20 w-24 text-sm !p-0.5 text-center rounded-lg"
                        // className="text-amber-400 bg-white/20 w-24 text-sm !p-0.5 text-center rounded-lg"
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
              </GlassCard>
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
