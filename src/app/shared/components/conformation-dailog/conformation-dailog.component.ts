import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-conformation-dailog',
  templateUrl: './conformation-dailog.component.html',
  styleUrls: ['./conformation-dailog.component.scss']
})
export class ConformationDailogComponent implements OnInit {

  message: string;

  constructor(public dialogRef: MatDialogRef<ConformationDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
    if (this.data) {
      this.message = this.data['message'];
    }
  }

  onClose(condt) {
    this.dialogRef.close(condt);
  }

}
