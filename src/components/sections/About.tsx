"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase, GraduationCap } from "lucide-react"

export function About() {
    const experiences = [
        {
            role: "Data Science Internship",
            company: "Altair",
            period: "Internship",
            desc: "Implemented machine learning algorithms and researched latest techniques.",
            icon: Briefcase,
        },
        {
            role: "AI/ML Internship",
            company: "Google for Developers",
            period: "Internship",
            desc: "Developed a Face Recognition Attendance System and worked with Large LLM models.",
            icon: Briefcase,
        },
        {
            role: "Data Science and Gen AI",
            company: "Boston Institute of Analytics",
            period: "7 months",
            desc: "Specialized training in Data Science and Generative AI.",
            icon: GraduationCap,
        },
        {
            role: "B.Tech, Artificial Intelligence",
            company: "GPCET",
            period: "2021 - 2025",
            desc: "B.Tech in Computer Science and Engineering with specialization in AI.",
            icon: GraduationCap,
        },
        {
            role: "AI/LLM Analyst",
            company: "Innodata",
            period: "Dec 2025 - Present",
            desc: "Working on detailed analysis, evaluation, and fine-tuning of Large Language Models (LLMs).",
            icon: Briefcase,
        },
    ]

    return (
        <section id="about" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-12">
                    {/* Header */}
                    <div className="flex flex-col gap-4 max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold tracking-tighter"
                        >
                            About <span className="text-primary">Venkat Sai</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            I'm B. Venkat Sai, an aspiring AI and Data Science professional  i have completed  my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence at G. Pullaiah College of Engineering and Technology (Class of 2025). With a strong foundation in ML, Deep Learning, and Data Analytics, I leverage tools like TensorFlow, Keras, Power BI, Tableau, and AWS to turn complex data into actionable insights.
                        </motion.p>
                    </div>

                    {/* Experience Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card transition-colors"
                            >
                                <div className="mt-1">
                                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                                        <exp.icon className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span className="font-medium text-foreground">{exp.company}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" /> {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground mt-2 text-sm">
                                        {exp.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
