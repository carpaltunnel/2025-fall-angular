export interface Chicken {
  id: string;
  name: string;
  breed: string;
  color: string;
  weight: number;
  imagePath?: string;
}

export interface CreateChicken {
  [key: string]: any;
  name?: string | null;
  breed?: string | null;
  color?: string | null;
  weight?: number | null;
}

export interface ChickensResponse {
  chickens: Chicken[];
  totalCount: number;
}
