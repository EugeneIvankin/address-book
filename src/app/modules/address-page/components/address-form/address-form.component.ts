import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { NewAddress } from '../../model';

enum FormFields {
  firstName = 'firstName',
  lastName = 'lastName',
  patronymic = 'patronymic',
  phone = 'phone'
}

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Output() public addNewAddress: EventEmitter<NewAddress> = new EventEmitter<NewAddress>();
  public addressForm: FormGroup;
  public formFields: typeof FormFields = FormFields;
  public phoneLength: number = 17;

  public ngOnInit(): void {
    this.addressForm = new FormGroup({
      lastName: new FormControl('', Validators.required),
      firstName: new FormControl(''),
      patronymic: new FormControl(''),
      phone: new FormControl('', [Validators.required, Validators.minLength(this.phoneLength)])
    });
  }

  public submit(): void {
    if (this.addressForm.valid) {
      this.addNewAddress.emit({
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        patronymic: this.patronymic.value,
        phone: this.phone.value
      });

      this.addressForm.reset();
    } else {
      this.lastName.markAsTouched();
      this.phone.markAsTouched();
    }
  }

  public get firstName(): AbstractControl {
    return this.addressForm.controls[this.formFields.firstName];
  }

  public get lastName(): AbstractControl {
    return this.addressForm.controls[this.formFields.lastName];
  }

  public get patronymic(): AbstractControl {
    return this.addressForm.controls[this.formFields.patronymic];
  }

  public get phone(): AbstractControl {
    return this.addressForm.controls[this.formFields.phone];
  }
}
