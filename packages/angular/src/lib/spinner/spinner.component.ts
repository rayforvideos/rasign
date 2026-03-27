import { Component, input, computed, Input } from '@angular/core';

type Size = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'ds-spinner',
  standalone: true,
  template: `<div [class]="classes()" role="status" [attr.aria-label]="label()"></div>`,
  styles: [],
})
export class DsSpinner {
  @Input({ isSignal: true }) size = input<Size>('md');
  @Input({ isSignal: true }) label = input<string>('Loading');
  classes = computed(() => `spinner ${this.size()}`);
}
