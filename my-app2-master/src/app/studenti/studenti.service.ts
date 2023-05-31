import { Injectable } from '@angular/core';
import { CStudente } from '../models/c-studente';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  studenti: CStudente[] = [
    {
      id: 0,
      nome: "angelo di mauro",
      corso: "Angular",
      status: true,
      ruolo: "studente"
    },

    {
      id: 1,
      nome: "Leonardo",
      corso: "Angular",
      status: false,
      ruolo: "professore"
    },

    {
      id: 2,
      nome: "Flavio",
      corso: "VueJs",
      status: true,
      ruolo: "studente"
    },

    {
      id: 3,
      nome: "Raul",
      corso: "VueJs",
      status: false,
      ruolo: "studente"
    },

    {
      id: 4,
      nome: "Genoveffa",
      corso: "React",
      status: true,
      ruolo: "professore"
    },

    {
      id: 5,
      nome: "Pasquale",
      corso: "React",
      status: false,
      ruolo: "studente"
    },
  ]


  getStudente(): CStudente[] {
    return this.studenti;
  }

  addStudent(studente: CStudente) {
    this.studenti.push(studente)
  }

  constructor() { }


}


