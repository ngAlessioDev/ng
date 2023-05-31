import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { CDocente } from 'src/app/models/c-docente';
import { DocentiService } from '../docenti.service';

@Component({
  selector: 'app-edit-docente',
  templateUrl: './edit-docente.component.html',
  styleUrls: ['./edit-docente.component.scss']
})
export class EditDocenteComponent implements OnInit {
  docente: CDocente


  nomeDocente: string;
  corsoDocente: string;
  tipoDocente: string;


  changeSaved: boolean = false;
  permettiEdit: boolean = true;


  constructor(private route: ActivatedRoute, private router: Router, private docServ: DocentiService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    this.docente = this.docServ.getDocenteById(id)

    this.route.params.subscribe((params: Params) => { this.docente = this.docServ.getDocenteById(+params['id']) })


    this.nomeDocente = this.docente.nome
    this.corsoDocente = this.docente.corso
    this.tipoDocente = this.docente.tipo
  }

  onEditDocente() {
    this.docServ.updateDocente(this.docente.id, { nome: this.nomeDocente, corso: this.corsoDocente, tipo: this.tipoDocente })

    //cambio la rotta andando un passo indietro
    this.router.navigate(['../', { relativeTo: this.route }])

    this.changeSaved = true

  }
}
