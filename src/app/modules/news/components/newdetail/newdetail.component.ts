import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { New } from 'src/app/models/new';
import { GeneralService } from 'src/app/services/general.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-newdetail',
  templateUrl: './newdetail.component.html',
  styleUrls: ['./newdetail.component.scss']
})
export class NewdetailComponent {

  id: string = "";
  contentIsCharged: boolean = false;
  new: New = {'newId': '', 'date': '', 'imageUrl': '', 'largeDescription': '', 'shortDescription': '', 'title': ''};

  constructor(private route: ActivatedRoute, private _newsService: NewsService, private _generalService: GeneralService) {

  }

  ngOnInit() {
    this.setNewId();
    this.getNew();
  }

  /**
   * Function to set the id of the new
   */
  setNewId(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      //console.log(this.id);
    });

  }

  /**Function to get the new from the API */
  getNew(): void {
    this._newsService.getNew(this.id).subscribe(
      (res) => {
        //console.log("res:",res);
        let newAux = res['result'][0];
        this.setNew(newAux);

      },
      (error) => {
        //console.log("error:",error);
      }
    )
  }

  /**Method that sets the value of the new variable */
  setNew(newAux: New) {
    this.new.date = newAux['date'];
      this.new.imageUrl = newAux['imageUrl'];
      this.new.largeDescription = this._generalService.convertDescriptionIntoPlainText(newAux['largeDescription']);
      this.new.shortDescription = this._generalService.convertDescriptionIntoPlainText(newAux['shortDescription']);
      this.new.title = newAux['title'];
      console.log(this.new);
      this.contentIsCharged = true;
  }
}
