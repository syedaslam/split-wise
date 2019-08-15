import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groupList: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.apiService.getData('/api/split/group', {}).subscribe( groups => {
      this.groupList = groups['group'];
      console.log(groups);
    });
  }

}
