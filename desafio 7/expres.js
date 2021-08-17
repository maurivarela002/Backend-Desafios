// import express from 'express';
const express = require('express');
const fs = require("fs");
const app = express();

//Interpreta JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 8080;

const productos = {
    "items":
        [
            {
                "title": "Pelota1",
                "price": 400,
                "thumbnail": "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/dep_0001-p.jpg?itok=5IWgPHx5",
                "id": 1
            },
            {
                "title": "Pelota2",
                "price": 500,
                "thumbnail": "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/dep_0001-p.jpg?itok=5IWgPHx5",
                "id": 2
            }
        ]
};

const server = app.listen(port, () => {
    console.log(`Puerto ${port} levantado!`)
});

//productos 1
app.get("/api/items", (req, res) => {
    const cantidad = productos.items.length
    console.log(cantidad);
    const cantidadDeProductos = { ...productos, cantidad: { cantidad } };
    res.status(200).json(cantidadDeProductos)
})

//producto random 2
app.get("/api/item-random", (req, res) => {
    let leerArchivo = fs.readFileSync("productos.txt", "utf-8");
    const leerJSON = JSON.parse(leerArchivo);
    const random = () => Math.floor(Math.random() * leerJSON.length)
    const obtengo = random();
    const item = leerJSON[obtengo];
    const data = { item };
    console.log(data);
    res.status(200).json(data)
})

//veces visitadas 3
app.get("/api/getPalabra/:num", (req, res) => {
    console.log("Palabraaaa")
    const numLetra = req.params.num - 1;
    const obetenerLetra = frase.split(" ")[numLetra]
    res.status(200).json(obetenerLetra)
})

//sumar params
app.get("/api/sumar/:num1/:num2", (req, res) => {
    const numero1 = Number(req.params.num1)
    const numero2 = Number(req.params.num2)
    const suma = numero1 + numero2;

    res.status(200).json(suma);
})

//sumar querys
app.get("/api/sumar", (req, res) => {
    const numero1 = Number(req.query.num1)
    const numero2 = Number(req.query.num2)
    const suma = numero1 + numero2;

    res.status(200).json(suma);
})

//put 
app.put("/api", (req, res) => {
    const palabra = req.query.Nuevapalabra
    frase = frase + " " + palabra
    res.status(200).json(frase);
})

//delete
app.delete("/api", (req, res) => {
    const arrayPalabras = frase.split(" ");
    arrayPalabras.pop()
    frase = arrayPalabras.join(" ")
    res.status(200).json(frase);
})

//post
app.post("/api", (req, res) => {
    console.log(req.body)
})