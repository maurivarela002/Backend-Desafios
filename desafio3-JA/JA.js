function ReciboTexto (texto, cb){
    for (let palabra = "Hola"; palabra = texto.includes(palabra);) {
        console.log(`La palabra "${palabra}" ${texto.includes(palabra) ? 'esta' : 'no esta'} en el texto`);
    }
}
ReciboTexto("Hola como estas")