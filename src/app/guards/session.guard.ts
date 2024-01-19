import { CanActivateFn, Router } from '@angular/router';

export const sessionGuard: CanActivateFn = (route, state) => {
  let tokenAux = localStorage.getItem("token");
  if(tokenAux) {
    return true;
  }
  return false;
  
};
