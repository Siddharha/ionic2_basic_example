import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
	items : any;
	sName="";
  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public toastCtrl: ToastController) {

  	this.items = [
            'Bread',
            'Milk',
            'Cheese',
            'Snacks',
            'Apples',
            'Bananas',
            'Peanut Butter',
            'Chocolate',
            'Avocada',
            'Vegemite',
            'Muffins',
            'Paper towels'
        ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    
  }

  	
  clkItem(itemX){
  	this.presentToast(itemX);
  }

  

  presentToast(s) {
    let toast = this.toastCtrl.create({
      message: s,
      duration: 3000
    });
    toast.present();
  }

}
