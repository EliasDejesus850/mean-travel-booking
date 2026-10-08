import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtInterceptor } from './jwt-interceptor';

describe('jwtInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => {
      const instance = TestBed.inject(JwtInterceptor);

      const handler: HttpHandler = {
        handle: (request: HttpRequest<any>): Observable<HttpEvent<any>> => next(request),
      };

      return instance.intercept(req, handler);
    });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtInterceptor]
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});

