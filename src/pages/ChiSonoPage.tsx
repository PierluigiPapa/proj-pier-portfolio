import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { photos } from "../utility/Photos";



export function ChiSonoPage() {
  const [showSaluto, setShowSaluto] = useState(false);

  useEffect (() => {
    const saluti = setTimeout(() => setShowSaluto(true), 700);

    return () => {
      clearTimeout(saluti);
    }
  })

  const bioRef = useRef(null);
  const careerRef = useRef(null);
  
  const bioInView = useInView(bioRef, {once: true, amount: 0.3}) 
  const carrerInView = useInView(careerRef, {once: true, amount: 0.3})

  return (
  <>
    <h1 className={`text-white text-center my-4 md:text-6xl text-4xl font-bold transition-opacity duration-500 ${showSaluto ? 'opacity-100' : 'opacity-0'}` } >
      Piacere, Pierluigi
    </h1>

    <section ref={bioRef} className="flex flex-col md:flex-row gap-8 py-10 px-4 md:px-12 items-start justify-start">
      <div className="text-white text-lg md:w-1/2">
        <motion.h2 className="text-2xl md:text-4xl font-bold"
          initial={{opacity: 0, y: 20}}
          animate={bioInView ? {opacity: 1, y: 0} : {opacity: 0, y:20}}
          transition={{duration: 0.6}}>
            La mia storia
        </motion.h2>

        <motion.p className="text-justify mt-4 leading-relaxed"
          initial={{opacity: 0}}
          animate={bioInView ? {opacity: 1} : {opacity: 0}}
          transition={{duration: 0.6, delay: 1.4}}>
          Sono nato a Brindisi, una città marittima dell'Italia meridionale, nell'estate del 1992. Dopo aver preso il diploma di maturità scientifica, 
          inizio gli studi universitari, iscrivendomi alla facoltà di Beni Culturali di Lecce, spinto dalla passione per la storia, 
          in particolare per quella medievale e per la cultura. Qui, ho avuto il primo approccio con il mondo della programmazione web, creando un piccolo portale, 
          per il corso di Informatica, Brindisi Medievale, incentrato sullo studio del Medioevo, nella provincia brindisina. Dopo aver concluso questi studi, 
          mi sono iscritto al Corso di Laurea Magistrale in Scienze Storiche e della documentazione storica di Bari, 
          laureandomi nel pieno dell'emergenza sanitaria del Covid-19.
        </motion.p>      
      </div>

      <motion.div className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={bioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        <img src={photos[0]} className="w-[17rem] h-[23rem] object-cover rounded-xl shadow-lg" alt=""/>
      </motion.div>
    </section>

    <section ref={careerRef} className="text-white py-10 px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={carrerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={photos[0]} alt=""className="w-[17rem] h-[23rem] object-cover rounded-xl shadow-lg"/>
        </motion.div>

    <div className="md:w-1/2 text-lg">
      <motion.h2
        className="text-2xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={carrerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        La mia carriera professionale
      </motion.h2>

      <motion.p
        className="mt-4 text-justify leading-relaxed"
        initial={{ opacity: 0 }}
        animate={carrerInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        Essendo appassionato di tecnologia e soprattutto alla ricerca di un ambiente lavorativo stimolante e dinamico,
        ho deciso di iscrivermi al corso in Full-Stack Web Development di Boolean, dalla durata di sei mesi.
        È stata un'esperienza formativa, non solo perché ho imparato alcuni dei più importanti linguaggi di programmazione e
        framework front-end e back-end: HTML5, CSS, JavaScript, Bootstrap, VueJS, Vite, SASS, PHP, MySQL, Laravel,
        ma anche a livello professionale, in quanto la sua intensità mi ha fatto comprendere cosa significa essere un
        programmatore web, grazie anche agli esercizi e ai progetti svolti singolarmente o in team.
      </motion.p>
    </div>

  </div>
</section>

  </>
  )
}
