const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500 dark:text-gray-400">
        <span className="mb-2 md:mb-0">&copy; 2024 GestPro. Todos los derechos reservados.</span>
        <div className="space-x-4">
          <a href="#" className="hover:text-primary transition-colors duration-300">Política de Privacidad</a>
          <a href="#" className="hover:text-primary transition-colors duration-300">Términos y Condiciones</a>
          <a href="#" className="hover:text-primary transition-colors duration-300">Soporte</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer