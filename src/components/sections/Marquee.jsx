import Image from "../ui/Image";

export default function Marquee() {
  const items = [
    {
      name: "ISaci",
      image: "logotipodoisaci.png",
    },
    {
      name: "INCT",
      image: "logotipodoinct.png",
    },
    {
      name: "UFOPA",
      image: "logotipodaufopa.png",
    },
    {
      name: "Exemplo",
      image: "",
    },
  ];

  return (
    <div className="w-full min-w-0 overflow-hidden mb-13">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-6 px-3 sm:gap-8 md:gap-10"
          >
            {items.map((item) => (
              <div
                key={`${copy}-${item.name}`}
                className="
                  flex h-10 w-20 shrink-0
                  items-center justify-center
                  sm:h-12 sm:w-24
                  md:h-14 md:w-28
                "
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="whitespace-nowrap text-sm">{item.name}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
