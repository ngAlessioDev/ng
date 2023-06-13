"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrello = void 0;
class Carrello {
    constructor() {
        this.elementi = [];
    }
    add(elemento) {
        this.elementi.push(elemento);
    }
}
exports.Carrello = Carrello;
