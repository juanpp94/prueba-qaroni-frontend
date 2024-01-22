import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { Observable } from 'rxjs';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  url: string = "";
  groups: Group[] = [];
  group: Group = {'groupId': '', 'name': '', 'description': '', imageUrl: '', 'category': {'name': '',  'description': ''}}
  constructor(private http: HttpClient,private _generalService: GeneralService) { }

  /**
   * Function tor request the groups from the API
   */
  getGroups(): Observable<any> {
    this.url = this._generalService.getUrl();
    return this.http.get(`${this.url}/merchants/71/groups`);
  }

  getGroup(id:string): Observable<any> {
    this.url = this._generalService.getUrl();
    return this.http.get(`${this.url}/merchants/71/groups/${id}`);
  }
}
