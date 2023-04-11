import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProducerService } from '../producer.service';
import { Producers } from '../producer/Producers';

@Component({
  selector: 'app-update-producer',
  templateUrl: './update-producer.component.html',
  styleUrls: ['./update-producer.component.scss']
})
export class UpdateProducerComponent {
  updateForm: FormGroup | undefined;
  id?: number;
 producer: Producers = {
    Id: 0,
    ProfilePictureURL: '',
    FullName: '',
    Bio: ''
  };
  constructor(private route: ActivatedRoute, private router: Router, private producerService:ProducerService ,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.producerService.getById(this.id).subscribe(producer => {
      this.producer = producer.Data;
    });
  }

  onSubmit(): void {
    this.producerService.update(this.producer).subscribe(() => {
      this.router.navigate(['/Producer']);
    });
  }

}
