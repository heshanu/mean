import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.css']
})
export class RegsiterComponent implements OnInit {

  name:String;
  username:String;
  email:String;
  password:String;


  constructor() { }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    console.log(123)
  }

}
