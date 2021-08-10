function ReciboTexto(texto, cb, tiempoDemora = 1000) {
    const arrayPalabras = texto.split();
    console.log(arrayPalabras.length)
    let i = 0;
   const intervalo = setInterval(() => {
       if ( i === arrayPalabras.length - 1){
           clearInterval(intervalo);
           cb(arrayPalabras.length);
           return;
       }
       i ++;
   }, tiempoDemora);
}
ReciboTexto("Hola como estas, tienes mandarinas 🍊🍊🍊🍊?", (arrayPalabras)=>{
    let cantidadDePalabras = arrayPalabras;
    ReciboTexto("Bien y tu, si tengo 🍊, cuantas Quieres?", (arrayPalabras)=>{
        cantidadDePalabras = cantidadDePalabras + arrayPalabras
        ReciboTexto("1k⚖️, gracias!", (arrayPalabras)=>{
            cantidadDePalabras = cantidadDePalabras + arrayPalabras
            console.log("cantidad de palabras" + " " + cantidadDePalabras)
        });

    }, 1000)
}, 500)