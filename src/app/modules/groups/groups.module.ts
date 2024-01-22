import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupslistComponent } from './groupslist/groupslist.component';
import { GroupsdetailComponent } from './groupsdetail/groupsdetail.component';
import { GroupsService } from 'src/app/services/groups.service';
import { GroupdetailComponent } from './components/groupdetail/groupdetail.component';


@NgModule({
  declarations: [
    GroupslistComponent,
    GroupsdetailComponent,
    GroupdetailComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ],
  providers: [
    GroupsService
  ]
})
export class GroupsModule { }
