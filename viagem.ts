class Viagem {
 
    constructor (public tempoGasto: number, public velocidadeMedia:number, public rendimentoVeiculo:number) {}

    distancia ():number {
        return (this.velocidadeMedia * this.rendimentoVeiculo);
    }

    consumo ():number {
        return (this.distancia() / this.rendimentoVeiculo)
    }

}