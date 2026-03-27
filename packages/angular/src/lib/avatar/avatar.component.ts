import { Component, input, computed } from '@angular/core';

type Size = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'ds-avatar',
  standalone: true,
  template: `
    <div [class]="classes()">
      @if (src()) {
        <img class="image" [src]="src()" [alt]="alt() ?? ''" />
      } @else {
        <span>{{ initials() }}</span>
      }
    </div>
  `,
  styles: [],
})
export class DsAvatar {
  src = input<string | undefined>(undefined);
  alt = input<string | undefined>(undefined);
  initials = input<string | undefined>(undefined);
  size = input<Size>('md');

  classes = computed(() => `avatar ${this.size()}`);
}
