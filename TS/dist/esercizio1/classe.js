"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    //posso scegliere di mettere un costruttore per inserire dei valori in fase di creaszione dell'oggetto
    constructor(n, c, // nome: string, indirizzo: string
    a) {
        this.nome = ""; //variabiòli inizializzate a stringa nuova se no da errore
        this.cognome = ""; // il default è public, private invece rende la proprietà od il metodo accessibile solo all'interno di questo file.
        this._nomeCompleto = "";
        this.nome = n;
        this.cognome = c;
        this.annoNascita = a;
        console.log("oggetto persona creato");
    }
    saluta() {
        console.log(`Piacere, sono ${this.nome} ${this.cognome}, e sono dell'anno ${this.annoNascita}`);
    }
    get nomeCompleto() {
        return `${this.nome} ${this.cognome}`;
    }
    //cerco gettr % setter per vedere questo tipo di funzioni particolari
    get eta() {
        let oggi = new Date();
        let annoDiOggi = oggi.getFullYear();
        return annoDiOggi - this.annoNascita;
    }
}
exports.Persona = Persona;
// e proprietà readonly (get) nome completo >"nome cognome"
