const Card = ({ children, className }) => {
  return (
    <div className={`border rounded-lg bg-slate-800 shadow-lg p-3 ${className}`}>
      {children}
    </div>
  )
}

export default Card
