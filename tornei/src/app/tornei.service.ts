import { Injectable } from '@angular/core';
import { Torneo, TorneoSquadra } from './models/torneo';
import { Giocatore } from './models/giocatore';
import { Squadra } from './models/squadra';
import { Partita } from './models/partita';

@Injectable({
  providedIn: 'root',
})
export class TorneiService {
  constructor() {}

  creaTorneoEsempio(): Torneo {
    //creazione torneo
    let t = new Torneo('Torneo Sociale 2023');

    //creazione squadra i Rossi con rispettivi giocatori
    let mario = new Giocatore('Mario', 'Rossi', '1', 0);
    let gianna = new Giocatore('Gianna', 'Verdi', '2', 0);
    let squadraRossiVerdi = new Squadra('I Rossi');
    squadraRossiVerdi.giocatori.push(mario);
    squadraRossiVerdi.giocatori.push(gianna);
    //creazione squadra i Dragoni con rispettivi giocatori
    let nicola = new Giocatore('Nicola', 'Bianchi', '101', 0);
    let chiara = new Giocatore('Chiara', 'Rossi', '100', 0);

    let squadraDragoni = new Squadra('I Dragoni');
    squadraDragoni.giocatori.push(nicola, chiara); //altra sintassi del push

    t.squadre.push(new TorneoSquadra(squadraRossiVerdi, 0));
    t.squadre.push(new TorneoSquadra(squadraDragoni, 0));

    let partitaAndata = new Partita(
      squadraRossiVerdi,
      squadraDragoni,
      1686559577
    );
    let partitaRitorno = new Partita(
      squadraDragoni,
      squadraRossiVerdi,
      1686646953
    );
    // aggiunta partite al torneo
    t.partite.push(partitaAndata, partitaRitorno);
    return t;
  }
}
