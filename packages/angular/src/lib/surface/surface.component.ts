import { Component, input, computed } from '@angular/core';

type Elevation = 'sm' | 'md' | 'lg' | 'xl';
type Rounded = 'sm' | 'md' | 'lg' | 'xl' | 'full';

const elevationMap: Record<Elevation, string> = {
  sm: 'elevationSm',
  md: 'elevationMd',
  lg: 'elevationLg',
  xl: 'elevationXl',
};

const roundedMap: Record<Rounded, string> = {
  sm: 'roundedSm',
  md: 'roundedMd',
  lg: 'roundedLg',
  xl: 'roundedXl',
  full: 'roundedFull',
};

@Component({
  selector: 'ds-surface',
  standalone: true,
  template: `
    @switch (tag()) {
      @case ('section') {
        <section [class]="classes()" [style.padding]="paddingStyle()"><ng-content /></section>
      }
      @case ('article') {
        <article [class]="classes()" [style.padding]="paddingStyle()"><ng-content /></article>
      }
      @case ('aside') {
        <aside [class]="classes()" [style.padding]="paddingStyle()"><ng-content /></aside>
      }
      @default {
        <div [class]="classes()" [style.padding]="paddingStyle()"><ng-content /></div>
      }
    }
  `,
  styles: [],
  host: { style: 'display: contents' },
})
export class DsSurface {
  /** HTML tag to render (renamed from 'as' to avoid reserved keyword conflict) */
  tag = input<string>('div');
  elevation = input<Elevation | undefined>(undefined);
  rounded = input<Rounded | undefined>(undefined);
  bordered = input<boolean>(false);
  padding = input<string | undefined>(undefined);

  classes = computed(() => {
    const parts = ['surface'];
    const e = this.elevation();
    const r = this.rounded();
    if (e) parts.push(elevationMap[e]);
    if (r) parts.push(roundedMap[r]);
    if (this.bordered()) parts.push('bordered');
    return parts.join(' ');
  });

  paddingStyle = computed(() => {
    const p = this.padding();
    return p ? `var(--ds-spacing-${p})` : undefined;
  });
}
