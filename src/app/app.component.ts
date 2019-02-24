import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WarsawJS-movies';
  test = 'nowości';
  onClick() {alert('Klik,klik!');}
}
