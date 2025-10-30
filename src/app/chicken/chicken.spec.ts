import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chicken } from './chicken';

describe('Chicken', () => {
  let component: Chicken;
  let fixture: ComponentFixture<Chicken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chicken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chicken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
