
export function Footer() {
  

  return (
    <footer className="bg-linear-to-bl from-gray-1 to-gray-2 border-gray-200">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <span className="text-white hover:text-celeste transition-colors duration-300 ease-in-out transform">LOGO PIERLUIGI PAPA</span>
                </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="text-white hover:text-celeste transition-colors duration-300 ease-in-out transform">Torna su</a>
                        </li>
                    </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm sm:text-center text-white hover:text-celeste transition-colors duration-300 ease-in-out transform">© 2025 <a href="" className="text-white hover:text-celeste transition-colors duration-300 ease-in-out transform">Pierluigi Papa</a>. Tutti i diritti riservati.</span>
        </div>
    </footer>
    );
}
