import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:"home" , component : HomeComponent} ,
  {path:"card" , component : CardComponent} ,
  {path:"profile" , component : ProfileComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
