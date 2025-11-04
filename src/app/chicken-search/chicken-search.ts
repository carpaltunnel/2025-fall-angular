import { Component, inject } from '@angular/core';
import { Chicken as ChickenType } from '../chicken';
import { ChickenDetails } from '../chicken-details/chicken-details';
import { ChickenService } from '../chicken.service';
import { mangoChicken, chipotleChicken, mackChicken } from '../chicken';

@Component({
  selector: 'app-chicken-search',
  imports: [ChickenDetails],
  templateUrl: './chicken-search.html',
  styleUrl: './chicken-search.css',
})
export class ChickenSearch {
  
  chickenService: ChickenService = inject(ChickenService);
  // Fake / hardcoded search results
  searchResults: ChickenType[] = [];

  constructor() {
    // Load an initial set of data from the service
    this.searchResults = this.chickenService.getChickens();
  }

  currentChicken: ChickenType  = mangoChicken;  
}
