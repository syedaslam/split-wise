import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends/friends.component';
import { GroupsComponent } from './groups/groups.component';
import { ActivityComponent } from './activity/activity.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { CreateGroupComponent } from './create-group/create-group.component';



@NgModule({
  declarations: [FriendsComponent, GroupsComponent, ActivityComponent, AddExpenseComponent, AddFriendsComponent, CreateGroupComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
