import { useEffect, useState } from "react";
import { project } from "../utility/Projects";

export function ProjectSection() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % project.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 3000);
        return () => clearInterval(timer);
    }, []);

    const getIndex = (offset: number) => (current + offset + project.length) % project.length;

    return (
        <>
            <section className="w-full relative flex flex-col items-center my-4 md:my-4">
                <h1 className="text-white text-3xl whitespace-nowrap md:text-5xl text-center font-bold md:my-2 my-4">
                    Progetti
                </h1>
                
                <div className="flex justify-center items-center md:hidden h-40 overflow-hidden">
                    <img src={project[current]} alt={`project ${current}`} className="max-h-40"/>
                </div>

                <div className="hidden md:flex justify-center items-center gap-12 h-64 overflow-hidden">
                    {[getIndex(-1), current, getIndex(1)].map((index, i) => (
                        <img
                            key={index}
                            src={project[index]}
                            alt={`project ${index}`}
                            className={`transition-all duration-100 ease-in-out
                                ${i === 1 ? "scale-110 z-10 opacity-100" : "scale-60 opacity-50"}
                                max-h-96 max-w-96`}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
