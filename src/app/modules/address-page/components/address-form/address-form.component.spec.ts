import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddressFormComponent } from './address-form.component';

describe('AddressFormComponent', () => {
  let component: AddressFormComponent;
  let fixture: ComponentFixture<AddressFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressFormComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form should be invalid', () => {
    component.addressForm.controls.firstName.setValue('');
    component.addressForm.controls.lastName.setValue('');
    component.addressForm.controls.patronymic.setValue('');
    component.addressForm.controls.phone.setValue('');

    expect(component.addressForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.addressForm.controls.firstName.setValue('');
    component.addressForm.controls.lastName.setValue('Last name');
    component.addressForm.controls.patronymic.setValue('');
    component.addressForm.controls.phone.setValue('+7(333) 333-33-33');

    expect(component.addressForm.valid).toBeTruthy();
  });

  it('should call the submit method', async(() => {
    spyOn(component, 'submit');
    const el = fixture.debugElement.query(By.css('button')).nativeElement;

    el.click();

    expect(component.submit).toHaveBeenCalled();
  }));

  it('should return value of first name field', () => {
    component.addressForm.controls.firstName.setValue('name');

    expect(component.firstName.value).toBe('name');
  });

  it('should return value of last name field', () => {
    component.addressForm.controls.lastName.setValue('last name');

    expect(component.lastName.value).toBe('last name');
  });

  it('should return value of patronymic field', () => {
    component.addressForm.controls.patronymic.setValue('patronymic');

    expect(component.patronymic.value).toBe('patronymic');
  });

  it('should return value of phone field', () => {
    component.addressForm.controls.patronymic.setValue('+7(333) 333-33-33');

    expect(component.patronymic.value).toBe('+7(333) 333-33-33');
  });
});
