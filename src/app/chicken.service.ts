import { Injectable } from '@angular/core';
import { Chicken } from './chicken';
import { mackChicken, mangoChicken, chipotleChicken } from './chicken';
import { ChickenOverview } from './chicken-overview/chicken-overview';

@Injectable({
  providedIn: 'root'
})
export class ChickenService {
  url = '/api/v1/chickens';
  
  async getChickens(): Promise<Chicken[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  } 

  async getChickenById(id: string): Promise<Chicken> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitComment(name: string, comment: string) {
    // TODO: Implement
    console.error(`Submitted comment from name "${name}" with comment : ${comment}`);
  }

  async searchChickens(searchString: string): Promise<Chicken[]> {
    // TODO: Make this actually do a search
    console.error(`---> ${searchString}`);
    const data = await fetch(`${this.url}?search=${searchString}`);
    return (await data.json()) ?? [];
  }
}
