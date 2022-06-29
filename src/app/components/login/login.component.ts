import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  users? : User[];


  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
    this.login();
  }
  
  login(){
    this.userService.login("Ajdin01", "password1").subscribe(response => {
      console.log(response);
    })
  } 

}
