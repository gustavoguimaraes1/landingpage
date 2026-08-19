import Button from "../ui/Button";
import Card from "../ui/Card";
import Text from "../ui/Text";
import Image from "../ui/Image";

export default function Hero() {
  return (
    <section className="w-full bg-background">
      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto
          px-5
          py-12
          sm:px-6
          sm:py-14
          lg:h-[504px]
          lg:px-10
          lg:pt-24
          lg:pb-[92px]
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            gap-8
            lg:gap-6
            w-full
            lg:h-[316px]
          "
        >
          {/* Conteúdo */}
          <div className="w-full lg:flex-1">
            <Text
              as="h1"
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
                mb-5
                lg:mb-6
              "
            >
              Não esperamos o futuro:
              <br />
              <span className="text-accent">nós o construímos</span>
            </Text>

            <Text
              as="p"
              className="
                text-base
                sm:text-lg
                lg:text-xl
                leading-relaxed
                max-w-[560px]
                mb-5
                lg:mb-6
              "
            >
              Nascemos de uma ideia simples: inovação começa com educação.
              Crescemos para uma missão maior: transformar pesquisa em impacto
              real!
            </Text>

            <Card
              tag="Innovative Solutions"
              color="lightAccent"
              className="mb-5 lg:mb-6"
            />

            <Button
              variant="secondary"
              icon={
                <svg
                  width="25"
                  height="12"
                  viewBox="0 -1 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z"
                    fill="#001F3E"
                  />
                </svg>
              }
              className="
                w-full
                sm:w-[300px]
                lg:w-[349px]
                h-14
                px-8
                py-4
                rounded-lg
                font-extrabold
              "
            >
              Ver Projetos
            </Button>
          </div>

          {/* Imagem */}
          <div className="w-full lg:flex-1">
            <Image
              src="exemplodeimg.png"
              alt="Exemplo"
              className="
                w-full
                h-auto
                lg:h-[316px]
                rounded-2xl
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
