import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import * as fromGuards from './guards';import { MovieComponent } from './movie/movie.component';
import { UpdateCinemaComponent } from './update-cinema/update-cinema.component';
import { ProducerDetailsComponent } from './producer-details/producer-details.component';
import { UpdateProducerComponent } from './update-producer/update-producer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CreateActorComponent } from './create-actor/create-actor.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { CreateProducerComponent } from './create-producer/create-producer.component';
import { CreateCinemaComponent } from './create-cinema/create-cinema.component';
import { ActordetailsComponent } from './actordetails/actordetails.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { ProducerComponent } from './producer/producer.component';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { UpdateActorComponent } from './update-actor/update-actor.component';
import { ActorsComponent } from './actors/actors.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { TicketComponent } from './ticket/ticket.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';

const routes: Routes = [
  {path: "login", component: LoginComponent,canActivate: [fromGuards.CloseAuthGuardService],},
  // {path: "home", component: HomeComponent,canActivate: [fromGuards.AuthGuardService],},
  {path: "register", component: RegisterComponent,},
  { path: 'Actor', component: ActorsComponent,canActivate: [fromGuards.AuthGuardService] },
  { path: 'Cinema', component: CinemasComponent,canActivate: [fromGuards.AuthGuardService] },
  { path: 'Producer', component: ProducerComponent,canActivate: [fromGuards.AuthGuardService] },
  { path: 'details/:id', component: ActordetailsComponent },
  { path: 'Movie-details/:id', component: MovieDetailsComponent },
  { path: 'producer-details/:id', component: ProducerDetailsComponent },
  { path: 'cinemadetails/:id', component: CinemaDetailsComponent ,  },
  { path: 'update-actor/:id', component: UpdateActorComponent , canActivate: [fromGuards.AuthGuardService]},
  { path: 'update-producer/:id', component: UpdateProducerComponent , canActivate: [fromGuards.AuthGuardService]},
  { path: 'update-cinema/:id', component: UpdateCinemaComponent , canActivate: [fromGuards.AuthGuardService] },
  { path: 'Movie', component: MovieComponent },
  { path: 'create', component: CreateActorComponent , canActivate: [fromGuards.AuthGuardService] },
  { path: 'create-Movie', component: CreateMovieComponent , canActivate: [fromGuards.AuthGuardService]},
  { path: 'create-producer', component: CreateProducerComponent , canActivate: [fromGuards.AuthGuardService]},
  { path: 'create-cinema', component: CreateCinemaComponent , canActivate: [fromGuards.AuthGuardService]},
  {path: '', redirectTo:'Movie' , pathMatch:'full'},
  {path: 'order' , component : CartComponent , canActivate: [fromGuards.AuthGuardService]},
  { path: 'payment/:id', component: PaymentComponent},
  { path: 'update-movie/:id', component: UpdateMovieComponent },
  { path: 'ticket/:id', component: TicketComponent },
  {path: 'all-order' , component:AllOrdersComponent , canActivate: [fromGuards.AuthGuardService]}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
