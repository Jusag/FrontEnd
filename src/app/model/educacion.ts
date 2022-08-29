export class Educacion {
    id?: number;
    tituloE: string;
    lugarE: string;
    anioIE: string;
    anioEE: string;
    descripcionE: string;

    constructor(
        tituloE: string,
        lugarE: string,
        anioIE: string,
        anioEE: string,
        descripcionE: string,
        ) {
            this.tituloE = tituloE;
            this.lugarE = lugarE;
            this.anioIE = anioIE;
            this.anioEE = anioEE;
            this.descripcionE = descripcionE;
    }

}
