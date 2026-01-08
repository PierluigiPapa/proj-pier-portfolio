import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { photos } from "../utility/Photos";

export function ChiSonoPage() {
  const salutoRef = useRef(null);
  const bioRef = useRef(null);
  const careerRef = useRef(null);
  const meRef = useRef(null);

  const bioInView = useInView(bioRef, { once: true, amount: 0.3 });
  const careerInView = useInView(careerRef, { once: true, amount: 0.3 });
  const meInView = useInView(meRef, { once: true, amount: 0.3 });

  return (
    <>
      <motion.h1
        ref={salutoRef}
        className="text-white text-center my-4 md:text-6xl text-4xl font-bold pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Piacere Pierluigi
      </motion.h1>

      {/* BIOGRAFIA */}
      <section
        ref={bioRef}
        className="flex flex-col md:flex-row gap-8 py-10 px-4 md:px-12 items-start justify-start"
      >
        <div className="text-white text-lg md:w-1/2">
          <motion.h2
            className="text-2xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={bioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            La mia storia
          </motion.h2>

          <motion.p
            className="text-justify mt-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={bioInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Sono nato a Brindisi, una città marittima dell'Italia meridionale, nell'estate del 1992. Dopo aver preso il diploma di maturità
            scientifica, inizio gli studi universitari, iscrivendomi alla facoltà di Beni Culturali di Lecce, spinto dalla passione per la
            storia, in particolare per quella medievale e per la cultura. Qui, ho avuto il primo approccio con il mondo della programmazione web,
            creando un piccolo portale, per il corso di Informatica, Brindisi Medievale, incentrato sullo studio del Medioevo, nella provincia
            brindisina. Dopo aver concluso questi studi, mi sono iscritto al Corso di Laurea Magistrale in Scienze Storiche e della
            documentazione storica di Bari, laureandomi nel pieno dell'emergenza sanitaria del Covid-19.
          </motion.p>
        </div>

        <motion.div
          className="md:w-1/2 flex justify-center px-4"
          initial={{ opacity: 0, x: 50 }}
          animate={bioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <img
            src={photos[0]}
            className="w-full max-w-[500px] h-[500px] object-cover rounded-xl shadow-lg"
            alt=""
          />
        </motion.div>
      </section>

      <section
        ref={careerRef}
        className="text-white py-10 px-4 md:px-12"
      >
        <div className="flex flex-col md:flex-row items-start gap-8">
          <motion.div
            className="md:w-1/2 flex justify-center px-4"
            initial={{ opacity: 0, x: 50 }}
            animate={careerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={photos[1]}
              className="w-full max-w-[500px] h-[500px] object-cover rounded-xl shadow-lg"
              alt=""
            />
          </motion.div>

          <div className="md:w-1/2 text-lg">
            <motion.h2
              className="text-2xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={careerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              La mia carriera professionale
            </motion.h2>

            <motion.p
              className="mt-4 text-justify leading-relaxed"
              initial={{ opacity: 0 }}
              animate={careerInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Essendo appassionato di tecnologia e soprattutto alla ricerca di
              un ambiente lavorativo stimolante e dinamico, ho deciso di
              iscrivermi al corso in Full-Stack Web Development di Boolean,
              dalla durata di sei mesi. È stata un'esperienza formativa, non
              solo perché ho imparato alcuni dei più importanti linguaggi di
              programmazione e framework Front End e Back End: HTML5, CSS,
              JavaScript, Bootstrap, VueJS, Vite, SASS, PHP, MySQL, Laravel, ma
              anche perché ho acquisito dimestichezza con strumenti e ambienti
              di sviluppo fondamentali come Visual Studio Code, Axios, Vite,
              MAMP, Git e NodeJS. A livello professionale, la sua intensità mi
              ha fatto comprendere cosa significa essere un programmatore web,
              grazie anche agli esercizi e ai progetti svolti singolarmente o in
              team.
            </motion.p>

            <motion.p
              className="mt-4 text-justify leading-relaxed"
              initial={{ opacity: 0 }}
              animate={careerInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Successivamente, ho avuto l'opportunità di lavorare presso
              l'azienda S.I.A. di Brindisi, dove ho partecipato attivamente allo
              sviluppo di progetti interni e progetti esterni per i clienti,
              collaborando con il team su soluzioni software personalizzate. In
              questa esperienza ho approfondito le mie competenze tecniche,
              imparando e utilizzando React, Tailwind CSS, TypeScript, C# e il
              framework .NET, lavorando quotidianamente con strumenti
              professionali come Visual Studio e SQL Server Management Studio.
              Questa esperienza mi ha permesso di crescere anche dal punto di
              vista del problem solving e del lavoro in team in un contesto
              aziendale reale.            
              </motion.p>

            <motion.p
              className="mt-4 text-justify leading-relaxed"
              initial={{ opacity: 0 }}
              animate={careerInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Dopo aver concluso la mia precedente esperienza lavorativa, 
              ho scelto di investire nel mio futuro dedicandomi allo studio delle 
              tecnologie più richieste dal mercato. Ho consolidato il mio profilo 
              Full-Stack approfondendo l'uso di Java, Spring Boot, Angular e Docker, 
              nella gestione di database relazionali (PostgreSQL) e non-relazionali (MongoDB) 
              per creare architetture scalabili e performanti.
            </motion.p>


            <motion.p
              className="mt-4 text-justify leading-relaxed"
              initial={{ opacity: 0 }}
              animate={careerInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Attualmente proseguo la mia carriera presso Primed srl, 
              importante azienda pugliese nel settore delle zanzariere, 
              dove il mio ruolo è poliedrico: svolgo, oltre alla mansione di 
              Full Stack Developer, compiti cruciali come Software Analyst Programmer, 
              implementando soluzioni all'avanguardia con Next.js, 
              Prisma e Zenstack. 
              In questo contesto, ho integrato l'utilizzo dell'intelligenza artificiale, 
              in particolare ChatGPT, per lo sviluppo di funzionalità innovative all'interno 
              dei progetti aziendali. 
              
              Parallelamente, opero come UX/UI Designer utilizzando Figma per la 
              progettazione delle interfacce grafiche, curando così l&apos;
              intero ciclo di vita del prodotto digitale: dall&apos;
              analisi funzionale e il design dell'esperienza utente fino allo sviluppo 
              tecnico e all'integrazione di soluzioni basate su IA. 
            </motion.p>
          </div>
        </div>
      </section>

      <section
        ref={meRef}
        className="flex flex-col md:flex-row gap-8 py-10 px-4 md:px-12 items-start justify-start"
      >
        <div className="text-white text-lg md:w-1/2">
          <motion.h2
            className="text-2xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={meInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Oltre il curriculum
          </motion.h2>

          <motion.p
            className="text-justify mt-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={meInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Alla domanda: "Come ti descriveresti?" Risponderei che sono un ragazzo dinamico, curioso, socievole,
            creativo, a cui piace lavorare in team e attento ai dettagli. Mi dedico con passione a viaggiare, leggere e
            fotografare, trovando ispirazione e arricchimento personale in queste esperienze, perché entrare in contatto
            con altre culture fa aprire la mente e a nuovi orizzonti. Mi piace scrivere articoli sul Medioevo e non
            solo, filmare tutto ciò che i miei occhi osservano. Adoro praticare sport, giocando a quadball, a calcetto
            con gli amici, a pallacanestro e allenandomi, in palestra. Inoltre, mi diverto a giocare ai videogiochi e ai
            giochi da tavolo, stimolando la logica.
          </motion.p>
        </div>

        <motion.div
          className="md:w-1/2 flex justify-center px-4"
          initial={{ opacity: 0, x: 50 }}
          animate={meInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <img
            src={photos[2]}
            className="w-full max-w-[500px] h-[500px] object-cover rounded-xl shadow-lg"
            alt=""
          />
        </motion.div>
      </section>
    </>
  );
}
