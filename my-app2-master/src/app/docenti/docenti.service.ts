import { Injectable } from '@angular/core';
import { CDocente } from '../models/c-docente';

@Injectable({
  providedIn: 'root'
})
export class DocentiService {

  private listaDocenti: CDocente[] = [
    {
      id: 0,
      nome: "Angelo Di Mauro",
      corso: "Angular",
      tipo: "ordinario"
    },

    {
      id: 1,
      nome: "Cristina",
      corso: "React",
      tipo: "associata"
    },

    {
      id: 2,
      nome: "Leonardo",
      corso: "VueJs",
      tipo: "super-ordinario"
    },
  ]


  constructor() { }
  //richiamo la lista
  getDocenti(): CDocente[] {
    return this.listaDocenti
  }

  //prendo l'id del docente
  getDocenteById(id: number): CDocente {
    const docente = this.listaDocenti.find((d) => { return d.id === id })
    return docente
  }

  //prendo il nome del docente
  // getDocenteByNome(nome: string): CDocente {
  //   const docente = this.listaDocenti.find((d) => { return d.nome === nome })
  //   return docente
  // }


  updateDocente(id: number, docenteinfo: { nome: string, corso: string, tipo: string }) {
    const docente = this.listaDocenti.find((d) => { return d.id === id })

    if (docente) {
      docente.nome = docenteinfo.nome;
      docente.corso = docenteinfo.corso;
      docente.tipo = docenteinfo.tipo;
    } else {

    }


  }


}
