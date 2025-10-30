import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenSearch } from './chicken-search';

describe('ChickenSearch', () => {
  let component: ChickenSearch;
  let fixture: ComponentFixture<ChickenSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChickenSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
