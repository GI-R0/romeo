import { Server, Layout, Wrench, Rocket } from 'lucide-react'
import { skillCategories } from '@/lib/portfolio-data'

const icons = [Server, Layout, Wrench, Rocket]

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-primary">{'// skills'}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Un stack afinado para construir y desplegar
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Organizado por su lugar en el flujo de trabajo: desde los datos y las
            APIs hasta la interfaz, las herramientas y el despliegue que lo une
            todo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = icons[i]
            return (
              <div
                key={category.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-mono text-base font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
