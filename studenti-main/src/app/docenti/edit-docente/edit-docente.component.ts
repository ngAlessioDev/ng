import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Docente } from 'src/app/models/docente.model';
import { DocentiService } from '../docenti.service';

@Component({
  selector: 'app-edit-docente',
  templateUrl: './edit-docente.component.html',
  styleUrls: ['./edit-docente.component.css']
})
export class EditDocenteComponent implements OnInit {

  docente: Docente;

  // nuove prop
  nomeDocente: string;
  corsoDocente: string;
  tipoDocente: string;

  //variabili flag
  changeSaved: boolean = false;
  permettiEdit: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private docServ: DocentiService){

  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.docente = this.docServ.getDocenteById(id);

    this.route.params
    .subscribe(
      (params: Params) =>{
        this.docente = this.docServ.getDocenteById(+params['id']);
      }
    )

    this.nomeDocente = this.docente.nome;
    this.corsoDocente = this.docente.corso;
    this.tipoDocente = this.docente.tipo;
  }

  onEditDocente(){

    this.docServ.updateDocente(this.docente.id, {nome:this.nomeDocente, corso: this.corsoDocente,tipo: this.tipoDocente} );

    //dopo la modifica voglio inseguire una nuova rotta, tornare alla scheda docente
    this.router.navigate(['../'], {relativeTo: this.route});

    //con questa rotta si torna alla listaDocenti
    // this.router.navigate(['../../'], {relativeTo: this.route});

    this.changeSaved = true;
  }
}
