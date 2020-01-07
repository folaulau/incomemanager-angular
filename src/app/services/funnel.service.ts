import { Injectable } from '@angular/core';
import { Funnel } from '../enums/funnel.enum';

@Injectable({
  providedIn: 'root'
})
export class FunnelService {

  constructor() { }

  getFunnel(funnel: string): string {
    console.log("funnel: "+funnel);
    let funnelStatus = "income";

    if(funnel===Funnel.DONE || funnel===Funnel.PROFILE){
      funnelStatus = "dash";
    }else if(funnel===Funnel.SIGNUP){
      funnelStatus = "fn/income";
    }else if(funnel===Funnel.INCOME){
      funnelStatus = "fn/expense";
    }else if(funnel===Funnel.EXPENSE){
      funnelStatus = "fn/profile";
    }

    return funnelStatus;
  }
}
