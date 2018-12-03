import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { PasswordValidationDemoPage } from '../password-validation-demo/password-validation-demo';

/**
 * Generated class for the UserValidationDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-validation-demo',
  templateUrl: 'user-validation-demo.html',
})
export class UserValidationDemoPage {
  name1:string;
  name:string="ank";
  errmsg:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menu:MenuController) {
    this.menu.enable(false,'menu1');
  this.menu.enable(false,'menu2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserValidationDemoPage');
  }
  demo1()
  {
    if(this.name===this.name1)
    this.navCtrl.push(PasswordValidationDemoPage);
    
  else
    alert("Invalid User name");
  
  }
}
