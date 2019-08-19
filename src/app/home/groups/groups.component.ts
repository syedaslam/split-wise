

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ConformationDailogComponent } from 'src/app/shared/components/conformation-dailog/conformation-dailog.component';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  searchkeyObs = new Subject<string>();

  groupList: any=[];

  constructor(private apiService: ApiService,public dialog: MatDialog) {

    this.searchkeyObs
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.searchGroup(value);
      });
  }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.apiService.getData('/api/split/group', {}).subscribe( groups => {
      this.groupList = groups['group'];
      console.log(groups);
    });
  }

  deleteGroup(gName): void {
    const dialogRef=this.dialog.open(ConformationDailogComponent, {
      width: '250px',
      data: {message: 'Do you want do delete this Group'}
    });
    dialogRef.afterClosed().subscribe( check => {
      if (check === 'yes') {
        this.apiService.deleteData('/api/split/group/' + gName, {}).subscribe(res => {
          console.log(res);
          this.getGroups();
          });
      }
    });
  }



  searchGroup(searchKey) {
    this.apiService
      .postData('/api/split/group', { search: searchKey })
      .subscribe(res => {
        this.groupList = res['group'];
       console.log(res['group']);
      });
  }

}
