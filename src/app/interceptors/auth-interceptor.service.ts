import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralService } from '../services/general.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private _generalService: GeneralService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenAux = this._generalService.getToken();
    let request = req;
    if(tokenAux) {
      request = req.clone({
        setHeaders : {
          'authorization': `Bearer ${tokenAux}`,
          'content-type': 'application/json'
        }
      });
    }

    return next.handle(request);
  }
}
