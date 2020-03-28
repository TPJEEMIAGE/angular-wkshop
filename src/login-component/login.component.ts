import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      login: '',
      password: ''
    });
  }

  onSubmit(loginData){
    window.alert(loginData.login + " " + loginData.password);
  }

}