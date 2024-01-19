import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewslistComponent } from './components/newslist/newslist.component';
import { NewdetailComponent } from './components/newdetail/newdetail.component';


@NgModule({
  declarations: [
    NewslistComponent,
    NewdetailComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  exports: [
    NewslistComponent,
    NewdetailComponent
  ]
})
export class NewsModule { }
