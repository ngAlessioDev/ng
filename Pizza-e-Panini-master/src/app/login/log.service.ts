import { Injectable } from '@angular/core';
import { UtenteService } from '../utente.service';
import { Utente } from '../utente';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  utente: Utente[] = []

  constructor(private uteServ: UtenteService) {
    this.utente = this.uteServ.listaUtenti
  }

  utenteValido: boolean;

  // nome = this.utente[0].nome
  // role = this.utente[0].role

  login(nome: string, role: string) {

    console.log(nome + role);
    let utenteCheck = this.utente.find((utenteVER) => {
      return (utenteVER.nome == nome && utenteVER.role == role)
    })

    if (utenteCheck) {
      console.log(utenteCheck);
      this.utenteValido = true
      return true

    } else {
      console.log('non esiste l\'utente');
      this.utenteValido = false
      return false
    }
  }


}


