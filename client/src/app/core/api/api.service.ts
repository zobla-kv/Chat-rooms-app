import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { catchError, map, Observable, of, throwError } from "rxjs";

import {
  AuthServerError,
  User,
} from '@models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient,
  ) { }

  login(): Observable<User> {
    return this._http.post<User>('http://localhost:3000/api/auth/login', {})
  }
}
