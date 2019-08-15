import { Component, OnInit } from '@angular/core';
import { AddFriendsComponent } from '../add-friends/add-friends.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friends: any[] = [];
  groupName: string;
  isCreatingGroup: (boolean);
  gropuList: any = [];

  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit() {
    this.getFriendsList();
  }

  createUpdateFriends(formData): void {
    const dialogRef = this.dialog.open(AddFriendsComponent, {
      width: '250px',
      data: formData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        if (result['_id']) {
          this.apiService.updateData('/api/split/' + result['_id'], result).subscribe(res => {
            console.log(res);
            this.getFriendsList();
          });
        } else {
          this.apiService.postData('/api/split', result).subscribe(res => {
            if (res['status'] === 'success') {
              this.getFriendsList();
            }
          });
        }
      }
    });
  }

  getFriendsList() {
    this.apiService.getData('/api/split', {}).subscribe(res => {
      console.log(res);
      this.friends = res['users'];
    });
  }

  deleteUser(userId) {
    console.log(userId);
    this.apiService.deleteData('/api/split/' + userId, {}).subscribe(res => {
      console.log(res);
      this.getFriendsList();
    });
  }

  createGroup() {
    this.apiService.postData('/api/split/group',
     {groupName: this.groupName, friendsList: this.gropuList}).subscribe( res => {
      if (res['status'] === 'success') {
       this.isCreatingGroup = false;
      }
     });
  }

  selectedFriend(check: MatCheckboxChange, friend) {
    let isNotExist = true;
    if (check.checked) {
      if (this.gropuList.length > 0) {
      this.gropuList.forEach(element => {
        if (element['_id'] === friend['_id']) {
          isNotExist = false;
        }
      });
      if (isNotExist) {
        this.gropuList.push(friend);
      }
    } else {
      this.gropuList.push(friend);
    }
    } else {
      this.gropuList.forEach((element, index) => {
        if (element['_id'] === friend['_id']) {
          this.gropuList.splice(index, 1);
        }
      });
    }
    console.log(this.gropuList);
  }
}
