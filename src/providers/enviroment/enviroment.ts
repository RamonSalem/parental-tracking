import { Injectable } from '@angular/core';

/*
  Generated class for the EnviromentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnviromentProvider {

  constructor() {
    console.log('Hello EnviromentProvider Provider');
  }

  getBaseEndPoint():string{
    return 'http://localhost:3000'
  }

}
