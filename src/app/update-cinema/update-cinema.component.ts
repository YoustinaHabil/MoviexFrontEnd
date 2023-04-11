import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaService } from '../cinema.service';
import { cinemas } from '../cinemas/Cinemas';

@Component({
  selector: 'app-update-cinema',
  templateUrl: './update-cinema.component.html',
  styleUrls: ['./update-cinema.component.scss']
})
export class UpdateCinemaComponent {
  updateForm: FormGroup | undefined;
  id?: number;
  cinema:cinemas={
    Id: 0,
    Logo: '',
    Name: '',
    Description: ''
  }
  constructor(private route: ActivatedRoute, private router: Router, private cinemaService: CinemaService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cinemaService.getById(this.id).subscribe(cinema => {
      this.cinema = cinema.Data;
    });
  }

  onSubmit(): void {
    this.cinemaService.update(this.cinema).subscribe(() => {
      this.router.navigate(['/Cinema']);
    });
  }
  

}
