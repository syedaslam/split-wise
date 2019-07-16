import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { FabAddExpenseComponent } from './components/fab-add-expense/fab-add-expense.component';
import { HomeModule } from '../home/home.module';
import { AppModule } from '../app.module';





const chareMyMaterialdesignDepen =
  [
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,MatTabsModule, MatMenuModule
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
