import { Injectable } from '@angular/core';
import { Chicken } from './chicken';
import { mackChicken, mangoChicken, chipotleChicken } from './chicken';
import { ChickenOverview } from './chicken-overview/chicken-overview';

@Injectable({
  providedIn: 'root'
})
export class ChickenService {
  url = 'http://127.0.0.1:3000/api/v1/chickens';
  
  async getChickens(): Promise<Chicken[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  } 

  getChickenById(id: string): Chicken {
    // TODO: Query chicken by ID from API
    return mackChicken;
  }

  submitComment(name: string, comment: string) {
    console.log(`Submitted comment from name "${name}" with comment : ${comment}`);
  }

  async searchChickens(searchString: string): Promise<Chicken[]> {
    // TODO: Make this actually do a search
    console.error(`---> ADD SEARCH TERM!`);
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
