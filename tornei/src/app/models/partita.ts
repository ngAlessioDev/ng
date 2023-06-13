import { Squadra } from './squadra';

export class Partita {
  squadraCasa: Squadra;
  squadraTrasferta: Squadra;
  data: number;
  // risultato: Risultati;
  punteggioCasa: number;
  punteggioTrasferta: number;

  constructor(squadraCasa: Squadra, squadraTrasferta: Squadra, data: number) {
    this.squadraCasa = squadraCasa;
    this.squadraTrasferta = squadraTrasferta;
    this.data = data;
    // this.risultato = Risultati.Pareggio;
    this.punteggioCasa = 0;
    this.punteggioTrasferta = 0;
  }
}

// export enum Risultati {
//   Casa,
//   Trasferta,
//   Pareggio,
// }
