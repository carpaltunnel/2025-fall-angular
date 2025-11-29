import { Injectable } from '@angular/core';
import { Chicken, CreateChicken } from './chicken';
import { mackChicken, mangoChicken, chipotleChicken } from './chicken';
import { ChickenOverview } from './chicken-overview/chicken-overview';

@Injectable({
  providedIn: 'root'
})
export class ChickenService {
  url = '/api/v1/chickens';
  
  async getChickens(skip: number, limit: number): Promise<Chicken[]> {
    const data = await fetch(`${this.url}?skip=${skip}&limit=${limit}`);
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
    const data = await fetch(`${this.url}?search=${searchString}`);
    return (await data.json()) ?? [];
  }

  async deleteChicken(id: string): Promise<void> {
    await fetch(`${this.url}/${id}`, { method: 'DELETE' });
  }

  async updateChicken(id: string, chickenData: Chicken) {
    await fetch(`${this.url}/${id}`, { 
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chickenData),
    });
  }

  async createChicken(chicken: CreateChicken) {


    // TODO: There is a problem in this area
    //   when "weight" is specified, file does not transfer
    //   when "weight" is not specified, file does transfer.

    const formData = new FormData();
    Object.keys(chicken).forEach((prop) => {
      console.log(`${prop} = ${chicken[prop]}`);
      formData.append(prop, chicken[prop]);
    });

    //formData.append('selected-file', file);
 

    const response = await fetch(this.url, { 
      method: 'POST',
      //headers: { 'Content-Type': 'multipart/form-data' },
      body: formData, //JSON.stringify(chicken),
    });

    return (await response.json()) ?? {};
  }
}
