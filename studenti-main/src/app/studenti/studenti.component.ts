import { Component, OnInit } from '@angular/core';
import { Studente } from '../models/studente.model';
import { StudentiService } from './studenti.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {

  listaStudenti: Studente[] = [];

  selected:string= "Angular";

  constructor(private studServ: StudentiService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    this.listaStudenti = this.studServ.getStudenti();
  }


  redirect(){
    this.router.navigate(['addstudente'], {relativeTo: this.route});
  }

}
