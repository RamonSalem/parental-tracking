import { NgModule } from '@angular/core';
import { GoogleMapsComponent } from './google-maps/google-maps';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [GoogleMapsComponent],
	imports: [IonicModule],
	exports: [GoogleMapsComponent]
})
export class ComponentsModule {}
