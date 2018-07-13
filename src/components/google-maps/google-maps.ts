import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
 
declare var google;
 
@Component({
  selector: 'google-maps',
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {
 
  //Mudar posição do marker a cada 3 segundos

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  markers:any[] = [];

/*
  coordinates: any[] = [
    new google.maps.LatLng(-7.211282, -35.935128),
    new google.maps.LatLng(-7.211198, -35.934862),
    new google.maps.LatLng(-7.211070, -35.934551),
    new google.maps.LatLng(-7.210910, -35.934304),
    new google.maps.LatLng(-7.210740, -35.933950),
    new google.maps.LatLng(-7.210655, -35.933703),
    new google.maps.LatLng(-7.210527, -35.933456),
    new google.maps.LatLng(-7.210506, -35.933209)
  ]*/

  coordinates: any[] = [
    {lat : -7.211282, lng: -35.935128},
    {lat : -7.211070, lng: -35.934551},
    {lat : -7.210910, lng: -35.934304},
    {lat : -7.210740, lng: -35.933950},
    {lat : -7.210655, lng: -35.933703},
    {lat : -7.210527, lng: -35.933456},
    {lat : -7.210506, lng: -35.933209}
  ]
 
  constructor(public navCtrl: NavController) {
  }
 
  ngOnInit(){
    this.loadMap(this.coordinates[0]);
  }
 
  loadMap(coordinates){
    let latLng = new google.maps.LatLng(coordinates.lat, coordinates.lng);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }

  addMarker(){
    let here = this.coordinates[0];
    let marker = new google.maps.Marker(
      {position : here,
       map: this.map,
       icon: '../../assets/imgs/marker1-resized2.png'
      });
    this.markers.push(marker);
   /* let infoWindow = new google.maps.InfoWindow({
      content: '<h4>something</h4>'
    });
    
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });*/
  }

  addMarkerV2(coordinate){
    let here = {lat:coordinate.lat, lng:coordinate.lng};
    let marker = new google.maps.Marker(
      {position : here,
       map: this.map,
       icon: '../../assets/imgs/marker1-resized2.png'
      });
    this.markers.push(marker);
   /* let infoWindow = new google.maps.InfoWindow({
      content: '<h4>something</h4>'
    });
    
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });*/
  }

  makeAnimation(){
    this.coordinates.forEach(coor=>{
      this.addMarkerV2(coor);
      this.deleteMarker();
    })
  }

  deleteMarker(){
    if(this.markers.length>0){
      this.markers[this.markers.length-1].setMap(null);
      this.markers.pop();
    }
  }
}
