import { FocusMonitor } from '@angular/cdk/a11y';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Child } from 'src/app/models/child';
import { Movie } from 'src/app/models/movie';
import { Person } from 'src/app/models/person';
import { GeneralService } from 'src/app/services/general.service';

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
    amountOfMovies: new FormControl(0,Validators.min(19)),
    age: new FormControl(0,[Validators.required,Validators.min(19)])



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
  child: Child = {'name': '', 'lastname': '', 'age': -1, "movies": [], amountOfMovies: 0};
  person: Person = {'name': '', 'lastname' : '', 'children': []};
  movie: Movie = {'name': '', 'director': '', 'year' : 0, 'hasOscar' : false}
  amountOfChildrenRegistered: number = 1;
  hasSentPersonalInformation: boolean = false;
  hasSentChildInformation: boolean = false;
  hasFavoriteMovies: boolean = false;
  amountOfMovies: number = 1;
  amountOfMoviesRegistered: number = 1;
  movies: Movie[] = [];
  children: Child[] = [];
  people: Person[] = [];

  constructor(private _generalService: GeneralService) {}

  ngOnInit() {

  }
  sendPersonData() {

    console.log(this.addPersonForm.value);
    if(!this.addPersonForm.invalid) {
      this.person.name = this.addPersonForm.value.name!;
      this.person.lastname = this.addPersonForm.value.lastname!;
      this.people.push(this.person);
      this.amountOfChildren = this.addPersonForm.value.amountOfChildren!;
      if(this.amountOfChildren > 0) {
        this.amountOfChildrenRegistered = 1;
        this.hasSentPersonalInformation = true;
        this.hasOlderChildren = true;
      } else {
        let successMessage = "La persona se ha agregado satisfactoriamente.";
        this.addPersonForm.value.hasOlderChildren = false;
        this._generalService.setSuccessfulMessage(successMessage)
        localStorage.setItem("people",JSON.stringify(this.people));
        this.addPersonForm.reset();
        this.person = {'name': '', 'lastname' : '', 'children': []};

      }
    }
    else {
      if(this.person.name === '' || this.person.lastname === '') {
        let errorMessage = "Todos los campos son obligatorios";
        this._generalService.setErrorMessage(errorMessage);
      }
    }

  }

  sendChildData() {
    console.log(this.addChildForm.value);
    if(!this.addChildForm.invalid) {
      this.child.name = this.addChildForm.value.name!;
      this.child.lastname = this.addChildForm.value.lastname!;
      this.child.amountOfMovies = this.addChildForm.value.amountOfMovies!;
      this.amountOfMovies = this.addChildForm.value.amountOfMovies!
      this.child.age = this.addChildForm.value.age!
      this.amountOfChildrenRegistered += 1;
      this.children.push(this.child);

      //Validate if it's not  the last child
      if(this.amountOfChildrenRegistered <= this.amountOfChildren) {
        //console.log("entre 1");
        this.hasSentPersonalInformation = true;
        //this.hasOlderChildren = true;
        //this.children.push(this.child);
        this.addChildForm.reset();
        if(this.amountOfMovies > 0) {
          this.hasFavoriteMovies = true;
          this.amountOfMoviesRegistered = 1;
          this.hasSentChildInformation = true;
        }
        else if(this.amountOfMovies === 0) {
          //this.children.push(this.child);
          //this.addChildForm.reset(this.addChildForm.value);
          this.person.children?.push(this.child);
          //this.addPersonForm.value.hasOlderChildren = false;
          this.addChildForm.reset();
        }
      }
      
      


      //Validate if it's the last child
      else if((this.amountOfChildrenRegistered > this.amountOfChildren)) {
        //console.log("entre 2");
        
        this.hasOlderChildren = false;
        this.person.children = this.children;
        //this.children.push(this.child);
        if(this.amountOfMovies > 0) {
          this.hasFavoriteMovies = true;
          this.amountOfMoviesRegistered = 1;
          this.hasSentChildInformation = true;
        } else {
          this.hasSentPersonalInformation = false;
          //this.people.push(this.person);
          let successMessage = "La persona se ha agregado satisfactoriamente.";
          this.addChildForm.value.hasFavoriteMovies = false;
          this._generalService.setSuccessfulMessage(successMessage);
          this.hasOlderChildren = false;
          localStorage.setItem('people',JSON.stringify(this.people));
          this.addChildForm.reset();
          this.addPersonForm.reset();
          this.child = {'name': '', 'lastname': '', 'age': -1, "movies": [], amountOfMovies: 0};
          //this.people = [];
        }
        
  
      }
    }

  }

  sendMovieData() {
    if(!this.addMovieForm.invalid) {
      this.movie.name = this.addMovieForm.value.name!;
      this.movie.director = this.addMovieForm.value.director!;
      this.movie.year = this.addMovieForm.value.year!;
      this.movie.hasOscar = this.addMovieForm.value.hasOscar!;
      this.movies.push(this.movie);
      this.amountOfMoviesRegistered += 1;
      //Validate if it's that last movie
      if(this.amountOfMoviesRegistered > this.amountOfMovies) {
        this.child.movies = this.movies;
        //Validate if it's the last child
        if(this.amountOfChildrenRegistered > this.amountOfChildren) {
          this.hasSentChildInformation = true;
          this.hasSentPersonalInformation = false;
          let successMessage = "La persona se ha agregado satisfactoriamente.";
          this._generalService.setSuccessfulMessage(successMessage);
          this.addChildForm.value.hasFavoriteMovies = false;
          localStorage.setItem("people",JSON.stringify(this.people));
          
          this.addMovieForm.reset();
          this.addChildForm.reset();
          this.addPersonForm.reset();
          
        } else {
          this.hasSentChildInformation = false;
          this.hasOlderChildren = true;
          this.hasFavoriteMovies = false;
          this.addChildForm.value.hasFavoriteMovies = false;
          this.addMovieForm.reset();
          this.addChildForm.reset();
          

        }
      } else {
        this.addMovieForm.reset();
      }
    }
    else {
      console.log("holi");
    }
  } 

}
