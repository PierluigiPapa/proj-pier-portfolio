import { useEffect, useState } from "react";
import { logos } from "../utility/Logos";

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
        <>
            <section className="w-full relative flex flex-col items-center my-10">
                <h1 className="text-white text-3xl whitespace-nowrap md:text-5xl text-center font-bold">
                    Competenze tecniche
                </h1>

                <div className="flex justify-center items-center md:hidden h-32 overflow-hidden mt-6">
                    <img
                        src={logos[current]}
                        alt={`logo ${current}`}
                        className="max-h-32"
                    />
                </div>

                <div className="hidden md:flex justify-center items-center gap-12 h-48 overflow-hidden mt-6">
                    {[getIndex(-1), current, getIndex(1)].map((index, i) => (
                        <img
                            key={index}
                            src={logos[index]}
                            alt={`logo ${index}`}
                            className={`transition-all duration-100 ease-in-out
                                ${i === 1 ? "scale-110 z-10 opacity-100" : "scale-60 opacity-50"}
                                max-h-24 max-w-24`}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
