export default function Button({
  children,
  onClick,
  type = "button",
  variant = "accent",
  className = "",
  icon,
}) {
  const variants = {
    accent: "bg-accent hover:bg-accent/90 text-white",
    primary: "bg-primary hover:bg-primary/90 text-white",
    secondary: "bg-secondary hover:bg-secondary/90 text-text",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        flex
        items-center
        justify-center
        font-text
        rounded-full
        px-4
        py-2
        transition-colors
        ${variants[variant]}
        ${className}
      `}
    >
      <span>{children}</span>
      
      {icon &&
        <span className="shrink-0">
          {icon}
        </span>}
      
    </button>
  );
}
