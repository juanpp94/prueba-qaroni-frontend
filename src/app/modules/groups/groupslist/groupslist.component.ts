import { Component } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groupslist',
  templateUrl: './groupslist.component.html',
  styleUrls: ['./groupslist.component.scss']
})
export class GroupslistComponent {

  groups: Group[] = [];
  //group: Group = {'groupId': '', 'name': '', 'description': '', 'category': {'name': '',  'description': ''}}
  constructor(private _groupsService : GroupsService) {

  }

  ngOnInit() {
    console.log("holi");
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
        console.log("res:",res)
        let groupsAux = res['result'];
        for(let i = 0; i < groupsAux.length; i++) {
          this._groupsService.group = {
            'groupId': groupsAux[i]['groupId'], 'imageUrl': groupsAux['imageUrl'], 'name': groupsAux[i]['name'], 'description': groupsAux[i]['description'], 'category': {'name':groupsAux[i]['category']['name'],'description': groupsAux[i]['category']['description']}
          }
          this._groupsService.groups.push(this._groupsService.group);
          
        }
      },
      (error) => {
        console.log("error:",error);
        this._groupsService.groups = [];
      }
    )
    return this._groupsService.groups;
  }
}
