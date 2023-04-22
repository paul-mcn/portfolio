import { Bars2Icon } from "@heroicons/react/24/solid";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ onClick, className, ...rest }) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className={`bg-amber-500 absolute mt-10 z-10 w-14 h-14 overflow-hidden rounded-r-lg shadow-lg shadow-[#210e044d] sm:hidden transition-all duration-300 ${className}`}
    >
      <div className="relative h-full">
        <div className={`absolute w-full h-full top-0 ${styles.polka}`}></div>
        <div className="absolute inset-0 bg-amber-500 rounded-md -translate-x-1 -translate-y-1"></div>
        <div className="flex flex-row w-14 h-14 items-center absolute rounded top-0">
          <Bars2Icon className="w-10 h-10 mx-auto" />
        </div>
      </div>
    </button>
  );
};

export default HamburgerMenu;
