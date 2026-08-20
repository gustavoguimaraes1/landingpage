export default function Section({
  id,
  title,
  children,
  background = "bg-background",
  className = "",
}) {
  return (
    <section
      id={id}
      className={`
        w-full
        min-h-[calc(100vh-64px)]
        scroll-mt-[64px]
        ${background}
        ${className}
      `}
    >
      <div
        className="
          w-full
          max-w-[1440px]
          min-h-[calc(100vh-64px)]
          mx-auto
          px-5
          py-12
          sm:px-6
          md:px-8
          lg:px-10
          flex
          flex-col
          justify-center
        "
      >
        {title && (
          <h2 className="text-4xl font-bold mb-6 font-sora">{title}</h2>
        )}

        {children}
      </div>
    </section>
  );
}
