"use client"

import { motion } from "framer-motion"
import { CheckCircle, Trophy, Award, Database, Brain, BarChart, Server, Sparkles, Cloud } from "lucide-react"

export function Skills() {
    const domains = [
        {
            id: "01",
            title: "Data Engineering",
            desc: "ETL pipelines, data ingestion, data preprocessing, MySQL, large-scale datasets, cloud-based data workflows.",
            icon: Database,
        },
        {
            id: "02",
            title: "Machine Learning & Deep Learning",
            desc: "Supervised and unsupervised learning, regression, classification, CNNs, RNNs, transformers, time-series forecasting, model evaluation.",
            icon: Brain,
        },
        {
            id: "03",
            title: "Generative AI & NLP",
            desc: "LLMs (GPT, BERT), Retrieval-Augmented Generation (RAG), prompt engineering, semantic search, text classification, LangChain workflows.",
            icon: Sparkles,
        },
        {
            id: "04",
            title: "MLOps & Model Deployment",
            desc: "End-to-end ML pipelines, model deployment, experiment tracking, versioning, monitoring, CI/CD for ML, FastAPI-based APIs, MLflow.",
            icon: Server,
        },
        {
            id: "05",
            title: "Data Visualization & Business Intelligence",
            desc: "Exploratory data analysis (EDA), data storytelling, dashboards, Power BI (DAX), Matplotlib, Seaborn, insight communication.",
            icon: BarChart,
        },
        {
            id: "06",
            title: "Cloud & Engineering Tools",
            desc: "AWS (EC2, S3, Lambda), Docker, Git/GitHub, Jupyter, VS Code, scalable ML system foundations.",
            icon: Cloud,
        },
    ]

    const achievements = [
        {
            title: "Top 3.1% Globally",
            desc: "Ranked 756 in CodeChef Starters-76.",
            icon: Trophy,
        },
        {
            title: "30% Enhancement",
            desc: "Enhanced business decision-making by 30% using interactive dashboards.",
            icon: BarChart,
        },
        {
            title: "10K Rank",
            desc: "Participated in Kaggle Competitions (Top 10K rank).",
            icon: Trophy,
        },
    ]

    const certifications = [
        "Generative AI: Career Essentials by Microsoft and LinkedIn",
        "Power BI: PwC Switzerland - Power BI Job Simulation",
        "Data Science: Data Science - IBM & British Airways",
        "Analytics: Google Advanced Data Analytics Capstone",
        "Advanced RAG with Vector Databases and Retrievers - Coursera",
        "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        "Cloud Computing - NPTEL",
        "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    ]

    return (
        <section id="skills" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-16">

                    {/* Domains */}
                    <div className="flex flex-col gap-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold tracking-tighter"
                        >
                            Expertise & <span className="text-primary">Services</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {domains.map((domain, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-6 p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card transition-colors"
                                >
                                    <span className="text-4xl font-bold text-muted-foreground/20">
                                        {domain.id}
                                    </span>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <domain.icon className="h-5 w-5 text-primary" />
                                            <h3 className="text-xl font-semibold">{domain.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">
                                            {domain.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements & Certifications */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Achievements */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">Achievements</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {achievements.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50"
                                    >
                                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">Certifications</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50"
                                    >
                                        <Award className="h-5 w-5 text-primary shrink-0" />
                                        <span className="text-sm font-medium">{cert}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
