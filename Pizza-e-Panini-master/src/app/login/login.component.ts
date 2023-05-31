import { Component } from '@angular/core';
import { Utente } from '../utente';
import { UtenteService } from '../utente.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  utente: Utente[] = []

  constructor(private logServ: LogService, private uteServ: UtenteService) {
    this.utente = this.uteServ.listaUtenti
  }

  logUtente: string
  logRole: string


  verficoLogin(logUtente: string, logRole: string) {
    const isLogged = this.logServ.login(logUtente, logRole)
    if (isLogged) {
      return true
    } else {
      return false
    }
  }

}


