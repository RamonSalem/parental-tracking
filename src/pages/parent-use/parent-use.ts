import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParentUsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


 /*
 Get the values of locations stored in the database and add the markers into the map
 */
@IonicPage({
  name : 'page-parent-use'
})
@Component({
  selector: 'page-parent-use',
  templateUrl: 'parent-use.html',
})
export class ParentUsePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  name : string;
  childIdentifier : string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentUsePage');
  }

}
