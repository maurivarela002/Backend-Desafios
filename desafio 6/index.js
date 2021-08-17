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

  async Guardar() {
    let newProducto = [
      {
        "title": "Pelota3",
        "price": 600,
        "thumbnail": "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/dep_0001-p.jpg?itok=5IWgPHx5",
        "id": newProducto.length + 1
      },
      {
        "title": "Pelota4",
        "price": 700,
        "thumbnail": "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/dep_0001-p.jpg?itok=5IWgPHx5",
        "id": newProducto.length + 1
      }
    ];

    try {
      const productosleer = await fs.promises.readFile(this.nombreArchivo, "utf-8");
      const arrayProductos = JSON.parse(productosleer);
      console.log("JSON", arrayProductos);
      const push = arrayProductos.push(newProducto);

      const guardar = await fs.promises.appendFile(this.nombreArchivo, push);
      console.log("guardar try", guardar);
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
nombreDeArchivo.Leer();
nombreDeArchivo.Guardar();
