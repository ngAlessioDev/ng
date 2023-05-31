import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DocentiService } from '../docenti.service';
import { CDocente } from 'src/app/models/c-docente';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent implements OnInit {

  docente: CDocente
  constructor(private route: ActivatedRoute, private router: Router, private DocServ: DocentiService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    this.docente = this.DocServ.getDocenteById(id)

    this.route.params.subscribe((params: Params) => { this.docente = this.DocServ.getDocenteById(+params['id']) })
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

}
