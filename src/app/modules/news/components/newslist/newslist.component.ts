import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})
export class NewslistComponent {

  news: any = [];
  constructor(private _newsService: NewsService) {

  }

  ngOnInit() {
    this.setNews();
  }


  /**
   * Method to save the news received from the API
   */
  setNews(): any {
    this._newsService.getNews().subscribe(
      (res) => {
        console.log("res:",res);
      },
      (error) => {
        console.log("error:",error);
      }
    )
  }
}
