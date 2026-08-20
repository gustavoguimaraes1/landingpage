import { useState } from "react";
import SidebarItem from "../ui/SidebarItem";

export default function Sidebar({ open, onClose }) {
  const [activeItem, setActiveItem] = useState("Início");
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[3px]"
        />
      )}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          w-93
          h-screen
          bg-white
          border-r 
          border-light-accent/50
          transition-transform

          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-full px-5 py-8 overflow-y-auto">
          {/* Cabeçalho */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xl font-bold text-text">Menu</span>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100"
              aria-label="Fechar menu"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                  fill="#001D35"
                />
              </svg>
            </button>
          </div>

          <ul className="space-y-2 font-medium">
            <SidebarItem
              icon={
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 18V6L8 0L16 6V18H10V11H6V18H0Z" fill="#001D35" />
                </svg>
              }
              label="Início"
              active={activeItem === "Início"}
              onClick={() => setActiveItem("Início")}
            />
            <SidebarItem
              icon={
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.0285 18C1.1785 18 0.574338 17.6208 0.216005 16.8625C-0.142329 16.1042 -0.0548287 15.4 0.478505 14.75L6.0285 8V2H5.0285C4.74517 2 4.50767 1.90417 4.316 1.7125C4.12434 1.52083 4.0285 1.28333 4.0285 1C4.0285 0.716667 4.12434 0.479167 4.316 0.2875C4.50767 0.0958333 4.74517 0 5.0285 0H13.0285C13.3118 0 13.5493 0.0958333 13.741 0.2875C13.9327 0.479167 14.0285 0.716667 14.0285 1C14.0285 1.28333 13.9327 1.52083 13.741 1.7125C13.5493 1.90417 13.3118 2 13.0285 2H12.0285V8L17.5785 14.75C18.1118 15.4 18.1993 16.1042 17.841 16.8625C17.4827 17.6208 16.8785 18 16.0285 18H2.0285ZM2.0285 16H16.0285L10.0285 8.7V2H8.0285V8.7L2.0285 16Z"
                    fill="#001D35"
                  />
                </svg>
              }
              label="Pilares"
              active={activeItem === "Pilares"}
              onClick={() => setActiveItem("Pilares")}
            />
            <SidebarItem
              icon={
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.6 7.99556L5.55 8.82056C5.78333 8.3539 6.025 7.9039 6.275 7.47056C6.525 7.03723 6.8 6.6039 7.1 6.17056L5.7 5.89556L3.6 7.99556ZM7.15 10.0706L10 12.8956C10.7 12.6289 11.45 12.2206 12.25 11.6706C13.05 11.1206 13.8 10.4956 14.5 9.79556C15.6667 8.6289 16.5792 7.33306 17.2375 5.90806C17.8958 4.48306 18.1833 3.17056 18.1 1.97056C16.9 1.88723 15.5833 2.17473 14.15 2.83306C12.7167 3.4914 11.4167 4.4039 10.25 5.57056C9.55 6.27056 8.925 7.02056 8.375 7.82056C7.825 8.62056 7.41667 9.37056 7.15 10.0706ZM11.6 8.44556C11.2167 8.06223 11.025 7.5914 11.025 7.03306C11.025 6.47473 11.2167 6.0039 11.6 5.62056C11.9833 5.23723 12.4583 5.04556 13.025 5.04556C13.5917 5.04556 14.0667 5.23723 14.45 5.62056C14.8333 6.0039 15.025 6.47473 15.025 7.03306C15.025 7.5914 14.8333 8.06223 14.45 8.44556C14.0667 8.8289 13.5917 9.02056 13.025 9.02056C12.4583 9.02056 11.9833 8.8289 11.6 8.44556ZM12.075 16.4706L14.175 14.3706L13.9 12.9706C13.4667 13.2706 13.0333 13.5414 12.6 13.7831C12.1667 14.0247 11.7167 14.2622 11.25 14.4956L12.075 16.4706ZM19.9 0.145565C20.2167 2.16223 20.0208 4.12473 19.3125 6.03306C18.6042 7.9414 17.3833 9.76223 15.65 11.4956L16.15 13.9706C16.2167 14.3039 16.2 14.6289 16.1 14.9456C16 15.2622 15.8333 15.5372 15.6 15.7706L11.4 19.9706L9.3 15.0456L5.025 10.7706L0.1 8.67056L4.275 4.47056C4.50833 4.23723 4.7875 4.07056 5.1125 3.97056C5.4375 3.87056 5.76667 3.8539 6.1 3.92056L8.575 4.42056C10.3083 2.68723 12.125 1.46223 14.025 0.745565C15.925 0.0288979 17.8833 -0.171102 19.9 0.145565ZM1.875 13.9456C2.45833 13.3622 3.17083 13.0664 4.0125 13.0581C4.85417 13.0497 5.56667 13.3372 6.15 13.9206C6.73333 14.5039 7.02083 15.2164 7.0125 16.0581C7.00417 16.8997 6.70833 17.6122 6.125 18.1956C5.70833 18.6122 5.0125 18.9706 4.0375 19.2706C3.0625 19.5706 1.71667 19.8372 0 20.0706C0.233333 18.3539 0.5 17.0081 0.8 16.0331C1.1 15.0581 1.45833 14.3622 1.875 13.9456ZM3.3 15.3456C3.13333 15.5122 2.96667 15.8164 2.8 16.2581C2.63333 16.6997 2.51667 17.1456 2.45 17.5956C2.9 17.5289 3.34583 17.4164 3.7875 17.2581C4.22917 17.0997 4.53333 16.9372 4.7 16.7706C4.9 16.5706 5.00833 16.3289 5.025 16.0456C5.04167 15.7622 4.95 15.5206 4.75 15.3206C4.55 15.1206 4.30833 15.0247 4.025 15.0331C3.74167 15.0414 3.5 15.1456 3.3 15.3456Z"
                    fill="#001D35"
                  />
                </svg>
              }
              label="Projetos"
              active={activeItem === "Projetos"}
              onClick={() => setActiveItem("Projetos")}
            />
            <SidebarItem
              icon={
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 18V15H9V5H7V8H0V0H7V3H13V0H20V8H13V5H11V13H13V10H20V18H13ZM2 2V6V2ZM15 12V16V12ZM15 2V6V2ZM15 6H18V2H15V6ZM15 16H18V12H15V16ZM2 6H5V2H2V6Z"
                    fill="#001D35"
                  />
                </svg>
              }
              label="Metodologia"
              active={activeItem === "Metodologia"}
              onClick={() => setActiveItem("Metodologia")}
            />
            <SidebarItem
              icon={
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V4V14V4Z"
                    fill="#001D35"
                  />
                </svg>
              }
              label="Contato"
              active={activeItem === "Contato"}
              onClick={() => setActiveItem("Contato")}
            />
          </ul>
        </div>
      </aside>
    </>
  );
}
