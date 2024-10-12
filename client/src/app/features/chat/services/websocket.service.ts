import { Injectable } from '@angular/core';
import { catchError, EMPTY, fromEvent, map, Observable, of, Subject, switchMap, takeUntil, tap } from 'rxjs';

import { ServerMessage, User } from '@models';

@Injectable()
export class WebsocketService {
  // socket
  private _socket = new WebSocket('ws://localhost:3000');

  // message from server
  serverMessage$: Observable<ServerMessage>;
  // other users connected to socket
  // otherUsers$: Observable<User>;
  // message from other user
  // userMessage$: Observable<UserMessage>;

  // close connection
  closeConnection$ = EMPTY;

  constructor(
  ) {

    fromEvent(this._socket, 'open')
    .pipe(
      // startWith(null),
      takeUntil(this.closeConnection$)
    )
    .subscribe({
      next: (event) => {
        console.log('socket open: ', event)
        // subscriber.next({ id: '1'});
      },
      error: (err) => {
        console.log('error on open: ', err);
        // subscriber.error();
      }
    })

    this.serverMessage$ = fromEvent(this._socket, 'message')
    .pipe(
      takeUntil(this.closeConnection$),
      map(ev => {
        console.log('server ev: ', ev);
        return {
          message: 'server',
          data: 'serverdata'
        };
      })
    );

    fromEvent(this._socket, 'close')
    .subscribe(ev => {
      console.log('close socket ev: ', ev);
      this.closeConnection$.subscribe();
    })

  }

}
