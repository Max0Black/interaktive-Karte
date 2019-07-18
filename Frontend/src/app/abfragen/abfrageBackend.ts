import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarkerModel } from '../model/markerModel';

export class AbfrageBackend {
  private URL: 'http://localhost:8080';
  private EINTRAEGE_ERHALTEN: '/getAllEintraege';
  private EINTRAG_HINZUFUEGEN: '/addEintrag';

  constructor( private client: HttpClient) { }

  getEintraege(): Observable<MarkerModel[]> {
    return this.client.get<MarkerModel[]>(this.URL + this.EINTRAEGE_ERHALTEN);
  }

  addEintrag(marker: MarkerModel) {
    const body = {
      positionX: marker.positionX,
      positionY: marker.positionY,
      text: marker.text,
      picture: marker.picture
    };
    this.client.post(this.URL + this.EINTRAG_HINZUFUEGEN, body);
  }
}
