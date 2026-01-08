import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { services } from '../utility/ServicesData';
import { processo } from '../utility/ProcessoLavorativo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';

export function ServiziPage() {
  const [isVisible, setIsVisible] = useState(false);
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, amount: 0.3 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className='bg-gradient-to-t from-gray-1 to-gray-2'>
        <div className='flex flex-row items-center justify-center max-w-screen-xl mx-auto'>
          <div className='w-full flex justify-center mb-10'>
            <div className='px-4'>
              <motion.h1
                className='text-white text-3xl text-center font-bold my-4 sm:text-5xl'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                transition={{ duration: 0.8 }}
              >
                Diamo vita ai tuoi progetti
              </motion.h1>

              <motion.p
                className='text-white text-xl text-center my-4 sm:text-2xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Tu immagina, io realizzo
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto grid max-w-6xl gap-6 py-6 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {services.map((service, index) => (
          <motion.div
            key={service.titolo}
            className='p-5 border rounded-2xl shadow-lg text-white transition-colors'
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 50,
            }}
            transition={{
              duration: 0.5,
              delay: 0.8 + index * 0.2,
            }}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className='flex justify-center items-center text-5xl sm:text-6xl text-white mb-4'
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: isVisible ? 1 : 0,
                rotate: isVisible ? 0 : -180,
              }}
              transition={{
                duration: 0.6,
                delay: 1 + index * 0.2,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: {
                  scale: { duration: 0.2 },
                  rotate: { duration: 0.5 },
                },
              }}
            >
              <FontAwesomeIcon icon={service.icona} />
            </motion.div>

            <motion.h3
              className='text-2xl md:text-2xl font-bold mb-2 text-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{
                duration: 0.5,
                delay: 1.2 + index * 0.2,
              }}
            >
              {service.titolo}
            </motion.h3>

            <motion.p
              className='sm:text-base lg:text-base md:text-xl text-white'
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{
                duration: 0.5,
                delay: 1.4 + index * 0.2,
              }}
            >
              {service.descrizione}
            </motion.p>

            <motion.ul
              className='space-y-1 mt-2 sm:text-base lg:text-base md:text-xl text-white'
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{
                duration: 0.5,
                delay: 1.6 + index * 0.2,
              }}
            >
              {service.caratteristiche.map((feature, i) => (
                <motion.li
                  key={i}
                  className='flex items-start gap-2'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.8 + index * 0.2 + i * 0.1,
                  }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{
                      scale: isVisible ? 1 : 0,
                      rotate: isVisible ? 0 : -90,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 2 + index * 0.2 + i * 0.1,
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} className='mt-1' />
                  </motion.div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>

      <div ref={processRef} className='w-full py-10'>
        <motion.h2
          className='text-3xl sm:text-3xl md:text-4xl text-white text-center font-bold'
          initial={{ opacity: 0, y: 30 }}
          animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Il nostro processo
        </motion.h2>

        <motion.h3
          className='text-base sm:text-lg md:text-xl text-white text-center mt-2 sm:mt-3'
          initial={{ opacity: 0, y: 20 }}
          animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Un approccio metodico per garantire risultati eccellenti
        </motion.h3>

        <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-6 py-10 px-4 sm:px-6 md:px-8'>
          {processo.map((processi, index) => (
            <motion.div
              key={processi.id}
              className='flex flex-col items-center space-y-3 border border-white rounded-xl p-4 sm:p-5 md:p-6 text-center shadow-md'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                processInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className='flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white text-celeste text-3xl sm:text-4xl md:text-5xl font-bold'
                initial={{ scale: 0, rotate: -360 }}
                animate={processInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -360 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8 + index * 0.2,
                  type: 'spring',
                  stiffness: 150,
                  damping: 12,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, 10, -10, 0],
                  transition: {
                    scale: { duration: 0.2 },
                    rotate: { duration: 0.4 },
                  },
                }}
                whileTap={{ scale: 0.9 }}
              >
                {processi.id}
              </motion.div>

              <motion.h3
                className='text-2xl sm:text-2xl md:text-2xl text-white font-semibold'
                initial={{ opacity: 0 }}
                animate={processInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
              >
                {processi.titolo}
              </motion.h3>

              <motion.p
                className='sm:text-base lg:text-base md:text-xl text-white'
                initial={{ opacity: 0 }}
                animate={processInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
              >
                {processi.descrizione}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
