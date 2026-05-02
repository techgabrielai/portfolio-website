import { motion } from "framer-motion"
import { ExternalLink, Code } from "lucide-react"

const projects = [
    {
        title: "E-Commerce Platform",
        desc: "A fully functional modern e-commerce platform with AI-driven product recommendations and secure payment gateway integration.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["React", "Node.js", "MongoDB", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "AI Voice Assistant",
        desc: "An intelligent voice assistant capable of handling natural language queries, integrating with external APIs for real-time data.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["Python", "OpenAI", "React", "Express"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "SaaS Dashboard",
        desc: "A high-performance analytics dashboard for SaaS businesses, featuring real-time data visualization and user management.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["Next.js", "TypeScript", "Chart.js"],
        liveUrl: "#",
        githubUrl: "#"
    }
]

function Projects() {
    return (
        <div id="projects" className="py-24 bg-gray-950 border-t border-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="text-center mb-16">
                    <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Here are a few selected projects that showcase my passion for solving real-world problems through elegantly crafted code.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.desc}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, tIdx) => (
                                        <span key={tIdx} className="text-xs font-medium px-2.5 py-1 bg-gray-800 text-blue-400 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex items-center gap-4 mt-auto">
                                    <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                    <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                                        <Code className="w-4 h-4" /> GitHub
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