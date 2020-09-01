import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appPhoneMask]',
})
export class PhoneDirective {
  constructor(public ngControl: NgControl) {
  }

  @HostListener('ngModelChange', ['$event'])
  public onModelChange(event): void {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  public keydownBackspace(event): void {
    this.onInputChange(event.target.value, true);
  }

  public onInputChange(event, backspace): void {
    let newVal: string;

    if (event.length > 1) {
      newVal = event.slice(2, ).replace(/\D/g, '');
    } else {
      newVal = event.replace(/\D/g, '');
    }

    if (backspace && newVal.length <= 7) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,3})/, '($1)');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
    } else if (newVal.length <= 8) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,2})/, '($1) $2-$3');
    }   else {
      newVal = newVal.substring(0, 10);
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, '($1) $2-$3-$4');
    }
    this.ngControl.valueAccessor.writeValue('+7' + newVal);
  }
}

