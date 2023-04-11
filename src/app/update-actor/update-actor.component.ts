import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorService } from '../actor.service';
import { Actors } from '../Models/Actor';

@Component({
  selector: 'app-update-actor',
  templateUrl: './update-actor.component.html',
  styleUrls: ['./update-actor.component.scss']
})
export class UpdateActorComponent {
  updateForm: FormGroup | undefined;
  id?: number;
  Actor: Actors = {
    Id: 0,
    ProfilePictureURL: '',
    FullName: '',
    Bio: ''
  };
  constructor(private route: ActivatedRoute, private router: Router, private ActorsService:ActorService ,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.ActorsService.getById(this.id).subscribe(Actor => {
      this.Actor = Actor.Data;
    });
  }

  onSubmit(): void {
    this.ActorsService.update(this.Actor).subscribe(() => {
      this.router.navigate(['/Actor']);
    });
  }
}



