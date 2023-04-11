import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCinemaComponent } from './update-cinema.component';

describe('UpdateCinemaComponent', () => {
  let component: UpdateCinemaComponent;
  let fixture: ComponentFixture<UpdateCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCinemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
