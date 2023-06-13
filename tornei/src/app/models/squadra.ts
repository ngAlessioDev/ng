import { Giocatore } from './giocatore';

export class Squadra {
  nome: string;
  punteggio: number; //una volta che giocano
  giocatori: Giocatore[];

  constructor(nome: string) {
    this.nome = nome;
    this.giocatori = [];
    this.punteggio = 0;
  }
}
