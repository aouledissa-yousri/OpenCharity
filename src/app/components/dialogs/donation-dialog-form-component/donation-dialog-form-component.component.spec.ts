import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDialogFormComponentComponent } from './donation-dialog-form-component.component';

describe('DonationDialogFormComponentComponent', () => {
  let component: DonationDialogFormComponentComponent;
  let fixture: ComponentFixture<DonationDialogFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationDialogFormComponentComponent]
    });
    fixture = TestBed.createComponent(DonationDialogFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
