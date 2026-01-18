<<<<<<< HEAD
import { logos } from "../utility/Logos";

export function FrameworkSection() {
    return (
        <section className="w-full flex flex-col items-center md:my-8 px-4">
            <h1 className="text-white text-3xl md:text-5xl text-center font-bold my-6">
                Competenze tecniche
            </h1>

            {/* Grid compatta a righe */}
            <div className="w-full max-w-6xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
                {logos.map((logo, index) => (
                    <div key={index} className="group cursor-pointer">
                        <img
                            src={logo}
                            alt={`logo ${index}`}
                            className="
                                max-h-14 md:max-h-16 lg:max-h-18
                                opacity-40
                                group-hover:opacity-100
                                group-hover:scale-105
                                transition-all duration-200
                            "
                        />
                    </div>
                ))}
            </div>
        </section>
    );
=======
import { useEffect, useState } from 'react';
import { logos } from '../utility/Logos';

export function FrameworkSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % logos.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  const getIndex = (offset: number) => (current + offset + logos.length) % logos.length;

  return (
    <section className='w-full relative flex flex-col items-center md:my-4'>
      <h1 className='text-white text-3xl whitespace-nowrap md:text-5xl text-center font-bold md:my-2 my-4'>
        Competenze tecniche
      </h1>

      <div className='flex justify-center items-center md:hidden h-32 w-32 overflow-hidden mt-6'>
        <img src={logos[current]} alt={`logo ${current}`} className='max-h-32' />
      </div>

      <div className='hidden md:flex justify-center items-center gap-12 h-48 overflow-hidden'>
        {[getIndex(-1), current, getIndex(1)].map((index, i) => (
          <img
            key={index}
            src={logos[index]}
            alt={`logo ${index}`}
            className={`transition-all duration-100 ease-in-out
                        ${i === 1 ? 'scale-110 z-10 opacity-100' : 'scale-60 opacity-50'} max-h-24 max-w-24`}
          />
        ))}
      </div>
    </section>
  );
>>>>>>> d4ffcde49ca75412fa926bcbaf6758a8286ac538
}
