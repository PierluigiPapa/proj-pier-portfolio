import { useEffect, useState } from 'react';
import { Linkedin, Github, Mail, Download } from 'lucide-react';
import PierluigiPapa from '../assets/PierluigiPapa.webp';

export function Jumbotron() {
  const [showName, setShowName] = useState(false);
  const [showJob, setShowJob] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Pierluigi_Papa_CV.pdf';
    link.download = 'Pierluigi_Papa_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const name = setTimeout(() => setShowName(true), 700);
    const job = setTimeout(() => setShowJob(true), 1400);
    const photo = setTimeout(() => setShowPhoto(true), 700);

    return () => {
      clearTimeout(name);
      clearTimeout(job);
      clearTimeout(photo);
    };
  }, []);

  return (
    <section className='bg-gradient-to-t from-gray-1 to-gray-2'>
      <div className='flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto'>
        {/* TESTI */}
        <div className='w-full flex justify-center mb-10 md:mb-0'>
          <div className='flex flex-col text-center md:text-left'>
            <h1 className='text-white text-3xl sm:text-5xl font-bold my-4 flex flex-col'>
              <span>
                Ciao, sono{' '}
                <span
                  className={`text-celeste transition-opacity duration-500 ${
                    showName ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  Pierluigi Papa
                </span>
              </span>
            </h1>

            <p
              className={`text-white text-2xl sm:text-3xl md:text-4xl font-normal transition-opacity duration-500 my-4 ${
                showJob ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Front End Developer & Designer UX/UI
            </p>

            {/* SOCIAL & CTA */}
            <div className='my-4 flex justify-center md:justify-start'>
              <a
                href='https://www.linkedin.com/in/pierluigipapa/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='bg-white text-celeste rounded-2xl border-2 border-celeste transition ease-in-out hover:bg-celeste hover:text-white hover:border-white hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13 flex items-center justify-center'
              >
                <Linkedin size={24} />
              </a>

              <a
                href='https://github.com/PierluigiPapa'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
                className='bg-white text-celeste rounded-2xl border-2 border-celeste transition ease-in-out hover:bg-celeste hover:text-white hover:border-white hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13 flex items-center justify-center'
              >
                <Github size={24} />
              </a>

              <a
                href='mailto:pierluigipapa9@gmail.com'
                aria-label='Email'
                className='bg-white text-celeste rounded-2xl border-2 border-celeste transition ease-in-out hover:bg-celeste hover:text-white hover:border-white hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13 flex items-center justify-center'
              >
                <Mail size={24} />
              </a>

              <button
                onClick={downloadCV}
                aria-label='Download CV'
                className='bg-white text-celeste rounded-2xl border-2 border-celeste transition ease-in-out hover:bg-celeste hover:text-white hover:border-white hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13 flex items-center justify-center'
              >
                <Download size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* FOTO */}
        <div className='w-full md:w-2xl flex justify-center items-center'>
          <img
            src={PierluigiPapa}
            alt='Pierluigi Papa'
            className={`transition-opacity duration-500 ${showPhoto ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </section>
  );
}
