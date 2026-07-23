"use client"

import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  const projects = [
    {
      id: "1",
      title: "MARA",
      tagline: "Aplicación Full Stack",
      description: "Aplicación Full Stack (End-to-End) con arquitectura scalable e integración fluida de servicios.",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["Node.js", "Express", "JavaScript", "REST API", "Tailwind"]
    },
    {
      id: "2",
      title: "BACKENDOS",
      tagline: "Servidor Backend & API REST",
      description: "Servidor Backend robusto y escalable para comercio electrónico con arquitectura por capas (rutas, controladores y modelos), autenticación JWT, control de accesos por roles y persistencia en la nube, desplegado en Render.",
      demoUrl: "https://onrender.com",
      githubUrl: "https://github.com",
      technologies: ["Node.js", "Express", "MongoDB Atlas", "JWT", "Bcrypt", "Render"]
    },
    {
      id: "3",
      title: "TUTANK",
      tagline: "Clon de Pinterest",
      description: "Clon de Pinterest de alto rendimiento con diseño adaptativo y consumo dinámico de la API de Unsplash.",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["JavaScript", "HTML5", "CSS3", "Vite", "LocalStorage"]
    }
  ]

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            tagline={project.tagline}
            description={project.description}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  )
}
