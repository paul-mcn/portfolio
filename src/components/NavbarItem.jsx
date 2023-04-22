import Link from "next/link";

const NavbarItem = ({ text, href, isVisiting, onClick }) => {
  return (
    <li>
      <Link href={href} onClick={onClick}>
        <div className="group px-2 cursor-pointer">
          <div className={""}>{text}</div>
          <div
            className={`group-hover:w-full h-1 bg-amber-400 ${
              isVisiting ? "w-full" : "w-0"
            } transition-all rounded-full`}
          />
        </div>
      </Link>
    </li>
  );
};

NavbarItem.defaultProps = {
  href: "/",
  isVisiting: false,
  onClick: () => {},
};

export default NavbarItem;
