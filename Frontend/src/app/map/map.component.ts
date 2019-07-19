import {Component} from '@angular/core';
import {MarkerModel} from '../model/markerModel';
import {AbfrageBackend} from '../abfragen/abfrageBackend';
import {timer} from "rxjs";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  marker: MarkerModel[] = [];
  intervall = timer(1, 100);

  constructor(private abfrage: AbfrageBackend) {
    this.getAllMarker();
    this.intervall.subscribe(tick => {
      this.pruefeMarker();
    })
  }

  getAllMarker() {
    this.abfrage.getEintraege().subscribe(value => {
      this.marker = value;
    });
  }

  pruefeMarker() {
    this.abfrage.getEintraege().subscribe(value => {
      if (value.length !== this.marker.length) {
        this.marker = value;
      }
    });
  }

  doClick(event) {
    const model = new MarkerModel();

    model.positionX = event.offsetX;
    model.positionY = event.offsetY + 90;

    if (sessionStorage.getItem('Text') === null) {
      model.text = ' ';
    } else {
      model.text = sessionStorage.getItem('Text');
    }
    model.picture = sessionStorage.getItem('Bild');

    this.marker.push(model);
    this.abfrage.addEintrag(model).subscribe();
  }

  getStyle(position: MarkerModel) {
    return {
      position: 'absolute',
      left: position.positionX + 'px',
      top: position.positionY + 'px'
    };
  }
}
