export class CStudente {
  id: number
  nome: string
  corso: string
  status: boolean
  ruolo: string
  constructor(id: number, nome: string, corso: string, status: boolean, ruolo: string) {
    this.id = id
    this.nome = nome
    this.corso = corso
    this.status = status
    this.ruolo = ruolo
  }
}
