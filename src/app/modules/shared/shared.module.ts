import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './preloader/preloader.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { GroupsCardComponent } from './groups-card/groups-card.component';



@NgModule({
  declarations: [
    PreloaderComponent,
    NewsCardComponent,
    GroupsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ],
  exports: [
    PreloaderComponent,
    NewsCardComponent,
    MatCardModule,
    GroupsCardComponent

    
  ]
})
export class SharedModule { }
