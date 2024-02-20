import { createPortal } from "react-dom";
import { roboto } from "@/util/getFont";

const Portal = ({ children, className }) => {
	return (
		<div>
			{createPortal(
				<div className={`${className} ${roboto.variable} font-sans`}>
					{children}
				</div>,
				document.body,
			)}
		</div>
	);
};

export default Portal;
