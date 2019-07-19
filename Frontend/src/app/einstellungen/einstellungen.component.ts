import { Component } from '@angular/core';

@Component({
  selector: 'app-einstellungen',
  templateUrl: './einstellungen.component.html',
  styleUrls: ['./einstellungen.component.scss']
})
export class EinstellungenComponent{

  bilder = ['../../Bilder/X.png', '../../Bilder/Yes.png', '../../Bilder/Herz.png'];

  constructor() {
    sessionStorage.clear();
    sessionStorage.setItem('Bild', this.bilder[0]);
  }

  onKey(event: KeyboardEvent) {
    sessionStorage.setItem('Text', (event.target as HTMLInputElement).value);
  }

  radioChange(bild: string) {
    sessionStorage.setItem('Bild', bild);
  }

}
