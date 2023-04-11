import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 constructor(private router: Router , private authService : AuthService){}
  isAuthenticated: boolean = false;
  isAdmin:boolean






  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
    // console.log(this.isAuthenticated)
this.authService.isAuthenticated$.subscribe((isAuthenticated)=>{
      console.log(isAuthenticated);
this.isAuthenticated=isAuthenticated;

    })
    this.authService.isAdmin$.subscribe((isAdmin)=>{
      console.log(isAdmin);
this.isAdmin=isAdmin;

    })
  }

  logout(){
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('isAdmin')

    this.isAuthenticated=false
    this.authService.isAuthenticated$.next(false)

    this.isAdmin=false
    this.authService.isAdmin$.next(false)

    this.router.navigate(['/login']);
  }
}

