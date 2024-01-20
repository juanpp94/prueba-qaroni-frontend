import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupslistComponent } from './groupslist/groupslist.component';
import { GroupsdetailComponent } from './groupsdetail/groupsdetail.component';

const routes: Routes = [
  {
    path: 'list',
    component: GroupslistComponent
  }, {
    path: ':id',
    component: GroupsdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
