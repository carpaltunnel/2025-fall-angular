import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Chicken as ChickenType } from '../chicken';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ChickenService } from '../chicken.service';

@Component({
  selector: 'app-chicken-create',
  imports: [ReactiveFormsModule],
  templateUrl: './chicken-create.html',
  styleUrl: './chicken-create.css',
})
export class ChickenCreate {
  router: Router = inject(Router);
  chickenService: ChickenService = inject(ChickenService);
  newChickenForm = new FormGroup({
    name: new FormControl(''),
    breed: new FormControl(''),
    color: new FormControl(''),
    weight: new FormControl(0),
    imagePath: new FormControl(''),
    uploadImage: new FormControl(null as unknown as File), // TODO: Fix 
  });

  async createChicken() {
    const result = await this.chickenService.createChicken(this.newChickenForm.value);
    this.router.navigate([`chickens/${result.id}`]);
  }

  onFileSelected(event: Event) {
    if (event?.target) {
      const element = event.target as HTMLInputElement;
      if (element?.files) {
        const file = element.files[0];
        this.newChickenForm.patchValue({ uploadImage: file });
      }
    }
  }
}
