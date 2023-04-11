import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CinemaService } from '../cinema.service';
import { cinemas } from '../cinemas/Cinemas';
import { CinemaVM } from '../cinemas/CinemaVM';

@Component({
  selector: 'app-cinema-details',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss']
})
export class CinemaDetailsComponent  implements OnInit {
  cinema:cinemas={
    Id: 0,
    Logo: '',
    Name: '',
    Description: ''
  }
  constructor(private cinemaService: CinemaService ,private _http:HttpClient, private router: Router,private route: ActivatedRoute){
  

  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cinemaService.getById(id).subscribe(cinema => {
      this.cinema = cinema.Data;
    }
   
  );
  }
  goBack() {
    this.router.navigate(['/Cinema']);
  }
}
