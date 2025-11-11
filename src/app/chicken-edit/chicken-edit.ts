import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Chicken as ChickenType} from '../chicken';
import { ActivatedRoute } from '@angular/router';
import { ChickenService } from '../chicken.service';

@Component({
  selector: 'app-chicken-edit',
  imports: [],
  templateUrl: './chicken-edit.html',
  styleUrl: './chicken-edit.css',
})
export class ChickenEdit {
  chickenService: ChickenService = inject(ChickenService);
  route: ActivatedRoute = inject(ActivatedRoute);
  chickenId: string = '';

  currentChicken!: ChickenType;

  /*
  commentForm = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl(''),
  });
  */

  constructor() {
    this.chickenId = this.route.snapshot.params['id'];
    this.chickenService.getChickenById(this.chickenId)
      .then((chicken) => {
        this.currentChicken = chicken;
      });
      //.catch() -> display error, or route to listing page
  }

}
