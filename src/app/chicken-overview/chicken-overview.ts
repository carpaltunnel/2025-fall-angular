import { input, Component } from '@angular/core';
import { Chicken as ChickenType } from '../chicken';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chicken-overview',
  imports: [RouterModule],
  templateUrl: './chicken-overview.html',
  styleUrl: './chicken-overview.css',
})
export class ChickenOverview {
  currentChicken = input.required<ChickenType>();
}
