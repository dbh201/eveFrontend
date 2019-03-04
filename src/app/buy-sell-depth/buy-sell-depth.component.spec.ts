import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellDepthComponent } from './buy-sell-depth.component';

describe('BuySellDepthComponent', () => {
  let component: BuySellDepthComponent;
  let fixture: ComponentFixture<BuySellDepthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuySellDepthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySellDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
