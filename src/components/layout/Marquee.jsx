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
      image: "logotipodooeste.png",
    },
    {
      name: "Exemplo",
      image: "logotipodocaia.png",
    },
    {
      name: "Exemplo",
      image: "",
    },
  ];

  return (
    <div className="w-full overflow-hidden mb-13">
      {/* ==================================================
          MOBILE + IPAD — FIXO
          ================================================== */}
      <div
        className="
          flex
          lg:hidden
          w-full
          items-center
          justify-center
          gap-6
          px-4
          flex-wrap
          sm:gap-8
          md:gap-10
        "
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="
              flex
              h-10
              w-20
              shrink-0
              items-center
              justify-center
              sm:h-12
              sm:w-24
              md:h-14
              md:w-28
            "
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                className="
                  max-h-full
                  max-w-full
                  object-contain
                "
              />
            ) : (
              <span className="whitespace-nowrap text-sm">{item.name}</span>
            )}
          </div>
        ))}
      </div>

      {/* ==================================================
          DESKTOP — MARQUEE
          ================================================== */}
      <div
        className="
          hidden
          lg:block
          w-full
          overflow-hidden
        "
      >
        <div
          className="
            flex
            w-max
            animate-marquee
          "
        >
          {/* PRIMEIRA CÓPIA */}
          <div
            className="
              flex
              shrink-0
              items-center
              justify-center
              gap-12
              px-6
              lg:gap-16
              lg:px-10
            "
          >
            {items.map((item) => (
              <div
                key={`first-${item.name}`}
                className="
                  flex
                  h-16
                  w-32
                  shrink-0
                  items-center
                  justify-center
                "
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="
                      max-h-full
                      max-w-full
                      object-contain
                    "
                  />
                ) : (
                  <span className="whitespace-nowrap text-sm">{item.name}</span>
                )}
              </div>
            ))}
          </div>

          {/* SEGUNDA CÓPIA */}
          <div
            className="
              flex
              shrink-0
              items-center
              justify-center
              gap-12
              px-6
              lg:gap-16
              lg:px-10
            "
          >
            {items.map((item) => (
              <div
                key={`second-${item.name}`}
                className="
                  flex
                  h-16
                  w-32
                  shrink-0
                  items-center
                  justify-center
                "
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="
                      max-h-full
                      max-w-full
                      object-contain
                    "
                  />
                ) : (
                  <span className="whitespace-nowrap text-sm">{item.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
