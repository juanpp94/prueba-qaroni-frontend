import { Component, Input } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groups-card',
  templateUrl: './groups-card.component.html',
  styleUrls: ['./groups-card.component.scss']
})
export class GroupsCardComponent {
  @Input() group: Group = this._groupService.group;


  constructor(private _groupService: GroupsService) {
    
  }

  
}
