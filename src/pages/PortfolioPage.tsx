import { faAngleDown, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { progetti } from "../utility/ProjectData";
import { ModalPortfolio } from "../components/ModalPortfolio";
import { Portfolio } from "../models/Portfolio";
import { useEffect, useState } from "react";


export function PortfolioPage() {
    const [progettoSelezionato, setProgettoSelezionato] = useState<Portfolio | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const openModal = (progetto: Portfolio) => {
        setProgettoSelezionato(progetto);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setProgettoSelezionato(null);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="bg-gradient-to-t from-gray-1 to-gray-2">
                <div className="flex flex-row items-center justify-center max-w-screen-xl mx-auto">
                    <div className="w-full flex justify-center mb-10">
                        <div className="px-4">
                           <motion.h1 className="text-white text-3xl text-center font-bold my-4 sm:text-5xl"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{
                                    opacity: isVisible ? 1 : 0,
                                    y: isVisible ? 0 : -20,
                                }}
                                transition={{ duration: 0.8 }}
                                >
                                    Scorri per vedere il mio portfolio
                            </motion.h1>

                            <motion.div className="w-full flex justify-center items-center"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: isVisible ? 1 : 0,
                                }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                <motion.div animate={{y: [0, 10, 0],}}
                                    transition={{
                                        repeat: Number.POSITIVE_INFINITY,
                                        duration: 1.5,
                                        ease: "easeInOut",
                                    }}
                                    className="text-white"
                                >
                                    <FontAwesomeIcon icon={faAngleDown} className="text-4xl"/>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className={`mx-auto px-4 py-16 transition-all duration-300 ${isModalOpen ? "blur-sm" : ""}`}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {progetti.map((progetto) => (
                            <motion.div className="max-w-[370px] mx-auto rounded-xl overflow-hidden border border-white shadow-xl hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                                key={progetto.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="h-44">
                                    <img src={progetto.immagine}
                                        alt={progetto.titolo}
                                        className="w-full h-full object-cover opacity-70"
                                    />
                                </div>
                                
                                <div className="p-6 flex-grow">
                                    <h3 className="sm:text-xl text-center font-bold text-white mt-2 mb-2 md:text-3xl lg:text-2xl">
                                        {progetto.titolo}
                                    </h3>
                                    
                                    <span className="text-white sm:text-center text-center md:text-center md:text-[20px] lg:text-center lg:text-base">
                                        {progetto.descrizione.includes('.')
                                        ? progetto.descrizione.slice(0, progetto.descrizione.indexOf('.') + 1)
                                        : progetto.descrizione}
                                    </span>
                                </div>
                                
                                <div className="flex justify-center items-center mt-auto mb-3">
                                    <button className="h-10 w-40 bg-white rounded-xl border-2 text-celeste hover:bg-celeste hover:text-white transition ease-in-out"
                                        onClick={() => openModal(progetto)}
                                    >
                                        <FontAwesomeIcon icon={faEye} className="mr-1" />
                                        <span>Dettagli</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <ModalPortfolio
                    progetto={progettoSelezionato}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>
        </>
    );
}
