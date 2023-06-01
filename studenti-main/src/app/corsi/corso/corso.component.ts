import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-corso',
  templateUrl: './corso.component.html',
  styleUrls: ['./corso.component.css']
})
export class CorsoComponent implements OnInit {

  nomeCorso: string;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.nomeCorso = this.route.snapshot.params['nomeCorso'];

    this.route.params
    .subscribe(
      (params: Params)=>{
        this.nomeCorso = params['nomeCorso'];
      }
    )
  }



}
