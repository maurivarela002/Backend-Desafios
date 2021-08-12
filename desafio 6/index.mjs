import fs from 'fs';
const Path = './producto.txt'; 

class Archivo {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }
};

function Guardar() {
  const newProducto = {
    title: "Pelotas",
    price: "4200",
    thumbnail: "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/dep_0001-p.jpg?itok=5IWgPHx5"
  }

  const arrayProducto = newProducto.split();
  const id = arrayProducto.length + 1;
  arrayProducto.push(id);

  const guardar = fs.appendFile(Path, newProducto)
  console.log(guardar)

  function Leer() {
    fs.readFileSync(Path, "utf-8")
    console.log(arrayProducto.length);
  }
  Leer()
}

function Borrar() {
  fs.unlinkSync(Path);
}

Guardar()
Borrar()