import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasicPage } from '../tickethandledemo/tickethandledemo';

/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {
  items;
  toggled: boolean;
  
  private isOn: boolean = false;
  public isSearchbarOpend = false;

  constructor(public navCtrl:NavController){

  }
  demo1()
{
 this.navCtrl.push(BasicPage);
console.log("success click");
}


  onCancel(event){}
  public toggle(): void{
    this.toggled = this.toggled ? false : true;
  }

  
 getButtonText(): string {
   return `Switch ${ this.isOn ? 'Off' : 'On' }`;
 }
 setState(): void {
   this.isOn = !this.isOn;
 }

toggleDetails() {
   this.isOn = !this.isOn;
 }
}
