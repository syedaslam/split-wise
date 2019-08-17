import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.scss']
})
export class AddFriendsComponent implements OnInit {

  name: string;
  phone: number;
  id: any;

  constructor(
    public dialogRef: MatDialogRef<AddFriendsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(this.data);
    if (this.data) {
      this.name = this.data['name'];
      this.phone = this.data['phone'];
      this.id = this.data['_id'];
    }
  }

  onSave(type?): void {
    console.log(this.phone);
    if (type !== 'cancle') {
    this.dialogRef.close({name: this.name, phone: this.phone, _id: this.id ? this.id : null});
    } else {
      this.dialogRef.close(null);
    }
  }

}
