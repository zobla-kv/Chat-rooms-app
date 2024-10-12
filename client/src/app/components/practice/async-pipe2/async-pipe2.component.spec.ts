import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipe2Component } from './async-pipe2.component';

describe('AsyncPipe2Component', () => {
  let component: AsyncPipe2Component;
  let fixture: ComponentFixture<AsyncPipe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncPipe2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncPipe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
