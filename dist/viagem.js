"use strict";
exports.__esModule = true;
var Viagem = /** @class */ (function () {
    function Viagem(tempoGasto, velocidadeMedia, rendimentoVeiculo) {
        this.tempoGasto = tempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.rendimentoVeiculo = rendimentoVeiculo;
    }
    Viagem.prototype.distancia = function () {
        return (this.velocidadeMedia * this.tempoGasto);
    };
    Viagem.prototype.consumo = function () {
        return (this.distancia() / this.rendimentoVeiculo);
    };
    return Viagem;
}());
exports.Viagem = Viagem;
