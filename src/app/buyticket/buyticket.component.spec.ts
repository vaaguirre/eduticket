import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyticketComponent } from './buyticket.component';

describe('BuyticketComponent', () => {
  let component: BuyticketComponent;
  let fixture: ComponentFixture<BuyticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
