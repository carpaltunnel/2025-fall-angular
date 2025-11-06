import { Component, inject } from '@angular/core';
import { Chicken as ChickenType } from '../chicken';
import { ChickenService } from '../chicken.service';
import { mangoChicken, chipotleChicken, mackChicken } from '../chicken';
import { ChickenOverview } from "../chicken-overview/chicken-overview";

@Component({
  selector: 'app-chicken-search',
  imports: [ChickenOverview, ChickenOverview],
  templateUrl: './chicken-search.html',
  styleUrl: './chicken-search.css',
})
export class ChickenSearch {
  
  chickenService: ChickenService = inject(ChickenService);
  // Fake / hardcoded search results
  searchResults: ChickenType[] = [];

  constructor() {
    // TODO: Load an initial set of data from the service
    this.chickenService.getChickens().then((chickens) => {
      this.searchResults = chickens;
    });
  }

  async searchChickens(searchString: string) {
    this.searchResults = await this.chickenService.searchChickens(searchString);
  }

  currentChicken: ChickenType  = mangoChicken;  
}
