import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsIndex } from './components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentsIndex],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tft';
}
