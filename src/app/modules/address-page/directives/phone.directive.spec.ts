import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

import { PhoneDirective } from './phone.directive';

@Component({
  template: `
    <form [formGroup]="addressForm" class="form">
      <input appPhoneMask name="phone" formControlName="phone">
    </form>
  `,
})
class HostComponent implements OnInit {
  public addressForm: FormGroup;

  public ngOnInit(): void {
    this.addressForm = new FormGroup({
      phone: new FormControl('')
    });
  }
}

@NgModule({
  declarations: [HostComponent, PhoneDirective],
  imports: [ReactiveFormsModule],
  exports: [HostComponent],
})
class HostModule {}

describe('PhoneDirective', () => {
  let component: HostComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HostModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create a host instance', () => {
    expect(component).toBeTruthy();
  });

  it('should add padding', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const el = input.nativeElement;

      el.value = '3';
      el.dispatchEvent(new Event('input'));

      expect(el.value).toBe('+7(3)');

      el.value = '+733';
      el.dispatchEvent(new Event('input'));

      expect(el.value).toBe('+7(33)');

      el.value = '+7333';
      el.dispatchEvent(new Event('input'));

      expect(el.value).toBe('+7(333)');

      el.value = '+73333';
      el.dispatchEvent(new Event('input'));

      expect(el.value).toBe('+7(333) 3');

      el.value = '+733333';
      el.dispatchEvent(new Event('input'));

      expect(el.value).toBe('+7(333) 33');

      el.value = '+7333333';
      el.dispatchEvent(new Event('input'));

      expect(el.value).toBe('+7(333) 333');

      el.value = '+73333333';
      el.dispatchEvent(new Event('input'));

      expect(el.value).toBe('+7(333) 333-3');

      el.value = '+733333333';
      el.dispatchEvent(new Event('input'));

      expect(el.value).toBe('+7(333) 333-33');

      el.value = '+7333333333';
      el.dispatchEvent(new Event('input'));

      expect(el.value).toBe('+7(333) 333-33-3');

      el.value = '+73333333333';
      el.dispatchEvent(new Event('input'));

      expect(el.value).toBe('+7(333) 333-33-33');
    });
  }));
});
