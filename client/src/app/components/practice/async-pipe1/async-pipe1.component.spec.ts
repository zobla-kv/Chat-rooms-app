import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipe1Component } from './async-pipe1.component';

describe('AsyncPipe1Component', () => {
  let component: AsyncPipe1Component;
  let fixture: ComponentFixture<AsyncPipe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncPipe1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncPipe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
