import { User } from './../../classes/user';
import { Stats } from './../../classes/stats';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {


  stats = new Stats();
  user = new User();

  constructor(private userService: UserService) {
    this.userService.getStats().subscribe(stats => {
      console.log(stats);
      this.stats = stats;
    });
    this.userService.getProfile().subscribe(u => {
      console.log(u);
      this.user = u;
    });

  }

  ngOnInit() {
  }

}
