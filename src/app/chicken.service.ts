import { Injectable } from '@angular/core';
import { Chicken } from './chicken';
import { mackChicken, mangoChicken, chipotleChicken } from './chicken';

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
    return CHICKEN_ARRAY;
  } 

  getChickenById(id: string): Chicken {
    return mackChicken;
  }
}
