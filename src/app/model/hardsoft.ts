export class Hardsoft {
    id?: number;
    nombreHS: string;
    porcentajeHS: number;

    constructor(
        nombreHS: string,
        porcentajeHS: number
    ) {
        this.nombreHS = nombreHS;
        this.porcentajeHS = porcentajeHS;
    }
}
