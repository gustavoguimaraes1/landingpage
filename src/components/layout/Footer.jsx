import Image from "../ui/Image";

export default function Footer() {
  return (
    <footer
      className="
        relative
        w-full
        min-h-[50vh]
        bg-primary
        text-white
        overflow-hidden
      "
    >
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1440px]
          min-h-[50vh]
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          py-12
          md:py-10
          flex
          flex-col
          justify-center
        "
      >
        <div className="w-full max-w-[980px]">
          {/* Conteúdo principal */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-[1.3fr_0.5fr_1fr]
              gap-8
              md:gap-10
            "
          >
            {/* Marca */}
            <div>
              <Image
                src="/logotipodoinnovanight.png"
                alt="InnovaLab"
                className="
                  h-5
                  sm:h-6
                  w-auto
                  mb-3
                "
              />

              <p
                className="
                  font-sora
                  text-sm
                  text-white/70
                  leading-relaxed
                "
              >
                Laboratório de inovação aplicada.
                <br className="hidden sm:block" />
                Ciência que transforma, impacto que
                <br className="hidden sm:block" />
                perdura.
              </p>
            </div>

            {/* Navegação */}
            <div>
              <p
                className="
                  font-jetbrains
                  text-xs
                  text-white/50
                  mb-4
                "
              >
                Navegue
              </p>

              <nav>
                <ul
                  className="
                    font-sora
                    space-y-2
                    text-sm
                    text-white/80
                  "
                >
                  <li>
                    <a href="#inicio" className="hover:text-secondary">
                      Início
                    </a>
                  </li>

                  <li>
                    <a href="#missao" className="hover:text-secondary">
                      Missão
                    </a>
                  </li>

                  <li>
                    <a href="#pilares" className="hover:text-secondary">
                      Pilares
                    </a>
                  </li>

                  <li>
                    <a href="#metodo" className="hover:text-secondary">
                      Método
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Contato */}
            <div>
              <p
                className="
                  font-jetbrains
                  text-xs
                  text-white/50
                  mb-4
                "
              >
                Contato
              </p>

              <div
                className="
                  font-sora
                  text-sm
                  text-white/80
                  leading-relaxed
                "
              >
                <p className="mb-2">@inovalab.ufopa</p>

                <p>
                  UFOPA · Santarém, Pará
                  <br />
                  BMT I, 221
                </p>
              </div>
            </div>
          </div>

          {/* Linha */}
          <div className="w-full h-px bg-white/30 mt-8 mb-5" />

          {/* Rodapé inferior */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-2
              font-sora
            "
          >
            <p className="text-[11px] text-white/50">
              © 2026 Innova Lab. Todos os direitos reservados.
            </p>

            <p className="text-[11px] text-white/40">From Science To Impact</p>
          </div>
        </div>
      </div>

      {/* Símbolo decorativo */}
      <Image
        src="/logoinnovanight.png"
        alt=""
        className="
          absolute
          bottom-0
          right-0
          w-[160px]
          sm:w-[220px]
          md:w-[280px]
          lg:w-[320px]
          h-auto
          opacity-10
          pointer-events-none
          select-none
        "
      />
    </footer>
  );
}
