import { Bars2Icon } from "@heroicons/react/24/solid";

const HamburgerMenu = ({ onClick, className, ...rest }) => {
	return (
		<button
			onClick={onClick}
			{...rest}
			className={`bg-amber-500 active:!bg-red-500 absolute mt-10 z-10 w-14 h-14 overflow-hidden rounded-r-lg shadow-lg shadow-[#210e044d] sm:hidden transition-all duration-300 ${className}`}
		>
			<div className="relative h-full">
				<div className="flex flex-row w-14 h-14 items-center absolute rounded top-0">
					<Bars2Icon className="w-10 h-10 mx-auto" />
				</div>
			</div>
		</button>
	);
};

export default HamburgerMenu;
