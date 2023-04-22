import { useRef, useState } from "react"

const SwitchButton = ({ labels, onClick }) => {
  const buttonRefs = useRef([])
  // Set first label as the deafult selected button
  const [selectedButtonLabel, setSelectedButtonLabel] = useState(labels[0])

  const classNames = selectedButtonLabel === labels[0] ? "left-1 right-1/2" : "left-1/2 right-1"
  return (
    <div className="flex flex-row gap-6 relative justify-center bg-slate-800 w-min text-slate-100 py-2 px-4 rounded-full border-2 border-amber-500">
      <div className={`absolute transition-all bg-amber-500 rounded-full ${classNames} top-1 bottom-1`} />
      {labels.map(label => (
        <button
          key={label}
          className="z-10 text-slate-100 capitalize px-2 w-32"
          ref={ref => buttonRefs.current[label] = ref}
          onClick={() => {
            setSelectedButtonLabel(label)
            onClick(label)
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default SwitchButton
