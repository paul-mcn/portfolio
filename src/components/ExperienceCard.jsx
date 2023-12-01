import {
  TrophyIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Portal from "@/components/Portal";
import GlassCard from "@/components/GlassCard";
import Tabs from "./Tabs";

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
    <Portal className="fixed top-[60px] bottom-0 w-screen bg-slate-700 z-[100] animate-swipe-in">
      <div className="p-2 relative text-slate-100 flex flex-row">
        <div className="max-w-6xl mx-auto">
          <div className="text-xl py-2 flex flex-row gap-1 items-center justify-between">
            <div className="font-bold">{title}</div>
            <div onClick={onClose} className="cursor-pointer ml-auto w-8 h-8">
              <XMarkIcon className="w-8 h-8 stroke-white stroke-2 fill-none" />
            </div>
          </div>
          <div className="text-sm">{dates}</div>
          <Tabs
            items={sections.map((section) => ({
              heading: (
                <div className="flex flex-row items-center font-bold gap-2">
                  {section.icon}
                  {section.title}
                </div>
              ),
            }))}
          />
          <div className="flex flex-col">
            {sections.map(({ title, list, icon }) => (
              <div key={title} className="py-2">
                <ul className="flex flex-col gap-1 mt-1">
                  {list.map((item) => (
                    <li
                      key={item}
                      className="bg-slate-600 px-4 py-2 rounded-md"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default ExperienceCard;
