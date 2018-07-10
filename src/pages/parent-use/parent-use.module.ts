import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentUsePage } from './parent-use';

@NgModule({
  declarations: [
    ParentUsePage,
  ],
  imports: [
    IonicPageModule.forChild(ParentUsePage),
  ],
})
export class ParentUsePageModule {}
