import { useState } from "react";
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Text from "./components/Text";
import Button from "./components/Button";
import Card from "./components/Card";
import Marquee from "./components/Marquee";
import Image from "./components/Image";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <NavBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-10 px-4.5">
        <Text as="h1" className="text-4xl font-bold mb-8">
          Não esperamos
          <br />
          o futuro:
          <br />
          <span className="text-accent">nós o construímos</span>
        </Text>
        <Text
          as="p"
          className="text-xl
          mb-8"
        >
          Nascemos de uma ideia simples:
          <br />
          inovação começa com educação.
          <br />
          Crescemos para uma missão maior:
          <br />
          transformar pesquisa em impacto real!
        </Text>

        <Card tag="Innovative Solutions" color="lightAccent" className="mb-6" />

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
          className="rounded-lg w-full py-4 font-extrabold mb-16"
        >
          Ver Projetos
        </Button>

        <Marquee className=""/>

        <Image
          src="exemplodeimg.png"
          alt="Exemplo"
          className="
          rounded-2xl
          object-cover


          "
        />

      </main>
    </>
  );
}
