import { Carrello } from "./carrello";
import { Prodotto } from "./prodotto";
import { Scuola } from "./scuola";
import { Servizio } from "./servizio";

let pippo: string = "pippo";
let pluto = "pluto"; //type inference (capisci tu typesecript il tipo di variabile dal valore che gli ho dato)
let numero; //any (prende any automatico perchè alla variabile non è stato dato ne valore ne tipo)
let numero1: number;
let frutta: string[] = ["mela", "pera"];
let punto: { marca: string; modello: string; peso: number } = {
  marca: "fiat",
  modello: "punto",
  peso: 1000,
};
let audi: { marca: string; modello: string; peso?: number } = {
  //mettendo il punto intrerrogativo abbiamo reso la variabile peso nullable(può anche non esserci, accetta undefined)
  marca: "audi",
  modello: "a1",
  peso: 1000,
};

//enum
enum Stagioni {
  Primavera,
  Estate,
  Autunno,
  Inverno,
}

let stagioneNascita: Stagioni = Stagioni.Autunno;

if (stagioneNascita == Stagioni.Autunno) {
  console.log(true);
}

// switch(stagioneNascita){
//     case Stagioni.Autunno:
// break;
//     case Stagioni.Estate:
//         break;
//         case Stagioni.Inverno:
//         break;
//         case Stagioni.Primavera:
//         break;
// }
enum Operazioni { //esiste un tipo di dato che può essere solo 1 dei valori qui dichiarati (senza apici come lo si vede qui)
  somma,
  differenza,
  moltiplicazione,
  divisione,
}

function operazione(n1: number, n2: number, operazione: Operazioni): number {
  //:number si mette per far capire il tipo di dato restituito dalla funzione
  let risultato: number;
  switch (operazione) {
    case Operazioni.somma:
      risultato = n1 + n2;
      break;
    case Operazioni.differenza:
      risultato = n1 - n2;
      break;
    case Operazioni.moltiplicazione:
      risultato = n1 * n2;
      break;
    case Operazioni.divisione:
      risultato = n1 / n2;
      break;
  }
  return risultato;
}
let somma = operazione(4, 9, Operazioni.somma);
console.log("ciao da", pippo);

//union (può essere un tipo od un altro)
let codice: string | number;
let indirizzo: string | null;
codice = 1;
console.log(codice, typeof codice);
codice = "ABC";
// codice = true; //Darebbe errore perchè non è ne string ne number
console.log(codice, typeof codice); // il tipo che ha in quel momento la variabile

if (typeof codice == "number") {
  //"number" scritto come una stringa ma in realtà è uno dei tipi ben definiti di javascript ed infatti quelle suggerisce appena scrivo gli apici(number,string,boolean,ecc..)
  console.log(codice + 10);
} else {
  console.log(codice.toUpperCase());
}

function saluta(): void {
  //mettere void qui specifica che la funzione non avrà un return, se scrivo che ritorna qualcosa mi darà errore
  console.log("ciao");
}
function saluta2(): string {
  return "Ciao Ciao";
}
function haSalutato(): boolean {
  return false;
}
// function saluta3():number{
//     return 'buongiorno'; //darebbe errore perchè nella funzione è specificato che deve restituire un number
// }

//possibile creare in questo file l'oggetto scuolamuratori tramite la classe Scuola del file scuola.ts
// grazie all'import in alto in questa pagina e l'export in scuola.ts
let scuolaMuratori = new Scuola("Muratori", "Via le dita dal naso");
let scuolaDaVinci = new Scuola("Da Vinci", "Via le dita dal naso");

scuolaMuratori.nome = "Muratori";
scuolaDaVinci.nome = "Da Vinci";

console.log(scuolaMuratori.nome);
console.log(scuolaMuratori.indirizzo);
console.log(scuolaDaVinci.nome);
console.log(scuolaDaVinci.indirizzo);
console.log(scuolaMuratori.tipo);

scuolaMuratori.presentami();
scuolaDaVinci.presentami();

let scuole: Scuola[] = [
  scuolaMuratori,
  scuolaDaVinci,
  new Scuola("Mazzini", "Via della Pace"), //creata al volo nell'array tramite costruttore
];
scuole.push(new Scuola("Leopardi", "Lorem ipsum")); //aggiunta con un push usando il costruttore
for (let s of scuole) {
  s.presentami();
}
console.log("================================");

let abbonamentoNetflix = new Servizio("Abbonamento Netflix", 1);
let bicicletta = new Prodotto("BMX", 300);

let carrello = new Carrello();
carrello.add({ titolo: "Pane", prezzo: 2 });
carrello.add({ titolo: "Abbonamento", prezzo: 27 });
carrello.add({ titolo: "Lavatrice", prezzo: 200 });
carrello.add(abbonamentoNetflix);
carrello.add(bicicletta);

console.log("Elementi a carrello");
for (let e of carrello.elementi) {
  console.log(`Elemento: ${e.titolo} prezzo: ${e.prezzo}`);
}
