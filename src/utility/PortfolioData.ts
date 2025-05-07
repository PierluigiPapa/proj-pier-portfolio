import { Portfolio } from "../models/Portfolio";
import { project } from "../utility/Projects";


export const progetti: Portfolio[] = [
    {
        id: 1,
        titolo: "BoolBnB",
        descrizione: "BoolBnB è un portale per la gestione di alloggi, sviluppato in team nel corso Boolean. Include un database per appartamenti, messaggistica, sponsorizzazioni e funzioni per utenti e proprietari.",
        immagine: project[0],
        link: "https://youtu.be/zdr4tcAp8zk", 
        github: "https://github.com/federico-casu/fp_team6", 
        api: ["TomTom", "Braintree"],
        linguaggi: ["HTML", "CSS", "Bootstrap", "SASS", "JavaScript", "VueJS", "Vite", "PHP", "MySQL", "Laravel"],
        versioni: ["Desktop", "Tablet", "Mobile"]
    },
    {
        id: 2,
        titolo: "Card Pokémon",
        descrizione: "Card interattiva ispirata ai Pokémon, con ricerca, statistiche, versione shiny e caricamento animato. Realizzata integrando un'API pubblica e ottimizzata per dispositivi mobili.",
        immagine: project[1],
        link: "https://youtu.be/zgue9pU7u5I",
        github: "https://github.com/PierluigiPapa/proj-card-pokemon",
        api: ["Pokémon"],
        linguaggi: ["HTML", "CSS", "JavaScript"],
        versioni:  ["Desktop", "Tablet", "Mobile"]
    },
    {
        id: 3,
        titolo: "MasterStudy",
        descrizione: "MasterStudy è un sito realizzato per il corso di Full-Stack Web Development di Boolean Careers. Strutturato in sezioni e componenti, include countdown, prezzi dinamici e recensioni interattive.",
        immagine: project[2],
        link: "https://youtu.be/jbv-Gv-bwHg",
        github: "https://github.com/PierluigiPapa/proj-html-vuejs",
        api: [],
        linguaggi: ["HTML", "CSS", "JavaScript", "VueJS", "SASS"],
        versioni:  ["Desktop"]
    },
    {
        id: 4,
        titolo: "Yu-Gi-Oh",
        descrizione: "Yu-Gi-Oh è un esercizio per il corso di Full-Stack Web Development di Boolean Careers, che consiste nell'organizzare componenti riutilizzabili e utilizzare un'API per mostrare carte.",
        immagine: project[3],
        link: "https://youtu.be/SDeq3mG8X7Y",
        github: "https://github.com/PierluigiPapa/vite-yu-gi-oh",
        api: ["Yu-Gi-Oh"],
        linguaggi: ["HTML", "CSS", "JavaScript", "VueJS", "Vite", "SASS"],
        versioni:  ["Desktop"]
    }
 
];
