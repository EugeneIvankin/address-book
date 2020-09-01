import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AddressTableComponent } from './address-table.component';

describe('AddressTablesComponent', () => {
  let component: AddressTableComponent;
  let fixture: ComponentFixture<AddressTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit deleted address with address id', () => {
    component.addresses = [
      {
        id: 1,
        isFavorite: false,
        phone: '+7(333) 333-33-33',
        firstName: 'firstName',
        lastName: 'lastName',
        patronymic: 'patronymic'
      }
    ];

    fixture.detectChanges();

    spyOn(component.deleteAddress, 'emit');
    const el = fixture.debugElement.query(By.css('.table__row-delete')).nativeElement;

    el.click();

    expect(component.deleteAddress.emit).toHaveBeenCalledWith(1);
  });

  it('should emit favorite address with address id', () => {
    component.addresses = [
      {
        id: 1,
        isFavorite: false,
        phone: '+7(333) 333-33-33',
        firstName: 'firstName',
        lastName: 'lastName',
        patronymic: 'patronymic'
      }
    ];

    fixture.detectChanges();

    spyOn(component.favoriteAddress, 'emit');
    const el = fixture.debugElement.query(By.css('.table__row-favorite')).nativeElement;

    el.click();

    expect(component.favoriteAddress.emit).toHaveBeenCalledWith(1);
  });
});
