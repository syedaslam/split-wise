import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { MainHeaderComponent } from './design/main-header/main-header.component';
import { AddExpenseComponent } from './home/add-expense/add-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
