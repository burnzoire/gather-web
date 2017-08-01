import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = this.auth.getAuthorizationHeader();
    const authReq = req.clone({setHeaders: {Authorization: authHeader}});

    return next.handle(authReq);
  }
}
