import { useEffect, useState } from 'react';
import { Github, Download, Mail } from 'lucide-react';
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
        <div className='w-full flex justify-center mb-10 md:w-6xl md:mb-0 sm:w-full sm:mb-0'>
          <div>
            <h1 className='text-white text-3xl text-center font-bold my-4 sm:text-5xl'>
              Ciao, sono {''}
              <span
                className={`text-celeste font-bold transition-opacity duration-500 whitespace-nowrap ${showName ? 'opacity-100' : 'opacity-0'}`}
              >
                Pierluigi Papa
              </span>
            </h1>

            <p
              className={`text-white md:text-left text-2xl sm:text-3xl md:text-4xl font-normal transition-opacity duration-500 my-4 text-center ${showJob ? 'opacity-100' : 'opacity-0'}`}
            >
              Full Stack Web Developer
            </p>

            <div className='my-4 md:flex md:justify-start flex justify-center'>
              <a
                href='https://www.linkedin.com/in/pierluigipapa/'
                target='_blank'
                className='flex justify-center items-center bg-white text-celeste text-2xl md:text-3xl rounded-2xl border-2 border-celeste transition ease-in-out md:hover:bg-celeste md:hover:text-white md:hover:border-white md:hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13'
                aria-label='LinkedIn'
              >
                <svg
                  className='w-6 h-6 md:w-8 md:h-8 fill-current'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>LinkedIn</title>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z' />
                </svg>
              </a>

              <a
                href='https://github.com/PierluigiPapa'
                target='_blank'
                className='flex justify-center items-center bg-white text-celeste text-2xl md:text-3xl rounded-2xl border-2 border-celeste transition ease-in-out md:hover:bg-celeste md:hover:text-white md:hover:border-white md:hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13'
                aria-label='GitHub'
              >
                <Github className='w-6 h-6 md:w-8 md:h-8' />
              </a>

              <a
                href='mailto:pierluigipapa9@gmail.com/'
                target='_blank'
                className='flex justify-center items-center bg-white text-celeste text-2xl md:text-3xl rounded-2xl border-2 border-celeste transition ease-in-out md:hover:bg-celeste md:hover:text-white md:hover:border-white md:hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13'
                aria-label='Email'
              >
                <Mail className='w-6 h-6 md:w-8 md:h-8' />
              </a>

              <button
                onClick={downloadCV}
                className='flex justify-center items-center bg-white text-celeste text-2xl md:text-3xl rounded-2xl border-2 border-celeste transition ease-in-out md:hover:bg-celeste md:hover:text-white md:hover:border-white md:hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13'
                aria-label='Download'
              >
                <Download className='w-6 h-6 md:w-8 md:h-8' />
              </button>
            </div>
          </div>
        </div>

        <div className='w-full md:w-2xl flex justify-center items-center'>
          <img
            src={PierluigiPapa}
            className={`transition-opacity duration-500 ${showPhoto ? 'opacity-100' : 'opacity-0'}`}
            alt='Pierluigi Papa'
          />
        </div>
      </div>
    </section>
  );
}
