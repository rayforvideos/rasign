import { Component, input, computed } from '@angular/core';

type Orientation = 'horizontal' | 'vertical';

@Component({
  selector: 'ds-divider',
  standalone: true,
  template: `<hr [class]="classes()" role="separator" [attr.aria-orientation]="orientation()" />`,
  styles: [],
})
export class DsDivider {
  orientation = input<Orientation>('horizontal');
  classes = computed(() => `divider ${this.orientation()}`);
}
