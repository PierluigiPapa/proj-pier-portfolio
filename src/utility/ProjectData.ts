import { Portfolio } from '../models/Portfolio';
import { Project } from './ImageProject';

export const progetti: Portfolio[] = [
  {
    id: 1,
    titolo: 'BoolBnB',
    descrizione:
      'BoolBnB è una piattaforma per la prenotazione di alloggi, sviluppata in team come progetto finale del corso Boolean. Permette ai proprietari di gestire appartamenti, promuoverli tramite sponsorizzazioni e comunicare con i clienti; agli utenti di cercare alloggi personalizzando la ricerca e contattare i proprietari attraverso un modulo dedicato.',
    immagine: Project[0],
    link: 'https://youtu.be/zdr4tcAp8zk',
    github: '',
    api: ['TomTom', 'Braintree'],
    linguaggi: [
      'HTML',
      'CSS',
      'Bootstrap',
      'SASS',
      'JavaScript',
      'VueJS',
      'Vite',
      'PHP',
      'MySQL',
      'Laravel',
    ],
    versioni: {
      desktop: true,
      tablet: true,
      mobile: true,
    },
    caratteristiche: [
      'Registrazione e login per proprietari con accesso a un gestionale dedicato',
      'Inserimento e gestione di appartamenti con immagini e dettagli',
      'Sistema di sponsorizzazione per aumentare la visibilità sulla homepage',
      'Messaggistica integrata tra utenti e proprietari',
      'Ricerca geolocalizzata entro 20 km dalla posizione',
      'Filtri avanzati per personalizzare la ricerca degli alloggi',
    ],
  },
  {
    id: 2,
    titolo: 'Card Pokémon',
    descrizione:
      "Card Pokémon è un progetto ispirato al celebre franchise, sviluppato per creare un'interfaccia interattiva e visivamente accattivante. Permette di cercare un Pokémon digitandone il nome, visualizzare una card personalizzata con immagine, numero, tipologia, statistiche e versione shiny. Include uno spinner animato a tema Poké Ball durante il caricamento e la traduzione delle tipologie in italiano per un'esperienza più immersiva.",
    immagine: Project[1],
    link: 'https://youtu.be/zgue9pU7u5I',
    github: 'https://github.com/PierluigiPapa/proj-card-pokemon',
    api: ['Pokémon'],
    linguaggi: ['HTML', 'CSS', 'JavaScript'],
    versioni: {
      desktop: true,
      tablet: true,
      mobile: true,
    },
    caratteristiche: [
      'Stile personalizzato della card con barre delle statistiche',
      'Recupero dati da Pokémon API',
      "Traduzione automatica delle tipologie dall'inglese all'italiano",
      'Ricerca interattiva del Pokémon tramite barra di input',
      'Visualizzazione della versione shiny tramite checkbox',
      'Spinner animato a tema Poké Ball durante il caricamento',
      'Gestione degli errori con messaggio di alert in caso di Pokémon non trovato',
    ],
  },
  {
    id: 3,
    titolo: 'MasterStudy',
    descrizione:
      "MasterStudy è una piattaforma educativa sviluppata per simulare un sito dedicato all'apprendimento online. Strutturata in sezioni modulari, include funzionalità come countdown per le iscrizioni, sezioni dinamiche con piani tariffari e recensioni interattive degli utenti. Le card dei corsi mostrano i prezzi e possono essere cliccate per interagire. È presente una call to action per iscriversi ai corsi inviando una email diretta dal sito.",
    immagine: Project[2],
    link: 'https://youtu.be/jbv-Gv-bwHg',
    github: 'https://github.com/PierluigiPapa/proj-html-vuejs',
    api: [],
    linguaggi: ['HTML', 'CSS', 'JavaScript', 'VueJS', 'SASS'],
    versioni: {
      desktop: true,
      tablet: false,
      mobile: false,
    },
    caratteristiche: [
      'Countdown dinamico per evidenziare la scadenza delle iscrizioni',
      'Card dei corsi dinamici, con prezzo visibile al passaggio del mouse',
      'Recensioni interattive con valutazioni da parte degli utenti',
      'Call to action per iscrizione via email direttamente dalla piattaforma',
    ],
  },
  {
    id: 4,
    titolo: 'Yu-Gi-Oh',
    descrizione:
      "Yu-Gi-Oh è un progetto sviluppato durante il corso Full-Stack Web Development di Boolean Careers. Consente di esplorare una collezione di carte tramite API esterna, con componenti riutilizzabili e uno stile dinamico. Include una barra di ricerca e un menu a tendina per filtrare le carte in base all'archetipo selezionato.",
    immagine: Project[3],
    link: 'https://youtu.be/SDeq3mG8X7Y',
    github: 'https://github.com/PierluigiPapa/vite-yu-gi-oh',
    api: ['Yu-Gi-Oh'],
    linguaggi: ['HTML', 'CSS', 'JavaScript', 'VueJS', 'Vite', 'SASS'],
    versioni: {
      desktop: true,
      tablet: false,
      mobile: false,
    },
    caratteristiche: ["Select option per filtrare le carte in base all'archetipo"],
  },
];
