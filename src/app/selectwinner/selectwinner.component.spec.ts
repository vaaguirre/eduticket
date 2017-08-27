import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectwinnerComponent } from './selectwinner.component';

describe('SelectwinnerComponent', () => {
  let component: SelectwinnerComponent;
  let fixture: ComponentFixture<SelectwinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectwinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectwinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
