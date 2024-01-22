import { Component, Input } from '@angular/core';
import { New } from 'src/app/models/new';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {

  @Input() new: New = this._newsService.new;

  constructor(private _newsService: NewsService) {
    
  }

  

}
