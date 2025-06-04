import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { RefreshTokenService } from '../../services/refreshTokenService/refresh-token.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const refreshTokenService = inject(RefreshTokenService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !req.url.includes('/refreshtoken')) {
        return refreshTokenService.refreshToken({}).pipe(
          switchMap((res: any) => {
            localStorage.setItem('Bearer', res.accessToken);

            const cloned = req.clone({
              withCredentials: true,
              setHeaders: {
                Authorization: `Bearer ${res.accessToken}`,
              },
            });
            return next(cloned)
          }),
          catchError(refreshError => {
            localStorage.removeItem('Bearer');
            router.navigate(['/login']); 
            return throwError(() => refreshError);
          })
        );
      }
      return throwError(() => error);
    })
  );
};