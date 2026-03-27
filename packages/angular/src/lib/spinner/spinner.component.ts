import { Component, input, computed } from '@angular/core';

type Size = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'ds-spinner',
  standalone: true,
  template: `<div [class]="classes()" role="status" [attr.aria-label]="label()"></div>`,
  styles: [],
})
export class DsSpinner {
  size = input<Size>('md');
  label = input<string>('Loading');
  classes = computed(() => `spinner ${this.size()}`);
}
