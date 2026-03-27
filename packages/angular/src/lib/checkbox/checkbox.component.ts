import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'ds-checkbox',
  standalone: true,
  template: `
    <label [class]="wrapperClasses()" [for]="id">
      <input [id]="id" type="checkbox" class="checkbox"
        [checked]="checked()" [disabled]="isDisabled()"
        (change)="onChange_($event)" (blur)="onTouched()" />
      <span class="label">{{ label() }}</span>
    </label>
  `,
  styles: [],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DsCheckbox), multi: true },
  ],
})
export class DsCheckbox implements ControlValueAccessor {
  label = input.required<string>();

  checked = signal(false);
  isDisabled = signal(false);
  id = `ds-checkbox-${nextId++}`;

  private onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};

  wrapperClasses = () => this.isDisabled() ? 'wrapper disabled' : 'wrapper';

  writeValue(value: boolean): void { this.checked.set(!!value); }
  registerOnChange(fn: (value: boolean) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(disabled: boolean): void { this.isDisabled.set(disabled); }

  onChange_(event: Event): void {
    const val = (event.target as HTMLInputElement).checked;
    this.checked.set(val);
    this.onChange(val);
  }
}
