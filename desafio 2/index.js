const fs = require("fs");

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  async Leer() {
    try {
      const productos = await fs.promises.readFile(this.nombreArchivo, "utf-8");
      let arrayProductos = JSON.parse(productos);
      console.log("leer: ", arrayProductos);

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

    let id = newProducto.id;
    return id;
  }

  async getById(idRecived) {
    try {
      const productos = await fs.promises.readFile(this.nombreArchivo, "utf-8");
      let arrayProductos = JSON.parse(productos);

      console.log(idRecived);
      console.log("leer: ", arrayProductos[idRecived]);


    }
    catch (err) {
      console.log("hubo un error", err)
    };
  };

  async getAll() {
    try {
      const productos = await fs.promises.readFile(this.nombreArchivo, "utf-8");
      let arrayProductos = JSON.parse(productos);

      console.log("leer: ", arrayProductos);


    }
    catch (err) {
      console.log("hubo un error", err)
    };
  };

  async deleteAll() {
    try {
      await fs.promises.unlink(this.nombreArchivo);
    }
    catch (err) {
      console.log("hubo un error", err)
    };
  };


  async deleteById(idRecived) {
    try {
      const productos = await fs.promises.readFile(this.nombreArchivo, "utf-8");
      let arrayProductos = JSON.parse(productos);

      let deleteToID = arrayProductos.splice(0, idRecived - 1);
      console.log("leer: ", arrayProductos);
    }
    catch (err) {
      console.log("hubo un error", err)
    };
  };
}

const nombreDeArchivo = new Contenedor("productos.txt");

const newProducto =
{
  "title": "Pelota Adidas",
  "price": 600,
  "thumbnail": "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/dep_0001-p.jpg?itok=5IWgPHx5"
};


let id = 2;

nombreDeArchivo.Leer();
//nombreDeArchivo.Guardar(newProducto);
// nombreDeArchivo.getById(id);
// nombreDeArchivo.getAll();
//nombreDeArchivo.deleteAll();
//nombreDeArchivo.deleteById(id);