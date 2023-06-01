import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Docente } from 'src/app/models/docente.model';
import { DocentiService } from '../docenti.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  docente: Docente;

  permettiMod: string;

  constructor(private route: ActivatedRoute, private router: Router, private docServ: DocentiService){

  }


  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    this.docente = this.docServ.getDocenteById(id);
    this.permettiMod = this.route.queryParams['permettiEdit'];


    this.route.params
    .subscribe(
      (params: Params) => {
        this.docente = this.docServ.getDocenteById(+params['id']);
      }
    )

    this.route.queryParams
    .subscribe(
      (qParams: Params) =>{
        this.permettiMod = qParams['permettiEdit'];
        console.log(this.permettiMod);
      }
    )
  }


  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
