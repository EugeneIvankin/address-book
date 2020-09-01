import { Injectable } from '@angular/core';

import { Address, NewAddress } from '../model';

@Injectable()
export class AddressService {
  private ids = 0;
  private addressesData: Address[] = [];

  public getAddresses(): Address[] {
    return this.addressesData;
  }

  public addNewAddress(newAddress: NewAddress): void {
    this.ids++;

    this.addressesData.push({
      id: this.ids,
      firstName: newAddress.firstName,
      lastName: newAddress.lastName,
      patronymic: newAddress.patronymic,
      phone: newAddress.phone,
      isFavorite: false
    });
  }

  public deleteAddress(addressId: number): void {
    const index: number = this.addressesData.findIndex((address: Address) => address.id === addressId);

    this.addressesData.splice(index, 1);
  }

  public makeFavorite(addressId: number): void {
    const index: number = this.addressesData.findIndex((address: Address) => address.id === addressId);

    this.addressesData[index].isFavorite = true;

    this.addressesData.sort((a: Address, b: Address) => {
      if (a.isFavorite > b.isFavorite) {
        return -1;
      }
    });
  }
}
