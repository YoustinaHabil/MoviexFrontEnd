import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActorComponent } from './update-actor.component';

describe('UpdateActorComponent', () => {
  let component: UpdateActorComponent;
  let fixture: ComponentFixture<UpdateActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
