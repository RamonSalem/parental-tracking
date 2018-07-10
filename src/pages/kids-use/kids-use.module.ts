import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KidsUsePage } from './kids-use';

@NgModule({
  declarations: [
    KidsUsePage,
  ],
  imports: [
    IonicPageModule.forChild(KidsUsePage),
  ],
})
export class KidsUsePageModule {}
