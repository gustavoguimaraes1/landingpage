import Image from "./Image";

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
    <div className="overflow-hidden mb-13">
      <div className="flex w-max animate-marquee">
        {[0, 1, 2].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-4 pr-3">
            {items.map((item) => (
              <div
                key={`${copy}-${item}`}
                className="shrink-0 rounded-xl px-4 py-2"
              >
                <div
                  key={`${copy}-${item.name}`}
                  className="flex h-12 w-24 shrink-0 items-center justify-center"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
