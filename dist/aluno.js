"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    // o constructor não é obrigatório, porém no angular é muito utilizado 
    // "string:nome" fica oculto quando se usa o constructor
    function Aluno(nome) {
        this.nome = nome;
    }
    Aluno.prototype.exibir = function () {
        console.log("Nome:" + this.nome);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
