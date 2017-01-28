import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { MainPagePage } from '../main-page/main-page';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

name = "";
pass = "";
  constructor(public navCtrl: NavController,
   public alertCtrl: AlertController) {
    
  }

btnClk(){
	

	if((this.name == localStorage.getItem("name"))&&(this.pass == localStorage.getItem("pass"))){

	this.navCtrl.push(DetailsPage);
	}else{
		this.showAlert();
	}
}

clkSignUp(){
this.navCtrl.push(MainPagePage);
}

showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Wrong Input!',
      subTitle: 'Please Enter Right User & Pass',
      buttons: ['OK']
    });
    alert.present();
  }
}
