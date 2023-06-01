import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from '../models/docente.model';

@Injectable({
  providedIn: 'root'
})
export class DocentiService {

  private listaDocenti: Docente[] = [
    {
     id: 0,
     nome: "Marco Gialli",
     corso: "Angular",
     tipo: "ordinario"
    },
    {
      id: 1,
      nome: "Laura Bianchi",
      corso: "Web",
      tipo: "associato"
    },
    {
      id: 2,
      nome: "Anna Verdi",
      corso: "Ing Software",
      tipo: "ordinario"
    }
  ]
  constructor(private router: Router ) { }

  getDocenti(): Docente[]{
    return this.listaDocenti;
  }

  getDocenteById(id: number): Docente{
      const docente = this.listaDocenti.find(
        (d) => {
          return d.id === id
        }
      )
      return docente;

  }

  getDocenteByName(nome: string): Docente{
    const docente = this.listaDocenti.find(
      (d) =>{
        return d.nome === nome
      }
    )
    return docente;
  }

  updateDocente(id: number, nuoveInfo:{nome: string, corso: string, tipo: string}){
    // questo metodo deve modificare il singolo docente nell'array
    const doc = this.listaDocenti.find(
      (d) => {
        return d.id === id;
      }
    );

    if(doc){
      doc.nome = nuoveInfo.nome;
      doc.tipo = nuoveInfo.tipo;
      doc.corso = nuoveInfo.corso;
    }else{
      //gestiremo quando l'id docente non esiste
    }

  }
}
