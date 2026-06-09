import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/gablogo.jpg";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Journey", href: "#journey" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass shadow-xl py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] group-hover:border-blue-500 transition-all duration-300">
                        <img src={logoImg} alt="Vynex Labs Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-display font-bold text-xl tracking-widest text-white uppercase hidden sm:block group-hover:text-shadow-glow transition-all duration-300">
                        Vynex <span className="text-blue-500">Labs</span>
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center text-sm font-medium">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-300 hover:text-white hover:text-shadow-glow transition-all duration-300 relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    
                    <a href="#contact" className="ml-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-0.5 font-display tracking-wide border border-blue-400/20">
                        Contact Me
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-gray-300 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        className="w-full text-center mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-display tracking-wide"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact Me
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar