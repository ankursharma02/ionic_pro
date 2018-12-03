import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordValidationDemoPage } from './password-validation-demo';

@NgModule({
  declarations: [
    PasswordValidationDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordValidationDemoPage),
  ],
})
export class PasswordValidationDemoPageModule {}
