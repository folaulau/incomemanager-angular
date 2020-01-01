import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private userService: UserService) {
    this.email = "folaudev+94159@gmail.com";
    this.password = "Test1234!";
  }

  ngOnInit() {
  }

  login(): void {
    console.log("logging in...");
    this.userService.login(this.email,this.password).subscribe(sessionData => {
      console.log("response from server");
      console.log(sessionData);
      localStorage.setItem("token", sessionData.token);
    });
    console.log("login done!");
  }

}
