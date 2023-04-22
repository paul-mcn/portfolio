const Button = ({ label, className, icon, ...rest }) => {
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-full hover:opacity-90 transition-opacity ${className}`}
      {...rest}
    >
      <div className="flex flex-row gap-1 items-stretch">
        {icon}
        {label}
      </div>
    </button>
  );
};

Button.defaultProps = {
  label: null,
  className: "",
  icon: null,
};

export default Button;
