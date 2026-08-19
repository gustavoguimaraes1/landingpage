export default function Text({
  children,
  as = "p",
  className = "",
}) {
  const Tag = as;
  return (
    <Tag className={`font-sora ${className}`}>
      {children}
    </Tag>
  )
  
}