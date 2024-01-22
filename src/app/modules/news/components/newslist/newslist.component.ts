import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { New } from 'src/app/models/new';
import { GeneralService } from 'src/app/services/general.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})
export class NewslistComponent {

  news: New[] = [];
  contentIsCharged: boolean = false;
  constructor(private _newsService: NewsService, private _generalService: GeneralService, private router: Router ) {

  }

  ngOnInit() {
    //console.log("charged:", this.listIsCharged);
    let newsAux = this.getNews();
    this.setNews(newsAux);
    //console.log("charged dos:",this.listIsCharged);

  }


  /**
   * Method to save the news from the API
   */
  setNews(news: New[]): any {
    this.news = news;
    
  }

  /**
   * Function to get all the news from the API
   */
  getNews(): New[] {
    this._newsService.getNews().subscribe(
      (res) => {
        this.contentIsCharged = true;
        let newsAux = res['result'];
        for(let i = 0; i < newsAux.length; i++) {
          
          let shortDescriptionAux = this._generalService.convertDescriptionIntoPlainText(newsAux[i]['shortDescription']);
          let largeDescriptionAux = this._generalService.convertDescriptionIntoPlainText(newsAux[i]['longDescription'])
          this._newsService.new = {'newId': newsAux[i]['newId'], 'date': newsAux[i]['date'], 'imageUrl': newsAux[i]['imageUrl'], 'largeDescription': largeDescriptionAux, 'shortDescription': shortDescriptionAux, 'title': newsAux[i]['title']}
          this._newsService.news.push(this._newsService.new);
          
        }
        
        
      },
      (error) => {
        this.contentIsCharged = true;
        this._newsService.news = [];
        let errorMessage = "Ha ocurrido un error al momento de cargar la data. Asegúrese que tenga conexión a Internet."
        this._generalService.setErrorMessage(errorMessage);
        //this.router.navigateByUrl("groups/list");
        //this.contentIsCharged = false;
    
        
      }
    )
    return this._newsService.news;
  }

  



  
}
