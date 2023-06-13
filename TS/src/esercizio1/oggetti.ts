import { Persona } from "./classe";

let persone: Persona[] = [
  new Persona("Azzurra", "verdi", 1999),
  new Persona("Celeste", "Arcobaleno", 2002),
  new Persona("Valerio", "Rossi", 1999),
  new Persona("Pippo", "Barella", 2003),
  new Persona("John", "Smith", 1997),
];

persone.push(new Persona("Roberto", "Carlos", 1973));

for (let p of persone) {
  p.saluta();
}

for (let p of persone) {
  console.log(p.nomeCompleto.toUpperCase());
  console.log("e ho " + p.eta + " anni.");
}
