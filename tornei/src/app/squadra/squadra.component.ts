import { Component, Input } from '@angular/core';
import { Squadra } from '../models/squadra';

@Component({
  selector: 'app-squadra',
  templateUrl: './squadra.component.html',
  styleUrls: ['./squadra.component.css'],
})
export class SquadraComponent {
  @Input()
  squadra?: Squadra;
}
