import React from "react"

interface ProjectCardProps {
  title?: string
  tagline?: string
  description?: string
  demoUrl?: string
  githubUrl?: string
  technologies?: string[]
}

export function ProjectCard({
  title = "Proyecto",
  tagline = "Desarrollo",
  description = "",
  demoUrl = "#",
  githubUrl = "#",
  technologies = []
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col justify-between h-full hover:border-emerald-500/50 transition-all duration-300">
      <div>
        <span className="text-emerald-400 text-xs font-mono mb-2 block">
          {tagline || "Desarrollo"}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-4">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-gray-800 text-gray-300 text-xs px-2.5 py-1 rounded-md font-medium">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-4 mt-auto">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors"
        >
          GitHub
        </a>
        <a 
          href={demoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 text-center bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-bold py-2 px-4 rounded-lg text-sm transition-colors"
        >
          Live Demo
        </a>
      </div>
    </div>
  )
}
