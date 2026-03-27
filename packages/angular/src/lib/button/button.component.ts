import { Component, input, computed, Input } from '@angular/core';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-button',
  standalone: true,
  template: `
    <button [class]="classes()" [disabled]="disabled()">
      <ng-content />
    </button>
  `,
  styles: [],
  host: { style: 'display: inline-block' },
})
export class DsButton {
  @Input({ isSignal: true }) variant = input<Variant>('primary');
  @Input({ isSignal: true }) size = input<Size>('md');
  @Input({ isSignal: true }) fullWidth = input<boolean>(false);
  @Input({ isSignal: true }) disabled = input<boolean>(false);

  classes = computed(() => {
    const parts = ['button', this.variant(), this.size()];
    if (this.fullWidth()) parts.push('fullWidth');
    return parts.join(' ');
  });
}
