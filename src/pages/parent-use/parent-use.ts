import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ParentsProvider} from '../../providers/parents/parents';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public parentsProvider : ParentsProvider) {
  }

  name : string;
  childIdentifier : string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentUsePage');
    this.initValues()
  }

  syncParentToChild(){

    this.parentsProvider.sync(this.getReqBody().parentId, this.getReqBody())
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    });
  }

  getReqBody(){
    let parentUser = JSON.parse(localStorage.getItem('parent-user'));
    if(parentUser && parentUser._id){
      console.log("Already exists");
      return {name : this.name, childIdentifier : this.childIdentifier, createNew : undefined, parentId : parentUser._id} 
    }
    else{
      console.log("do not exists");
      return {name : this.name, childIdentifier : this.childIdentifier, createNew: "CREATE", parentId : "no-needed"}
    }
  }

  initValues(){
    let parentUser = JSON.parse(localStorage.getItem('parent-user'));
    if(parentUser && parentUser._id){
      this.name = parentUser.name;
      this.childIdentifier = parentUser.childIdentifier;
    }
    

  }

}
