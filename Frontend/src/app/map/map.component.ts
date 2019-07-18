import { Component } from '@angular/core';
import {MarkerModel} from '../model/markerModel';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  text = '';
  ein = false;
  marker: MarkerModel[] = [];

  constructor() { }

  onKey(event: KeyboardEvent) {
    this.text = (event.target as HTMLInputElement).value;
  }

  doClick(event) {
    const model = new MarkerModel();
    const x = event.x;
    const y = event.y;

    model.positionX = event.offsetX;
    model.positionY = event.offsetY;
    model.text = this.text;

    this.ein = false;
    this.marker.push(model);
    this.ein = true;
  }

  getStyle(position: MarkerModel) {
    const tsStyle = {
      position: 'absolute',
      left: position.positionX + 'px',
      top: position.positionY + 'px'
    };

    return tsStyle;
  }
}
