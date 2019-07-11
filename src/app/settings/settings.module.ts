import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';



@NgModule({
  declarations: [AccountSettingsComponent, NotificationSettingsComponent, EmailSettingsComponent],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
