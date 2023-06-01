import { Component } from '@angular/core';
import { StudentiService } from '../studenti.service';
import { Studente } from 'src/app/models/studente.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-studente',
  templateUrl: './add-studente.component.html',
  styleUrls: ['./add-studente.component.css']
})
export class AddStudenteComponent {


lisatStudenti: Studente[]=[]

constructor( private studServ: StudentiService, private route: ActivatedRoute, private router: Router){

}


idStudente: number = 7;
nomeStudente: string = "Andrea Gatti";
corsoStudente: string = "Angular"
statusStudente: boolean = true;

onAddStudente(){
  let newStudente = new Studente(this.idStudente,this.nomeStudente, this.corsoStudente, this.statusStudente)
  //console.log(newStudente);
  this.studServ.addStudente(newStudente)
}



}
