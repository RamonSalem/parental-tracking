import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPageKidsUse():void{
    this.navCtrl.push('page-kids-use');
  }

  pushPageParentsUse():void{
    this.navCtrl.push('page-parent-use');
  }

}
