import { Injectable } from '@angular/core';
import { Studente } from '../models/studente.model';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  constructor() { }

  private studenti: Studente[] = [
    {
      id:0,
      nome: "Paola Bianchi",
      corso: "Angular",
      status: true
    },
    {
      id:1,
      nome: "Luca Verdi",
      corso: "Java",
      status: false
    },
    {
      id:2,
      nome: "Claudia Rossi",
      corso: "Javascript",
      status: true
    },
    {
      id:3,
      nome: "Antonio Nerri",
      corso: "Angular",
      status: false
    },
    {
      id:4,
      nome: "Luca Verdi",
      corso: "Java",
      status: true
    },
    {
      id:5,
      nome: "Alessandro Cavalli",
      corso: "Javascript",
      status: false
    },
  ]

  getStudenti(): Studente[] {
    return this.studenti;
  }

  addStudente(studente: Studente){
  this.studenti.push(studente)
  }



}
