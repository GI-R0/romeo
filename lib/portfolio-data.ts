export const contact = {
  email: 'ggimenezlima@gmail.com',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com/GI-R0',
  location: 'Murcia, España · Abierto a remoto / híbrido',
}

export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend & Datos',
    description: 'APIs, bases de datos y la lógica que lo sostiene todo.',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'MongoDB Atlas',
      'Mongoose',
      'PostgreSQL',
      'TypeScript',
    ],
  },
  {
    title: 'Frontend',
    description: 'Interfaces accesibles, responsivas y dinámicas.',
    skills: [
      'JavaScript (ES6+)',
      'React',
      'Next.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'DOM Manipulation',
    ],
  },
  {
    title: 'Herramientas & IA',
    description: 'El flujo de trabajo que me mantiene rápido y preciso.',
    skills: [
      'Git',
      'GitHub',
      'Multer',
      'Cloudinary',
      'JWT',
      'Bcrypt',
      'GitHub Copilot',
      'Cursor',
      'Postman / Insomnia',
    ],
  },
  {
    title: 'Despliegue',
    description: 'Del entorno local a producción sin fricción.',
    skills: ['Railway', 'Vercel', 'Render', 'GitHub Pages'],
  },
]

export type Project = {
  name: string
  tagline: string
  description: string
  tech: string[]
  challenge: string
  aiOptimization: string
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    name: 'MARA',
    tagline: 'E2E Full Stack App',
    description:
      'Aplicación Full Stack (End-to-End) con arquitectura escalable e integración fluida de servicios.',
    tech: ['Node.js', 'Express', 'JavaScript (ES6+)', 'REST API', 'Tailwind', 'Railway'],
    challenge:
      'Conectar de forma eficiente una interfaz de usuario dinámica con un servidor Backend robusto, garantizando la consistencia de los datos en tiempo real y minimizando los tiempos de carga en las peticiones del cliente.',
    aiOptimization:
      'Arquitectura limpia separada por capas (rutas, controladores, modelos). Se utilizaron herramientas de IA para auditar el código, refactorizar funciones asíncronas y optimizar la gestión de errores globales del servidor.',
    github: 'https://github.com/GI-R0/MARA.git',
    demo: 'https://mara-frontend-production.up.railway.app',
  },
  {
    name: 'BACKENDOS',
    tagline: 'E-commerce API RESTful & Security',
    description:
      'Servidor Backend robusto y escalable para comercio electrónico con arquitectura por capas (rutas, controladores y modelos), autenticación JWT, control de accesos por roles y persistencia en la nube, desplegado en Render.',
    tech: [
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Mongoose',
      'JWT',
      'Bcrypt.js',
      'Helmet',
      'CORS',
      'Rate-Limit',
      'Render',
    ],
    challenge:
      'Diseñar una arquitectura segura con autenticación JWT y encriptación de contraseñas con Bcrypt, controlar el acceso a rutas mediante middleware RBAC (Administrador vs. Cliente), exponer un CRUD completo de productos y blindar la API con Helmet, CORS y Express-Rate-Limit para prevenir ataques de fuerza bruta.',
    aiOptimization:
      'Variables de entorno (.env) y encriptación de datos sensibles. Uso de IA para auditar controladores CRUD, agilizar esquemas de Mongoose, reforzar las cabeceras de seguridad y documentar los endpoints para pruebas en Insomnia/Postman.',
    github: 'https://github.com/GI-R0/backendos',
    demo: 'https://backendos-kg1l.onrender.com',
  },
  {
    name: 'TUTANK',
    tagline: 'Pinterest Clone',
    description:
      'Clon de Pinterest de alto rendimiento con diseño adaptativo y consumo dinámico de la API de Unsplash.',
    tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite', 'Unsplash API', 'LocalStorage'],
    challenge:
      'Implementar una galería asíncrona estilo "masonry" controlando de forma estricta la duplicidad de datos en memoria, integrando persistencia local (LocalStorage) para búsquedas recientes y manejando las limitaciones de peticiones por minuto de una API externa.',
    aiOptimization:
      'Arquitectura basada en módulos de JavaScript y variables de entorno protegidas (.env). Uso de IA para optimizar la lógica de accesibilidad (aria-attributes) y estructurar el diseño "prefers-color-scheme" para modo oscuro automático.',
    github: 'https://github.com/GI-R0/tutank',
  },
  {
    name: 'POKESEARCH',
    tagline: 'Async Client API',
    description:
      'Aplicación Frontend avanzada especializada en el consumo asíncrono de APIs y renderizado dinámico de datos.',
    tech: ['JavaScript', 'Fetch / Async-Await', 'HTML5', 'CSS3', 'REST API', 'GitHub Pages'],
    challenge:
      'Gestionar grandes volúmenes de datos externos de manera eficiente en el cliente, implementando sistemas de filtrado rápido, búsquedas en tiempo real y un manejo fluido del estado de la interfaz sin peticiones redundantes.',
    aiOptimization:
      'Código modular y semántico siguiendo la guía de estilos de Rock{TheCode}. Uso de IA para la optimización de algoritmos de filtrado en el Frontend y para la generación automatizada de pruebas de interfaz.',
    github: 'https://github.com/GI-R0/poke-search.git',
  },
  {
    name: 'KETO',
    tagline: 'Data Customization Platform',
    description:
      'Aplicación web orientada a la gestión de datos específicos de usuario y lógica de negocio personalizada.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage', 'Git'],
    challenge:
      'Estructurar un modelo de datos complejo que permita procesar, almacenar y transformar entradas variables del usuario (métricas o planes personalizados), manteniendo una experiencia de usuario rápida e intuitiva.',
    aiOptimization:
      'Manipulación avanzada del DOM y persistencia de datos segura. Apoyo en herramientas de IA para agilizar el diseño responsivo mediante CSS utilitario y validar la consistencia de los tipos de datos antes del almacenamiento.',
    github: 'https://github.com',
  },
]

export const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
]
