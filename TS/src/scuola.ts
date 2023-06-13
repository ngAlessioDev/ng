//le classi,uno stampino con cui creare oggetti

//mettendo export davanti ad un a classe permetto che venga usata in altri file che la richiameranno con import(vedi esempio in app.ts)
export class Scuola {
  public nome: string = ""; //variabiòli inizializzate a stringa nuova se no da errore
  public indirizzo: string = ""; // il default è public, private invece rende la proprietà od il metodo accessibile solo all'interno di questo file.
  private _tipo: string = "elementare";
  //posso scegliere di mettere un costruttore per inserire dei valori in fase di creaszione dell'oggetto
  constructor(
    n: string,
    i: string // nome: string, indirizzo: string
  ) {
    this.nome = n;
    this.indirizzo = i;
    console.log("oggetto scuola creato");
  }
  public presentami() {
    console.log(
      `Piacere, sono la scuola ${this._tipo} ${this.nome}, mi trovi all'indirizzo ${this.indirizzo}`
    );
  }

  public get tipo() {
    return this._tipo;
  }

  public set tipo(value: string) {
    this.tipo = value.toUpperCase();
  }
}
//istanziare (da una classe istanzio tutti gli oggetti che voglio)
