import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteornewComponent } from './completeornew.component';

describe('CompleteornewComponent', () => {
  let component: CompleteornewComponent;
  let fixture: ComponentFixture<CompleteornewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteornewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteornewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
