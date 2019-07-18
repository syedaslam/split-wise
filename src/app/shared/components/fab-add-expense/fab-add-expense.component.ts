import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fab-add-expense',
  templateUrl: './fab-add-expense.component.html',
  styleUrls: ['./fab-add-expense.component.scss']
})
export class FabAddExpenseComponent implements OnInit {

//to understand angular from app to cust
@Input() gettingDataFromApp:boolean;//@Input(proposerflower)myNme:string;

// b0) cutom to app

reply:boolean=!this.gettingDataFromApp;// b1)


//emmit data for event bibding
// resp=new EventEmitter();// b2)
@Output() resp=new EventEmitter();// b4)







  constructor() { }

  ngOnInit() {
    console.log("Iam in Love Component");
    console.log(this.gettingDataFromApp);
    console.log("repliead data is true = "+this.reply);

     //sending fromcustom to appCustomComponent
     this.resp.emit(this.reply);// b3) creating event $event

  }

}
