import { Component, Input } from '@angular/core';
import { Giocatore } from '../models/giocatore';

@Component({
  selector: 'app-giocatore',
  templateUrl: './giocatore.component.html',
  styleUrls: ['./giocatore.component.css'],
})
export class GiocatoreComponent {
  @Input()
  giocatore?: Giocatore;
}
