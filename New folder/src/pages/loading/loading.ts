import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
    this.presentLoading();
  }

  presentLoading() {
    this.loadingCtrl.create({
    //  content: '...',
      duration: 400,
      dismissOnPageChange: true
      
    }).present();
//  this.navCtrl.push(Demo1Page);
setTimeout(() => {
  this.navCtrl.setRoot(HomePage);
}, 400)
  }


}
