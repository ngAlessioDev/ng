"use strict";
//le classi,uno stampino con cui creare oggetti
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scuola = void 0;
//mettendo export davanti ad un a classe permetto che venga usata in altri file che la richiameranno con import(vedi esempio in app.ts)
class Scuola {
    //posso scegliere di mettere un costruttore per inserire dei valori in fase di creaszione dell'oggetto
    constructor(n, i // nome: string, indirizzo: string
    ) {
        this.nome = ""; //variabiòli inizializzate a stringa nuova se no da errore
        this.indirizzo = ""; // il default è public, private invece rende la proprietà od il metodo accessibile solo all'interno di questo file.
        this._tipo = "elementare";
        this.nome = n;
        this.indirizzo = i;
        console.log("oggetto scuola creato");
    }
    presentami() {
        console.log(`Piacere, sono la scuola ${this._tipo} ${this.nome}, mi trovi all'indirizzo ${this.indirizzo}`);
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(value) {
        this.tipo = value.toUpperCase();
    }
}
exports.Scuola = Scuola;
//istanziare (da una classe istanzio tutti gli oggetti che voglio)
