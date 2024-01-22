import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { AddPersonComponent } from './add-person/add-person.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPersonComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    ReactiveFormsModule
  ]
})
export class PeopleModule { }
