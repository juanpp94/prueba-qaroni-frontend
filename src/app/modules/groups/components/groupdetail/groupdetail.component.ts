import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/models/group';
import { GeneralService } from 'src/app/services/general.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groupdetail',
  templateUrl: './groupdetail.component.html',
  styleUrls: ['./groupdetail.component.scss']
})
export class GroupdetailComponent {

  id: string = "";
  constructor(private route: ActivatedRoute, private _groupsService: GroupsService, private _generalService: GeneralService) {

  }

  ngOnInit() {
    this.setGroupId();
    this.getGroup();
  }

  setGroupId(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });

  }

  getGroup(): void {
    this._groupsService.getGroup(this.id).subscribe(
      (res) => {
        console.log("res:",res);
      },
      (error) => {
        console.log("error:",error);
      }
    )
  }



  

}
