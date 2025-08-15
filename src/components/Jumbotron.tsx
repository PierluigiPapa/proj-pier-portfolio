import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PierluigiPapa from '../assets/PierluigiPapa.png'


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
        const photo = setTimeout(() => setShowPhoto(true), 700)

        return () => {
            clearTimeout(name);
            clearTimeout(job);
            clearTimeout(photo);
        };
    }, []);

    return (
        <section className="bg-gradient-to-t from-gray-1 to-gray-2">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto">
                <div className="w-full flex justify-center mb-10 md:w-6xl md:mb-0 sm:w-full sm:mb-0">
                    <div>
                        <h1 className="text-white text-3xl text-center font-bold my-4 sm:text-5xl">Ciao, sono {''} 
                            <span className={`text-celeste font-bold transition-opacity duration-500 whitespace-nowrap ${showName  ? 'opacity-100' : 'opacity-0'}`}>
                                Pierluigi Papa
                            </span>
                        </h1>

                        <p className={`text-white md:text-left text-2xl sm:text-3xl md:text-4xl font-normal transition-opacity duration-500 my-4 text-center ${showJob ? 'opacity-100' : 'opacity-0'}`}>                            
                            Full Stack Web Developer
                        </p>

                        <div className="my-4 md:flex md:justify-start flex justify-center">
                            <button className="bg-white text-celeste text-2xl md:text-3xl rounded-2xl border-2 border-celeste transition ease-in-out md:hover:bg-celeste md:hover:text-white md:hover:border-white md:hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13"
                            aria-label="LinkedIn">
                                <a href="https://www.linkedin.com/in/pierluigipapa/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                </a>
                            </button>

                            <button className="bg-white text-celeste text-2xl md:text-3xl rounded-2xl border-2 border-celeste transition ease-in-out md:hover:bg-celeste md:hover:text-white md:hover:border-white md:hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13"
                            aria-label="GitHub">
                                <a href="https://github.com/PierluigiPapa" target="_blank">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </button>

                            <button className="bg-white text-celeste text-2xl md:text-3xl rounded-2xl border-2 border-celeste transition ease-in-out md:hover:bg-celeste md:hover:text-white md:hover:border-white md:hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13"
                            aria-label="Email">
                                <a href="mailto:pierluigipapa9@gmail.com/" target="_blank">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </button>

                            <button onClick={downloadCV} className="bg-white text-celeste text-2xl md:text-3xl rounded-2xl border-2 border-celeste transition ease-in-out md:hover:bg-celeste md:hover:text-white md:hover:border-white md:hover:scale-110 mx-2 w-11 h-11 md:w-13 md:h-13"
                            aria-label="Download">
                                <FontAwesomeIcon icon={faDownload} />
                            </button>
                        </div>
                    </div> 
                </div>

                <div className="w-full md:w-2xl flex justify-center items-center">
                   <img src={PierluigiPapa} className={`transition-opacity duration-500 ${showPhoto ? 'opacity-100' : 'opacity-0'}`}   alt="" />
                </div>
            </div>       
        </section>


    )
}