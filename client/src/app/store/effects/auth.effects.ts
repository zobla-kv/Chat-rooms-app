import { inject, Injectable } from "@angular/core";

import { AuthService } from "@core/auth";

import { User } from "@models";

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { loginAction, loginSuccessAction, loginFailAction } from '@store/actions';

import { catchError, map, mergeMap, Observable, of, tap, throwError } from "rxjs";

@Injectable()
export class AuthEffects {

  private _actions$ = inject(Actions);

  constructor(
    private _authService: AuthService
  ) {
    this._actions$.pipe(tap((action => console.log('constructor action: ', action))))
  }

  loginEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loginAction),
      tap((action) => console.log('tap: ', action)),
      mergeMap(() =>
        this._authService.login().pipe(
          map((user: User) => loginSuccessAction({ user })),
          catchError(error => of(loginFailAction({ error }))) // TODO: place pipe below
        )
      )
    )
  )

}
