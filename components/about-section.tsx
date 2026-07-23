import { GraduationCap, Sparkles, Code2 } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Graduado Rock{TheCode} v2',
    body: 'Mi paso por el programa consolidó mi especialización en el diseño de APIs, la seguridad y la arquitectura de bases de datos, construyendo proyectos full-stack de extremo a extremo.',
  },
  {
    icon: Sparkles,
    title: 'Flujo de trabajo con IA',
    body: 'Integro Cursor, GitHub Copilot y prompts avanzados en mi día a día para acelerar la resolución de problemas, automatizar tareas repetitivas y centrarme en la arquitectura.',
  },
  {
    icon: Code2,
    title: 'Mentalidad API-First',
    body: 'No me limito a escribir código funcional: aplico buenas prácticas, aseguro la escalabilidad del sistema y optimizo la gestión de flujos de datos estructurados.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-mono text-sm text-primary">{'// sobre mí'}</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Conecto la lógica del Backend con experiencias dinámicas
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              ¡Hola! Soy Gerardo Giménez, desarrollador Full Stack enfocado en
              conectar de manera limpia la lógica del Backend con experiencias
              dinámicas en el Frontend.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Mi paso por el programa{' '}
              <span className="font-medium text-foreground">
                Rock{'{'}TheCode{'}'} v2
              </span>{' '}
              consolidó mi especialización en el diseño de APIs, seguridad y
              arquitectura de bases de datos. Además, integro herramientas de IA
              de vanguardia como{' '}
              <span className="font-medium text-foreground">Cursor</span> y{' '}
              <span className="font-medium text-foreground">
                GitHub Copilot
              </span>{' '}
              para enfocar mi energía en la arquitectura, el rendimiento y la
              seguridad global de las aplicaciones.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Busco incorporarme a un equipo donde pueda aportar mi capacidad
              analítica, resolver desafíos complejos de integración y seguir
              creciendo en el ecosistema Full Stack.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {highlights.map((item) => (
              <li
                key={item.title}
                className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
