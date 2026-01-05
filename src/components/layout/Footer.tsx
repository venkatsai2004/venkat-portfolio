import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-background py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tighter">
                        Venkat<span className="text-muted-foreground"> Sai</span>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        Transforming Data into Insights through AI & Deep Learning.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/venkatsai2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/venkat-sai-51b0a825a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href="mailto:venkatsai1072@gmail.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Venkat Sai. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
