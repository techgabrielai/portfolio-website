import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import profileImg from "../assets/profile.jpg"

function About() {
    const highlights = [
        "Specialized in high-conversion design",
        "Expertise in modern web technologies (MERN)",
        "Focus on performance and SEO",
        "Clear communication and reliable delivery"
    ]

    return (
        <div id="about" className="py-24 bg-gray-950 flex items-center justify-center border-t border-gray-900">
            <div className="max-w-6xl w-full px-6 grid md:grid-cols-2 gap-16 items-center">
                
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 relative">
                        {/* Professional portrait */}
                        <img 
                            src={profileImg} 
                            alt="Gabriel Portrait" 
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl -z-10"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">About Me</h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Partnering with businesses to create digital experiences that perform.
                    </h1>
                    <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                        I am a full-stack developer blending AI capabilities with the robust MERN stack. My mission isn't just to write code—it's to solve business problems and drive growth through strategically designed, high-performance web applications.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        Whether you need a brand-new platform, a redesign to boost conversions, or an AI integration to streamline operations, I bring technical expertise and a business-first mindset to every project.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <span className="text-gray-300 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default About