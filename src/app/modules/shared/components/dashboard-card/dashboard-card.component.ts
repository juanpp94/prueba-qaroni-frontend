import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {
 @Input() menuItem = {'name': '', 'url': ''};


 constructor(private route: Router) {

 }
 goTo(url: string) {
  console.log(url);
  this.route.navigateByUrl(`/${url}`)
 }
}
