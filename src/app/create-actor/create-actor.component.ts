import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ActorService } from '../actor.service';
import { Actors } from '../Models/Actor';
import { ResposeVM } from '../Models/ResponseVM';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.scss']
})
export class CreateActorComponent {


  //list:any;
    
    // constructor(private dataService: DataService ){
    
  
    //   }
    // constructor(private _http:HttpClient, private router: Router,private route: ActivatedRoute, ){

    // }//private ActorService:ActorService){
    //   actorsUrl='http://localhost:5170/api/Actors'
    //   httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //   };
    // ADD(fullName:string):void{
    //   let actor=new Actors();
    //   actor.FullName=fullName;
    //   //  actor.Id=id;
    //   //  actor.Bio=bio;
    //   //  actor.ProfilePictureURL=profilePicture
    //   this._http.post<ResposeVM>('http://localhost:5170/api/Actors',actor)
    //   .subscribe(
    //     response=>{
    //       this.Actors.push(actor);
          
    //     }
    //   );
    //   this.router.navigate(['/Actor']);
    // }
   actorForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private actorService: ActorService,
    private router: Router,private fb: FormBuilder,
  ) { 
    this.actorForm = this.fb.group({
    ProfilePictureURL: ['', Validators.required],
     FullName: ['', Validators.required],
     Bio: ['', Validators.required],
     
    
    });
  }

 

  ngOnInit(): void {
    this.actorForm = this.formBuilder.group({
      ProfilePictureURL: ['', Validators.required],
    FullName: ['', Validators.required],
      Bio: ['', Validators.required],
     
    });
  }

  onSubmit() {
   
   
    // const actor: Actors = this.actorForm.value;
     this.actorService.ADD( this.actorForm.value).subscribe(() => {
 
     });
     this.actorForm.reset();
   }
     
   BacktoActors(){
     this.router.navigate(['/Actor']);
   }

  // onSubmit() {
   
   
  //  // const actor: Actors = this.actorForm.value;
  //   this.actorService.ADD( this.actorForm.value).subscribe(() => {
  //     this.router.navigate(['/Actor']);
  //   });
  // }
    
    }
