import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetaisComponent } from './movie-detais-component';

describe('MovieDetaisComponent', () => {
  let component: MovieDetaisComponent;
  let fixture: ComponentFixture<MovieDetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetaisComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
