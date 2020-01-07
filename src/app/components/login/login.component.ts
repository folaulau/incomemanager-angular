import { SessionStorage } from './../../classes/session-storage';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FunnelService } from 'src/app/services/funnel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private userService: UserService, private funnelService: FunnelService, private route: ActivatedRoute,  private router: Router) {
    this.email = "folaudev+30672@gmail.com";
    this.password = "Test1234!";
  }

  ngOnInit() {
  }

  login(): void {
    console.log("logging in...");
    this.userService.login(this.email,this.password).subscribe(sessionData => {
      console.log("response from server");
      console.log(sessionData);
      
      SessionStorage.startSession(sessionData);

      const destination = this.funnelService.getFunnel(sessionData.profileSetupStatus);

      this.router.navigate([destination]);

    });
    console.log("login done!");
  }

}
