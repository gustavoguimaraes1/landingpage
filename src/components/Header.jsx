import NavBar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
      <NavBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
    </header>
  )
}