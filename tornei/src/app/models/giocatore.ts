export class Giocatore {
  nome: string;
  cognome: string;
  numero: string;
  dataNascita: number;

  constructor(
    nome: string,
    cognome: string,
    numero: string,
    dataNascita: number
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.numero = numero;
    this.dataNascita = dataNascita;
  }
}
