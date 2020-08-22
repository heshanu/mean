
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeComponent} from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const appRoutes:Routes=[
  {path:' ',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path: 'register', component: RegisterComponent },
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'profile',component:ProfileComponent},
  {path:'dashboard',component:DashboardComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
