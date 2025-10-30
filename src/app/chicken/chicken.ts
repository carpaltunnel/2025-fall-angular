import { Component, input } from '@angular/core';
import { Chicken as ChickenType} from '../chicken';

@Component({
  selector: 'app-chicken',
  imports: [],
  templateUrl: './chicken.html',
  styleUrl: './chicken.css',
})
export class Chicken {
  currentChicken = input.required<ChickenType>();
}
