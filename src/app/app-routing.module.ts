import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./nav-bar/home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ContactComponent} from "./nav-bar/contact/contact.component";
import {MyProfileRoutingModule} from "./my-profile-module/my-profile-routing.module";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'contact' , component: ContactComponent},
  {path:'',redirectTo: '/home', pathMatch:'full'},
  {path:'**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MyProfileRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
