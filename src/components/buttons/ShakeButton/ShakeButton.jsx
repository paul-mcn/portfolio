import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import styles from "./ShakeButton.module.css";

const ShakeButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className={`ring-amber-500 hover:ring-2 rounded-full transition-all ${styles.button}`}
      onClick={onClick}
    >
      <ArrowUpCircleIcon className="w-12 h-12" />
    </button>
  );
};

export default ShakeButton;
