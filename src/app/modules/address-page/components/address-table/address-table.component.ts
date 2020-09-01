import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Address } from '../../model';

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.scss']
})
export class AddressTableComponent {
  @Input() public addresses: Address[];
  @Output() public deleteAddress: EventEmitter<number> = new EventEmitter<number>();
  @Output() public favoriteAddress: EventEmitter<number> = new EventEmitter<number>();

  public delete(id: number): void {
    this.deleteAddress.emit(id);
  }

  public makeFavorite(id: number): void {
    this.favoriteAddress.emit(id);
  }
}
