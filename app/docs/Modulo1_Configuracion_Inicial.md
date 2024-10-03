# Módulo 1: Configuración Inicial del Proyecto

## Descripción General
Este módulo se encarga de configurar el proyecto inicial utilizando **Next.js** y **shadcn/ui**. El objetivo es preparar la estructura del proyecto, instalar las dependencias necesarias y configurar **Tailwind CSS** para garantizar que todos los componentes de **shadcn/ui** puedan ser utilizados y personalizados fácilmente.

## Componentes Específicos
- **Next.js**: Framework que manejará el renderizado del lado del servidor y la generación de sitios estáticos.
- **shadcn/ui**: Biblioteca de componentes que se integrará en el proyecto para la interfaz de usuario.
- **Tailwind CSS**: Framework de CSS que permitirá personalizar los componentes visuales de manera eficiente.

## Pasos para la Implementación

1. **Instalar y configurar shadcn/ui**:
   Ejecuta el siguiente comando para instalar y configurar shadcn/ui en tu proyecto:
   ```
   npx shadcn@latest init
   ```
   
   Para usar la configuración por defecto (estilo 'new-york', color base 'zinc', y variables CSS), puedes usar el flag `-d`:
   ```
   npx shadcn@latest init -d
   ```

2. **Configurar components.json**:
   Durante la instalación, se te harán algunas preguntas para configurar `components.json`:
   ```
   Which style would you like to use? › New York
   Which color would you like to use as base color? › Zinc
   Do you want to use CSS variables for colors? › no / yes
   ```

3. **Agregar componentes**:
   Una vez configurado, puedes empezar a agregar componentes a tu proyecto. Por ejemplo:
   ```
   npx shadcn@latest add button
   ```

4. **Usar los componentes**:
   Ahora puedes importar y usar los componentes en tu proyecto. Por ejemplo:
   ```jsx
   import { Button } from "@/components/ui/button"
   
   export default function Home() {
     return (
       <div>
         <Button>Click me</Button>
       </div>
     )
   }
   ```

## Detalles Técnicos y Dependencias
- **Next.js** y **shadcn/ui** están diseñados para trabajar en conjunto de manera eficiente.
- La configuración de **Tailwind CSS** se maneja automáticamente durante la instalación de shadcn/ui.

## Recursos Útiles
- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Instalación de shadcn/ui para Next.js](https://ui.shadcn.com/docs/installation/next)
- [Guía de Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)

## Integración con la Solución Final
Este módulo establece las bases del proyecto, creando la estructura inicial y asegurando que todos los componentes necesarios para las fases posteriores (como la creación de la página de portada) estén correctamente instalados y configurados.
