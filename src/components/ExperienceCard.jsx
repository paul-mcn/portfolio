import {
  TrophyIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Portal from "@/components/Portal";
import GlassCard from "@/components/GlassCard";

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
    <Portal className="fixed top-[60px] bottom-0 w-screen bg-slate-700/70 backdrop-blur-xl z-[100] animate-swipe-in">
      <div className="p-2 relative text-slate-100 flex flex-row">
        <div className="">
          <div className="px-4 text-xl py-2 flex flex-row items-center justify-between">
            <div className="font-bold">{title}</div>
            <div className="text-sm">{dates}</div>
          </div>
          <div className="flex flex-col">
            {sections.map(({ title, list, icon }) => (
              <div key={title} className="px-4 py-2">
                <div className="flex flex-row items-center font-bold gap-2">
                  {icon}
                  {title}
                </div>
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
        <div onClick={onClose} className="cursor-pointer ml-auto mr-3 w-8 h-8">
          <XMarkIcon className="w-8 h-8 stroke-white stroke-2 fill-none" />
        </div>
      </div>
    </Portal>
  );
};

export default ExperienceCard;
