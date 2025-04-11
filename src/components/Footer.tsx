import Logo from '../assets/Logo.png'

export function Footer() {
  return (
    <footer className="bg-linear-to-bl from-gray-1 to-gray-2 border-gray-200">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-2 md:py-4">
        <div className="sm:flex sm:items-center sm:justify-between flex justify-center items-center">
          <img src={Logo} alt="Logo_Pierluigi_Papa_WD" className="h-24 object-contain opacity-50 flex"/>
          <ul className="flex flex-col font-medium mt-2 md:mt-0 md:flex-row md:space-x-6">
            <li>
              <a href="#" className="block py-1 px-3 text-white hover:text-celeste transition-colors duration-300 text-center active:text-celeste active:transition-colors active:duration-300">
                    Torna su
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200" />
        <span className="block text-sm text-white text-center hover:text-celeste transition-colors duration-300 active:text-celeste active:transition-colors active:duration-300">
          &copy;2025 Pierluigi Papa. Tutti i diritti riservati
        </span>
      </div>
    </footer>
  );
}
