import { Mail, ArrowUpRight, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { contact } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
          <p className="font-mono text-sm text-primary">{'// contacto'}</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Construyamos algo fiable juntos
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            ¿Tienes una API que diseñar, un backend que escalar o un producto
            completo que lanzar? Estoy abierto a oportunidades freelance y a
            tiempo completo.
          </p>

          <p className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {contact.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {contact.email}
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil de GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil de LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="font-mono text-sm text-muted-foreground">
            gerardo<span className="text-primary">.dev</span>
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gerardo Giménez. Hecho con Next.js.
          </p>
        </div>
      </div>
    </footer>
  )
}
