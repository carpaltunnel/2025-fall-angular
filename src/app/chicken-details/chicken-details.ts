import { Component, input } from '@angular/core';
import { Chicken as ChickenType} from '../chicken';

@Component({
  selector: 'app-chicken-details',
  imports: [],
  templateUrl: './chicken-details.html',
  styleUrl: './chicken-details.css',
})
export class ChickenDetails {
  currentChicken = input.required<ChickenType>();
}
