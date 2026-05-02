import { useState, useEffect } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-800 shadow-lg py-4" : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight hover:text-blue-500 transition-colors cursor-pointer">
                    Gabriel M M<span className="text-blue-500">.</span>
                </h1>

                <div className="hidden md:flex gap-8 items-center text-sm font-medium">
                    <a href="#home" className="text-gray-300 hover:text-white transition duration-300">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white transition duration-300">About</a>
                    <a href="#services" className="text-gray-300 hover:text-white transition duration-300">Services</a>
                    <a href="#skills" className="text-gray-300 hover:text-white transition duration-300">Skills</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition duration-300">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
                    
                    <a href="#contact" className="ml-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">
                        Hire Me
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar