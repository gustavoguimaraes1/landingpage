import Button from "../ui/Button";
import Image from "../ui/Image";

export default function NavBar({ onMenuClick }) {
  return (
    <nav
      className="
        bg-white
        fixed
        top-0
        left-0
        w-full
        border-b
        border-black/40
        z-50
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          flex
          items-center
          justify-between
          px-4
          py-2
          sm:px-6
          sm:py-3
          lg:px-8
          lg:py-3
        "
      >
        {/* ESQUERDA — Menu + Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="
              flex
              lg:hidden
              items-center
              justify-center
              w-8
              h-8
              shrink-0
            "
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>

          {/* Logo */}
          <a href="#inicio" className="flex items-center shrink-0">
            <Image
              src="/logotipodoinnovalab.png"
              alt="InnovaLab"
              className="
                h-5
                sm:h-6
                w-auto
              "
            />
          </a>
        </div>

        {/* CENTRO — Menu desktop */}
        <div
          className="
            hidden
            lg:flex
            items-center
            justify-center
            gap-8
            absolute
            left-1/2
            -translate-x-1/2
          "
        >
          <a
            href="#inicio"
            className="
              text-sm
              font-medium
              hover:text-black/60
              border-b
              border-transparent
              hover:border-black
              transition-colors
            "
          >
            Início
          </a>

          <a
            href="#missao"
            className="
              text-sm
              font-medium
              hover:text-black/60
              border-b
              border-transparent
              hover:border-black
              transition-colors
            "
          >
            Missão
          </a>

          <a
            href="#pilares"
            className="
              text-sm
              font-medium
              hover:text-black/60
              border-b
              border-transparent
              hover:border-black
              transition-colors
            "
          >
            Pilares
          </a>

          <a
            href="#metodo"
            className="
              text-sm
              font-medium
              hover:text-black/60
              border-b
              border-transparent
              hover:border-black
              transition-colors
            "
          >
            Método
          </a>
        </div>

        {/* DIREITA — CTA */}
        <div className="shrink-0">
          <a href="#contato">
            <Button
              variant="accent"
              className="
                w-[135.95px]
                h-[27.39px]
                px-[14.57px]
                py-0
                whitespace-nowrap
                rounded-full
                border-[0.91px]
                text-[11px]
                font-jetbrains
                sm:w-[160px]
                sm:h-8
                sm:text-xs
                lg:w-[202px]
                lg:h-10
                lg:px-6
                lg:py-2
                lg:rounded-[10px]
                lg:border-0
                lg:text-base
              "
            >
              Entre em contato
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
