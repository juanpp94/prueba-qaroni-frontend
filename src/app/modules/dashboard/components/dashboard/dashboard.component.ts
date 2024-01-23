import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  menu: any = [{'name':'Grupos','url': 'groups/list'},{'name':'Noticias', 'url':'news/list'},{'name':'Personas', 'url':'people/add'}];

  /**Method that closes the user session */
  closeSession(): void {
    localStorage.removeItem("token");
  }
}
