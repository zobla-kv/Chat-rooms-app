import { Component } from '@angular/core';
import { ServiceService } from '../../../shared/services/service.service';
import { CommonModule } from '@angular/common';
import { delay, map, Observable, startWith, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-async-pipe2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-pipe2.component.html',
  styleUrl: './async-pipe2.component.css'
})
export class AsyncPipe2Component {

  // client server using websockets and rxjs

  syncSubject$: Observable<number>;

  constructor(private service: ServiceService) {

    this.syncSubject$ =
      service.syncSubject$
      .pipe(
        map(e => e * 3),
        delay(3000),
      )
  }

}
