import { useEffect, useRef } from "react";
import { Portfolio } from "../models/Portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMobile, faTablet, faVideo, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface DettagliProgettoProps {
    progetto: Portfolio | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ModalPortfolio({ progetto, isOpen, onClose }: DettagliProgettoProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscapeKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscapeKey);
        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !progetto) return null;

    const modalVariants = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.2,
            }
        }
    }

    return (
        <AnimatePresence>
            {isOpen && progetto && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <motion.div 
                    ref={modalRef} 
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="border-2 border-white w-full max-w-4xl shadow-xl max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-celeste/50 backdrop-blur-sm border-b-2 border-white">
                            <h2 className="text-3xl font-bold text-center text-white">{progetto.titolo}</h2>
                            <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition-colors text-2xl" aria-label="Chiudi">
                                <FontAwesomeIcon icon={faXmark} className="text-white font-bold"/>
                            </button>
                        </div>

                        <div className="p-6 bg-celeste/50">
                            <div className="mb-3 h rounded-xl overflow-hidden md:mb-8">
                                <img src={progetto.immagine} alt={progetto.titolo} className="object-contain"/>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2">
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-3 text-white">Descrizione dettagliata</h3>
                                        <p className="text-white">{progetto.descrizione}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Caratteristiche principali</h3>
                                <ul className="list-disc pl-5 space-y-1 text-white">
                                    {progetto.caratteristiche.map((caratteristica, index) => (
                                        <li key={index}>{caratteristica}</li>
                                    ))} 
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6 mb-4">
                            <div className="p-6 rounded-xl border-2 border-white shadow-sm">
                                <h3 className="text-2xl text-white font-semibold mb-4">Versioni supportate</h3>
                                {progetto.versioni && (
                                    <div className="flex gap-6 justify-center items-center text-center">
                                        <div className="flex flex-row items-center gap-2 p-3 rounded-lg">
                                            {progetto.versioni.desktop && (
                                                <div>
                                                     <FontAwesomeIcon icon={faDesktop} 
                                                        className={progetto.versioni.desktop ? "text-white text-xl mr-2" : "text-white"}
                                                    /> 
                                                    <span className="text-white text-md">Desktop</span>
                                                </div>
                                            )}   

                                            {progetto.versioni.tablet && (
                                                <div>
                                                    <FontAwesomeIcon icon={faTablet} 
                                                        className={progetto.versioni.tablet ? "text-white text-xl mr-2" : "text-white"}
                                                    /> 
                                                    <span className="text-white text-md">Tablet</span>
                                                </div>
                                            )}

                                            {progetto.versioni.mobile && (
                                                <div>
                                                    <FontAwesomeIcon icon={faMobile} 
                                                        className={progetto.versioni.mobile ? "text-white text-xl mr-2" : "text-white"}
                                                    /> 
                                                    <span className="text-white text-md">Mobile</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border-2 border-white shadow-sm h-fit">
                            <h3 className="text-2xl font-semibold mb-6 text-white">Dettagli progetto</h3>

                            <div className="mb-6">
                                <h4 className="text-[17px] font-semibold text-white mb-3">Tecnologie</h4>
                                <div className="flex flex-wrap gap-2">
                                    {progetto.linguaggi.map((framework, index) => (
                                        <span key={index} className="px-3 py-1 text-white  text-sm rounded-md">{framework}</span>
                                    ))}
                                </div>
                            </div>

                            {progetto.api && progetto.api.length > 0 && (
                                <div className="mb-6">
                                    <h4 className="text-[17px] font-semibold text-white mb-3">Api</h4>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {progetto.api.map((api, index) => (
                                            <span key={index} className="px-3 py-1 text-white  text-sm rounded-md">{api}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            

                            <div className={`flex ${progetto.github} ? : 'flex justify-center items-center space-x-4 ': '' gap-4`}>
                                <a href={progetto.link} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-celeste text-white border-2 border-white h-10 px-2 rounded-md hover:bg-white hover:border-2 hover:border-celeste hover:text-celeste transition ease-in-out flex items-center space-x-2">
                                        <FontAwesomeIcon icon={faVideo} />
                                        <span>Video</span>
                                    </button>
                                </a>

                                {progetto.github && (
                                    <a href={progetto.github} target="_blank" rel="noopener noreferrer">
                                        <button className="bg-celeste text-white border-2 border-white h-10 px-2 rounded-md hover:bg-white hover:border-2 hover:border-celeste hover:text-celeste transition ease-in-out flex items-center space-x-2">
                                            <FontAwesomeIcon icon={faGithub} />
                                            <span>GitHub</span>
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
    )

    
}
