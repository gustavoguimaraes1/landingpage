import { useState } from "react";
import NavBar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
      <NavBar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}
