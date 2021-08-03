const SumaOp = (await import("./suma")).Suma
const RestaOp = (await import("./resta")).Resta

function Operacion(numero1: number, numero2: number, nombreOperacion: string) {

    new Promise((resolve, reject) => {
        function Operar() {
            if (nombreOperacion == "Suma") {
                SumaOp
            }
            else if (nombreOperacion == "Resta") {
                RestaOp
            };;
        }

        resolve(Operar())
        reject("Ocurrio un error al Operar")
    });
}

function operaciones() {
    Operacion(10, 5, "Resta");
}
operaciones()