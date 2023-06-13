"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classe_1 = require("./classe");
let persone = [
    new classe_1.Persona("Azzurra", "verdi", 1999),
    new classe_1.Persona("Celeste", "Arcobaleno", 2002),
    new classe_1.Persona("Valerio", "Rossi", 1999),
    new classe_1.Persona("Pippo", "Barella", 2003),
    new classe_1.Persona("John", "Smith", 1997),
];
persone.push(new classe_1.Persona("Roberto", "Carlos", 1973));
for (let p of persone) {
    p.saluta();
}
for (let p of persone) {
    console.log(p.nomeCompleto.toUpperCase());
    console.log("e ho " + p.eta + " anni.");
}
