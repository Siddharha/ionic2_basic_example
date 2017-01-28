import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the MainPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main-page',
  templateUrl: 'main-page.html'
})
export class MainPagePage {

	uName="";
	uPass="";

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPagePage');
  }

  saveToStore(){

  	if((this.uName!="")&&(this.uPass!="")){
  	localStorage.setItem("name", this.uName);
  	localStorage.setItem("pass", this.uPass);
  	this.presentToast("Saved");
  	}else{
this.presentToast("Please fill all empty field!");
  	}
  }

   presentToast(s) {
    let toast = this.toastCtrl.create({
      message: s,
      duration: 3000
    });
    toast.present();
  }

}
