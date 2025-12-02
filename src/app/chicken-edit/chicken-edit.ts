import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Chicken, Chicken as ChickenType } from '../chicken';
import { ActivatedRoute, Router } from '@angular/router';
import { ChickenService } from '../chicken.service';

@Component({
  selector: 'app-chicken-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './chicken-edit.html',
  styleUrl: './chicken-edit.css',
})
export class ChickenEdit {
  chickenService: ChickenService = inject(ChickenService);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  chickenId: string = '';

  currentChicken: ChickenType;
  chickenForm: FormGroup;

  constructor() {
    // These two assignments are ONLY to satisfy Typescript
    //   but are a best practice for safety.
    this.currentChicken = {} as ChickenType;
    this.chickenForm = {} as FormGroup;

    this.chickenId = this.route.snapshot.params['id'];
    this.chickenService.getChickenById(this.chickenId)
      .then((chicken) => {
        this.currentChicken = chicken;

        this.chickenForm = new FormGroup({
          name: new FormControl(this.currentChicken.name),
          breed: new FormControl(this.currentChicken.breed),
          color: new FormControl(this.currentChicken.color),
          weight: new FormControl(this.currentChicken.weight),
        });
      });
    //.catch() -> display error, or route to listing page
  }

  async saveChicken() {
    const updateChicken: Chicken = this.chickenForm.value;
    await this.chickenService.updateChicken(this.chickenId, updateChicken);
    // Redirect to the listing page
    this.router.navigate(['']);
  }
}
