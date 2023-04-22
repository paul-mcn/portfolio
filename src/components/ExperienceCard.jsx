import { TrophyIcon, AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid"
const ExperienceCard = ({ title, dates, responsibilities = [], achievements = [], learnings = [] }) => {
  const sections = [
    {
      title: "Responsibilities",
      list: responsibilities,
      icon: <BriefcaseIcon className="w-4 h-4 text-amber-500" />
    }, {
      title: "Achievements",
      list: achievements,
      icon: <TrophyIcon className="w-4 h-4 text-amber-500" />
    }, {
      title: "Learnings",
      list: learnings,
      icon: <AcademicCapIcon className="w-4 h-4 text-amber-500" />
    }
  ]

  return (
    <div className="shadow-xl rounded-lg bg-slate-800 py-2 border">
      <div className="px-4 text-xl py-2 flex flex-row items-center justify-between">
        <div className="font-bold">
          {title}
        </div>
        <div className="text-sm">
          {dates}
        </div>
      </div>
      <div className="flex flex-col [&>div]:border-t">
        {sections.map(({ title, list, icon }) => (
          <div key={title} className="px-4 py-2">
            <div className="flex flex-row items-center font-bold gap-2">
              {icon}
              {title}
            </div>
            <ul className="list-disc pl-6 flex flex-col gap-1 mt-1">
              {list.map(item => <li key={item} className="">{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
