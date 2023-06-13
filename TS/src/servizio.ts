import { IVendibile } from "./carrello";

export class Servizio implements IVendibile {
  nome: string;
  durata: number;
  constructor(nome: string, durata: number) {
    this.nome = nome;
    this.durata = durata;
    this.titolo = nome;
    this.prezzo = 0;
  }
  prezzo: number;
  titolo: string;

  controllaMagazzino(): void {}
}
