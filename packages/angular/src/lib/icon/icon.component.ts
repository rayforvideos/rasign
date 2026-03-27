import { Component, input, computed } from '@angular/core';

type Size = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'ds-icon',
  standalone: true,
  template: `<span [class]="classes()" role="img" [attr.aria-label]="label()"
    ><ng-content
  /></span>`,
  styles: [],
})
export class DsIcon {
  size = input<Size>('md');
  label = input.required<string>();
  classes = computed(() => `icon ${this.size()}`);
}
