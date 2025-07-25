import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodvoLogoComponent } from './foodvo-logo.component';

describe('FoodvoLogoComponent', () => {
  let component: FoodvoLogoComponent;
  let fixture: ComponentFixture<FoodvoLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodvoLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodvoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
