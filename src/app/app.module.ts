import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { PaymentComponent } from './payment/payment.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import * as fromGuards from './guards';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import{HttpClientModule} from '@angular/common/http'

import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { ActordetailsComponent } from './actordetails/actordetails.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { ProducerComponent } from './producer/producer.component';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { UpdateActorComponent } from './update-actor/update-actor.component';
import { FormBuilder, FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { UpdateCinemaComponent } from './update-cinema/update-cinema.component';
import { ProducerDetailsComponent } from './producer-details/producer-details.component';
import { UpdateProducerComponent } from './update-producer/update-producer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CreateActorComponent } from './create-actor/create-actor.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { CreateProducerComponent } from './create-producer/create-producer.component';
import { CreateCinemaComponent } from './create-cinema/create-cinema.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Ticket } from './ticket/Ticket';
import { TicketComponent } from './ticket/ticket.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    ActorsComponent,
    ActordetailsComponent,
    CinemasComponent,
    ProducerComponent,
    CinemaDetailsComponent,
    UpdateActorComponent,
    MovieComponent,
    UpdateCinemaComponent,
    ProducerDetailsComponent,
    UpdateProducerComponent,
    MovieDetailsComponent,
    CreateActorComponent,
    CreateMovieComponent,
    CreateProducerComponent,
    CreateCinemaComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
PaymentComponent,
UpdateMovieComponent,
TicketComponent,
AllOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    // NgModule,
Ng2SearchPipeModule,
NgImageSliderModule
  ],

  bootstrap: [AppComponent],
  exports: [RouterModule],
  providers: [AuthService,...fromGuards.GUARDS,],
})
export class AppModule {

}
