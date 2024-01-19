import { Component } from '@angular/core';
import { New } from 'src/app/models/new';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})
export class NewslistComponent {

  news: New[] = [];
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
        let newsAux = res['result'];
        for(let i = 0; i < newsAux.length; i++) {
          let descriptionAux = this.convertDescriptionIntoPlainText(newsAux[i]['shortDescription'])

          newsAux[i]['shortDescription'] = descriptionAux;
        }
        this.news = newsAux;
      },
      (error) => {
        console.log("error:",error);
      }
    )
  }

  convertDescriptionIntoPlainText(htmlText: any) {
    let divAux = document.createElement("div");
    divAux.innerHTML = htmlText;
    return divAux.textContent || divAux.innerText;
  }
}
