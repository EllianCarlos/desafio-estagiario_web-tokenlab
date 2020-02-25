import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayBallComponent } from './day-ball.component';

describe('DayBallComponent', () => {
  let component: DayBallComponent;
  let fixture: ComponentFixture<DayBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
