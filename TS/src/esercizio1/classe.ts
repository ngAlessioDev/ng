export class Persona {
  public nome: string = ""; //variabiòli inizializzate a stringa nuova se no da errore
  public cognome: string = ""; // il default è public, private invece rende la proprietà od il metodo accessibile solo all'interno di questo file.
  public annoNascita;
  private _nomeCompleto: string = "";

  //posso scegliere di mettere un costruttore per inserire dei valori in fase di creaszione dell'oggetto
  constructor(
    n: string,
    c: string, // nome: string, indirizzo: string
    a: number
  ) {
    this.nome = n;
    this.cognome = c;
    this.annoNascita = a;
    console.log("oggetto persona creato");
  }
  public saluta(): void {
    console.log(
      `Piacere, sono ${this.nome} ${this.cognome}, e sono dell'anno ${this.annoNascita}`
    );
  }

  public get nomeCompleto() {
    return `${this.nome} ${this.cognome}`;
  }

  //cerco gettr % setter per vedere questo tipo di funzioni particolari
  public get eta() {
    let oggi = new Date();
    let annoDiOggi = oggi.getFullYear();
    return annoDiOggi - this.annoNascita;
  }
}

// e proprietà readonly (get) nome completo >"nome cognome"
