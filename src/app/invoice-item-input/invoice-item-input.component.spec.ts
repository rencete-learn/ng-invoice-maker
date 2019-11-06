import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceItemInputComponent } from './invoice-item-input.component';

describe('InvoiceItemInputComponent', () => {
  let component: InvoiceItemInputComponent;
  let fixture: ComponentFixture<InvoiceItemInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceItemInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
