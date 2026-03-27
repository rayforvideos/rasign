import { Component, forwardRef, input, signal, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'ds-switch',
  standalone: true,
  template: `
    <label [class]="wrapperClasses()" [for]="id">
      <input
        [id]="id"
        type="checkbox"
        role="switch"
        class="hiddenInput"
        [checked]="checked()"
        [disabled]="isDisabled()"
        (change)="onToggle($event)"
        (blur)="onTouched()"
      />
      <span class="track"><span class="thumb"></span></span>
      <span class="label">{{ label() }}</span>
    </label>
  `,
  styles: [],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DsSwitch), multi: true }],
})
export class DsSwitch implements ControlValueAccessor {
  @Input({ isSignal: true, required: true } as any) label = input.required<string>();

  checked = signal(false);
  isDisabled = signal(false);
  id = `ds-switch-${nextId++}`;

  private onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};

  wrapperClasses = () => (this.isDisabled() ? 'wrapper disabled' : 'wrapper');

  writeValue(value: boolean): void {
    this.checked.set(!!value);
  }
  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean): void {
    this.isDisabled.set(disabled);
  }

  onToggle(event: Event): void {
    const val = (event.target as HTMLInputElement).checked;
    this.checked.set(val);
    this.onChange(val);
  }
}
