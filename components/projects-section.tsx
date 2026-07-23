"use client"

import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  const projects = [
    {
      id: "1",
      title: "MARA",
      description: "Aplicación Full Stack (End-to-End) con arquitectura escalable e integración fluida de servicios. Desarrollada con Node.js, Express, JavaScript (ES6+), REST API y Tailwind CSS.",
      demoUrl: "#" 
    },
    {
      id: "2",
      title: "BACKENDOS",
      description: "Servidor Backend robusto y escalable para comercio electrónico con arquitectura por capas (rutas, controladores y modelos), autenticación JWT, control de accesos por roles y persistencia en la nube, desplegado en Render.",
      // 👇 Tu URL real de producción conectada
      demoUrl: "https://onrender.com" 
    },
    {
      id: "3",
      title: "TUTANK",
      description: "Clon de Pinterest de alto rendimiento con diseño adaptativo y consumo dinámico de la API de Unsplash. Integrado con JavaScript (ES6+), HTML5, CSS3, Vite y almacenamiento local.",
      demoUrl: "#" 
    }
  ]

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            demoUrl={project.demoUrl} 
          />
        ))}
      </div>
    </section>
  )
}

