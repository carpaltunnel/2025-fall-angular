import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Chicken as ChickenType } from '../chicken';
import { ChickenService } from '../chicken.service';
import { ChickenOverview } from "../chicken-overview/chicken-overview";

@Component({
  selector: 'app-chicken-search',
  imports: [ChickenOverview, ChickenOverview, FormsModule, RouterModule],
  templateUrl: './chicken-search.html',
  styleUrl: './chicken-search.css',
})
export class ChickenSearch {
  chickenService: ChickenService = inject(ChickenService);
  searchResults: ChickenType[] = [];
  totalCount: number = 0;

  // Properties for controlling pagination
  chickensPerPage = 20; // TODO: Allow user to control page size
  currentPage = 0;
  previousDisabled = true;
  nextDisabled = false;


  constructor() {
    this.chickenService.getChickens(this.currentPage, this.chickensPerPage).then((response) => {
      this.searchResults = response.chickens;
      this.totalCount = response.totalCount;
    });
  }

  async searchChickens(searchString: string) {
    this.searchResults = await this.chickenService.searchChickens(searchString);

    if (this.searchResults?.length < this.chickensPerPage) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
  }

  async nextPage() {
    if (this.searchResults.length < this.chickensPerPage) {
      return;
    }

    this.previousDisabled = false;

    this.currentPage += 1;
    const skip = this.currentPage * this.chickensPerPage;
    const chickenResponse = await this.chickenService.getChickens(skip, this.chickensPerPage);
    this.searchResults = chickenResponse.chickens;
    this.totalCount = chickenResponse.totalCount;

    // Disable the next button, if no next page.
    if (this.searchResults.length < this.chickensPerPage) {
      this.nextDisabled = true;
    }
  }

  async previousPage() {
    if (this.currentPage === 0) {
      return;
    }

    this.nextDisabled = false;

    this.currentPage = this.currentPage <= 0 ? 0 : this.currentPage - 1;
    const skip = this.currentPage * this.chickensPerPage;
    const chickenResponse = await this.chickenService.getChickens(skip, this.chickensPerPage);
    this.searchResults = chickenResponse.chickens;
    this.totalCount = chickenResponse.totalCount;

    if (this.currentPage === 0) {
      this.previousDisabled = true;
    }
  }

  totalPages() {
    return Math.ceil(this.totalCount / this.chickensPerPage);
  }
}
