import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageAuthService } from 'src/app/shared/services/storage-auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthorizatedInterceptor implements HttpInterceptor {

  private loginUrl = environment.loginUrl;
  constructor(
    private router: Router,
    private storage: StorageAuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Modificando el request de una peticion http
    const newRequest = request.clone({
      setHeaders: {
        Authorization: this.getToken()
      }
    });

    // modificando el response de una peticion http
    const response = next.handle(newRequest).pipe(
      // tap(res => console.log(`response observable interceptor`, res))
      tap( 
        () => {},
        error => {
          if (error.status === 401) {
            this.router.navigate([this.loginUrl]);
          }
        }
      )
    )
    
    return response;
  }

  getToken(): string {
    const token = this.storage.getToken();
    return `JWT ${token}`;
  }
}
