export default function NewsCard({ tag, color = "secondary", className = "" }) {
  const colors = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-primary",
    accent: "bg-accent text-white",
    lightAccent: "bg-light-accent text-black",
    
  };

  return (
    <div
      className={`
        font-jetbrains
        border
        border-accent
        p-4
        inline-block
        rounded-full
        px-3
        py-1
        ${colors[color]}
        ${className}
      `}
    >
      <span className="">{tag}</span>
    </div>
  );
}