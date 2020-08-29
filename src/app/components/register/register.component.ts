import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  username:String;
  password:String;email:String;
  constructor() { }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    console.log("ho")
  }
}
