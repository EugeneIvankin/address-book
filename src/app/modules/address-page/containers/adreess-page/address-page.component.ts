import { Component, OnInit } from '@angular/core';

import { Address, NewAddress } from '../../model';
import { AddressService } from '../../services';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.scss']
})
export class AddressPageComponent implements OnInit {
  public addresses: Address[] = [];

  constructor(public service: AddressService) {
  }

  public ngOnInit(): void {
    this.addresses = this.service.getAddresses();
  }

  public submitNewAddress(newAddress: NewAddress): void {
    this.service.addNewAddress(newAddress);
  }

  public deleteAddress(id: number): void {
    this.service.deleteAddress(id);
  }

  public makeFavoriteAddress(id: number): void {
    this.service.makeFavorite(id);
  }
}
