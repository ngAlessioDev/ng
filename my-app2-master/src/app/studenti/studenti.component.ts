import { Component, OnInit } from '@angular/core';
import { StudentiService } from './studenti.service';
import { CStudente } from '../models/c-studente';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.scss']
})
export class StudentiComponent implements OnInit {

  ngOnInit(): void {
    this.listaStudenti = this.stuServ.getStudente()
  }

  listaStudenti: CStudente[] = []
  materia: string

  constructor(private stuServ: StudentiService) { }




}
