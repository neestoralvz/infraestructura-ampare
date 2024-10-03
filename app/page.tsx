'use client' // Indica que este componente es un componente del cliente

import Link from 'next/link' // Importa el componente Link para la navegación del lado del cliente
import { Button } from "@/components/ui/button" // Importa el componente Button de la biblioteca UI
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card" // Importa componentes de tarjeta para la UI
import { ChevronRightIcon, FolderIcon, BarChartIcon, LayersIcon } from 'lucide-react' // Importa íconos para la UI

// Removed unused import statements
// import ReactMarkdown from 'react-markdown' // Importing ReactMarkdown for rendering markdown content
// import remarkGfm from 'remark-gfm' // Importing remark plugin for GitHub Flavored Markdown
// import rehypeHighlight from 'rehype-highlight' // Importing rehype plugin for syntax highlighting
// import 'highlight.js/styles/github.css' // Importing GitHub style for syntax highlighting

// Change from named export to default export
export default function Page() {
  // Removed showReadme, readmeContent, and isLoading states
  // Removed useEffect for fetching README

  // Removed handleReadmeClick function

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8"> {/* Contenedor principal con fondo degradado */}
      <div className="max-w-3xl mx-auto"> {/* Contenedor centrado */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Plantilla Proyectos</h1> {/* Título de la página */}
        <p className="text-center text-gray-700 mb-8">Esta es una plantilla para gestionar y documentar proyectos de manera eficiente.</p> {/* Descripción del proyecto */}
        
        <div className="grid gap-6 md:grid-cols-2"> {/* Diseño de cuadrícula para tarjetas de recursos */}
          {/* Tarjeta de recurso README eliminada */}
          
          <ResourceCard 
            title="Documentación" // Título para la tarjeta de Documentación
            description="Documentación detallada del proyecto" // Descripción para la tarjeta de Documentación
            icon={<FolderIcon className="h-6 w-6" />} // Ícono para la tarjeta de Documentación
            href="/docs"  // Enlace a la documentación
          />
          
          <ResourceCard 
            title="Gestión de Proyectos" // Título para la tarjeta de Gestión de Proyectos
            description="Rastrear el progreso y las tareas del proyecto" // Descripción para la tarjeta de Gestión de Proyectos
            icon={<BarChartIcon className="h-6 w-6" />} // Ícono para la tarjeta de Gestión de Proyectos
            href="https://your-project-management-tool.com" // Enlace a la herramienta de gestión de proyectos
          />
          
          <ResourceCard 
            title="Aplicación" // Título para la tarjeta de Aplicación
            description="Acceder a la aplicación principal del proyecto" // Descripción para la tarjeta de Aplicación
            icon={<LayersIcon className="h-6 w-6" />} // Ícono para la tarjeta de Aplicación
            href="/app" // Enlace a la aplicación principal
          />
        </div>
      </div>
    </div>
  )
}

// ResourceCard component for displaying individual resources
function ResourceCard({ title, description, icon, onClick, href }: { title: string; description: string; icon: JSX.Element; onClick?: () => void; href?: string }) {
  return (
    <Card> {/* Componente de tarjeta para recurso */}
      <CardHeader> {/* Encabezado de la tarjeta */}
        <CardTitle className="flex items-center space-x-2"> {/* Título con ícono */}
          {icon} {/* Ícono para la tarjeta */}
          <span>{title}</span> {/* Texto del título */}
        </CardTitle>
        <CardDescription>{description}</CardDescription> {/* Texto de descripción */}
      </CardHeader>
      <CardContent> {/* Área de contenido de la tarjeta */}
        {onClick ? ( // Renderizado condicional basado en la prop onClick
          <Button className="w-full" onClick={onClick}> {/* Botón para acción de clic */}
            Acceder
            <ChevronRightIcon className="ml-2 h-4 w-4" /> {/* Ícono para el botón */}
          </Button>
        ) : (
          <Link href={href!} passHref> {/* Enlace para navegación */}
            <Button className="w-full"> {/* Botón para acción de enlace */}
              Acceder
              <ChevronRightIcon className="ml-2 h-4 w-4" /> {/* Ícono para el botón */}
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  )
}