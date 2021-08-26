function Usuario(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
}
const UsuarioUno = new Usuario("Mauricio", "Varela", [], ["Perro", "Gato", "Leon", "Elefante"]);

Usuario.prototype.getFullName = function () {
    return `${this.nombre} ${this.apellido}`;
}
console.log(UsuarioUno.getFullName());

Usuario.prototype.addMascota = function (nombreMascota) {
    const nuevoAnimal = this.mascotas.push(nombreMascota);
    console.log(this.mascotas)
}
UsuarioUno.addMascota("Loro")

Usuario.prototype.getMascotas = function () {
    return this.mascotas.length;
}
console.log(UsuarioUno.getMascotas());

Usuario.prototype.addLibro = function (titulo, Autor) {
    const libro = {
        titulo: titulo,
        Autor: Autor
    }
    const nuevoLibros = this.libros.push(libro);
    console.log(this.libros)
}
UsuarioUno.addLibro("Harry Potter 5", "Harry")

Usuario.prototype.getLibros = function () {
    const nuevoLibros = []
    for (var i = 0; i < this.libros.length; i++) {
        nuevoLibros.push(this.libros[i].titulo)
    }
    return nuevoLibros;
}
console.log(UsuarioUno.getLibros());
