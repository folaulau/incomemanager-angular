import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { Address } from 'src/app/classes/address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User = new User();
  showAddress = false;

  constructor(private userService: UserService, private router: Router) {
    this.user.uuid = localStorage.getItem("uuid");
    this.user.address = new Address();

    const sessionData = JSON.parse(localStorage.getItem('sessionData'));
    this.showAddress = sessionData.primary;
  }

  ngOnInit() {
  }

  save(): void{
    console.log("save");

    console.log(this.user);

    this.userService.updateProfile(this.user).subscribe(savedUser => {
      console.log("got response from the server...");
      console.log(savedUser);
      this.router.navigate(['/dash']);
    });
  }

}
