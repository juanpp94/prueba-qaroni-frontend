import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-qaroni-frontend';

  constructor(private _generalService: GeneralService, private route: Router) {

  }

  ngOnInit() {
    let token = this._generalService.getToken();
    if(!token) {
      this.route.navigateByUrl('auth/login');
    }
  }
}
