export class Experiencia {
    id?: number;
    nombreE: string;
    anioIE: string;
    anioEE: string;
    cargoE: string;
    descripcionE: string;

    constructor(
        nombreE: string,
        anioIE: string,
        anioEE : string,
        cargoE : string,
        descripcionE: string) {
        
            this.nombreE = nombreE;
            this.anioIE = anioIE;
            this.anioEE = anioEE;
            this.cargoE = cargoE;
            this.descripcionE = descripcionE;

    }
}

