import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
 
declare var google;
 
@Component({
  selector: 'google-maps',
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  markers:any[] = [];
 
  constructor(public navCtrl: NavController) {
  }
 
  ngOnInit(){
    this.loadMap();
  }
 
  loadMap(){
    let latLng = new google.maps.LatLng(-7.2064099, -35.9206093);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }

  addMarker(){
    console.log("HERE");
    let here = {lat:-7.2064099, lng: -35.9206093};
    let marker = new google.maps.Marker({position : here, map: this.map});
    this.markers.push(marker);
   /* let infoWindow = new google.maps.InfoWindow({
      content: '<h4>something</h4>'
    });
    
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });*/
  }

  deleteMarker(){
    if(this.markers.length>0){
      this.markers[this.markers.length-1].setMap(null);
      this.markers.pop();
    }
  }
}
