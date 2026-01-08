export type Portfolio = {
  id: number;
  titolo: string;
  descrizione: string;
  immagine: string;
  link: string;
  github: string;
  api: string[];
  linguaggi: string[];
  versioni: {
    desktop: boolean;
    tablet: boolean;
    mobile: boolean;
  };
  caratteristiche: string[];
};
