import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserValidationDemoPage } from './user-validation-demo';

@NgModule({
  declarations: [
    UserValidationDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(UserValidationDemoPage),
  ],
})
export class UserValidationDemoPageModule {}
