import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddressFormComponent, AddressTableComponent } from './components';
import { AddressPageComponent } from './containers';
import { AddressService } from './services';
import { PhoneDirective } from './directives';

@NgModule({
  declarations: [
    AddressFormComponent,
    AddressPageComponent,
    AddressTableComponent,
    PhoneDirective
  ],
  exports: [
    AddressPageComponent,
    PhoneDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    AddressService
  ]
})
export class AddressPageModule { }
