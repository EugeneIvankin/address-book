import { TestBed } from '@angular/core/testing';

import { AddressService } from './address.service';

describe('AddressService', () => {
  let service: AddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressService],
    });

    service = TestBed.get(AddressService);
  });

  it('should get addresses', () => {
    service.addNewAddress({
      firstName: 'firstName',
      lastName: 'lastName',
      patronymic: 'patronymic',
      phone: '+7(333) 333-33-33'
    });

    expect(service.getAddresses()).toEqual([{
      id: 1,
      isFavorite: false,
      firstName: 'firstName',
      lastName: 'lastName',
      patronymic: 'patronymic',
      phone: '+7(333) 333-33-33'
    }]);
  });

  it('should add address', () => {
    expect(service.getAddresses()).toEqual([]);

    service.addNewAddress({
      firstName: 'firstName',
      lastName: 'lastName',
      patronymic: 'patronymic',
      phone: '+7(333) 333-33-33'
    });

    expect(service.getAddresses()).toEqual([{
      id: 1,
      isFavorite: false,
      firstName: 'firstName',
      lastName: 'lastName',
      patronymic: 'patronymic',
      phone: '+7(333) 333-33-33'
    }]);
  });

  it('should delete address', () => {
    service.addNewAddress({
      firstName: 'firstName',
      lastName: 'lastName',
      patronymic: 'patronymic',
      phone: '+7(333) 333-33-33'
    });

    expect(service.getAddresses()).toEqual([{
      id: 1,
      isFavorite: false,
      firstName: 'firstName',
      lastName: 'lastName',
      patronymic: 'patronymic',
      phone: '+7(333) 333-33-33'
    }]);

    service.deleteAddress(1);

    expect(service.getAddresses()).toEqual([]);
  });

  it('should make address is favorite', () => {
    service.addNewAddress({
      firstName: 'firstName',
      lastName: 'lastName',
      patronymic: 'patronymic',
      phone: '+7(333) 333-33-33'
    });

    expect(service.getAddresses()).toEqual([{
      id: 1,
      isFavorite: false,
      firstName: 'firstName',
      lastName: 'lastName',
      patronymic: 'patronymic',
      phone: '+7(333) 333-33-33'
    }]);

    service.makeFavorite(1);

    expect(service.getAddresses()).toEqual([{
      id: 1,
      isFavorite: true,
      firstName: 'firstName',
      lastName: 'lastName',
      patronymic: 'patronymic',
      phone: '+7(333) 333-33-33'
    }]);
  });
});
