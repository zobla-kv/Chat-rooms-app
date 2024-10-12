import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAction } from '@store/actions';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.css'
})
export class LoginButtonComponent {

  constructor(
    private _store: Store
  ) {}

  handleLogin() {
    this._store.dispatch(loginAction());
  }

}
