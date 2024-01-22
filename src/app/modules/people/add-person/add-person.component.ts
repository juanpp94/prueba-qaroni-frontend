import { FocusMonitor } from '@angular/cdk/a11y';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Child } from 'src/app/models/child';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent {

  addPersonForm = new FormGroup( {
    name: new FormControl('', Validators.required),
    lastname: new FormControl('',Validators.required),
    hasOlderChildren: new FormControl(false),
    amountOfChildren: new FormControl(0),

  });
  addChildForm = new FormGroup( {
    name: new FormControl('', Validators.required),
    lastname: new FormControl('',Validators.required),
    hasFavoriteMovies: new FormControl(false),
    amountOfMovies: new FormControl(0),
    age: new FormControl(0)



  });

  addMovieForm = new FormGroup( {
    name: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    year: new FormControl(1999, Validators.required),
    hasOscar: new FormControl(false, Validators.required),
  })

  emptyError: boolean = false;
  hasOlderChildren: boolean = false;
  amountOfChildren: number = 1;
  child: Child = {'name': '', 'lastname': '', 'age': -1, "movies": [], amountOfMovies: -1};
  person: Person = {'name': '', 'lastname' : '', 'children': []};
  amountOfChildrenRegistered: number = 1;
  hasSentPersonalInformation: boolean = false;
  hasSentChildInformation: boolean = false;
  hasFavoriteMovies: boolean = false;
  amountOfMovies: number = 1;
  amountOfMoviesRegistered: number = 1;
  children: Child[] = [];

  sendPersonData() {

    console.log(this.addPersonForm.value);
    if(!this.addPersonForm.invalid) {
      this.person.name = this.addPersonForm.value.name!;
      this.person.lastname = this.addPersonForm.value.lastname!;

      this.amountOfChildren = this.addPersonForm.value.amountOfChildren!;
      if(this.amountOfChildren > 0) {
        this.amountOfChildrenRegistered = 1;
        this.hasSentPersonalInformation = true;
        this.hasOlderChildren = true;
      }
    }

  }

  sendChildData() {
    console.log(this.addChildForm.value);
    if(!this.addChildForm.invalid) {
      this.child.name = this.addChildForm.value.name!;
      this.child.lastname = this.addChildForm.value.lastname!;
      this.amountOfMovies = this.addChildForm.value.amountOfMovies!
      this.child.age = this.addChildForm.value.age!
      this.amountOfChildrenRegistered += 1;
      if(this.amountOfMovies > 0) {
        this.hasFavoriteMovies = true;
        this.amountOfMoviesRegistered = 1;
        this.hasSentChildInformation = true;
      }


      if(this.amountOfChildren > 0 && this.amountOfChildrenRegistered < this.amountOfChildren) {
        //console.log("entre 1");
        this.hasSentPersonalInformation = true;
        this.hasOlderChildren = true;
        this.children.push(this.child);
        this.addChildForm.reset(this.addChildForm.value);
      }
      else if(this.amountOfChildren > 0 && this.amountOfChildrenRegistered > this.amountOfChildren) {
        //console.log("entre 2");
        this.hasSentPersonalInformation = false;
        this.hasOlderChildren = true;
        this.children.push(this.child);
        this.addChildForm.reset(this.addChildForm.value);
        this.person.children = this.children;
      }
    }

  }

  sendMovieData() {
    console.log("holi");
  }

}
