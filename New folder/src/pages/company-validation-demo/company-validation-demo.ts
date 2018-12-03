import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Menu } from 'ionic-angular';
import { UserValidationDemoPage } from '../user-validation-demo/user-validation-demo';

/**
 * Generated class for the CompanyValidationDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-validation-demo',
  templateUrl: 'company-validation-demo.html',
})
export class CompanyValidationDemoPage implements OnInit{
  name1:string;
  name:string="xyz";
  constructor(public navCtrl: NavController, public navParams: NavParams,public menu:MenuController) {
  this.menu.enable(false,'menu1');
  this.menu.enable(false,'menu2');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyValidationDemoPage');
    
  }

  ngOnInit() {
    //  this.name1;
    }
   
   // @Input() name:n;
  //   user_info = [{
  //     "user_name" : "Jason",
  //     "company_name" : "xyz",
  //     "u_password" : "123"
  // },
  // {
  //   "user_name" : "Ank",
  //   "company_name" : "ABC",
  //   "u_password" : "456"
  // }];
    demo1()
    { 
     // console.log(this.user_info[0]);
      
    //  for(let i in this.user_info)
    //   {
    //   console.log("i= "+this.user_info[i].user_name);
    //   if(this.user_info[i].user_name===this.name1)
    //   {
    //     this.flag=true;
    //     break;
  
    //   }
    //   }
    //   console.log(this.name1);
    //   if(this.flag)
  
    if(this.name1===this.name)
      this.navCtrl.push(UserValidationDemoPage);
//console.log("success");  
else
      alert("Invalid Company name ")
    
    }
  
}
