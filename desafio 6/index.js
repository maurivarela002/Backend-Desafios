const fs = require("fs");

class Archivo {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  async Leer() {
    try {
      const productos = await fs.promises.readFile(this.nombreArchivo, "utf-8");
      console.log("leer" + " " + productos);

    } catch (err) {
      console.log("hubo un error", err)
    };
  }

  async Guardar(newProducto) {
    try {
      const productosleer = await fs.promises.readFile(this.nombreArchivo, "utf-8");
      const arrayProductos = JSON.parse(productosleer);
      const asignarid = arrayProductos.length + 1;

      newProducto.id = asignarid

      arrayProductos.push(newProducto)

      const strProd = JSON.stringify(arrayProductos)

      await fs.promises.writeFile(this.nombreArchivo, strProd);
    } catch (err) {
      console.log("hubo un error", err)
    };
  }

  async Borrar() {
    try {
      await fs.promises.unlink(this.nombreArchivo);
    } catch (err) {
      console.log("hubo un error", err)
    };
  };
}

const nombreDeArchivo = new Archivo("productos.txt");
const newProducto = 
  {
    "title": "Pelota nike",
    "price": 600,
    "thumbnail": "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/dep_0001-p.jpg?itok=5IWgPHx5"
  };

nombreDeArchivo.Leer();
nombreDeArchivo.Guardar(newProducto);
nombreDeArchivo.Borrar()