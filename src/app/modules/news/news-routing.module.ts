import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewslistComponent } from './components/newslist/newslist.component';
import { NewdetailComponent } from './components/newdetail/newdetail.component';

const routes: Routes = [
  {
    path: 'list',
    component: NewslistComponent
  },
  {
    path: ':id',
    component: NewdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
