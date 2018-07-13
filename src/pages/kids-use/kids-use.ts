import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the KidsUsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 /**
  * Sends the position to the server. It should keep sending the position
  */

@IonicPage({
  name : 'page-kids-use'
})
@Component({
  selector: 'page-kids-use',
  templateUrl: 'kids-use.html',
})
export class KidsUsePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  name : string;
  identifier : string;

  lat:any = "nada";
  lng:any = "nada";
  error:any = "noError";

  ionViewDidLoad() {
    console.log('ionViewDidLoad KidsUsePage');
  }

  getCurrentLocation():void{
    this.geolocation.getCurrentPosition()
    .then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
     })
     .catch((error) => {
       this.error = JSON.stringify(error);
     });

  }

  

}
