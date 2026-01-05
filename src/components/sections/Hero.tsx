"use client"

import { motion, Variants } from "framer-motion"
import NextImage from "next/image"

export function Hero() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const item: Variants = {
        hidden: {
            opacity: 0,
            filter: "blur(10px)",
            y: 20
        },
        show: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
            }
        },
    }

    // Animation for the image to fade in from right
    const imageVariant: Variants = {
        hidden: {
            opacity: 0,
            x: 50,
            filter: "blur(10px)"
        },
        show: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.5
            }
        }
    }

    return (
        <section className="bg-black min-h-screen flex items-center justify-center overflow-hidden py-20 relative">
            {/* Background elements minimal if needed, keeping it clean for now */}

            <div className="w-full max-w-[90%] lg:max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

                    {/* Left Content - Text */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col items-center md:items-start text-center md:text-left flex-1 z-10"
                    >
                        <motion.h1
                            variants={item}
                            className="text-white text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6 md:mb-8"
                        >
                            Venkat Sai
                        </motion.h1>

                        <motion.p
                            variants={item}
                            className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-xl"
                        >
                            Data Scientist | Analyst | Machine 
                            Learning Engineer Insights through AI
                        </motion.p>
                    </motion.div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={imageVariant}
                        className="relative w-full max-w-md md:max-w-xl flex-1 flex justify-center md:justify-end"
                    >
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                            {/* Grayscale filter to match the premium minimal aesthetic */}
                            <NextImage
                                src="/hero-profile.png"
                                alt="Venkat Sai"
                                fill
                                priority
                                className="object-contain grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
