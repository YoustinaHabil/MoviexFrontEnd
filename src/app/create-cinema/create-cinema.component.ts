import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CinemaService } from '../cinema.service';
import { ProducerService } from '../producer.service';

@Component({
  selector: 'app-create-cinema',
  templateUrl: './create-cinema.component.html',
  styleUrls: ['./create-cinema.component.scss']
})
export class CreateCinemaComponent {
  cinemaForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private cinemaService:CinemaService,
    private router: Router,private fb: FormBuilder,
  ) { 
    this.cinemaForm = this.fb.group({
    Logo: ['', Validators.required],
     Name: ['', Validators.required],
     Description: ['', Validators.required],
     
    
    });
  }
  onSubmit() {
   
   
    // const actor: Actors = this.actorForm.value;
     this.cinemaService.ADD( this.cinemaForm.value).subscribe(() => {
     
     });
     
     this.cinemaForm.reset();
 
 }
 Backtocenimas(){
   this.router.navigate(['/Cinema']);
 }

  ngOnInit(): void {
    this.cinemaForm = this.formBuilder.group({
      Logo: ['', Validators.required],
    Name: ['', Validators.required],
    Description: ['', Validators.required],
     
    });
  }

 

  // onSubmit() {
   
   
  //   this.cinemaService.ADD( this.cinemaForm.value).subscribe(() => {
  //     this.router.navigate(['/Cinema']);
  //   });
  // }
    


}
