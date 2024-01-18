import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

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
}
