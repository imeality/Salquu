import {Injectable} from '@angular/core';
import {HttpEvent, HttpClient,HttpResponse, HttpRequest, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {Observable } from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let token = localStorage.getItem('access_token');

        console.log("inside interceptor" , token);

        request = request.clone({headers:request.headers.set('Authorization','Bearer'+token)});

        console.log("Request " ,request.headers['Authorization']);
        
        return next.handle(request);
    }
}