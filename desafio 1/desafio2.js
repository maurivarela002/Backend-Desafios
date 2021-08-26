class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    //Nombre
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    //Mascotas
    addMascota(nombreMascota) {
        const nuevoAnimal = this.mascotas.push(nombreMascota);
    }
    getMascotas() {
        return this.mascotas.length;
    }

    //Libros
    addLibro(titulo, Autor) {
        const libro = {
            titulo: titulo,
            Autor: Autor
        }
        const nuevoLibros = this.libros.push(libro);
    }
    getLibros() {
        const nuevoLibros = []
        for (var i = 0; i < this.libros.length; i++) {
            nuevoLibros.push(this.libros[i].titulo)
        }
        return nuevoLibros;
    }
}
const UsuarioUno = new Usuario("Mauricio", "Varela", [], ["Perro", "Gato", "Leon", "Elefante"]);

//Full Name
console.log(UsuarioUno.getFullName());

//Mascotas
UsuarioUno.addMascota("Loro")
console.log(UsuarioUno.getMascotas());

//Libros
UsuarioUno.addLibro("Harry Potter 5", "Harry")
console.log(UsuarioUno.getLibros());