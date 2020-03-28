import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { createConnection } from "typeorm";
import { User } from '../user';

const connection = createConnection();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;
  users : User[] = [];
  

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      login: '',
      password: ''
    });
  }

  onSubmit(loginData){
    connection.then(() => User.find()).then(users => {this.users = users});
  }

}