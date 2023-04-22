import { CheckCircleIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const AchievementItem = ({ icon, text, link = undefined }) => {
  return (
    <div className="grid grid-cols-[32px_1fr] gap-x-4 items-center border rounded-lg p-3 shadow-lg bg-white">
      <CheckCircleIcon className="w-8 h-8" />
      <p className="">{text}</p>
      {link && (
        <div className="col-start-2">
          <Link href={link} target="_blank">
            <div className="flex flex-row gap-1 justify-center items-stretch w-28 py-1 px-1 shadow-md rounded-lg text-blue-500 hover:opacity-70 transition-opacity">
              <div>
                View Here
              </div>
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default AchievementItem
