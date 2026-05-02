import { motion } from "framer-motion"
import { Zap, ShieldCheck, ThumbsUp, DollarSign } from "lucide-react"

const reasons = [
    {
        icon: <Zap className="w-6 h-6 text-blue-400" />,
        title: "Fast Delivery"
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
        title: "Clean Code"
    },
    {
        icon: <ThumbsUp className="w-6 h-6 text-blue-400" />,
        title: "Client Satisfaction"
    },
    {
        icon: <DollarSign className="w-6 h-6 text-blue-400" />,
        title: "Value for Money"
    }
]

function Trust() {
    return (
        <div className="py-12 bg-gray-900 border-y border-gray-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center gap-3"
                        >
                            <div className="p-4 bg-gray-800 rounded-full">
                                {reason.icon}
                            </div>
                            <span className="font-medium text-gray-300">{reason.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trust
