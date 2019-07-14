import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';




const chareMyMaterialdesignDepen =
  [
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,MatTabsModule
  ];


@NgModule({
  declarations: [],
  imports: [
    chareMyMaterialdesignDepen
  ],
  exports: [
    chareMyMaterialdesignDepen  ]
})
export class SharedModule { }
