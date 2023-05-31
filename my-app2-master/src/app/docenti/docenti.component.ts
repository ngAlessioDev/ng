import { Component, OnInit } from '@angular/core';
import { DocentiService } from './docenti.service';
import { CDocente } from '../models/c-docente';

@Component({
  selector: 'app-docenti',
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.scss']
})
export class DocentiComponent implements OnInit {
  constructor(private docServ: DocentiService) { }

  //contenitore
  listaDocenti: CDocente[] = []

  //richiamo la lista e riempio il contenitore
  ngOnInit(): void {
    this.listaDocenti = this.docServ.getDocenti()
  }



}
