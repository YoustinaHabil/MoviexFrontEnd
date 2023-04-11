import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMovieComponent } from './update-movie.component';

describe('UpdateMovieComponent', () => {
  let component: UpdateMovieComponent;
  let fixture: ComponentFixture<UpdateMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
