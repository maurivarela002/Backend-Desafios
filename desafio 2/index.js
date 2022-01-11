const fs = require("fs");

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  async Guardar(newProducto) {
    try {
      const productosleer = await fs.promises.readFile(this.nombreArchivo, "utf-8");
      const arrayProductos = JSON.parse(productosleer);
      const asignarid = Math.random();

      newProducto.id = asignarid

      arrayProductos.push(newProducto)

      const strProd = JSON.stringify(arrayProductos)

      await fs.promises.writeFile(this.nombreArchivo, strProd);
    } catch (err) {
      console.log("hubo un error", err)
    };

    let id = this.nombreArchivo.asignarid;
    return id;
  }

  async getById(idRecived) {
    try {
      const productos = await fs.promises.readFile(this.nombreArchivo, "utf-8");
      let arrayProductos = JSON.parse(productos);

      let idFinded = arrayProductos.find(productos => productos.id === idRecived);
      // loguee el id que me viene en parametros y deberia cooicidir en el find, no entiendo porque no anda
      
      console.log("find", idFinded);
      console.log("leer: ", arrayProductos[idFinded]);
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
      let arrayVacio = [];
      await fs.promises.writeFile(this.nombreArchivo, arrayVacio);
    }
    catch (err) {
      console.log("hubo un error", err)
    };
  };


  async deleteById(idRecived) {
    try {
      const productos = await fs.promises.readFile(this.nombreArchivo, "utf-8");
      let arrayProductos = JSON.parse(productos);

      let index = arrayProductos.findIndex(productos => productos.id === idRecived);


      let deleteToID = arrayProductos.splice(0, index - 1);
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



let idRecived = Math.random();

nombreDeArchivo.Guardar(newProducto);
nombreDeArchivo.getById(idRecived);
 //nombreDeArchivo.getAll();
//nombreDeArchivo.deleteAll();
//nombreDeArchivo.deleteById(id);