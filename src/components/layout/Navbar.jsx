import Button from "../ui/Button";

export default function NavBar({ onMenuClick }) {
  return (
    <nav className="w-full bg-neutral-secondary-soft border-b border-black/40 z-50">
      <div
        className="
          max-w-[1440px]
          mx-auto
          flex
          items-center
          justify-between
          px-4
          py-2
          md:px-8
          md:py-3
        "
      >
        {/* ESQUERDA — Menu + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger — mobile */}
          <button
            type="button"
            onClick={onMenuClick}
            className="
              flex md:hidden
              items-center
              justify-center
              w-8 h-8
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
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/logotipodoinnovalab.png"
              alt="InnovaLab"
              className="h-5 md:h-6 w-auto"
            />
          </a>
        </div>

        {/* CENTRO — Menu desktop */}
        <div
          className="
            hidden md:flex
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
            hover:text-black-400  
            border-b-1 
            border-transparent 
            hover:border-black 
            pb-0 
            transition-colors"
          >
            Início
          </a>

          <a
            href="#pilares"
            className="            
            text-sm 
            font-medium 
            hover:text-black-400  
            border-b-1 
            border-transparent 
            hover:border-black 
            pb-0 
            transition-colors"
          >
            Pilares
          </a>

          <a
            href="#projetos"
            className="
            text-sm 
            font-medium 
            hover:text-black-400 
            border-b-1 
            border-transparent 
            hover:border-black 
            pb-0 
            transition-colors
            "
          >
            Projetos
          </a>

          <a
            href="#metodologia"
            className="
            text-sm 
            font-medium 
            hover:text-black-400 
            border-b-1 
            border-transparent 
            hover:border-black 
            pb-0 
            transition-colors"
          >
            Metodologia
          </a>

          <a
            href="#contato"
            className="
            text-sm
            font-medium 
            hover:text-black-400  
            border-b-1 
            border-transparent 
            hover:border-black 
            pb-0 
            transition-colors
            "
          >
            Contato
          </a>
        </div>

        {/* DIREITA — CTA */}
        <div className="shrink-0">
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

              md:w-[202px]
              md:h-10
              md:px-6
              md:py-2
              md:rounded-[10px]
              md:border-0
              md:text-base
            "
          >
            Entre em contato
          </Button>
        </div>
      </div>
    </nav>
  );
}
