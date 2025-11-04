import { Injectable } from '@angular/core';
import { Chicken } from './chicken';
import { mackChicken, mangoChicken, chipotleChicken } from './chicken';
import { ChickenOverview } from './chicken-overview/chicken-overview';

const CHICKEN_ARRAY = [
  mangoChicken,
  chipotleChicken,
  mackChicken,
  mangoChicken,
  chipotleChicken,
  mackChicken,
];

@Injectable({
  providedIn: 'root'
})
export class ChickenService {
  
  getChickens(): Chicken[] {
    // TODO: Query chickens from API
    return CHICKEN_ARRAY;
  } 

  getChickenById(id: string): Chicken {
    // TODO: Query chicken by ID from API
    return mackChicken;
  }

  submitComment(name: string, comment: string) {
    console.log(`Submitted comment from name "${name}" with comment : ${comment}`);
  }

  searchChickens(searchString: string): Chicken[] {
    return [
      mackChicken,
      mangoChicken,
      chipotleChicken,
    ]
  }
}
