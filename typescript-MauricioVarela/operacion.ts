function Operacion(numero1: number, numero2: number, nombreOperacion: string) {
    return new Promise(async (resolve, reject) => {
        if (nombreOperacion == "Suma") {
            const SumaOp = (await import("./suma")).Suma
            const constructorSuma = new SumaOp(numero1, numero2)
            const resultadoS = constructorSuma.resultado();
            resolve(resultadoS)
        }
        else if (nombreOperacion == "Resta") {
            const RestaOp = (await import("./resta")).Resta
            const constructorResta = new RestaOp(numero1, numero2)
            const resultadoR = constructorResta.resultado();
            resolve(`"${nombreOperacion}":` + resultadoR)
        };

        reject(`El nombre de la operacion: "${nombreOperacion}" no es un tipo de Operacion`)
    });
}

function operaciones() {
    Operacion(10, 5, "Resta").then(resolve => {
        console.log(resolve);
    }).catch(reject => {
        console.log(reject)
    })

    Operacion(10, 5, "Pepe").then(resolve => {
        console.log(resolve);
    }).catch(reject => {
        console.log(reject)
    })
}
operaciones()