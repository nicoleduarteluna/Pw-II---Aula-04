"use strict";
exports.__esModule = true;
var Diaria = /** @class */ (function () {
    function Diaria(qtdHoras, valorHora, horaAdicional) {
        this.qtdHoras = qtdHoras;
        this.valorHora = valorHora;
        this.horaAdicional = horaAdicional;
    }
    Diaria.prototype.total = function () {
        return this.valorHora + this.horaAdicional * (this.qtdHoras - 1);
    };
    return Diaria;
}());
exports.Diaria = Diaria;
