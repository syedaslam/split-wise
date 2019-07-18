import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { FabAddExpenseComponent } from './components/fab-add-expense/fab-add-expense.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';





const chareMyMaterialdesignDepen =
  [
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,MatTabsModule, MatMenuModule,
    MatInputModule, MatFormFieldModule
  ];


@NgModule({
  declarations: [FabAddExpenseComponent],
  imports: [
    chareMyMaterialdesignDepen
  ],
  exports: [
    chareMyMaterialdesignDepen,FabAddExpenseComponent]
})
export class SharedModule { }
