import { motion } from "framer-motion"
import { Code2, Server, Lightbulb, Blocks, Database, LayoutTemplate, Bot, Sparkles, TerminalSquare, Layout, FileJson } from "lucide-react"
import { Github } from "../components/icons"

const skillCategories = [
    {
        title: "Frontend & UI",
        icon: <LayoutTemplate className="w-6 h-6 text-blue-500" />,
        skills: [
            { name: "React.js", icon: <Blocks className="w-4 h-4 text-blue-400" /> },
            { name: "JavaScript", icon: <FileJson className="w-4 h-4 text-yellow-400" /> },
            { name: "Tailwind CSS", icon: <Layout className="w-4 h-4 text-cyan-400" /> },
            { name: "HTML / CSS", icon: <Code2 className="w-4 h-4 text-orange-400" /> },
            { name: "UI/UX", icon: <Lightbulb className="w-4 h-4 text-purple-400" /> }
        ]
    },
    {
        title: "Backend & Systems",
        icon: <Server className="w-6 h-6 text-blue-500" />,
        skills: [
            { name: "Node.js", icon: <TerminalSquare className="w-4 h-4 text-green-500" /> },
            { name: "MongoDB", icon: <Database className="w-4 h-4 text-green-400" /> },
            { name: "GitHub", icon: <Github className="w-4 h-4 text-white" /> }
        ]
    },
    {
        title: "AI & Innovation",
        icon: <Sparkles className="w-6 h-6 text-blue-500" />,
        skills: [
            { name: "AI Tools", icon: <Bot className="w-4 h-4 text-blue-400" /> },
            { name: "Prompt Engineering", icon: <Sparkles className="w-4 h-4 text-yellow-300" /> }
        ]
    }
]

function Skills() {
    return (
        <div id="skills" className="py-24 bg-[#050505] border-t border-white/5 relative">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>
            
            <div className="max-w-6xl mx-auto px-6 z-10">
                
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-px w-8 bg-blue-500"></div>
                        <h2 className="text-blue-500 font-display font-medium tracking-widest uppercase text-sm">My Expertise</h2>
                        <div className="h-px w-8 bg-blue-500"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Technical Arsenal</h1>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                            className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:border-blue-500/50 transition-colors duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-display font-semibold text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-col gap-4">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.div 
                                        key={sIdx}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors duration-300 cursor-default"
                                    >
                                        <div className="bg-[#050505] p-2 rounded-lg border border-white/5 shadow-inner">
                                            {skill.icon}
                                        </div>
                                        <span className="text-gray-300 font-medium tracking-wide">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Skills