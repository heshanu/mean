import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'register',component:RegsiterComponent},
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
    RegsiterComponent,
    HomeComponent,
    ProfileComponent
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
