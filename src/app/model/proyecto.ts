export class Proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    linkImgP: string;
    linkExtP: string;

    constructor(
        nombreP: string,
        descripcionP: string,
        linkImgP: string,
        linkExtP: string,
    ) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.linkImgP = linkImgP;
        this.linkExtP = linkExtP;
    }
}
