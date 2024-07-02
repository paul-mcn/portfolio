import Button from "@/components/buttons/Button";

const GlassButton = (props) => {
	const { className, background, primary = false, ...rest } = props;
	return (
		<div className={`rounded-lg ${className}`} style={{ background }}>
			<div
				className={`bg-gradient-to-br ${primary ? "from-white/40" : "from-amber-500"} rounded-lg p-[1px] ${primary ? "hover:from-white/90" : "hover:from-amber-400/90"} hover:brightness-110 transition-all duration-300`}
			>
				<Button className="rounded-lg" style={{ background }} {...rest} />
			</div>
		</div>
	);
};

GlassButton.defaultProps = {
	className: "",
};

export default GlassButton;
