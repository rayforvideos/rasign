import { Component, input, computed } from '@angular/core';

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
  variant = input<Variant>('primary');
  size = input<Size>('md');
  fullWidth = input<boolean>(false);
  disabled = input<boolean>(false);

  classes = computed(() => {
    const parts = ['button', this.variant(), this.size()];
    if (this.fullWidth()) parts.push('fullWidth');
    return parts.join(' ');
  });
}
