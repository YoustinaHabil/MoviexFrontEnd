import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProducerService } from '../producer.service';
import { Producers } from '../producer/Producers';

@Component({
  selector: 'app-producer-details',
  templateUrl: './producer-details.component.html',
  styleUrls: ['./producer-details.component.scss']
})
export class ProducerDetailsComponent implements OnInit {
  producer:Producers={
    Id: 0,
    ProfilePictureURL: '',
    FullName: '',
    Bio: ''
  }
  constructor(private Producerservice: ProducerService ,private _http:HttpClient, private router: Router,private route: ActivatedRoute){
  

  }
  
  ngOnInit(): void {
   
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.Producerservice.getById(id).subscribe(producer => {
      this.producer = producer.Data;
    }
   
  );
    }
    goBack() {
      this.router.navigate(['/Producer']);
    }
  }


