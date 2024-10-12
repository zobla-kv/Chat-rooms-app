import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { filter, map, Observable, Subject, takeUntil, tap } from 'rxjs';

import { WebsocketClientComponent } from '@chat/components';

import { User } from '@models';
import { LoginButtonComponent } from '@shared/components';
import { select, Store } from '@ngrx/store';
import { selectUser, selectUserId, selectUserUsername } from '@store/selectors';
import { AppState } from '@store/models';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [CommonModule, WebsocketClientComponent, LoginButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  user$: Observable<User | null>;
  username$: Observable<string | undefined>;
  userId$: Observable<string | undefined>;

  // error stream // TODO: try to use
  // error$: Observable<string | null>;

  // destroy stream
  destroy$ = new Subject<void>();

  title = 'signals';

  constructor(
    private _store: Store<AppState>
  ) {

    this.user$ = this._store.select(selectUser)
    .pipe(
      tap(user => console.log('app component user: ', user)),
      takeUntil(this.destroy$),
      filter(user => !!user),
    );



    // this.userId$ = this._store.select(selectUserId);
    this.userId$ = this._store.pipe(select(selectUserId));
    this.username$ = this._store.select(selectUserUsername);

    // this.error$ = this._store.select()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
