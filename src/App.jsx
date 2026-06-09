import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Journey from "./pages/Journey"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-100 font-sans selection:bg-blue-500/30 selection:text-blue-400">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </div>
  )
}

export default App