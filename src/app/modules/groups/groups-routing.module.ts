import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupslistComponent } from './groupslist/groupslist.component';
import { GroupdetailComponent } from './components/groupdetail/groupdetail.component';

const routes: Routes = [
  {
    path: 'list',
    component: GroupslistComponent
  }, {
    path: 'list/:id',
    component: GroupdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
