import { Component } from '@angular/core';
import { StudentiService } from '../studenti.service';
import { CStudente } from 'src/app/models/c-studente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: boolean = false
  nomeUtenteLOG: string
  ruoloUtenteLOG: string

  datiStudenti: CStudente[] = []

  constructor(private stuServ: StudentiService) {
    this.datiStudenti = this.stuServ.studenti
  }


  controllo() {
    const nomeUtente = this.nomeUtenteLOG;
    const ruoloUtente = this.ruoloUtenteLOG;

    const studenteTrovato = this.datiStudenti.find((studenteVER) => {
      return studenteVER.nome === nomeUtente && studenteVER.ruolo === ruoloUtente;
    });

    if (studenteTrovato) {
      this.login = true

    } else {
      this.login = false;
    }
  }


}


