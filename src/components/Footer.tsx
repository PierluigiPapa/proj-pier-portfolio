import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/Logo.png'

export function Footer() {

  const showBoolean = () => {
    const link = document.createElement('a');
    link.href = '/Attestato_Boolean.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-linear-to-bl from-gray-1 to-gray-2 border-gray-200">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-2 md:py-4">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
          <img src={Logo} alt="Logo_Pierluigi_Papa_WD" className="h-24 object-contain opacity-50 flex my-2"/>

          <div className="flex flex-col items-center text-center">
            <span className="text-white font-semibold mb-1 text-xl">Certificazioni</span>
            <a href="/" onClick={showBoolean} className="md:block py-1 px-3 text-white hover:text-celeste transition-colors duration-300 active:text-celeste active:transition-colors active:duration-300">
              Boolean
            </a>
          </div>

          <a href="#" className="hidden md:block py-1 px-3 text-white hover:text-celeste transition-colors duration-300 text-center active:text-celeste active:transition-colors active:duration-300">
            Torna su
          </a>
        
          <a href="#" className="block md:hidden text-white text-center active:text-celeste active:transition-colors active:duration-300">
            <FontAwesomeIcon icon={faArrowUp} className="text-xl my-2"/>
          </a>
        </div>

        <hr className="my-2 border-gray-200" />
        
        <span className="block text-sm text-white text-center hover:text-celeste transition-colors duration-300 active:text-celeste active:transition-colors active:duration-300">
          &copy;2025 Pierluigi Papa. Tutti i diritti riservati.
        </span>
      </div>
    </footer>
  );
}
