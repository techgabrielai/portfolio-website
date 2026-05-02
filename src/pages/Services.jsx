import { motion } from "framer-motion"
import { Code, Monitor, Smartphone, Globe } from "lucide-react"

const services = [
    {
        icon: <Globe className="w-8 h-8 text-blue-500" />,
        title: "Business Websites",
        desc: "Professional, SEO-optimized websites that establish your brand and attract more customers."
    },
    {
        icon: <Monitor className="w-8 h-8 text-blue-500" />,
        title: "Portfolio Websites",
        desc: "High-conversion portfolios that showcase your work and help you land premium clients."
    },
    {
        icon: <Smartphone className="w-8 h-8 text-blue-500" />,
        title: "Landing Pages",
        desc: "Fast, responsive landing pages designed specifically for lead generation and sales."
    },
    {
        icon: <Code className="w-8 h-8 text-blue-500" />,
        title: "Full Stack Web Apps",
        desc: "Custom web applications tailored to your specific business needs using the MERN stack."
    }
]

function Services() {
    return (
        <motion.div
            id="services"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-24 bg-gray-950 text-white flex flex-col items-center justify-center px-6"
        >
            <div className="max-w-6xl w-full">
                <div className="text-center mb-16">
                    <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">Services</h2>
                    <h1 className="text-4xl md:text-5xl font-bold">What I Can Do For You</h1>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                        >
                            <div className="bg-gray-800/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Services
