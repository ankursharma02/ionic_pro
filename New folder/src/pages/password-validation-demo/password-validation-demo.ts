import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoadingPage } from '../loading/loading';

/**
 * Generated class for the PasswordValidationDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-validation-demo',
  templateUrl: 'password-validation-demo.html',
})
export class PasswordValidationDemoPage {
  name1:string;
  name:string="123";

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu:MenuController) 
  {
    this.menu.enable(false,'menu1');
  this.menu.enable(false,'menu2');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordValidationDemoPage');
  }

  demo1()
{
  if(this.name===this.name1)
  this.navCtrl.push(LoadingPage);
 
 else
  alert("Invalid User name");

}
 


}
