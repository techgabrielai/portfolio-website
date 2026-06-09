import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

function Hero() {
    return (
        <div id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-[#050505] bg-grid-pattern">
            {/* Dark overlay for grid */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
            
            {/* Background glowing elements */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

            <div className="max-w-4xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full glass border border-white/5 text-sm text-gray-300 font-medium tracking-wide"
                >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Available for new projects
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1] text-white"
                >
                    Hi, I’m Gabriel 👋<br />
                    <span className="text-gradient-blue">Founder at Vynex Labs</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Building modern web experiences and AI-powered digital solutions that drive innovation and growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                    <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 font-display tracking-wide border border-blue-400/20">
                        View Projects <ArrowRight className="w-5 h-5" />
                    </a>
                    <a href="#contact" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 border border-white/10 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 font-display tracking-wide">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero