import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup( {
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  });

  user: User = {
    username: '',
    password: ''
  }



  constructor(private _authService: AuthService, private _generalService: GeneralService, private router: Router) {

  }

  ngOnInit() {

  }

  /**
   * Method to login into the application
   */
  sendCredentials() {
    this.user.username = this.loginForm.value.username!;
    this.user.password = this.loginForm.value.password!;
      this._authService.sendCredentials(this.user).subscribe(
        (res) => {
          let tokenAux = res["result"][0]["access_token"];
          localStorage.setItem("token",tokenAux);
          this.router.navigateByUrl("/groups")
        },
        (error) => {
          let errorMessage = "No se ha podido iniciar sesión";
          let errorCode = error["error"]["errors"][0]["code"];
          if(errorCode === "E0012") {
            errorMessage = "Las credenciales ingresadas son inválidas."
          }
          this._generalService.setErrorMessage(errorMessage);


        }
      )

    }

}




