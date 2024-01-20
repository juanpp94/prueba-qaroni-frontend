import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralService } from './general.service';
import { New } from '../models/new';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news: New[] = [];
  new: New = {'newId': '', 'date': '', 'imageUrl': '', 'largeDescription': '', 'shortDescription': '', 'title': ''};
  constructor(private http: HttpClient, private _generalService: GeneralService) { }

  /**
   * Function to request all the news from the API
   *
   */
  getNews(): Observable<any> {
    //let tokenAux = this._generalService.getToken();
    let url = this._generalService.getUrl();
    return this.http.get(`${url}/merchants/71/news`);
  }

  /**
   * Function to request a specific new from the API
   */
  getNew(id: string): Observable<any> {
    //let tokenAux = this._generalService.getToken();
    let url = this._generalService.getUrl();
    return this.http.get(`${url}/merchants/71/news/${id}`);
  }

  
}
