import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Chicken as ChickenType} from '../chicken';
import { ActivatedRoute, Router } from '@angular/router';
import { ChickenService } from '../chicken.service';

@Component({
  selector: 'app-chicken-details',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './chicken-details.html',
  styleUrl: './chicken-details.css',
})
export class ChickenDetails {
  chickenService: ChickenService = inject(ChickenService);
  route: ActivatedRoute = inject(ActivatedRoute);
  chickenId: string = '';
  router: Router = inject(Router);
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
      //.catch() -> display error, or route to listing page
  }

  submitComment() {
    this.chickenService.submitComment(this.commentForm.value.name ?? '', this.commentForm.value.comment ?? '');
  };

  deleteChicken() {
    this.chickenService.deleteChicken(this.currentChicken.id);
    // Redirect to the listing page
    this.router.navigate(['']);
  }
}
