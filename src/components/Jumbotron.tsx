import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export function Jumbotron() {

    const [showName, setShowName] = useState(false);
    const [showJob, setShowJob] = useState(false);

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

        return () => {
            clearTimeout(name);
            clearTimeout(job);
        };
    }, []);

    return (
        <section className="bg-gradient-to-t from-gray-1 to-gray-2">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto px-4 py-20">
                <div className="w-full md:w-6xl flex justify-center mb-10 md:mb-0">
                    <div>
                        <h1 className="text-white text-5xl font-bold my-4">Ciao, sono {''} 
                            <span className={`text-celeste font-bold transition-opacity duration-500 ${showName  ? 'opacity-100' : 'opacity-0'}`}>
                                Pierluigi Papa
                            </span>
                        </h1>

                        <p className={`text-white text-4xl font-normal transition-opacity duration-500 my-4 ${showJob  ? 'opacity-100' : 'opacity-0'}`}>
                            Full Stack Web Developer
                        </p>

                        <div className="my-4">
                            <button className="bg-white text-celeste text-3xl rounded-2xl border-2 border-celeste transition ease-in-out hover:bg-celeste hover:text-white hover:border-2 hover:border-white w-13 h-13 mx-2">
                                <a href="https://www.linkedin.com/in/pierluigipapa/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                </a>
                            </button>

                            <button className="bg-white text-celeste text-3xl rounded-2xl border-2 border-celeste transition ease-in-out hover:bg-celeste hover:text-white hover:border-2 hover:border-white w-13 h-13 mx-2">
                                <a href="https://github.com/PierluigiPapa" target="_blank">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </button>

                            <button className="bg-white text-celeste text-3xl rounded-2xl border-2 border-celeste transition ease-in-out hover:bg-celeste hover:text-white hover:border-2 hover:border-white w-13 h-13 mx-2">
                                <a href="mailto:pierluigipapa9@gmail.com/" target="_blank">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </button>

                            <button onClick={downloadCV} className="bg-white text-celeste text-3xl rounded-2xl border-2 border-celeste transition ease-in-out hover:bg-celeste hover:text-white hover:border-2 hover:border-white w-13 h-13 mx-2">
                                <FontAwesomeIcon icon={faDownload} />
                            </button>
                        </div>
                    </div> 
                </div>

                <div className="w-full md:w-2xl flex justify-center items-center">
                   <span className="text-4xl font-bold text-white">FOTO PIERLUIGI PAPA</span>
                </div>
            </div>       
        </section>


    )
}