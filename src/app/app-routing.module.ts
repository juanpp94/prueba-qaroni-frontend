import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { sessionGuard } from './guards/session.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthModule)
  }, {
    path: 'groups',
    loadChildren: () => import('./modules/groups/groups.module').then( m => m.GroupsModule),
    canActivate: [sessionGuard]
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
