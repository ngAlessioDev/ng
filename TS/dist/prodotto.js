"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prodotto = void 0;
class Prodotto {
    constructor(nome, peso) {
        this.nome = nome;
        this.peso = peso;
        this.titolo = nome;
        this.prezzo = 0;
    }
}
exports.Prodotto = Prodotto;
// export interface IProdotto{
//     nome:string;
//     peso:number;
// }
