import { Component } from '@angular/core';
import { CStudente } from 'src/app/models/c-studente';
import { StudentiService } from '../studenti.service';

@Component({
  selector: 'app-crea-studente',
  templateUrl: './crea-studente.component.html',
  styleUrls: ['./crea-studente.component.scss']
})
export class CreaStudenteComponent {

  STID: number
  STNOME: string
  STCORSO: string
  STSTATUS: boolean = true
  STRUOLO: string

  listaStudenti: CStudente[] = []

  constructor(private stuServ: StudentiService) {
    this.listaStudenti = this.stuServ.studenti
  }

  onNewStudent() {
    const newStudent = new CStudente(this.STID, this.STNOME, this.STCORSO, this.STSTATUS, this.STRUOLO);
    this.stuServ.addStudent(newStudent)
    this.resetForm()
  }

  resetForm() {
    this.STID = null
    this.STNOME = ""
    this.STCORSO = ""
  }
}



