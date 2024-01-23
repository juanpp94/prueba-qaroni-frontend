import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
   {
    path: 'news',
    loadChildren: () => import('../../modules/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'people',
    loadChildren: () => import('../../modules/people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('../../modules/groups/groups.module').then(m => m.GroupsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
