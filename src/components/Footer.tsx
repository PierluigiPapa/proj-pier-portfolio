
export function Footer() {
  

  return (
    <footer className="bg-linear-to-bl from-gray-1 to-gray-2 border-gray-200">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <span className="text-white text-2xl hover:text-celeste transition-colors duration-300 ease-in-out transform">
                        LOGO PIERLUIGI PAPA
                    </span>
                </a>
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <li>
                        <a href="#" className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-celeste transition-colors duration-300 ease-in-out transform md:p-0">Torna su</a>
                    </li>
                </ul>
            </div>
            
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-md sm:text-center text-white hover:text-celeste transition-colors duration-300 ease-in-out transform">&copy;2025 Pierluigi Papa. Tutti i diritti riservati </span>
        </div>
    </footer>
    );
}
