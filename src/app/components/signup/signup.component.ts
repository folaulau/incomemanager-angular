import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(private userService: UserService, private router: Router) { 
    this.password = "Test1234!";
    this.firstName = "Folau";
    this.lastName = "Kaveinga";
    this.email = "folaudev@gmail.com";
  }

  signUp():void{
    console.log("signing up...");
    const id = Math.floor(Math.random() * 100000) + 1;
    this.userService.signUp("folaudev+"+id+"@gmail.com",this.password, this.firstName, this.lastName).subscribe(sessionData => {
      console.log("response from server");
      console.log(sessionData);
      localStorage.setItem("token", sessionData.token);

      this.router.navigate(['/fn/income']);
    });
    console.log("sign up done!")
  }

  ngOnInit() {
  }

}
