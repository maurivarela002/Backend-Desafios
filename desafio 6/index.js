// import fs from 'fs';
const fs = require("fs");

class Archivo {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }
}

const nombreDeArchivo = JSON.stringify(new Archivo("./productos.txt"));

async function Leer() {
  try {
    const productos = await fs.promises.readFile(nombreDeArchivo, "utf-8");
    console.log("leer" + " " + productos);

  } catch (err) {
    console.log("hubo un error", err)
  };
}


async function Guardar() {
  const newProducto = [
    {
      title: "Pelota1",
      price: "400",
      thumbnail:
        "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/dep_0001-p.jpg?itok=5IWgPHx5"
    },
    {
      title: "Pelota2",
      price: "500",
      thumbnail:
        "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/dep_0001-p.jpg?itok=5IWgPHx5"
    }
  ];
  console.log("Objeto" + " " + newProducto);

  const arrayProducto = JSON.stringify(newProducto);
  console.log("array" + " " + arrayProducto);

  const id = newProducto.length + 1;
  console.log("Id:" + " " + id);

  const addProductoToObj = newProducto.push("id:", id);
  console.log("Push" + " " + addProductoToObj);

  try {
    const guardar = await fs.promises.appendFile(nombreDeArchivo, newProducto);
    console.log(guardar);
  } catch (err) {
    console.log("hubo un error", err)
  };

}

async function Borrar() {
  try {
    await fs.promises.unlink(nombreDeArchivo);
  } catch (err) {
    console.log("hubo un error", err)
  };
}

Leer();