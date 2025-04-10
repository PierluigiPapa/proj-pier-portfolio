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
        <div>
            <h1 className="text-white text-5xl text-center font-bold my-10">Competenze tecniche</h1>

            <section className="w-full relative flex flex-col items-center">
                <div className="flex justify-center items-center gap-20 h-32 md:h-48 overflow-hidden">
                    {[getIndex(-1), current, getIndex(1)].map((index, i) => (
                        <img
                            key={index}
                            src={logos[index]}
                            alt={`logos ${index}`}
                            className={`transition-all duration-100 ease-in-out
                                ${i === 1 ? "scale-120 z-10 opacity-100" : "scale-70 opacity-50"}
                                max-h-24 md:max-h-24`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
