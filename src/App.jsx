import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Trust from "./pages/Trust"

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-100 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Trust />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App