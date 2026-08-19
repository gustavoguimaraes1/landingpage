export default function SidebarItem({
  label,
  href = "#",
  active,
  onClick,
  icon,
}) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className={`
          flex
          items-center
          gap-3
          rounded-lg
          p-4
          transition-colors
          ${active ? "bg-secondary text-text" : "text-text"}
        `}
      >

        {icon && (
          <span className="shrink-0">
            {icon}
          </span>
        )}

        <span>{label}</span>
      </a>
    </li>
  );
}
