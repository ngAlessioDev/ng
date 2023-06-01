import { Component, OnInit } from '@angular/core';
import { Docente } from '../models/docente.model';
import { DocentiService } from './docenti.service';

@Component({
  selector: 'app-docenti',
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.css']
})
export class DocentiComponent implements OnInit {

  listaDocenti: Docente[] = []

  constructor(private docServ: DocentiService){

  }

  ngOnInit(): void {
    this.listaDocenti = this.docServ.getDocenti();
  }

}
