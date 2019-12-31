import { SessionData } from './../classes/session-data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private  httpClient: HttpClient) {
  }

  public signUp(email: string, password: string, firstName: string, lastName: string) : Observable<SessionData> {
    console.log(`calling api to sign up...${firstName}...${lastName}...${email}...${password}`);
    const url = 'http://localhost:8082/users/signup';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.httpClient.post<SessionData>(url, { 'email' : email, 'password' : password, 'firstName' : firstName, 'lastName' : lastName  }, httpOptions)
    .pipe(
      tap(data => console.log(data)),
      catchError((error: HttpErrorResponse) => {
        return throwError(
          'Something bad happened; please try again later.' + error.message);
      })
    );
  }

  public login(email: string, password: string) : Observable<SessionData> {
    console.log(`calling api to login...${email}...${password}`);
    const url = 'http://localhost:8082/users/login';

    

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.httpClient.post<SessionData>(url, {}, httpOptions)
    .pipe(
      tap(data => console.log(data)),
      catchError((error: HttpErrorResponse) => {
        return throwError(
          'Something bad happened; please try again later.' + error.message);
      })
    );
  }
}
