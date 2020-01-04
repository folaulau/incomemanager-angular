import { Expense } from './../classes/expense';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/internal/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private  httpClient: HttpClient) { }

  public save(incomes: Expense[]) : Observable<Expense[]> {
    console.log(`saving income`);
    const url = 'http://localhost:8082/expenses';

    const httpOptions = {
      headers: new HttpHeaders(
        { 
          'token': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      )
    };

    return this.httpClient.post<Expense[]>(url, incomes, httpOptions)
    .pipe(
      tap(data => console.log(data)),
      catchError((error: HttpErrorResponse) => {
        console.log(error);

        return throwError(
          'Something bad happened; please try again later.' + error.message);
      })
    );
  }
}
