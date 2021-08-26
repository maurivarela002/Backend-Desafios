"use strict";
exports.__esModule = true;
exports.Resta = void 0;
var Resta = /** @class */ (function () {
    function Resta(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Resta.prototype.resultado = function () {
        return this.numero1 - this.numero2;
    };
    return Resta;
}());
exports.Resta = Resta;
