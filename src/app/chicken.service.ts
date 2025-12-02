import { Injectable } from '@angular/core';
import { Chicken, CreateChicken } from './chicken';
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
    const formData = new FormData();
    Object.keys(chicken).forEach((prop) => {
      formData.append(prop, chicken[prop]);
    });
 
    const response = await fetch(this.url, { 
      method: 'POST',
      body: formData,
    });

    return (await response.json()) ?? {};
  }
}
