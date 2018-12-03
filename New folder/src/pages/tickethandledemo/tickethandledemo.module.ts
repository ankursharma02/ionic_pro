import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TickethandledemoPage, BasicPage } from './tickethandledemo';

@NgModule({
  declarations: [
    TickethandledemoPage,
    BasicPage
  ],
  imports: [
    IonicPageModule.forChild(BasicPage),
  ],
})
export class TickethandledemoPageModule {}
