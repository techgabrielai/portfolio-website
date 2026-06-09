import { motion } from "framer-motion"
import { Mail, ArrowUpRight } from "lucide-react"
import { Github, Linkedin } from "../components/icons"

function Contact() {
    const contacts = [
        {
            name: "Email",
            value: "vynexlab@gmail.com",
            link: "mailto:vynexlab@gmail.com",
            icon: <Mail className="w-6 h-6 text-blue-400" />
        },
        {
            name: "LinkedIn",
            value: "Gabriel M M",
            link: "https://www.linkedin.com/in/gabriel-m-m-86b9bb320/",
            icon: <Linkedin className="w-6 h-6 text-blue-400" />
        },
        {
            name: "GitHub",
            value: "@techgabrielai",
            link: "https://github.com/techgabrielai",
            icon: <Github className="w-6 h-6 text-blue-400" />
        }
    ]

    return (
        <div id="contact" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-4xl mx-auto px-6 z-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-px w-8 bg-blue-500"></div>
                        <h2 className="text-blue-500 font-display font-medium tracking-widest uppercase text-sm">Get In Touch</h2>
                        <div className="h-px w-8 bg-blue-500"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's Build Together</h1>
                    <p className="text-gray-400 max-w-xl mx-auto font-light leading-relaxed">Have a project in mind? Looking to partner or work together? Reach out through any of the platforms below.</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                    {contacts.map((contact, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                        >
                            <a 
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 border border-white/5 hover:border-blue-500/30 transition-all duration-300 h-full relative overflow-hidden"
                            >
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400" />
                                </div>
                                
                                <div className="p-4 bg-[#050505] rounded-full border border-white/5 mb-4 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                                    {contact.icon}
                                </div>
                                <h3 className="text-white font-display font-bold text-lg mb-1">{contact.name}</h3>
                                <p className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors">{contact.value}</p>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact