import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/router';
import { iAuthRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  authData:iAuthRequest = {
    userName : "",
    password : "",
  }

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  async login(form:NgForm) {

    console.log(form.value)

    const token = await this.auth.login(form.value)

    if (token) console.log("probando")
    
  }

}

