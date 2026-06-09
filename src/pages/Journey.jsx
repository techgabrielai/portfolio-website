import { motion } from "framer-motion"
import { Rocket, BookOpen, Code2, UserCircle } from "lucide-react"

const journeySteps = [
    {
        year: "Present",
        title: "Building Vynex Labs",
        desc: "Currently building Vynex Labs while learning modern web development, AI tools, and full-stack technologies.",
        icon: <Rocket className="w-5 h-5 text-blue-400" />,
        active: true
    },
    {
        year: "2026",
        title: "Building Projects & Personal Brand",
        desc: "Started creating portfolio projects, improving development skills, and building a modern digital identity through Vynex Labs.",
        icon: <UserCircle className="w-5 h-5 text-gray-400" />,
        active: false
    },
    {
        year: "2025",
        title: "Exploring Full-Stack Development",
        desc: "Started learning React, JavaScript, Node.js, MongoDB, APIs, and modern UI/UX development.",
        icon: <Code2 className="w-5 h-5 text-gray-400" />,
        active: false
    },
    {
        year: "2024",
        title: "Started My Tech Journey",
        desc: "Began learning web development, prompt engineering, AI tools, and modern digital technologies while pursuing BSc IT.",
        icon: <BookOpen className="w-5 h-5 text-gray-400" />,
        active: false
    }
]

function Journey() {
    return (
        <div id="journey" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
            
            <div className="max-w-4xl mx-auto px-6 z-10">
                
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-px w-8 bg-blue-500/50"></div>
                        <h2 className="text-blue-500 font-display font-medium tracking-widest uppercase text-xs">Journey So Far</h2>
                        <div className="h-px w-8 bg-blue-500/50"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Learning & Building</h1>
                    <p className="text-gray-400 leading-relaxed font-light max-w-xl mx-auto">
                        Documenting my authentic journey as a student developer and ambitious founder growing every single day.
                    </p>
                </div>

                <div className="relative border-l-2 border-white/5 ml-4 md:ml-0 md:border-none">
                    {/* Desktop Center Line */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-px w-[2px] bg-gradient-to-b from-blue-500/40 via-white/5 to-transparent"></div>

                    {journeySteps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                            className="mb-10 relative pl-8 md:pl-0"
                        >
                            <div className="md:grid md:grid-cols-5 items-center">
                                {/* Mobile Timeline Dot */}
                                <div className={`md:hidden absolute left-[-6px] top-4 w-3 h-3 rounded-full border-2 border-[#050505] ${step.active ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" : "bg-gray-600"}`}></div>
                                
                                {/* Desktop Timeline Dot */}
                                <div className={`hidden md:block absolute left-1/2 -ml-1.5 top-1/2 -mt-1.5 w-3 h-3 rounded-full border-2 border-[#050505] z-10 ${step.active ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" : "bg-gray-600"}`}></div>
                                
                                {/* Left Side (Year on Desktop) */}
                                <div className={`hidden md:block col-span-2 ${idx % 2 === 0 ? "text-right pr-12" : "col-start-4 text-left pl-12"}`}>
                                    <span className={`font-display font-bold text-lg tracking-wide ${step.active ? "text-blue-400" : "text-gray-500"}`}>
                                        {step.year}
                                    </span>
                                </div>
                                
                                {/* Content Card */}
                                <div className={`md:col-span-2 ${idx % 2 === 0 ? "md:col-start-4 md:pl-12" : "md:col-start-1 md:pr-12 md:row-start-1"}`}>
                                    <span className={`md:hidden font-display font-bold text-sm tracking-widest mb-3 block ${step.active ? "text-blue-400" : "text-gray-500"}`}>
                                        {step.year}
                                    </span>
                                    
                                    <div className={`glass-card p-6 rounded-2xl border ${step.active ? "border-blue-500/20 bg-blue-900/5" : "border-white/5"} hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 group`}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-2.5 bg-[#050505] rounded-xl border border-white/5 group-hover:border-blue-500/20 transition-colors">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Journey
