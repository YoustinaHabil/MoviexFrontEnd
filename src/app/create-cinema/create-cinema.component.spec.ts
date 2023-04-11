import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCinemaComponent } from './create-cinema.component';

describe('CreateCinemaComponent', () => {
  let component: CreateCinemaComponent;
  let fixture: ComponentFixture<CreateCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCinemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
