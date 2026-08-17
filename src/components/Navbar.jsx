import Button from "./Button";

export default function NavBar({ onMenuClick }) {
  return (
    <nav className="bg-neutral-secondary-soft w-full z-50 top-0 start-0 border-b border-black/40">
      <div className="max-w-screen-xl flex items-center mx-auto px-4 py-3">
        <div className="flex items-center gap-2">
          <button
          type="button"
          onClick={onMenuClick}
          className="flex items-center justify-center w-8 h-8"
        >
            <span
              className=
              "sr-only"
            >
              Abrir menu
            </span>

            <svg
              className="w-11 h-11"
              viewBox="0 -0.5 24 24"
              fill="none">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
          </button>

          <a href="#" className="flex items-center">
            <img
              src="/logotipodoinnovalab.png"
              alt="Logo"
              className="h-5 w-auto"
            />
          </a>
        </div> 
        <Button
          variant="accent"
          className="ml-auto">
          Entre em contato
        </Button>
      </div>
    </nav>
  );
}
