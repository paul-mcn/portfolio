import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useMemo, useState } from "react";
import NavbarItem from "@/components/NavbarItem";
import Button from "../buttons/Button";
import HamburgerMenu from "@/components/buttons/HamburgerMenu";

const Navbar = ({ sectionRefs, links }) => {
  const [navbarItemName, setNavbarItemName] = useState("home");
  const [isPageTop, setIsPageTop] = useState(true);
  const [shouldOpenMobileMenu, setShouldOpenMobileMenu] = useState(false);

  /**
   * filter sections if they are above the users screen
   * @param {[]} element
   */
  const filterSections = ([_, element]) => {
    // the amount of screen that will be filtered
    const offscreenPortion = 0.2;
    const elementClientBottom = element.clientHeight + element.offsetTop;
    // The portion of the client that will be counted as off screen
    const offScreenVal =
      document.documentElement.clientHeight * offscreenPortion + window.scrollY;
    return elementClientBottom > offScreenVal;
  };

  const handleSetNavbarItemName = () => {
    const elements = Object.entries(sectionRefs.current);
    // Needs an offset of -5px otherwise scroll to wont highlight the correct navbar item
    const items = elements.filter(filterSections);
    // When the user scrolls to the bottom of the page, no items will be found
    if (items?.length === 0) return;
    const [hoveredItem] = items[0];
    setNavbarItemName(hoveredItem);
  };

  const handleIsPageTop = () => {
    setIsPageTop(window.scrollY < 100);
  };

  const toggleShouldOpenMobileMenu = () => {
    setShouldOpenMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      handleSetNavbarItemName();
      handleIsPageTop();
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky z-50 top-0 h-0">
      <div className="relative">
        <div
          className={`bg-slate-900/50 transition-all backdrop-blur-md w-full h-screen z-0 absolute top-0 sm:hidden ${
            shouldOpenMobileMenu ? "visible" : "invisible"
          }`}
        />
        <HamburgerMenu
          onClick={toggleShouldOpenMobileMenu}
          className={shouldOpenMobileMenu ? "opacity-0" : "opacity-100"}
        />
        <div className="">
          <div
            className={`bg-amber-400 sm:hidden absolute z-0 duration-300 transition-all  ${
              shouldOpenMobileMenu
                ? "opacity-100 w-[200%] h-[80vh] -translate-x-1/2 top-0 rounded-b-full"
                : "w-0 h-0 top-12 rounded-full"
            }`}
          />
          <div
            className={`bg-amber-500 sm:hidden absolute z-0 duration-300 transition-all  ${
              shouldOpenMobileMenu
                ? "opacity-100 w-[200%] h-[75vh] -translate-x-1/2 top-0 rounded-b-full"
                : "w-0 h-0 top-12 rounded-full"
            }`}
          />
        </div>
        <div
          className={`transition-all duration-300 z-20 absolute sm:relative top-0 h-full sm:bg-gradient-to-tr ${
            isPageTop
              ? "sm:from-transparent sm:to-transparent sm:backdrop-blur-0"
              : "sm:shadow-lg sm:shadow-slate-900/50 sm:from-slate-800/90 sm:to-slate-900 sm:backdrop-blur-sm"
          }`}
        >
          <ul
            className={`flex flex-col sm:flex-row gap-3 p-4 mx-auto w-4/5 justify-center lg:justify-end ${
              shouldOpenMobileMenu ? "" : "hidden sm:flex"
            }`}
          >
            {links.map((link) => (
              <NavbarItem
                key={link.elementId}
                text={link.label}
                href={link.href}
                onClick={() => setShouldOpenMobileMenu(false)}
                isVisiting={link.elementId.toLowerCase() === navbarItemName}
              />
            ))}
          </ul>
          <div
            className={`bg-gradient-to-tr from-white/40 shadow h-[1px] transition-opacity ${
              isPageTop ? "sm:opacity-0" : "sm:opacity-100"
            }`}
          ></div>
        </div>
        <div
          className={`w-full absolute mx-auto transition-all delay-100 ${
            shouldOpenMobileMenu ? "top-[85vh]" : "top-[100vh]"
          }`}
        >
          <Button
            className={`!text-sm mx-auto !p-0 block sm:hidden ${
              shouldOpenMobileMenu ? "opacity-100" : "opacity-0"
            }`}
            icon={
              <XMarkIcon className="w-12 h-12 p-1 font-bold bg-amber-500 rounded-full" />
            }
            onClick={toggleShouldOpenMobileMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
