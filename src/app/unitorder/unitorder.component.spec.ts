import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitorderComponent } from './unitorder.component';

describe('UnitorderComponent', () => {
  let component: UnitorderComponent;
  let fixture: ComponentFixture<UnitorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
