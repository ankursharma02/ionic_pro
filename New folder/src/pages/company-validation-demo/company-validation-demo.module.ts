import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyValidationDemoPage } from './company-validation-demo';

@NgModule({
  declarations: [
    CompanyValidationDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyValidationDemoPage),
  ],
})
export class CompanyValidationDemoPageModule {}
