import { Component, OnInit } from '@angular/core';
import { TorneiService } from '../tornei.service';
import { Torneo } from '../models/torneo';

@Component({
  selector: 'app-torneo-detail',
  templateUrl: './torneo-detail.component.html',
  styleUrls: ['./torneo-detail.component.css'],
})
export class TorneoDetailComponent implements OnInit {
  torneo?: Torneo;
  constructor(private torneoService: TorneiService) {
    this.torneo = this.torneoService.creaTorneoEsempio();
  }
  ngOnInit(): void {}
}
