import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishButtonComponent } from './finish-button.component';

describe('FinishButtonComponent', () => {
  let component: FinishButtonComponent;
  let fixture: ComponentFixture<FinishButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
