import { motion } from "framer-motion"
import { Code2, Database, Wrench } from "lucide-react"

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Code2 className="w-6 h-6 text-blue-500" />,
        skills: [
            { name: "React / Next.js", level: 90 },
            { name: "JavaScript / TypeScript", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "HTML & CSS", level: 95 }
        ]
    },
    {
        title: "Backend Development",
        icon: <Database className="w-6 h-6 text-blue-500" />,
        skills: [
            { name: "Node.js & Express", level: 85 },
            { name: "Python", level: 80 },
            { name: "MongoDB", level: 85 },
            { name: "REST APIs", level: 90 }
        ]
    },
    {
        title: "Tools & Technologies",
        icon: <Wrench className="w-6 h-6 text-blue-500" />,
        skills: [
            { name: "Git & GitHub", level: 90 },
            { name: "AI Integration (OpenAI)", level: 85 },
            { name: "Figma (UI/UX)", level: 75 },
            { name: "Vercel / Deployment", level: 85 }
        ]
    }
]

function Skills() {
    return (
        <div id="skills" className="py-24 bg-gray-950 border-t border-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="text-center mb-16">
                    <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">My Expertise</h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Technical Skills</h1>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-gray-900 border border-gray-800 p-8 rounded-2xl"
                        >
                            <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-4">
                                <div className="p-3 bg-gray-800 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-col gap-6">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-blue-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <motion.div 
                                                className="bg-blue-600 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                                            ></motion.div>
                                        </div>
                                    </div>
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