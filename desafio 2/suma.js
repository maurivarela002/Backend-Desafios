"use strict";
exports.__esModule = true;
exports.Suma = void 0;
var Suma = /** @class */ (function () {
    function Suma(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Suma.prototype.resultado = function () {
        return this.numero1 + this.numero2;
    };
    return Suma;
}());
exports.Suma = Suma;
