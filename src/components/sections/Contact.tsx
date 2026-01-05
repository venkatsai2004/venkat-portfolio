"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col gap-4"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                                Let's <span className="text-primary">Connect</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Have a project in mind? I'm eager to collaborate on AI projects, contribute to innovative teams, or explore opportunities in ML, Data Science, or Analytics.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-secondary text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <Link href="mailto:venkatsai1072@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        venkatsai1072@gmail.com
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-secondary text-primary">
                                    <Linkedin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">LinkedIn</h4>
                                    <Link href="https://www.linkedin.com/in/venkat-sai-51b0a825a/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                        venkat-sai-51b0a825a
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-secondary text-primary">
                                    <Github className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">GitHub</h4>
                                    <Link href="https://github.com/venkatsai2004" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                        venkatsai2004
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-secondary text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p className="text-muted-foreground">
                                        Based in India | Open to Remote,Onsite & Hybrid
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-8 rounded-2xl border border-border/50 bg-card/50"
                    >
                        <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">First Name</label>
                                    <input
                                        id="first-name"
                                        type="text"
                                        placeholder="Your First name"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
                                    <input
                                        id="last-name"
                                        type="text"
                                        placeholder="Your Last name"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="yourname@example.com"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Tell me about your message..."
                                    rows={4}
                                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
