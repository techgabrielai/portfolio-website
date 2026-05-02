import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

function Hero() {
    return (
        <div id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-gray-950">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

            <div className="max-w-4xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-sm text-blue-400 font-medium tracking-wide"
                >
                    Available for freelance opportunities
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white"
                >
                    I build modern, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">high-converting</span> websites for businesses
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Fast, responsive, and AI-powered solutions that establish your brand and drive actual growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 font-medium">
                        Let's work together <ArrowRight className="w-5 h-5" />
                    </a>
                    <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 font-medium">
                        View Projects
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero