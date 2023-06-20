import {
  TrophyIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Portal from "@/components/Portal";

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
    <Portal className="fixed inset-0 p-5 mt-[60px] bg-slate-700 z-50">
      <div className="relative">
        <div onClick={onClose}>
          <XMarkIcon className="w-8 h-8 stroke-white stroke-2 fill-none" />
        </div>
        <div className="rounded-lg bg-slate-800 py-2 border-2 border-slate-500 shadow-[0_1_1_1_1] shadow-white">
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
                      className="bg-slate-700 px-4 py-2 rounded-md"
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
