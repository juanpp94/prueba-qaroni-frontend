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

  emptyError = false;

  user: User = {
    username: '',
    password: ''
  }

  showLoader: boolean = false;



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
    if(this.user.username === '' || this.user.password === '') {
      //console.log("holi");
      let errorMessage = "Todos los campos del formulario son obligatorios."
      this._generalService.setErrorMessage(errorMessage);
    }
    else {

      
        this._authService.sendCredentials(this.user).subscribe(
          (res) => {
            this.showLoader = false;
            let tokenAux = res["result"][0]["access_token"];
            localStorage.setItem("token",tokenAux);
            this.router.navigateByUrl("/groups")
          },
          (error) => {
            this.showLoader = false;
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
    

}




