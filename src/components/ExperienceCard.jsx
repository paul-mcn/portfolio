import {
  TrophyIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Portal from "@/components/Portal";
import GlassCard from "./GlassCard";

const ExperienceCard = (props) => {
  const {
    title,
    dates,
    responsibilities = [],
    achievements = [],
    learnings = [],
    onClose,
  } = props;

  const sections = [
    {
      title: "Responsibilities",
      list: responsibilities,
      icon: <BriefcaseIcon className="w-4 h-4 text-amber-500" />,
    },
    {
      title: "Achievements",
      list: achievements,
      icon: <TrophyIcon className="w-4 h-4 text-amber-500" />,
    },
    {
      title: "Learnings",
      list: learnings,
      icon: <AcademicCapIcon className="w-4 h-4 text-amber-500" />,
    },
  ];

  return (
    <Portal className="fixed top-0 bottom-0 w-screen bg-black/20 z-[100] p-5">
      <GlassCard className="relative bg-slate-700 h-full animate-swipe-in rounded-2xl">
        <div className="bg-slate-700 rounded-lg h-full">
          <div className="relative z-10 py-2 px-4 sm:px-8 text-slate-100 flex flex-row h-full">
            <div className="max-w-6xl w-full mx-auto">
              <div className=" py-2 pl-1 flex flex-row gap-1 items-center justify-between">
                <div className="text-base sm:text-xl font-bold">{title}</div>
                <div
                  onClick={onClose}
                  className="cursor-pointer ml-auto w-8 h-8"
                >
                  <XMarkIcon className="w-8 h-8 stroke-white stroke-2 fill-none" />
                </div>
              </div>
              <div className="text-xs sm:text-sm mb-10 pl-1">
                {dates.from} — {dates.to}{" "}
                <span className="text-slate-400">({dates.total})</span>
              </div>
              <div className="flex flex-wrap gap-6 mt-4 max-w-full justify-center md:justify-normal max-h-[70vh] overflow-y-auto">
                {sections.map(({ title, list, icon }) => (
                  <div
                    key={title}
                    className="bg-slate-600 rounded-lg w-[30%] min-w-[300px]"
                  >
                    <div className="sticky top-0 bg-slate-600 flex items-center rounded-t-lg gap-1 border-b-slate-700 border-b-[1px] px-3 py-2">
                      <div>{icon}</div>
                      <div>{title}</div>
                    </div>
                    <ul
                      key={title}
                      className={"flex flex-col gap-1 mt-1 list-disc px-8 py-3"}
                    >
                      {list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            {/** <div className="absolute inset-0 bg-green-600 -z-[1] rounded-lg">
							<div className="absolute w-10 h-10 bg-slate-600 top-10 "></div>
						</div>
*/}
          </div>
        </div>
      </GlassCard>
    </Portal>
  );
};

export default ExperienceCard;
