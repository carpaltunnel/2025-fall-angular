import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Chicken as ChickenType, mangoChicken} from '../chicken';
import { ActivatedRoute } from '@angular/router';
import { ChickenService } from '../chicken.service';

@Component({
  selector: 'app-chicken-details',
  imports: [ReactiveFormsModule],
  templateUrl: './chicken-details.html',
  styleUrl: './chicken-details.css',
})
export class ChickenDetails {
  chickenService: ChickenService = inject(ChickenService);
  route: ActivatedRoute = inject(ActivatedRoute);
  chickenId: string = '';

  currentChicken!: ChickenType;

  commentForm = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl(''),
  });

  constructor() {
    this.chickenId = this.route.snapshot.params['id'];
    this.chickenService.getChickenById(this.chickenId)
      .then((chicken) => {
        this.currentChicken = chicken;
      });
  }

  submitComment() {
    this.chickenService.submitComment(this.commentForm.value.name ?? '', this.commentForm.value.comment ?? '');
  };
}
