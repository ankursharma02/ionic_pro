import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the Loadtab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loadtab1',
  templateUrl: 'loadtab1.html',
})
export class Loadtab1Page {
information:any;
text1:any="text";
arr1:any=["Ticket #F7154310","Safety"];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http)
   {
    let localData = http.get('assets/information1.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Loadtab1Page');
  console.log(this.arr1[0]);
  console.log(this.arr1[1]);
  console.log(this.arr1);
  }

}
