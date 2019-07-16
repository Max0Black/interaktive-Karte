import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  constructor() { }

  doClick(event) {

    let x = event.x;
    let y = event.y;
    let offsetX = event.offsetX;
    let offsetY = event.offsetY;
    console.log(offsetX);
    console.log(offsetY);
  }
}
