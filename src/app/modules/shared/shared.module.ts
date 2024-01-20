import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './preloader/preloader.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    PreloaderComponent,
    NewsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ],
  exports: [
    PreloaderComponent,
    NewsCardComponent,
    MatCardModule

    
  ]
})
export class SharedModule { }
