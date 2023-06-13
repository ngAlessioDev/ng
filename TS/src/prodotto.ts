import { IVendibile } from "./carrello";

export class Prodotto implements IVendibile {
  nome: string;
  peso: number;
  prezzo: number;
  titolo: string;
  constructor(nome: string, peso: number) {
    this.nome = nome;
    this.peso = peso;
    this.titolo = nome;
    this.prezzo = 0;
  }
}

// export interface IProdotto{
//     nome:string;
//     peso:number;
// }
