import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActorService } from '../actor.service';
import { ProducerService } from '../producer.service';

@Component({
  selector: 'app-create-producer',
  templateUrl: './create-producer.component.html',
  styleUrls: ['./create-producer.component.scss']
})
export class CreateProducerComponent {

  producerForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private producerService:ProducerService,
    private router: Router,private fb: FormBuilder,
  ) { 
    this.producerForm = this.fb.group({
    ProfilePictureURL: ['', Validators.required],
     FullName: ['', Validators.required],
     Bio: ['', Validators.required],
     
    
    });
  }

  ngOnInit(): void {
    this.producerForm = this.formBuilder.group({
      ProfilePictureURL: ['', Validators.required],
    FullName: ['', Validators.required],
      Bio: ['', Validators.required],
     
    });
  }
  onSubmit() {
   
   
    // const actor: Actors = this.actorForm.value;
     this.producerService.ADD( this.producerForm.value).subscribe(() => {
       
     });
     this.producerForm.reset();
    
   }
   Backtoproducers(){
     this.router.navigate(['/Producer']);
   }
 

  // onSubmit() {
   
   
  //  // const actor: Actors = this.actorForm.value;
  //   this.producerService.ADD( this.producerForm.value).subscribe(() => {
  //     this.router.navigate(['/Producer']);
  //   });
  // }
    

}
