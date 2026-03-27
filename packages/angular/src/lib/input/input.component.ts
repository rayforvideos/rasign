import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ds-input',
  standalone: true,
  template: `
    <input
      [class]="classes()"
      [disabled]="isDisabled()"
      [value]="value()"
      (input)="onInput($event)"
      (blur)="onTouched()"
    />
  `,
  styles: [],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DsInput), multi: true }],
})
export class DsInput implements ControlValueAccessor {
  error = input<boolean>(false);
  fullWidth = input<boolean>(false);

  value = signal('');
  isDisabled = signal(false);

  private onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  classes = () => {
    const parts = ['input'];
    if (this.error()) parts.push('error');
    if (this.fullWidth()) parts.push('fullWidth');
    return parts.join(' ');
  };

  writeValue(value: string): void {
    this.value.set(value ?? '');
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean): void {
    this.isDisabled.set(disabled);
  }

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value.set(val);
    this.onChange(val);
  }
}
