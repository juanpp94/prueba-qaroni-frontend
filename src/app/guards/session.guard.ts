import { CanActivateFn, Router } from '@angular/router';
import { GeneralService } from '../services/general.service';

export const sessionGuard: CanActivateFn = (route, state) => {
  let _generalService: GeneralService =  new GeneralService();

  let tokenAux = _generalService.getToken();
  if(tokenAux) {
    return true;
  }
  return false;
  
};
