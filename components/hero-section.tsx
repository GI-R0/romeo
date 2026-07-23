import { ArrowRight, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { contact } from '@/lib/portfolio-data'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Disponible para nuevos proyectos
        </span>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Gerardo Giménez
        </h1>

        <p className="mt-3 font-mono text-base text-primary sm:text-lg">
          {'> Full Stack Developer & API Specialist'}
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Graduado del programa de alto rendimiento{' '}
          <span className="font-medium text-foreground">
            Rock{'{'}TheCode{'}'} v2
          </span>
          . Especializado en el desarrollo de APIs robustas, gestión eficiente
          de datos y la creación de soluciones web escalables de extremo a
          extremo (E2E).
        </p>

        <p className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          {contact.location}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver proyectos
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-mono text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Contacto
          </a>
          <div className="flex items-center gap-1 sm:ml-2">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil de GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil de LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <dl className="mt-14 grid w-full max-w-lg grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
          {[
            { value: '5+', label: 'Proyectos E2E' },
            { value: 'API-first', label: 'Enfoque' },
            { value: 'v2', label: 'Rock{TheCode}' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card px-4 py-5 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="flex items-center justify-center gap-1.5 font-mono text-xl font-semibold text-foreground sm:text-2xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
