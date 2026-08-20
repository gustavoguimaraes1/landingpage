import Section from "../ui/Section";

export default function Missao() {
  return (
    <Section id="missao" background="bg-secondary">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[0.9fr_1.1fr]
          gap-8
          sm:gap-10
          lg:gap-20
          items-center
          w-full
        "
      >
        {/* Texto */}
        <div className="w-full max-w-[560px] mx-auto lg:mx-0">
          <h2
            className="
              font-sora
              text-primary
              text-2xl
              sm:text-3xl
              md:text-[32px]
              font-bold
              leading-tight
            "
          >
            Problema real, solução real
          </h2>

          {/* Linha */}
          <div
            className="
              w-12
              sm:w-14
              h-1
              bg-white
              mt-4
              sm:mt-6
              mb-6
              sm:mb-8
              rounded-full
            "
          />

          {/* Primeiro parágrafo */}
          <p
            className="
              font-sora
              text-primary
              text-sm
              sm:text-base
              leading-[1.6]
            "
          >
            Toda descoberta que fica só no papel é uma oportunidade que ainda
            não aconteceu. Existe muito conhecimento pronto pra virar solução,
            só falta alguém traduzir um lado pro outro.
          </p>

          {/* Segundo parágrafo */}
          <p
            className="
              font-sora
              text-primary
              text-sm
              sm:text-base
              leading-[1.6]
              mt-4
              sm:mt-5
            "
          >
            O Innova Lab existe pra fazer essa ponte. Vamos até onde o problema
            realmente acontece, entendemos a fundo o que está por trás dele e
            construímos, com rigor científico e agilidade, soluções que
            funcionam fora do laboratório, no mercado, nas instituições, na vida
            das pessoas.
          </p>

          {/* Destaque */}
          <p
            className="
              font-sora
              font-bold
              text-primary
              text-sm
              sm:text-base
              leading-[1.6]
              mt-4
            "
          >
            Não esperamos o futuro: nós o construímos.
          </p>
        </div>

        {/* Área visual */}
        <div
          className="
            w-full
            h-[220px]
            sm:h-[280px]
            md:h-[320px]
            lg:h-[360px]
            bg-white
            rounded-xl
            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              text-cyan-200
            "
          >
            ✣
          </div>
        </div>
      </div>
    </Section>
  );
}
