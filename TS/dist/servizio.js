"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servizio = void 0;
class Servizio {
    constructor(nome, durata) {
        this.nome = nome;
        this.durata = durata;
        this.titolo = nome;
        this.prezzo = 0;
    }
    controllaMagazzino() { }
}
exports.Servizio = Servizio;
