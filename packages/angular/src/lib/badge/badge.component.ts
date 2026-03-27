import { Component, input, computed } from '@angular/core';

type Variant = 'default' | 'success' | 'danger' | 'warning';

@Component({
  selector: 'ds-badge',
  standalone: true,
  template: `<span [class]="classes()"><ng-content /></span>`,
  styles: [],
})
export class DsBadge {
  variant = input<Variant>('default');
  classes = computed(() => `badge ${this.variant()}`);
}
