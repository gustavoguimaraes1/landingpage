import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Pilares from "./components/sections/Pilares";
import Metodo from "./components/sections/Metodo";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";
import Missao from "./components/sections/Missao";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Missao />
        <Pilares />
        <Metodo />

        {/* CTA + Footer = uma tela */}
        <div className="min-h-screen flex flex-col">
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  );
}
