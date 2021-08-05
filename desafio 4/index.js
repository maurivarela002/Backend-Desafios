function mostrarTexto() {
    const valorInicial = document.querySelector(".input").value;

    $("input")
        .keyup(function () {
            const value = $(this).val();
            $("p").text(value);
        })
        .keyup();
    console.log(valorInicial);

    function limpiaCampo() {
        const valorInicial = document.querySelector(".input").value = "";
    }

    if (valorInicial == "error") {
        const alerta = document.getElementById('alerta');
        alerta.innerHTML = '<div class="alert alert-danger alerta" role="alert">El proceso finalizo, debido a que escribistes error</div > ';
        console.log("Proceso Fallido")
        limpiaCampo()
    }


    function completado() {
        const valorInicial = document.querySelector(".input").value = "complete";
    }

    if (valorInicial == "complete") {
        const alerta = document.getElementById('alerta');
        alerta.innerHTML = '<div class="alert alert-primary alerta" role="alert">El proceso finalizo correctamente, debido a que escribistes complete</div > ';
        console.log("Proceso Ok")
        completado()
    }
}
mostrarTexto()

