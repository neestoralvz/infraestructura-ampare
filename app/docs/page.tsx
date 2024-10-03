'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function DocsPage() {
  const [docs, setDocs] = useState<{ name: string, title: string, path: string }[]>([])

  useEffect(() => {
    fetch('/api/docs')
      .then(response => {
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          throw new Error('Expected JSON response');
        }
      })
      .then(data => {
        setDocs(data);
      })
      .catch(error => console.error('Error cargando la documentación:', error));
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Documentación</h1>
        <Link href="/" passHref>
          <Button className="mb-4">Volver al Portal</Button>
        </Link>
        <ul className="space-y-4">
          {docs.map((doc, index) => (
            <li key={index}>
              <Link href={`/docs/${doc.name.replace(/\.md$/, '')}`} passHref>
                <Button variant="outline" className="w-full text-left justify-start text-lg font-semibold py-3 px-4 rounded-md hover:bg-gray-200 transition duration-200">
                  {doc.title}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}