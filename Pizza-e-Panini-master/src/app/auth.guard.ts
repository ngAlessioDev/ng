import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LogService } from './login/log.service';

export const authGuard: CanActivateFn = (route, state) => {



  const logServ = inject(LogService)
  const router = inject(Router)

  console.log('controllo la rotta' + route['url']);


  if (logServ.utenteValido) {
    return true

  } else {
    return router.navigate(['/'])
  }

};
