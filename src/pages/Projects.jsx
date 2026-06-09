import { motion } from "framer-motion"
import { ExternalLink, MonitorPlay } from "lucide-react"
import { Github } from "../components/icons"

const projects = [
    {
        title: "JJ Cake World",
        desc: "A MERN stack e-commerce website for a premium cake and bakery shop. Features interactive product catalogs, customized bakes showcasing, persistent shopping cart, and a streamlined checkout workflow for home delivery.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "St. Mark's Church Portal",
        desc: "A parish management platform designed to organize church operations. Features comprehensive family directories, unit statistics, and detailed association listings to connect church members.",
        image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "#",
        githubUrl: "#"
    }
]

function Projects() {
    return (
        <div id="projects" className="py-24 bg-[#050505] border-t border-white/5 relative">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-6 z-10">
                
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-px w-8 bg-blue-500"></div>
                        <h2 className="text-blue-500 font-display font-medium tracking-widest uppercase text-sm">Portfolio</h2>
                        <div className="h-px w-8 bg-blue-500"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Featured Work</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">Showcasing a selection of recent projects focused on solving real problems through elegant, performant code.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                            className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-blue-500/30 transition-colors duration-500"
                        >
                            <div className="relative h-56 overflow-hidden bg-[#0a0a0a]">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90"></div>
                                
                                {/* Overlay tech badges on image */}
                                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                                    {project.tech.map((tech, tIdx) => (
                                        <span key={tIdx} className="text-xs font-medium px-2 py-1 glass bg-black/40 text-blue-300 rounded-md backdrop-blur-md border border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow relative">
                                <div className="absolute top-0 right-6 -translate-y-1/2 w-12 h-12 bg-[#050505] rounded-full flex items-center justify-center border border-white/10 shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
                                    <MonitorPlay className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                                </div>
                                
                                <h3 className="text-xl font-display font-bold text-white mb-3 mt-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed font-light">{project.desc}</p>
                                
                                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                                    <a href={project.liveUrl} className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-white bg-blue-600/20 hover:bg-blue-600 px-4 py-2.5 rounded-lg border border-blue-500/30 transition-all duration-300">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                    <a href={project.githubUrl} className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-gray-300 hover:text-white px-4 py-2.5 glass hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-300">
                                        <Github className="w-4 h-4" /> Source
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Projects