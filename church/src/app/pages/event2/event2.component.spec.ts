import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Event2Component } from './event2.component';

describe('Event2Component', () => {
  let component: Event2Component;
  let fixture: ComponentFixture<Event2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Event2Component]
    });
    fixture = TestBed.createComponent(Event2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
