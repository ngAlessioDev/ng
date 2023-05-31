import { Component, OnInit } from '@angular/core';
import { StudentiService } from '../studenti.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.scss']
})
export class StudenteComponent implements OnInit {

  id?: number
  nome?: string
  corso?: string
  status?: string

  ngOnInit(): void {

    // + = Number
    // dichiaro cosa sono
    this.id = +this.route.snapshot.params['id']
    this.nome = this.route.snapshot.params['nome']
    this.corso = this.route.snapshot.params['corso']
    this.status = this.route.snapshot.params['status']


    //li sotto-scrivo
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.nome = params['nome']
      this.corso = params['corso']
      this.status = params['status']
    })
  }


  // leggere                                               navigare
  constructor(private route: ActivatedRoute, private router: Router) { }


}
