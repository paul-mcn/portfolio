import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const ShakeButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="ring-amber-500 hover:ring-2 rounded-full transition-all"
      onClick={onClick}
    >
      <ArrowUpCircleIcon className="w-12 h-12" />
    </button>
  );
};

export default ShakeButton;
