import { Component } from '@angular/core';
import { ComponentsIndex } from './components';

@Component({
  selector: 'app-root',
  imports: [ComponentsIndex],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tft';
}
