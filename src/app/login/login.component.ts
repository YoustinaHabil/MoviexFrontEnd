import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:any;
  constructor(private formBuilder:FormBuilder , private authService : AuthService , private router: Router) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email:['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      // Password:['', [Validators.required,Validators.pattern(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{3,}$/)]],
      Password:['', [Validators.required,]],
    })

  }

  get Email()
  {
    return this.loginForm.get('Email')
  }

  get Password()
  {
    return this.loginForm.get('Password')
  }

  login(){
    console.log("hi")


    this.authService.login(this.Email.value ,this.Password.value).subscribe({
      next:user => {console.log(user)
        const userId = new JwtHelperService().decodeToken(user.token).uid;
        console.log(userId)
        localStorage.setItem('userId', JSON.stringify(userId));
        localStorage.setItem('isAuthenticated', JSON.stringify(user.isAuthenticated));
        this.authService.isAuthenticated$.next(JSON.stringify(user.isAuthenticated))
        if(user.roles[0]=='Admin'){
          localStorage.setItem('isAdmin', JSON.stringify(true));
          this.authService.isAdmin$.next(JSON.stringify(true))
        }
        this.router.navigate(['/Movie']);
       },
      error:error => console.log(error) ,

    })
  }
}
