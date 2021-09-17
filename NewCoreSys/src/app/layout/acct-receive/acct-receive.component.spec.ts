import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctReceiveComponent } from './acct-receive.component';

describe('AcctReceiveComponent', () => {
  let component: AcctReceiveComponent;
  let fixture: ComponentFixture<AcctReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcctReceiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
