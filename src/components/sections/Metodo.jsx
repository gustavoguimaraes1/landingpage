import Section from "../ui/Section";

export default function Metodo() {
  const etapas = [
    {
      numero: "01",
      titulo: "Investigar (P&D)",
      descricao:
        "Mapeamento de desafios reais e aplicação de rigor científico para desenvolver soluções e validar hipóteses técnicas.",
      border: "border-primary",
      circle: "bg-primary text-white",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
            fill="#88DD00"
          />
        </svg>
      ),
    },

    {
      numero: "02",
      titulo: "Estruturar (I/O)",
      descricao:
        "Definição de arquitetura e ambientes computacionais para suportar a escala do projeto com estabilidade e segurança.",
      border: "border-accent",
      circle: "bg-accent text-white",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.8 8.95L8.95 6.775L7.55 5.35L6.45 6.45L5.05 5.05L6.125 3.95L5 2.825L2.825 5L6.8 8.95ZM15 17.175L17.175 15L16.05 13.875L14.95 14.95L13.55 13.55L14.625 12.45L13.2 11.05L11.05 13.2L15 17.175ZM5.25 19H1V14.75L5.375 10.375L0 5L5 0L10.4 5.4L14.175 1.6C14.375 1.4 14.6 1.25 14.85 1.15C15.1 1.05 15.3583 1 15.625 1C15.8917 1 16.15 1.05 16.4 1.15C16.65 1.25 16.875 1.4 17.075 1.6L18.4 2.95C18.6 3.15 18.75 3.375 18.85 3.625C18.95 3.875 19 4.13333 19 4.4C19 4.66667 18.95 4.92083 18.85 5.1625C18.75 5.40417 18.6 5.625 18.4 5.825L14.625 9.625L20 15L15 20L9.625 14.625L5.25 19ZM3 17H4.4L14.2 7.225L12.775 5.8L3 15.6V17Z"
            fill="#88DD00"
          />
        </svg>
      ),
    },

    {
      numero: "03",
      titulo: "Construir (Plataforma)",
      descricao:
        "Desenvolvimento iterativo centrado no usuário, unindo design de interface, engenharia de software e foco em usabilidade para entrega contínua.",
      border: "border-secondary",
      circle: "bg-secondary text-primary",
      icon: (
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12L0 6L6 0L7.425 1.425L2.825 6.025L7.4 10.6L6 12ZM14 12L12.575 10.575L17.175 5.975L12.6 1.4L14 0L20 6L14 12Z"
            fill="#88DD00"
          />
        </svg>
      ),
    },
  ];

  return (
    <Section id="metodo" background="bg-background">
      <div className="w-full">
        {/* Cabeçalho */}
        <div
          className="
            text-center
            mb-8
            sm:mb-10
          "
        >
          <h2
            className="
              text-primary
              text-2xl
              sm:text-3xl
              md:text-[32px]
              font-semibold
              font-sora
              leading-tight
              mb-3
            "
          >
            Como transformamos ciência em impacto
          </h2>

          <p
            className="
              text-primary
              text-sm
              sm:text-base
              font-sora
              max-w-[650px]
              mx-auto
              leading-relaxed
            "
          >
            Um ciclo contínuo em 3 etapas que conecta pesquisa, infraestrutura e
            produto.
          </p>
        </div>

        {/* Etapas */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-5
            lg:gap-6
          "
        >
          {etapas.map((etapa) => (
            <div
              key={etapa.numero}
              className={`
                border
                ${etapa.border}
                rounded-xl
                p-5
                sm:p-6
                lg:p-7
                min-h-[220px]
                sm:min-h-[240px]
                lg:min-h-[260px]
                bg-white
                flex
                flex-col
              `}
            >
              {/* Número */}
              <div
                className={`
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-xs
                  font-bold
                  font-ibmplex
                  mb-4
                  sm:mb-5
                  shrink-0
                  ${etapa.circle}
                `}
              >
                {etapa.numero}
              </div>

              {/* Título */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  mb-3
                "
              >
                <span
                  className="
                    shrink-0
                    flex
                    items-center
                    justify-center
                  "
                >
                  {etapa.icon}
                </span>

                <h3
                  className="
                    text-primary
                    text-base
                    sm:text-lg
                    font-bold
                    font-sora
                    leading-tight
                  "
                >
                  {etapa.titulo}
                </h3>
              </div>

              {/* Descrição */}
              <p
                className="
                  text-primary
                  text-sm
                  leading-relaxed
                  font-sora
                "
              >
                {etapa.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Frase final */}
        <div
          className="
            mt-5
            sm:mt-6
            bg-primary
            border-l-4
            border-accent
            rounded-lg
            px-5
            py-5
            sm:px-7
            sm:py-6
          "
        >
          <p
            className="
              text-white
              text-sm
              sm:text-base
              leading-relaxed
              font-sora
            "
          >
            "Cobrimos o ciclo completo da inovação: unimos a descoberta
            científica na base, a infraestrutura que viabiliza o processamento e
            o desenvolvimento de produtos intuitivos que resolvem dores reais."
          </p>
        </div>
      </div>
    </Section>
  );
}
