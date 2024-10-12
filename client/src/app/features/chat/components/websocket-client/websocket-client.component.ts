import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { WebsocketService } from '@features/chat/services';


@Component({
  selector: 'app-websocket-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './websocket-client.component.html',
  styleUrl: './websocket-client.component.css'
})
export class WebsocketClientComponent {

    // this.client$ = this._websocketService.client$;
    // this.serverMessage$ = this._websocketService.serverMessage$;

}
