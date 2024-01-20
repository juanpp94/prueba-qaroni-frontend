import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupslistComponent } from './groupslist/groupslist.component';
import { GroupsdetailComponent } from './groupsdetail/groupsdetail.component';


@NgModule({
  declarations: [
    GroupslistComponent,
    GroupsdetailComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
