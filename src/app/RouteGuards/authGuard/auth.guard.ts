import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

function isTokenValid(token: string | null): boolean {
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('Bearer');
  if (isTokenValid(token)) {
    return true;
  }
  const router = inject(Router);
  router.navigate(['login']);
  return false;
};
