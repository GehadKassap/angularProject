import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';
import{HttpClientModule} from '@angular/common/http';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { SubmitComponent } from './submit/submit.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    CardComponent,
    ProfileComponent,
    SeemorePipe,
    SearchPipe,
    SubmitComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
     FormsModule ,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
