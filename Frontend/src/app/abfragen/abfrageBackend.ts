import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarkerModel } from '../model/markerModel';
import {environment} from '../../environments/environment.prod';

export class AbfrageBackend {
  private EINTRAEGE_ERHALTEN = '/getAllEintraege';
  private EINTRAG_HINZUFUEGEN = '/addEintrag';

  constructor( private client: HttpClient) { }

  getEintraege(): Observable<MarkerModel[]> {
    return this.client.get<MarkerModel[]>(environment.url + this.EINTRAEGE_ERHALTEN);
  }

  addEintrag(marker: MarkerModel) {
    const body = {
      positionX: marker.positionX,
      positionY: marker.positionY,
      text: marker.text,
      picture: marker.picture
    };

    return this.client.post(environment.url + this.EINTRAG_HINZUFUEGEN, body);
  }
}
