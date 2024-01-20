import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewslistComponent } from './components/newslist/newslist.component';
import { NewdetailComponent } from './components/newdetail/newdetail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NewslistComponent,
    NewdetailComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ],
  exports: [
    NewslistComponent,
    NewdetailComponent
  ]
})
export class NewsModule { }
