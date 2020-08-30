import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
//import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  username:String;
  password:String;
  email:String;
  constructor(private authService: AuthService,private router:Router){}

  ngOnInit(): void {}

  onRegisterSubmit(){
    const user={
      name:this.name,
      email:this.email,
      password:this.password,
      username:this.username
    }

    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
       // this.flashMessage.show('you are now registered and can log in', {});
        this.router.navigate(['/login']);
      }
      else {
        this.router.navigate(['/register']);
      }
    });
  }
};
