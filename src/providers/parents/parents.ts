import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {EnviromentProvider} from '../enviroment/enviroment';

/*
  Generated class for the ParentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParentsProvider {

  constructor(public http: Http, public enviromentP : EnviromentProvider) {
    console.log('Hello ParentsProvider Provider');
  }

  sync(parentId, body){
    return this.http.put(this.enviromentP.getBaseEndPoint()+'/v1/parents/'+parentId, body)
    .toPromise().then(res => {
      
      if(res.json().data){
        localStorage.setItem('parent-user', JSON.stringify(res.json().data));
      }
      res.json().data;
    
    });
  }

}
