import { Component } from '@angular/core';

import { Observable, concat, defer, delay, distinctUntilChanged, filter, from, fromEvent, interval, map, merge, mergeMap, of, pluck, range, switchMap, take, takeUntil, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {

  observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });


  firstValues = ['first1', 'first2', 'first3'];
  secondValues = ['second1', 'second2', 'second3'];

  ngOnInit() {
    // console.log('just before subscribe');
    // this.observable.subscribe({
    //   next(x) {
    //     console.log('got value ' + x);
    //   },
    //   error(err) {
    //     console.error('something wrong occurred: ' + err);
    //   },
    //   complete() {
    //     console.log('done');
    //   },
    // });
    // console.log('just after subscribe');

    // const defer1$ = this.defer();
    // const defer2$ = this.defer();
    // const defer3$ = this.defer();
    // this.merge();
    // this.concat()
    // this.mergeMap();
    // this.mergeMap2();
    // this.concatMap();
    // this.distinctUntilChanged();
    // this.dragNDrop();

    this.TwoStreams();
  }


  // rxjs operator that creates an observable and subscribes to it when .subscribe is called
  defer() {
    return defer(() => {
      const random = Math.random();
      if (random > 0.5) {
        return fromEvent(document, 'click')
      }
      return interval(1000);
    })
    .subscribe(x => console.log(x))
  }

  // forward the events from several streams in order of arrival into one observable, like a funnel
  merge() {
    const stream1 = fromEvent(document, 'keyup');
    const stream2 = fromEvent(document, 'click');

    // merge(stream1, stream2).pipe(take(5)).subscribe(e => console.log('merge e: ', e));

    // merge emits all values from stream 1 first
    const stream3 = of(1, 2, 3);
    const stream4 = of('a', 'b', 'c');
    // merge(stream3, stream4).pipe(take(6)).subscribe(e => console.log('merge e: ', e));

  }

   // subscribes to one stream at the time, first must be completed before second is available. Used to preserve order
   concat() {
    const stream1 = range(1, 4).pipe(delay(2000));
    const stream2 = of('a', 'b', 'c');

    concat(stream1, stream2).pipe(take(10)).subscribe(e => console.log('concat e: ', e));
  }

  // if observable returns an observable, it flattens it so consumer recieves value that is inside it
  mergeMap() {
    const url = 'https://baconipsum.com/api/?type=meat-and-filler';
    const search$ =
      fromEvent(document, 'keyup')
      .pipe(
        mergeMap(key => ajax({ url, crossDomain: true })),
        map(res => res.response)
      )
      .subscribe(res => console.log('mergeMap res: ', res))
  }

  // fetch data every 2 seconds
  mergeMap2() {
    const url = 'https://baconipsum.com/api/?type=meat-and-filler';
    const every2Seconds$ = interval(2000);

    every2Seconds$
    .pipe(
      mergeMap(key => ajax({ url, crossDomain: true })),
      map(res => res.response)
    )
    .subscribe(res => console.log('mergeMap2 res: ', res))
  }

  // waits for first observable to complete then subscribes to next
  concatMap() {
    const url = 'https://baconipsum.com/api/?type=meat-and-filler';
    const search$ =
      ajax({ url, crossDomain: true })
      .pipe(
        delay(2000), // ajax is executed immediatelly, delay postpones when consumer recieves value
        tap(res => console.log('concatMap res: ', res)),
        mergeMap(key => fromEvent(document, 'keyup')),
      )
      .subscribe(key => console.log('concatMap key: ', key))
  }

  // ignore the previous value if is not changed
  distinctUntilChanged() {
    const stream = from([1, 2, 3, 3, 2, 2, 5]);

    stream
    .pipe(
      distinctUntilChanged()
    )
    .subscribe(num => console.log('distinctUntilChanged num: ', num))
  }

  // drag and drop functionality
  dragNDrop() {
    const element = document.getElementsByClassName('test')[0] as HTMLElement;
    console.log('element: ', element)
    const mouseDown$ = fromEvent<MouseEvent>(element, 'mousedown');
    const mouseMove$ = fromEvent<MouseEvent>(element, 'mousemove');
    const mouseUp$ = fromEvent<MouseEvent>(element, 'mouseup');

    mouseDown$
    .pipe(
      mergeMap(event => mouseMove$.pipe(takeUntil(mouseUp$)))
    )
    .subscribe((ev: MouseEvent)  => {
      console.log('dragNDrop: event', ev);
      element.style.position = 'absolute'; // Ensure element is positioned absolutely
      element.style.left = ev.clientX + 'px';
      element.style.top = ev.clientY + 'px';
    })
  }

  // cold observables example
  TwoStreams() {
    const interval$ = interval(500);
    const isEven = (x: any) => x % 2 === 0;
    const isNotEven = (x: any) => x % 2 === 1;

    interval$
    .pipe(
      filter(isEven),
      take(5)
    )
    .subscribe(x => console.log(`Even number found: ${x}`));

    interval$
    .pipe(
      filter(isNotEven),
      take(5)
    )
    .subscribe(x => console.log(`Not even number found: ${x}`));

  }

}
