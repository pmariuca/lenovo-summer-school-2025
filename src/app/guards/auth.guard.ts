import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('loginToken');

  if (token) {
    return true;
  }

  router.navigate(['login']);
  return false;
};