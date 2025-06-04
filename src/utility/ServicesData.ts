import { faLaptop, faCogs } from "@fortawesome/free-solid-svg-icons";
import { Services } from "../models/Services"

export const services: Services[] = [
    {
        icona: faLaptop, 
        titolo: 'Sviluppo Siti Web', 
        descrizione: 'Creazione di siti web personalizzati, responsive e ottimizzati per diverse esigenze aziendali e professionali.',
        caratteristiche: [
            'Siti vetrina',
            'Siti aziendali',
            'Landing Page',
            'Restyling e aggiornamenti'
        ]
    },
    {
        icona: faCogs, 
        titolo: 'Sviluppo Backend e Integrazione API', 
        descrizione: 'Sviluppo di soluzioni backend scalabili e integrazione di API per connettere il sito a sistemi esterni.',
        caratteristiche: [
            'Sviluppo backend personalizzato',
            'Integrazione API sicure',
            'Gestione della logica applicativa',
            'Ottimizzazione delle performance'
        ]
    },
];
