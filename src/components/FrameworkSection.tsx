import { logos } from "../utility/Logos";

export function FrameworkSection() {
    return (
        <section className="w-full flex flex-col items-center md:my-8 px-4">
            <h1 className="text-white text-3xl md:text-5xl text-center font-bold my-6">
                Competenze tecniche
            </h1>

            {/* Grid compatta a righe */}
            <div className="w-full max-w-6xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
                {logos.map((logo, index) => (
                    <div key={index} className="group cursor-pointer">
                        <img
                            src={logo}
                            alt={`logo ${index}`}
                            className="
                                max-h-14 md:max-h-16 lg:max-h-18
                                opacity-40
                                group-hover:opacity-100
                                group-hover:scale-105
                                transition-all duration-200
                            "
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
