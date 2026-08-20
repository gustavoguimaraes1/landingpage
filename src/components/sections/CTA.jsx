import Image from "../ui/Image";

export default function CTA() {
  return (
    <section
      id="cta"
      className="
        w-full
        min-h-[50vh]
        bg-secondary
        flex
        items-center
        justify-center
        px-5
        sm:px-6
        md:px-8
        lg:px-10
        py-12
        sm:py-14
        md:py-16
      "
    >
      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto
          text-center
        "
      >
        <h2
          className="
            font-sora
            font-bold
            leading-tight
            text-[24px]
            sm:text-[28px]
            md:text-[32px]
            lg:text-[34px]
            text-white
          "
        >
          O futuro não espera,
          <span className="text-text"> e a gente também não.</span>
          <br className="hidden sm:block" />
          <span className="text-text">Vamos construir o </span>
          <span className="text-white">próximo passo juntos?</span>
        </h2>

        <Image
          src="/logotipodoinnovalab.png"
          alt="InnovaLab"
          className="
            mt-5
            sm:mt-6
            h-5
            sm:h-6
            md:h-7
            w-auto
            mx-auto
          "
        />
      </div>
    </section>
  );
}
