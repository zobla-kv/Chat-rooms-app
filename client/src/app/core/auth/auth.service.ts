import { Injectable } from "@angular/core";

import { BehaviorSubject, catchError, delay, Observable, shareReplay, throwError } from "rxjs";

import { Store } from "@ngrx/store";

import {
  User
} from "@models";

import { AppState } from "@store/models";

import { ApiService } from "@core/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user
  // private _userSubject = new BehaviorSubject<User | null>(null);
  // user$ = new BehaviorSubject<User | null>(null);

  // Expose user$ as an Observable to prevent direct manipulation
  // user$: Observable<User | null> = this._userSubject.asObservable();

  constructor(
    private _store: Store<AppState>,
    private _apiService: ApiService
  ) {}

  login(): Observable<User> {
    return this._apiService.login();
  }

}
