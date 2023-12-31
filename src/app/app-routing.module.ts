import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Core/login/login.component';
import { SginupComponent } from './Core/sginup/sginup.component';
import { AboutComponent } from './Core/about/about.component';
import { HomeComponent } from './Core/home/home.component';
import { MenuComponent } from './Core/menu/menu.component';
import { ContactComponent } from './Core/contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Menu',component:MenuComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'Signup',component:SginupComponent},
  {path:'about',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
