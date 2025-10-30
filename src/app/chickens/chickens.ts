import { Component } from '@angular/core';
import { mangoChicken } from '../chicken'; 

@Component({
  selector: 'app-chickens',
  imports: [],
  templateUrl: './chickens.html',
  styleUrl: './chickens.css',
})
export class Chickens {
  protected readonly currentDate = new Date().toISOString();

  protected readonly chicken = mangoChicken;
  /*
  protected readonly chickens = [
    mangoChicken,
    new Chicken()
  ];
  */
}
