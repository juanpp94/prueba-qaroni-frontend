import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private readonly url = environment.api;
  constructor() { }


  /**
   * Method to set the error message
   * @param message
   */
  setErrorMessage(message: string): void {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  }


  setSuccessfulMessage(message: string): void {
    Swal.fire({
      icon: "success",
      title: "Persona agregada",
      text: message,
    });
  }


  
  /**
   * Function that returns the token from local storage to authorize requests
   */
  getToken() {
    let tokenAux = localStorage.getItem("token");
    return tokenAux;
  }

  /**
   * Function that returns the API's url
   * 
   */
  getUrl() {
    return this.url;
  }

  /** Function that converts html into plain text */
  convertDescriptionIntoPlainText(htmlText: any): string {
    let divAux = document.createElement("div");
    divAux.innerHTML = htmlText;
    return divAux.textContent || divAux.innerText;
  }
}
