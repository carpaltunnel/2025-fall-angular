import { Injectable } from '@angular/core';
import { Chicken, CreateChicken, ChickensResponse } from './chicken';

@Injectable({
  providedIn: 'root'
})
export class ChickenService {
  url = '/api/v1/chickens';
  
  async getChickens(skip: number, limit: number): Promise<ChickensResponse> {
    const data = await fetch(`${this.url}?skip=${skip}&limit=${limit}`);
    return (await data.json()) ?? { chickens: [], totalCount: 0 };
  } 

  async getChickenById(id: string): Promise<Chicken> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitComment(name: string, comment: string) {
    // TODO: Implement
    console.error(`Submitted comment from name "${name}" with comment : ${comment}`);
  }

  async searchChickens(searchString: string, pageSize: number): Promise<ChickensResponse> {
    const data = await fetch(`${this.url}?search=${searchString}&limit=${pageSize}`);
    return (await data.json()) ?? { chickens: [], totalCount: 0 };
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
