import { ExternalLink, Target, Sparkles } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import type { Project } from '@/lib/portfolio-data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40">
      <div className="relative border-b border-border/60 p-6">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-24 w-24 bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
        />
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">
            {project.tagline}
          </p>
        </div>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[11px] text-primary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
            <Target className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            El Desafío
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.challenge}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Optimización con IA & Buenas Prácticas
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.aiOptimization}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <span
              aria-disabled="true"
              title="Demo no desplegada todavía"
              className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-dashed border-border px-4 py-2.5 font-mono text-sm text-muted-foreground"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Demo pronto
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
