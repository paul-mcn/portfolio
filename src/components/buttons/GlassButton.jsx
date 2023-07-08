import Button from "@/components/buttons/Button";

const GlassButton = (props) => {
  const { className, background, ...rest } = props;
  return (
    <div className={`rounded-lg  ${className}`} style={{ background }}>
      <div className="bg-gradient-to-br from-white/40 rounded-lg p-[1px] hover:from-white/90 hover:brightness-110 transition-all duration-300">
        <Button className="rounded-lg" style={{ background }} {...rest} />
      </div>
    </div>
  );
};

GlassButton.defaultProps = {
  className: "",
};

export default GlassButton;
