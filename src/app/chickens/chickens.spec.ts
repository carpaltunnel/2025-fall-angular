import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chickens } from './chickens';

describe('Chickens', () => {
  let component: Chickens;
  let fixture: ComponentFixture<Chickens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chickens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chickens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
