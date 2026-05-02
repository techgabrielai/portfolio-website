import { motion } from "framer-motion"
import { Mail, MapPin, Send } from "lucide-react"

function Contact() {
    return (
        <div id="contact" className="py-24 bg-gray-950 border-t border-gray-900 relative overflow-hidden">
            
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h1>
                    <p className="text-gray-400 max-w-xl mx-auto">Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.</p>
                </div>

                <div className="grid md:grid-cols-5 gap-12 items-start">
                    
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 flex flex-col gap-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl text-blue-500">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Email</h3>
                                <p className="text-gray-400 text-sm">ggabrielmercy@gmail.com</p>
                                <a href="mailto:ggabrielmercy@gmail.com" className="text-blue-500 text-sm hover:underline mt-1 inline-block">Send a message</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl text-blue-500">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Location</h3>
                                <p className="text-gray-400 text-sm">Coimbatore, Tamil Nadu</p>
                                <p className="text-gray-400 text-sm">India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-3 bg-gray-900 border border-gray-800 p-8 rounded-2xl"
                    >
                        <form className="flex flex-col gap-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-gray-400 font-medium">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="p-3.5 rounded-xl bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-gray-400 font-medium">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="p-3.5 rounded-xl bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-400 font-medium">Message</label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    className="p-3.5 rounded-xl bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:-translate-y-0.5 mt-2">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
            
            {/* Footer mini */}
            <div className="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Gabriel M M. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/_gabri42_/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a>
                    <a href="https://www.linkedin.com/in/gabriel-m-m-86b9bb320/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Contact