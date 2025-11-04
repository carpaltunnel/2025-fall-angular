import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { ChickenSearch } from './chicken-search/chicken-search';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ArCA');
  
}
