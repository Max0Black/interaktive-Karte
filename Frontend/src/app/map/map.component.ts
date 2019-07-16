import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  ein = false;
  offsetX = 0;
  offsetY = 0;

  constructor() { }

  doClick(event) {
    let x = event.x;
    let y = event.y;
    this.offsetX = event.offsetX;
    this.offsetY = event.offsetY;
    console.log(this.offsetX);
    console.log(this.offsetY);

    this.ein = true;
  }

  getStyle() {
    let tsStyle = {
      'position': 'absolute',
      'left': this.offsetX + 'px',
      'top': this.offsetY + 'px'
    };

    return tsStyle;
  }
}
