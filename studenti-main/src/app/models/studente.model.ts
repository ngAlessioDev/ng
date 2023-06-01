export class Studente{
  id: number;
  nome: string;
  corso: string;
  status: boolean;

  constructor(id: number, nome: string, corso: string, status: boolean){
    this.id = id,
    this.nome = nome,
    this.corso = corso,
    this.status = status
  }
}
