import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = environment.api;
  constructor(private http: HttpClient) { }

/**
 * Function that sends the credentials of the user to login into the app
 */
  sendCredentials(user: User): Observable<any> {
    return this.http.post(`${this.url}/merchants/71/users/logins`, user);
  }
}
