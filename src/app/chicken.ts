export interface Chicken {
  id: string;
  name: string;
  breed: string;
  color: string;
  weight: number;
  imagePath?: string;
}

export const mangoChicken: Chicken = {
  id: 'abc-123',
  name: 'Mango',
  breed: 'Speckled Sussex',
  color: 'brown',
  weight: 2,
  imagePath: '/images/mango.jpg'
}

export const chipotleChicken: Chicken = {
  id: 'xyz-123',
  name: 'Chipotle',
  breed: 'Buff Orpington',
  color: 'orange',
  weight: 4,
  imagePath: '/images/chipotle.jpg'
}

export const mackChicken: Chicken = {
  id: 'dfgsdefg23',
  name: 'Mack',
  breed: 'White Leghorn',
  color: 'white',
  weight: 1.5,
  imagePath: '/images/mack.jpg'
}