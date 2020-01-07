import { SessionStorage } from './../classes/session-storage';
import { Stats } from './../classes/stats';
import { User } from 'src/app/classes/user';
import { SessionData } from './../classes/session-data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
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
      tap(data => {
        this.saveSessionData(data);
        console.log(data);
      }),
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

    return this.httpClient.post<SessionData>(url, {'email':email,'password':password}, httpOptions)
    .pipe(
      tap(data => {
        this.saveSessionData(data);
        console.log(data);
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(
          'Something bad happened; please try again later.' + error.message);
      })
    );
  }

  private saveSessionData(sessionData: SessionData): void{
    localStorage.setItem("token",sessionData.token);
    localStorage.setItem("uuid",sessionData.userUuid);
    localStorage.setItem("sessionData",JSON.stringify(sessionData));

  }

  updateProfile( user: User, funnel: string): Observable<User> {
    console.log(`updating profile`);
    const url = 'http://localhost:8082/users/profile';

    const httpOptions = {
      headers: new HttpHeaders({ 'token': localStorage.getItem('token'),'Content-Type': 'application/json' })
    };

    if(funnel!=undefined && funnel!=null && funnel!==""){
      httpOptions['params'] = new HttpParams().set('funnel', funnel);
    }
    
    return this.httpClient.put<User>(url, user, httpOptions)
    .pipe(
      tap(data => console.log(data)),
      catchError((error: HttpErrorResponse) => {
        return throwError(
          'Something bad happened; please try again later.' + error.message);
      })
    );
  }

  getStats(): Observable<Stats> {
    console.log(`get account stats`);
    const url = 'http://localhost:8082/users/account/stats';

    const httpOptions = {
      headers: new HttpHeaders({ 'token': localStorage.getItem('token'),'Content-Type': 'application/json' }),
      params: new HttpParams().set('accountUuid', SessionStorage.getAccountUuid())
    };

    return this.httpClient.get<Stats>(url, httpOptions)
    .pipe(
      tap(data => console.log(data)),
      catchError((error: HttpErrorResponse) => {
        return throwError(
          'Something bad happened; please try again later.' + error.message);
      })
    );
  }

  getProfile(): Observable<User> {
    console.log(`get account stats`);
    const url = 'http://localhost:8082/users/profile';

    const httpOptions = {
      headers: new HttpHeaders({ 'token': SessionStorage.getAuthToken(),'Content-Type': 'application/json' }),
      params: new HttpParams().set('uuid', SessionStorage.getUuid())
    };

    return this.httpClient.get<User>(url, httpOptions)
    .pipe(
      tap(data => console.log(data)),
      catchError((error: HttpErrorResponse) => {
        return throwError(
          'Something bad happened; please try again later.' + error.message);
      })
    );
  }
}
