import { Component, ViewEncapsulation } from '@angular/core';
import { ServiceService } from '../../../shared/services/service.service';
import { delay, filter, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-async-pipe1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-pipe1.component.html',
  styleUrl: './async-pipe1.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AsyncPipe1Component {

  syncObservable$: Observable<number>;

  syncSubject$: Observable<number>;

  constructor(private service: ServiceService) {
    this.syncObservable$ =
      service.syncObservable$
      .pipe(
        map(e => e * 2),
        delay(2000)
      );

    this.syncSubject$ =
      service.syncSubject$
      .pipe(
        map(e => e * 2),
        delay(2000)
      );

  }

  increment() {
    this.service.syncSubject$.next(10);
  }

}
