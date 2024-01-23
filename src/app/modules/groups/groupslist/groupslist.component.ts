import { Component } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GeneralService } from 'src/app/services/general.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groupslist',
  templateUrl: './groupslist.component.html',
  styleUrls: ['./groupslist.component.scss']
})
export class GroupslistComponent {

  groups: Group[] = [];
  contentIsCharged: boolean = false;
  //group: Group = {'groupId': '', 'name': '', 'description': '', 'category': {'name': '',  'description': ''}}
  constructor(private _groupsService : GroupsService, private _generalService: GeneralService) {

  }

  ngOnInit() {
    let groupsAux = this.getGroups();
    this.setGroups(groupsAux);
  }

  /**Method that set the groups from the API request */
  setGroups(groups: Group[]): void {
    this.groups = groups;
  }

  /** Method that get the groups from the API request */
  getGroups() {
    this._groupsService.getGroups().subscribe(
      (res) => {
        this.contentIsCharged = true;
        //console.log("res:",res)
        let groupsAux = res['result'];
        for(let i = 0; i < groupsAux.length; i++) {
          //console.log("image:", groupsAux);
          this._groupsService.group = {
            'groupId': groupsAux[i]['groupId'], 'imageUrl': groupsAux[i]['imageUrl'], 'name': groupsAux[i]['name'], 'description': groupsAux[i]['description'], 'category': {'name':groupsAux[i]['category']['name'],'description': groupsAux[i]['category']['description']}
          }
          this._groupsService.groups.push(this._groupsService.group);

        }
      },
      (error) => {
        this.contentIsCharged = false;
        //let errorMessage = "Ha ocurrido un error en la carga de la data.";
        this._groupsService.groups = [];
        //this._generalService.setErrorMessage(errorMessage);
      }
    )
    return this._groupsService.groups;
  }
}
