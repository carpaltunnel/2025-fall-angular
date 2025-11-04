import { Component, inject } from '@angular/core';
import { Chicken as ChickenType, mangoChicken} from '../chicken';
import { ActivatedRoute } from '@angular/router';
import { ChickenService } from '../chicken.service';

@Component({
  selector: 'app-chicken-details',
  imports: [],
  templateUrl: './chicken-details.html',
  styleUrl: './chicken-details.css',
})
export class ChickenDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  chickenId = -1;

  // TODO: Query data instead of using the hardcode
  currentChicken = mangoChicken;

  constructor() {
    this.chickenId = this.route.snapshot.params['id'];
  }
}
