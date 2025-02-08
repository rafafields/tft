import { Component } from '@angular/core';
import { PagesIndex } from './pages';

@Component({
  selector: 'app-root',
  imports: [
    //ComponentsIndex,
    PagesIndex,
   ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tft';

}
