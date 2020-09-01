import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AddressPageComponent } from './address-page.component';
import { AddressFormComponent, AddressTableComponent } from '../../components';
import { AddressService } from '../../services';

describe('AddressPageComponent', () => {
  let component: AddressPageComponent;
  let fixture: ComponentFixture<AddressPageComponent>;
  let service: AddressService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressPageComponent,
        AddressTableComponent,
        AddressFormComponent
      ],
      providers: [AddressService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(AddressService);
  });

  it('should be called deleteAddress method on service when emit deleteAddress from child component', () => {
    spyOn(service, 'deleteAddress');
    const addressesTable = fixture.debugElement.query(By.directive(AddressTableComponent));
    const cmp = addressesTable.componentInstance;

    cmp.deleteAddress.emit(1);

    expect(service.deleteAddress).toHaveBeenCalledWith(1);
  });

  it('should be called makeFavorite method on service when emit makeFavorite from child component', () => {
    spyOn(service, 'makeFavorite');
    const addressesTable = fixture.debugElement.query(By.directive(AddressTableComponent));
    const cmp = addressesTable.componentInstance;

    cmp.favoriteAddress.emit(1);

    expect(service.makeFavorite).toHaveBeenCalledWith(1);
  });

  it('should be called addNewAddress method on service when emit submit from child component', () => {
    spyOn(service, 'addNewAddress');
    const addressesForm = fixture.debugElement.query(By.directive(AddressFormComponent));
    const cmp = addressesForm.componentInstance;

    cmp.addNewAddress.emit({
      firstName: 'name',
      lastName: 'Last name',
      patronymic: 'patronymic',
      phone: '+7(333) 333-33-33'
    });

    expect(service.addNewAddress).toHaveBeenCalledWith({
      firstName: 'name',
      lastName: 'Last name',
      patronymic: 'patronymic',
      phone: '+7(333) 333-33-33'
    });
  });

  it('should be called getAddresses method on init', () => {
    spyOn(service, 'getAddresses');

    component.ngOnInit();

    expect(service.getAddresses).toHaveBeenCalled();
  });
});
