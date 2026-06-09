import { Github, Linkedin, Instagram } from "./icons"
import logoImg from "../assets/gablogo.jpg"

function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                
                <div className="flex flex-col items-center md:items-start gap-3">
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] group-hover:border-blue-500 transition-all duration-300">
                            <img src={logoImg} alt="Vynex Labs Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-display font-bold text-lg tracking-widest text-white uppercase group-hover:text-shadow-glow transition-all duration-300">
                            Vynex <span className="text-blue-500">Labs</span>
                        </span>
                    </a>
                    <p className="text-gray-400 text-sm font-light tracking-wide">
                        Engineering Digital Futures
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/techgabrielai" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-m-m-86b9bb320/" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/vynexlabs_official?igsh=MXU1Ynh0aDVzdnp2OQ==" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

            </div>
            
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-xs tracking-wide">
                    © {new Date().getFullYear()} Vynex Labs. All rights reserved.
                </p>
                <div className="flex gap-6 text-xs text-gray-500">
                    <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
