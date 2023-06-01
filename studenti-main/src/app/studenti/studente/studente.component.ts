import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.css']
})
export class StudenteComponent implements OnInit{

  id: number;
  nome: string;
  corso: string;
  status: string;


  constructor(private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {

    // tutto quello che recupero da un url è una string -> devo fare il cast del dato

    this.id = +this.route.snapshot.params['id'];
    this.nome = this.route.snapshot.params['nome'];
    this.corso = this.route.snapshot.params['corso'];
    this.status = this.route.snapshot.params['status'] ;

    console.log(this.route.snapshot.params['id']);

    // I Params sono un Observable => faccio il subscribe
    this.route.params
    .subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        this.nome = params['nome'];
        this.corso = params['corso'];
        this.status =  params['status'];
        console.log(+params['id']);
      }
    )

  }


  onGoToCorso(){
    this.router.navigate(['/corsi/'+this.corso])
  }
}
