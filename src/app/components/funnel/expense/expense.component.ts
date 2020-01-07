import { SessionStorage } from './../../../classes/session-storage';
import { Funnel } from './../../../enums/funnel.enum';
import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/classes/expense';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  expenses: Expense[] = [new Expense()];
  
  constructor(private router: Router, private expenseService: ExpenseService) { }

  ngOnInit() {
  }

  add(): void{
    this.expenses[this.expenses.length] = new Expense();
  }

  save(): void{
    console.log("saving income...");
    console.log(this.expenses);

    this.expenseService.save(this.expenses, Funnel.EXPENSE).subscribe(savedExpenses => {
      console.log("response from server");
      console.log(savedExpenses);
      SessionStorage.setProfileSetupStatus(Funnel.EXPENSE);
      this.router.navigate(['/fn/profile']);
    });
  }
}
