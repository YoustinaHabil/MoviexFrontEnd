import { CartService } from './../cart.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Movie } from '../Models/Movie';
import { MovieVm } from '../Models/MovieVM';
import { ProducerService } from '../producer.service';
import { Producers } from '../producer/Producers';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit  {





  Movies:Movie[]=[];
  isAuthenticated : boolean;
  userId:string;
  name:any;
  isAdmin:boolean
model:any;

Categories=['All','Action','Comedy','Drama','Documentary','Cartoon','Horror'];
  
  
  selectedCategory: string = 'All';


  imgCollection: Array<object> = [
    {

      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80',
      
    }, {
      image: 'https://images.unsplash.com/photo-1596221780522-71f822d9f63b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      thumbImage: 'https://images.unsplash.com/photo-1596221780522-71f822d9f63b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      
    }, {
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      
    }, {
      image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      
    }, {
      image: 'https://images.unsplash.com/photo-1545630478-cf62cdd247d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1545630478-cf62cdd247d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      
    }, {
      image: 'https://media.istockphoto.com/id/1054416300/photo/smiling-couple-wearing-3d-glasses.jpg?s=2048x2048&w=is&k=20&c=vzZIuKWfM7P1P8Vok90VdumQ6H2p4rBlL574q6LAvuI=',
      thumbImage: 'https://media.istockphoto.com/id/1054416300/photo/smiling-couple-wearing-3d-glasses.jpg?s=2048x2048&w=is&k=20&c=vzZIuKWfM7P1P8Vok90VdumQ6H2p4rBlL574q6LAvuI=',
      
    },{
      image: 'https://media.istockphoto.com/id/980491512/photo/senior-couple-at-the-movies.jpg?s=2048x2048&w=is&k=20&c=D9gmM-1kNY1LESIooYeKbmjJtm2KlYHPFzz67ROmqzQ=',
      thumbImage: 'https://media.istockphoto.com/id/980491512/photo/senior-couple-at-the-movies.jpg?s=2048x2048&w=is&k=20&c=D9gmM-1kNY1LESIooYeKbmjJtm2KlYHPFzz67ROmqzQ=',
      
    },{
      image: 'https://media.istockphoto.com/id/1053062408/photo/joyful-friends-at-cinema.jpg?s=2048x2048&w=is&k=20&c=RfzHjRsf1cu0f4dtnhY2lApwL_ifGrZAyc0ugOKCTO4=',
      thumbImage: 'https://media.istockphoto.com/id/1053062408/photo/joyful-friends-at-cinema.jpg?s=2048x2048&w=is&k=20&c=RfzHjRsf1cu0f4dtnhY2lApwL_ifGrZAyc0ugOKCTO4=',
      
    },{
      image: 'https://media.istockphoto.com/id/1442559168/photo/christmas-eve-alone-woman-watching-tv-and-eating-popcorn-home-cinema-cropped-close-up.jpg?s=612x612&w=is&k=20&c=zM8riZWVp83vgkrOBjqFGaj5bvrLdG80eGnd_mE1OtQ=',
      thumbImage: 'https://media.istockphoto.com/id/1442559168/photo/christmas-eve-alone-woman-watching-tv-and-eating-popcorn-home-cinema-cropped-close-up.jpg?s=612x612&w=is&k=20&c=zM8riZWVp83vgkrOBjqFGaj5bvrLdG80eGnd_mE1OtQ=',
      
    },{
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
     
    },{
      image: 'https://images.unsplash.com/photo-1545630478-cf62cdd247d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1545630478-cf62cdd247d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
     
    },
];





  constructor(private _http:HttpClient ,private router:Router,private producerservies:ProducerService , private cartService:CartService, private movieservice:MovieService ){}
  ngOnInit(): void {

    

   
    this._http.get<MovieVm>('http://localhost:37724/api/Movies').subscribe(response=>{

      this.Movies=response.Data;
     // console.log(this.Movies);
     this.isAdmin=JSON.parse(localStorage.getItem('isAdmin'));
     console.log(this.isAdmin)
    });
    this.isAuthenticated= JSON.parse(localStorage.getItem('isAuthenticated'))
    this.userId= JSON.parse(localStorage.getItem('userId'))
console.log(this.userId)
   }



  isAvailable(movie: Movie) {
    let check:boolean=false;
    if (new Date() >= new Date(movie.StartDate) && new Date() <= new Date(movie.EndDate)) {
    check=true;
    }
    return check;
  }
  isExpired(movie: Movie) {
    let check:boolean=false;
    if (new Date() >new Date(movie.EndDate)) {
    check=true;
    }
    return check;
  }

  isUpcoming(movie: Movie) {
    let check:boolean=false;
    if (new Date() <new Date(movie.StartDate)) {
    check=true;
    }
    return check;
  }
  ViewPaymentForm(id: number) {
    this.router.navigate(['/payment', id]);
  }
  viewDetails(id: number) {
    this.router.navigate(['/Movie-details', id]);
  }
  updateDetails(id: number): void {
    this.router.navigate(['/update-movie', id]);
  }
  delete(index:number){
    if(confirm('Are you sure to Delete this Movie')){



let movie=this.Movies[index];

this._http.delete<MovieVm>('http://localhost:37724/api/Movies/'+movie.Id)
.subscribe(response=>{
  this.Movies.splice(index,1);});
  alert('movie deleted Successfuly')}

   }

   onAddToCart(movieId){
    this.cartService.addToCart(this.userId ,movieId,1).subscribe({
      next:cartItem => {console.log(cartItem)

       },
      error:error => console.log(error) ,

    })
   }
   Search(){
    if (this.name == ""){
      this.ngOnInit();

    }
    else{
      this.Movies = this.Movies.filter(res =>{
        return res.Name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      }
       )
    }
   }

   getCategoryName(categoryIndex: number) {
    switch (categoryIndex) {
      case 1:
        return 'Action';
      case 2:
        return 'Comedy';
      case 3:
        return 'Drama';
      case 4:
        return 'Documentary';
      case 5:
        return 'Cartoon';
      case 6:
        return 'Horror';
      default:
        return '';
    }
  }
  setSelectedCategory(category: string) {
    console.log(this.selectedCategory);
    this.selectedCategory = category;
   
  }

  
  filterMovies() {
    if (this.selectedCategory == 'All') {
      return this.Movies;
    } else {
      return this.Movies.filter(movie => this.getCategoryName(movie.MovieCategory) == this.selectedCategory);
      
    }
  
  }
  
  
  getMovies() {
    this.movieservice.getMovies(this.selectedCategory)
      .subscribe(movies => {
        this.Movies = movies.Data;
      });
  }

  onSelectCategory(category: string) {
    this.selectedCategory = category;
    this.getMovies();
  }

}


