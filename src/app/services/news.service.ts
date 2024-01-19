import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralService } from './general.service';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient, private _generalService: GeneralService) { }

  /**
   * Function to request news from the API
   * 
   */
  getNews(): Observable<any> {
    let tokenAux = this._generalService.getToken();
    let url = this._generalService.getUrl();
    return this.http.get(`${url}//merchants/71/news`);
  }
}
