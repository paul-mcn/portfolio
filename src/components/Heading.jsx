const Heading = ({ text, className = "" }) => {
	return (
		<h2
			className={`text-4xl font-bold mb-3 text-center md:text-left ${className}`}
		>
			<span>{text}</span>
			<span className="text-amber-400 text-6xl">.</span>
		</h2>
	);
};

export default Heading;
