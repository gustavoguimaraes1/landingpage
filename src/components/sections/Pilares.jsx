import Section from "../ui/Section";

export default function Pilares() {
  const pilares = [
    {
      titulo: "P&D",
      subtitulo: "Pesquisa e Desenvolvimento",
      descricao:
        "Transforma problemas complexos em conhecimento acionável. É o time focado na fronteira da ciência, exploração de dados e desenvolvimento de novos modelos e algoritmos com rigor acadêmico.",
      icone: (
        <svg
          width="21"
          height="29"
          viewBox="0 0 21 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 28.5V25.5H7.5V22.5C5.425 22.5 3.65625 21.7687 2.19375 20.3062C0.73125 18.8438 0 17.075 0 15C0 13.475 0.41875 12.0875 1.25625 10.8375C2.09375 9.5875 3.225 8.675 4.65 8.1C4.85 7.25 5.29375 6.5625 5.98125 6.0375C6.66875 5.5125 7.45 5.25 8.325 5.25L7.5 2.925L8.925 2.4L8.4 1.05L11.25 0L11.7 1.425L13.125 0.9L17.25 12.15L15.825 12.675L16.35 14.1L13.5 15.15L13.05 13.725L11.625 14.25L10.725 11.775C10.35 12.125 9.91875 12.3875 9.43125 12.5625C8.94375 12.7375 8.45 12.8 7.95 12.75C7.4 12.7 6.8875 12.5312 6.4125 12.2437C5.9375 11.9562 5.525 11.6 5.175 11.175C4.5 11.575 3.96875 12.1125 3.58125 12.7875C3.19375 13.4625 3 14.2 3 15C3 16.25 3.4375 17.3125 4.3125 18.1875C5.1875 19.0625 6.25 19.5 7.5 19.5H19.5V22.5H12V25.5H21V28.5H0ZM12.975 11.325L14.325 10.8L11.775 3.75L10.35 4.275L12.975 11.325ZM8.25 10.5C8.675 10.5 9.03125 10.3563 9.31875 10.0688C9.60625 9.78125 9.75 9.425 9.75 9C9.75 8.575 9.60625 8.21875 9.31875 7.93125C9.03125 7.64375 8.675 7.5 8.25 7.5C7.825 7.5 7.46875 7.64375 7.18125 7.93125C6.89375 8.21875 6.75 8.575 6.75 9C6.75 9.425 6.89375 9.78125 7.18125 10.0688C7.46875 10.3563 7.825 10.5 8.25 10.5Z"
            fill="white"
          />
        </svg>
      ),
    },

    {
      titulo: "I/O",
      subtitulo: "Infraestrutura e Operações",
      descricao:
        "Garante o alicerce computacional das soluções. É o time responsável por gerenciar a infraestrutura de alto desempenho e escolher as tecnologias certas para viabilizar o processamento em escala.",
      icone: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2 13.425L13.425 10.1625L11.325 8.025L9.675 9.675L7.575 7.575L9.1875 5.925L7.5 4.2375L4.2375 7.5L10.2 13.425ZM22.5 25.7625L25.7625 22.5L24.075 20.8125L22.425 22.425L20.325 20.325L21.9375 18.675L19.8 16.575L16.575 19.8L22.5 25.7625ZM7.875 28.5H1.5V22.125L8.0625 15.5625L0 7.5L7.5 0L15.6 8.1L21.2625 2.4C21.5625 2.1 21.9 1.875 22.275 1.725C22.65 1.575 23.0375 1.5 23.4375 1.5C23.8375 1.5 24.225 1.575 24.6 1.725C24.975 1.875 25.3125 2.1 25.6125 2.4L27.6 4.425C27.9 4.725 28.125 5.0625 28.275 5.4375C28.425 5.8125 28.5 6.2 28.5 6.6C28.5 7 28.425 7.38125 28.275 7.74375C28.125 8.10625 27.9 8.4375 27.6 8.7375L21.9375 14.4375L30 22.5L22.5 30L14.4375 21.9375L7.875 28.5ZM4.5 25.5H6.6L21.3 10.8375L19.1625 8.7L4.5 23.4V25.5ZM20.25 9.7875L19.1625 8.7L21.3 10.8375L20.25 9.7875Z"
            fill="white"
          />
        </svg>
      ),
    },

    {
      titulo: "Plataforma",
      subtitulo: "Desenvolvimento e Produto",
      descricao:
        "Materializa a tecnologia em produtos funcionais e intuitivos. Integra UI/UX, Design Thinking e desenvolvimento full-stack para entregar valor direto aos usuários finais e parceiros.",
      icone: (
        <svg
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 24V21H15V24H0ZM4.5 19.5C3.675 19.5 2.96875 19.2062 2.38125 18.6187C1.79375 18.0312 1.5 17.325 1.5 16.5V3C1.5 2.175 1.79375 1.46875 2.38125 0.88125C2.96875 0.29375 3.675 0 4.5 0H25.5C26.325 0 27.0312 0.29375 27.6187 0.88125C28.2062 1.46875 28.5 2.175 28.5 3H4.5V16.5H15V19.5H4.5ZM27 21V9H21V21H27ZM20.25 24C19.625 24 19.0938 23.7812 18.6562 23.3438C18.2188 22.9062 18 22.375 18 21.75V8.25C18 7.625 18.2188 7.09375 18.6562 6.65625C19.0938 6.21875 19.625 6 20.25 6H27.75C28.375 6 28.9062 6.21875 29.3438 6.65625C29.7812 7.09375 30 7.625 30 8.25V21.75C30 22.375 29.7812 22.9062 29.3438 23.3438C28.9062 23.7812 28.375 24 27.75 24H20.25ZM24 12.75C24.325 12.75 24.5938 12.6375 24.8062 12.4125C25.0187 12.1875 25.125 11.925 25.125 11.625C25.125 11.3 25.0187 11.0312 24.8062 10.8188C24.5938 10.6063 24.325 10.5 24 10.5C23.7 10.5 23.4375 10.6063 23.2125 10.8188C22.9875 11.0312 22.875 11.3 22.875 11.625C22.875 11.925 22.9875 12.1875 23.2125 12.4125C23.4375 12.6375 23.7 12.75 24 12.75Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <Section id="pilares" background="bg-white">
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
              font-sora
              font-semibold
              leading-tight
              mb-3
            "
          >
            Um laboratório, três frentes integradas
          </h2>

          <p
            className="
              text-primary
              text-sm
              sm:text-base
              font-sora
              leading-relaxed
              max-w-[650px]
              mx-auto
            "
          >
            Da pesquisa profunda à entrega de soluções robustas prontas para o
            mercado.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-7
          "
        >
          {pilares.map((pilar) => (
            <div
              key={pilar.titulo}
              className="
                bg-primary
                text-white
                rounded-xl
                px-5
                py-6
                sm:px-6
                sm:py-7
                lg:px-7
                lg:py-7
                min-h-[320px]
                sm:min-h-[350px]
                lg:min-h-[380px]
                flex
                flex-col
                items-center
                text-center
              "
            >
              {/* Ícone */}
              <div
                className="
                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  rounded-full
                  bg-accent
                  flex
                  items-center
                  justify-center
                  mb-4
                  sm:mb-5
                  shrink-0
                "
              >
                {pilar.icone}
              </div>

              {/* Título */}
              <h3
                className="
                  text-lg
                  sm:text-xl
                  font-sora
                  font-bold
                  mb-3
                  sm:mb-4
                "
              >
                {pilar.titulo}
              </h3>

              {/* Subtítulo */}
              <p
                className="
                  font-jetbrains
                  text-[11px]
                  sm:text-xs
                  mb-2
                "
              >
                {pilar.subtitulo}
              </p>

              {/* Descrição */}
              <p
                className="
                  font-sora
                  text-sm
                  leading-relaxed
                  max-w-[290px]
                "
              >
                {pilar.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
