import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupslistComponent } from './groupslist/groupslist.component';
import { GroupsService } from 'src/app/services/groups.service';
import { GroupdetailComponent } from './components/groupdetail/groupdetail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GroupslistComponent,
    GroupdetailComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule
  ],
  providers: [
    GroupsService
  ]
})
export class GroupsModule { }
