import { motion } from "framer-motion"
import { Sparkles, Terminal, Rocket, Target } from "lucide-react"
import profileImg from "../assets/profile.jpg"

function About() {
    const highlights = [
        { icon: <Terminal className="w-5 h-5 text-blue-500" />, text: "Full Stack Development" },
        { icon: <Sparkles className="w-5 h-5 text-blue-500" />, text: "AI & Innovation" },
        { icon: <Rocket className="w-5 h-5 text-blue-500" />, text: "Startup Ecosystem" },
        { icon: <Target className="w-5 h-5 text-blue-500" />, text: "Problem Solving" }
    ]

    return (
        <div id="about" className="py-24 bg-[#050505] flex items-center justify-center border-t border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 -left-32 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
            
            <div className="max-w-6xl w-full px-6 grid md:grid-cols-2 gap-16 items-center z-10">
                
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group"
                >
                    <div className="relative aspect-square rounded-2xl overflow-hidden glass p-2 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500">
                        <div className="w-full h-full rounded-xl overflow-hidden bg-[#0a0a0a] relative">
                            {/* Professional portrait */}
                            <img 
                                src={profileImg} 
                                alt="Gabriel Portrait" 
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-xl -z-10 group-hover:bg-blue-600/30 transition-all duration-500"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-px w-8 bg-blue-500"></div>
                        <h2 className="text-blue-500 font-display font-medium tracking-widest uppercase text-sm">About Me</h2>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                        Engineering <span className="text-gradient-blue">Digital Futures</span>
                    </h1>
                    
                    <div className="glass p-6 rounded-2xl mb-8 border border-white/5">
                        <p className="text-gray-300 leading-relaxed text-lg mb-4">
                            Passionate BSc IT student and founder of <span className="text-white font-medium">Vynex Labs</span>, focused on building modern web experiences and AI-powered digital solutions.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Currently learning and building with React, full-stack development, AI tools, and digital innovation while growing projects and improving every day.
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 rounded-xl glass border border-white/5 hover:border-blue-500/30 transition-colors">
                                <div className="p-2 bg-blue-500/10 rounded-lg">
                                    {item.icon}
                                </div>
                                <span className="text-gray-300 font-medium text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default About