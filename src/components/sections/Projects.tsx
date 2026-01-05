"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import NextImage from "next/image"
import { projects, type Project } from "@/lib/projects"

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-12 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tighter"
                    >
                        Selected <span className="text-primary">Works</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl"
                    >
                        A curated selection of projects demonstrating expertise in AI, Machine Learning, and Data Analytics.
                    </motion.p>
                </div>

                <div className="flex flex-col items-center gap-8 relative">
                    {projects.map((project, index) => (
                        <Card key={index} project={project} index={index} range={[index * 0.25, 1]} targetScale={1 - (projects.length - index) * 0.05} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function Card({ project, index, range, targetScale }: { project: Project, index: number, range: [number, number], targetScale: number }) {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const scale = useTransform(scrollYProgress, range, [1, targetScale])

    return (
        <div
            ref={container}
            className="h-[80vh] w-full flex items-center justify-center sticky top-24" // Sticky positioning
        >
            <Link
                href={`/projects/${project.slug}`}
                className="w-full relative cursor-pointer"
            >
                <motion.div
                    className={`
              flex flex-col relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl origin-top
              ${project.image ? 'bg-zinc-900' : `bg-gradient-to-br ${project.color}`} border border-white/10 group
            `}
                    style={{ scale: 1, top: `calc(-5% + ${index * 25}px)` }} // Slight visual offset if needed, but sticky handles position
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Background Image & Overlay */}
                    {project.image && (
                        <>
                            <NextImage
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-0" />
                        </>
                    )}

                    <div className="p-8 md:p-12 h-full flex flex-col justify-between text-white relative z-10">

                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium border border-white/20">
                                {project.category}
                            </span>
                            <div
                                className="p-3 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-colors"
                            >
                                <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4 max-w-2xl">
                            <h3 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] drop-shadow-lg">
                                {project.title}
                            </h3>
                            {project.desc && (
                                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light drop-shadow-md">
                                    {project.desc}
                                </p>
                            )}
                        </div>

                        {/* Subtle noise/texture overlay for premium feel */}
                        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none z-0" />
                    </div>
                </motion.div>
            </Link>
        </div>
    )
}
