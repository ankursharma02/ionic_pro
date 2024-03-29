import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loadtab1Page } from '../loadtab1/loadtab1';
import { Unloadtab2Page } from '../unloadtab2/unloadtab2';

/**
 * Generated class for the TickethandledemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tickethandledemo',
  template:`
  <ion-header>
  <ion-navbar color="dark">
    <ion-title>Tabs</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
</ion-content>
  `,
})
export class TickethandledemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TickethandledemoPage');
  }

}


@Component({
  template: `
    <ion-tabs tabsPlacement="top" color="dark" class="tabs-basic">
      <ion-tab tabTitle="LOAD" [root]="rootPage1"></ion-tab>
      <ion-tab tabTitle="UNLOAD" [root]="rootPage2"></ion-tab>
    </ion-tabs>
`})
export class BasicPage {
  rootPage1 = Loadtab1Page;
  rootPage2 = Unloadtab2Page;
  constructor() {}
}