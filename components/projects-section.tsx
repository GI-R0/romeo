import { projects } from '@/lib/portfolio-data'
import { ProjectCard } from './project-card'

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-primary">{'// proyectos'}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Proyectos seleccionados
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Cinco proyectos que muestran cómo pienso las APIs, la fiabilidad y la
            experiencia de desarrollo, cada uno construido con un flujo de
            trabajo asistido por IA.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
