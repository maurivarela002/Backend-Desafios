const {
    Observable,
    fromEvent,
    pipe
} = rxjs;
const {
    filter,
    map
} = rxjs.operators;
const userInput = document.getElementById("userInput");
const input = fromEvent(userInput, 'input');
let texto = [];
let espejo = document.getElementById("textoEspejo");
const observer = {
    next: x => {
        console.log(x);
        if (x === "error") {
            observer.error("Tipeaste error")
            return;
        } else if (x === "complete") {
            observer.complete("Tipeaste complete")
            return;
        }
        texto.unshift(x[x.length - 1]);
        const muestroTexto = (texto.join(''));
        console.log(muestroTexto);
        document.getElementById("textoEspejo").innerHTML = muestroTexto;
    },
    error: (e) => {
        console.log(e);
    },
    complete: (e) => {
        console.log(e)
    }
}
const inputPipe = input.pipe(
    filter(x => x.target.value !== "error"),
    map(x => x.target.value.toLowerCase())
);
const inputsubscribe = inputPipe.subscribe(observer);
setTimeout(() => {
    console.log("terminaron los 30 segundos")
    inputsubscribe.unsubscribe();
}, 30000)