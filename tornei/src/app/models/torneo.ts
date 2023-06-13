import { Partita } from './partita';
import { Squadra } from './squadra';

export class Torneo {
  nome: string;
  squadre: TorneoSquadra[];
  partite: Partita[];

  constructor(nome: string) {
    this.nome = nome;
    this.squadre = [];
    this.partite = [];
  }
}

export class TorneoSquadra {
  squadra: Squadra;
  punteggio: number;
  constructor(squadra: Squadra, punteggio: number) {
    this.squadra = squadra;
    this.punteggio = punteggio;
  }
}
