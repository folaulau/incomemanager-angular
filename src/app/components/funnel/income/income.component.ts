import { SessionStorage } from './../../../classes/session-storage';
import { Funnel } from './../../../enums/funnel.enum';
import { Income } from './../../../classes/income';
import { Component, OnInit } from '@angular/core';
import { IncomeService } from 'src/app/services/income.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  incomes: Income[] = [new Income()];
  constructor(private incomeService: IncomeService, private router: Router) { }

  ngOnInit() {
  }

  add(): void{
    this.incomes[this.incomes.length] = new Income();
  }


  save(): void{
    console.log("saving income...");
    console.log(this.incomes);

    this.incomeService.save(this.incomes,Funnel.INCOME).subscribe(savedIncomes => {
      console.log("response from server");
      console.log(savedIncomes);
      
      SessionStorage.setProfileSetupStatus(Funnel.INCOME);

      this.router.navigate(['/fn/expense']);
    });
  }

}
