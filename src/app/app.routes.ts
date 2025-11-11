import { Routes } from '@angular/router';
import { ChickenSearch } from './chicken-search/chicken-search';
import { ChickenDetails } from './chicken-details/chicken-details';
import { ChickenEdit } from './chicken-edit/chicken-edit';
import { ChickenCreate } from './chicken-create/chicken-create';

export const routes: Routes = [
  {
    path: '',
    component: ChickenSearch,
    title: 'Chicken Search',
  },
  {
    path: 'chickens/new',
    component: ChickenCreate,
    title: 'Chicken Create',
  },
  {
    path: 'chickens/:id',
    component: ChickenDetails,
    title: 'Chicken Details',
  },
  {
    path: 'chickens/edit/:id',
    component: ChickenEdit,
    title: 'Chicken Edit',
  },
];
