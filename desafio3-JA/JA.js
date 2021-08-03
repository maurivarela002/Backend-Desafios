function ReciboTexto(num, texto, cb) {
    let palabra = "Hola"
    let arrayPalabras = texto.split();
    console.log(arrayPalabras.length)
    for (var i = 0; i < arrayPalabras.length; i++) {
        console.log(texto);
    }
    setTimeout(cb, 2500)
}
ReciboTexto(1,"Hola como estas, tienes mandarinas 🍊🍊🍊🍊?", ()=>{
    ReciboTexto(2,"Bien y tu, si tengo 🍊, cuantas Quieres?", ()=>{
        ReciboTexto(3,"1k⚖️, gracias!", ()=>{
        });
    })
})