"use client"

import { useEffect, useState } from "react"
import { ProjectCard } from "./project-card"

// Definimos la estructura de datos que devuelve tu backend
interface Product {
  _id: string
  title: string
  description: string
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Petición HTTP real a tu servidor en Render
    fetch("https://onrender.com")
      .then((res) => res.json())
      .then((data) => {
        // Si tu backend devuelve un array, lo guardamos
        if (Array.isArray(data)) {
          setProjects(data)
        }
      })
      .catch((err) => console.error("Error conectando al backend:", err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Mis Proyectos Integrados</h2>
      
      {loading ? (
        <p className="text-center text-gray-500">Cargando proyectos desde el servidor en Render...</p>
      ) : projects.length === 0 ? (
        <p className="text-center text-gray-500">No hay proyectos registrados en la base de datos.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project._id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      )}
    </section>
  )
}
