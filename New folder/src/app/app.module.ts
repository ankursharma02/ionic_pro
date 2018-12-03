import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchPage } from '../pages/search/search';
import { MapPage } from '../pages/map/map';
import { RequisitionPage } from '../pages/requisition/requisition';
import { TicketsPage } from '../pages/tickets/tickets';
import { SignOutPage } from '../pages/sign-out/sign-out';
import { SettingPage } from '../pages/setting/setting';
import { ManualPage } from '../pages/manual/manual';
import { CollaborationPage } from '../pages/collaboration/collaboration';
import { ELogPage } from '../pages/e-log/e-log';
import { CompanyValidationDemoPage } from '../pages/company-validation-demo/company-validation-demo';
import { UserValidationDemoPage } from '../pages/user-validation-demo/user-validation-demo';
import { PasswordValidationDemoPage } from '../pages/password-validation-demo/password-validation-demo';
import { LoadingPage } from '../pages/loading/loading';
import { HttpModule } from '@angular/http';
import { Loadtab1Page } from '../pages/loadtab1/loadtab1';
import { Unloadtab2Page } from '../pages/unloadtab2/unloadtab2';
import { TickethandledemoPage, BasicPage } from '../pages/tickethandledemo/tickethandledemo';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    MapPage,
    RequisitionPage,
    TicketsPage,
    SignOutPage,
    SettingPage,
    ManualPage,
    CollaborationPage,ELogPage,
    CompanyValidationDemoPage,
    UserValidationDemoPage,
    PasswordValidationDemoPage,
    LoadingPage,
    Loadtab1Page,
    Unloadtab2Page,
    TickethandledemoPage,
    BasicPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,SearchPage,MapPage,RequisitionPage,TicketsPage,SignOutPage,SettingPage,
    ManualPage,CollaborationPage,ELogPage,CompanyValidationDemoPage,UserValidationDemoPage, PasswordValidationDemoPage,
    LoadingPage,Loadtab1Page,
    Unloadtab2Page,
    TickethandledemoPage,
    BasicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
