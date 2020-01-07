import { FunnelService } from 'src/app/services/funnel.service';
import { Funnel } from './../../enums/funnel.enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router,private funnelService: FunnelService) {

    const profileSetupStatus = localStorage.getItem("profileSetupStatus");

    const destination = this.funnelService.getFunnel(profileSetupStatus);

    this.router.navigate([destination]);
    
  }

  ngOnInit() {
  }

}
