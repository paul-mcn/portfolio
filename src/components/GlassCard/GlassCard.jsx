/**
 * Must declare `from-xx` and `to-xx`
 */
const GlassCard = ({ children, className }) => {
  return (
    <div
      className={`bg-gradient-to-br from-white/40 rounded-lg p-[1px] ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
