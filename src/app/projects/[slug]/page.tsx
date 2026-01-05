import { getProjectBySlug } from "@/lib/projects"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import NextImage from "next/image"
import { notFound } from "next/navigation"

interface ProjectPageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: `${project.title} | Venkat Sai`,
        description: project.overview,
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <div className={`relative h-[50vh] min-h-[400px] w-full flex items-end pb-12 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

                {/* Optional Background Image */}
                {project.image && (
                    <>
                        <NextImage
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover opacity-10 z-0"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
                    </>
                )}

                <div className="container mx-auto px-4 md:px-6 relative z-20">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-4xl">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

                {/* Main Content (Left Column) */}
                <div className="lg:col-span-2 space-y-16">

                    {/* Overview */}
                    <section className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-semibold">Overview</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.overview}
                        </p>
                    </section>

                    {/* Problem & Solution */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="space-y-4">
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <span className="w-1 h-6 bg-red-500 rounded-full" />
                                The Problem
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.problem}
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <span className="w-1 h-6 bg-green-500 rounded-full" />
                                The Solution
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.solution}
                            </p>
                        </section>
                    </div>

                    {/* Key Features */}
                    <section className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-semibold">Key Features</h2>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex gap-3 items-start p-4 rounded-xl bg-secondary/30 border border-secondary">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Sidebar (Right Column) */}
                <div className="space-y-12">

                    {/* Tech Stack */}
                    <section className="space-y-6">
                        <h3 className="text-xl font-semibold">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Links */}
                    <section className="space-y-4 sticky top-24 p-6 rounded-2xl border bg-card/50 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-4">Project Links</h3>

                        {project.demoLink && (
                            <Link
                                href={project.demoLink}
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Live Demo
                            </Link>
                        )}

                        <Link
                            href={project.link}
                            target="_blank"
                            className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors ${!project.demoLink ? 'bg-primary text-primary-foreground hover:bg-primary/90 border-transparent hover:text-white' : ''}`}
                        >
                            <Github className="w-4 h-4" />
                            View Source Code
                        </Link>
                    </section>
                </div>

            </div>
        </main>
    )
}
