import { useEffect, useRef } from 'react';
import { Portfolio } from '../models/Portfolio';
import { AnimatePresence, motion } from 'framer-motion';
import { Monitor, Smartphone, Tablet, Video, X, Github } from 'lucide-react';

interface DettagliProgettoProps {
  progetto: Portfolio | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ModalPortfolio({ progetto, isOpen, onClose }: DettagliProgettoProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen || !progetto) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'>
          <motion.div
            ref={modalRef}
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='border-2 border-white w-full max-w-4xl shadow-xl max-h-[90vh] overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className='sticky top-0 z-10 flex justify-between items-center p-4 bg-celeste/50 backdrop-blur-sm border-b-2 border-white'>
              <h2 className='text-3xl font-bold text-white'>{progetto.titolo}</h2>
              <button
                onClick={onClose}
                className='p-2 rounded-full hover:bg-muted transition-colors'
                aria-label='Chiudi'
              >
                <X className='text-white' />
              </button>
            </div>

            {/* BODY */}
            <div className='p-6 bg-celeste/50'>
              <div className='mb-6 rounded-xl overflow-hidden'>
                <img
                  src={progetto.immagine}
                  alt={progetto.titolo}
                  className='object-contain w-full'
                />
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-2'>
                  <h3 className='text-xl font-semibold mb-3 text-white'>
                    Descrizione dettagliata
                  </h3>
                  <p className='text-white'>{progetto.descrizione}</p>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-white mb-3'>
                    Caratteristiche principali
                  </h3>
                  <ul className='list-disc pl-5 space-y-1 text-white'>
                    {progetto.caratteristiche.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* VERSIONI SUPPORTATE */}
              <div className='mt-8 p-6 rounded-xl border-2 border-white shadow-sm'>
                <h3 className='text-2xl text-white font-semibold mb-6 text-center'>
                  Versioni supportate
                </h3>

                {progetto.versioni && (
                  <div className='flex justify-center gap-10'>
                    {progetto.versioni.desktop && (
                      <div className='flex flex-col items-center gap-2'>
                        <Monitor className='text-white w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16' />
                        <span className='text-white'>Desktop</span>
                      </div>
                    )}

                    {progetto.versioni.tablet && (
                      <div className='flex flex-col items-center gap-2'>
                        <Tablet className='text-white w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16' />
                        <span className='text-white'>Tablet</span>
                      </div>
                    )}

                    {progetto.versioni.mobile && (
                      <div className='flex flex-col items-center gap-2'>
                        <Smartphone className='text-white w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16' />
                        <span className='text-white'>Mobile</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* DETTAGLI PROGETTO */}
              <div className='mt-8 p-6 rounded-xl border-2 border-white shadow-sm'>
                <h3 className='text-2xl font-semibold mb-6 text-white'>
                  Dettagli progetto
                </h3>

                <div className='mb-6'>
                  <h4 className='text-lg font-semibold text-white mb-3'>Tecnologie</h4>
                  <div className='flex flex-wrap gap-2'>
                    {progetto.linguaggi.map((l, i) => (
                      <span key={i} className='text-white'>
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                {progetto.api?.length > 0 && (
                  <div className='mb-6'>
                    <h4 className='text-lg font-semibold text-white mb-3'>API</h4>
                    <div className='flex flex-wrap gap-2'>
                      {progetto.api.map((a, i) => (
                        <span key={i} className='text-white'>
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className='flex justify-center gap-4'>
                  <a href={progetto.link} target='_blank' rel='noopener noreferrer'>
                    <button className='bg-celeste text-white border-2 border-white h-10 px-4 rounded-md flex items-center gap-2 hover:bg-white hover:text-celeste transition'>
                      <Video className='w-5 h-5' />
                      Video
                    </button>
                  </a>

                  {progetto.github && (
                    <a href={progetto.github} target='_blank' rel='noopener noreferrer'>
                      <button className='bg-celeste text-white border-2 border-white h-10 px-4 rounded-md flex items-center gap-2 hover:bg-white hover:text-celeste transition'>
                        <Github className='w-5 h-5' />
                        GitHub
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
