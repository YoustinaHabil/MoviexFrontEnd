import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm:any;
  error:any;
  succes:any
  constructor(private formBuilder:FormBuilder , private authService : AuthService) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      FirstName : ['', [Validators.required,Validators.pattern("^[A-Za-z]{3,29}$")]],
      LastName : ['', [Validators.required,Validators.pattern("^[A-Za-z]{3,29}$")]],
      userName:['', [Validators.required,Validators.pattern("^[A-Za-z]{3,29}$")]],
      Email:['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      Password:['', [Validators.required,]],// Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}$)]]"
    })
  }

  get FirstName ()
  {
    return this.registerForm.get('FirstName');
  }

  get LastName ()
  {
    return this.registerForm.get('LastName');
  }

  get userName ()
  {
    return this.registerForm.get('userName');
  }

  get Email()
  {
    return this.registerForm.get('Email')
  }

  get Password()
  {
    return this.registerForm.get('Password')
  }

  register(){
    console.log("hi")
    this.authService.register(this.FirstName.value,this.LastName.value,this.userName.value,this.Email.value ,this.Password.value).subscribe({
      next:data => {console.log(data);this.succes="Account Is Created Successfully!"},
      error:error => {console.log(error);this.error= "This Email Is Already Exist!"} ,

    })
  }

}
