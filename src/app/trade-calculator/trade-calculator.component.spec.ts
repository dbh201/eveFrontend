import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeCalculatorComponent } from './trade-calculator.component';

describe('TradeCalculatorComponent', () => {
  let component: TradeCalculatorComponent;
  let fixture: ComponentFixture<TradeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
