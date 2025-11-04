import { Routes } from '@angular/router';
import { ChickenSearch } from './chicken-search/chicken-search';
import { ChickenDetails } from './chicken-details/chicken-details';

export const routes: Routes = [
  {
    path: '',
    component: ChickenSearch,
    title: 'Chicken Search',
  },
  {
    path: 'chickens/:id',
    component: ChickenDetails,
    title: 'Chicken Details',
  }
];
