import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceneworderComponent } from './placeneworder.component';

describe('PlaceneworderComponent', () => {
  let component: PlaceneworderComponent;
  let fixture: ComponentFixture<PlaceneworderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceneworderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceneworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
