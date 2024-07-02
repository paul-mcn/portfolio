import Portal from "@/components/Portal";
import GlassCard from "@/components/GlassCard";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
const Modal = ({ children, onClose }) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "initial";
		};
	}, []);
	return (
		<Portal className="fixed top-0 bottom-0 w-screen bg-black/40 z-[100] p-5">
			<GlassCard className="relative bg-slate-700 h-full animate-swipe-in rounded-2xl">
				<div className="bg-slate-700 rounded-lg h-full relative overflow-hidden">
					<div onClick={onClose} className="cursor-pointer ml-auto w-8 h-8 my-4 mr-4">
						<XMarkIcon className="w-8 h-8 stroke-white stroke-2 fill-none" />
					</div>
					<div className="h-[calc(100%-4rem)]">{children}</div>
				</div>
			</GlassCard>
		</Portal>
	);
};

export default Modal;
