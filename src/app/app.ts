import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ChickenSearch } from './chicken-search/chicken-search';
import { Chickens } from './chickens/chickens';
import { Chicken } from './chicken/chicken';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Chickens, Chicken, ChickenSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ArCA');
  protected readonly cameron = 'October';

}
