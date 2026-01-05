"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

export function Freelance() {
    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-zinc-950 to-black z-0 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for Hire
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                        Need Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Data Solutions?</span>
                    </h2>

                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
                        I offer professional freelance services on Fiverr to help you unlock the potential of your data. From interactive dashboards to advanced predictive models.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left my-8">
                        {[
                            {
                                icon: TrendingUp,
                                title: "Data Visualization",
                                desc: "Stunning Power BI & Tableau dashboards that tell a story."
                            },
                            {
                                icon: Sparkles,
                                title: "AI & Machine Learning",
                                desc: "Custom models for predictive analytics and NLP tasks."
                            },
                            {
                                icon: Zap,
                                title: "Data Analysis",
                                desc: "Deep dive insights to drive business growth."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-primary/50 transition-colors group"
                            >
                                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-zinc-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <Link
                        href="https://www.fiverr.com/s/BRZ5GVy"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/25"
                    >
                        Work with me on Fiverr <ArrowRight className="w-5 h-5" />
                    </Link>

                </motion.div>
            </div>
        </section>
    )
}
