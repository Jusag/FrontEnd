export class Persona {
    id?: number;
    img: String;
    imgProfile: String;
    nombre: String;
    apellido: String;
    titulo: String;
    descripcion: String;

    constructor(img: String, imgProfile: String, nombre: String, apellido: String, titulo: String, descripcion: String) {
        this.img = img;
        this.imgProfile = imgProfile;
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}