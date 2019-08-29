export class Aluno {
   
    // o constructor não é obrigatório, porém no angular é muito utilizado 
    // "string:nome" fica oculto quando se usa o constructor
    constructor (public nome:string) {}

    exibir () {
        console.log("Nome:" + this.nome)

    }
}