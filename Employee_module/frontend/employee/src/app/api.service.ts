import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  constructor(private httpclient: HttpClient) { }
  getLogin(model:any){
    
    return this.httpclient.post<{token:string}>('http://127.0.0.1:8080/api/login',model);
  }

  registration(model:any){
       return this.httpclient.post('http://127.0.0.1:2000/api/user',model);
  } 

  // checkToken(){
  //      return this.httpclient.get('http://127.0.0.1:8080/api/checktoken');
  // }

  getEvents() :Observable<any>{
       return this.httpclient.get('http://127.0.0.1:2000/hr/events').pipe(
        map(this.extractData));
  }
  clockIn(){
    return this.httpclient.get('http://127.0.0.1:8080/api/empTracker');
  }

  clockOut(){
    return this.httpclient.get('http://127.0.0.1:8080/api/empTrackerstop');
  }
}
