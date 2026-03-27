import { Component, input, computed } from '@angular/core';

type Align = 'start' | 'center' | 'end' | 'stretch';
type Justify = 'start' | 'center' | 'end' | 'between';

const alignMap: Record<Align, string> = {
  start: 'alignStart',
  center: 'alignCenter',
  end: 'alignEnd',
  stretch: 'alignStretch',
};

const justifyMap: Record<Justify, string> = {
  start: 'justifyStart',
  center: 'justifyCenter',
  end: 'justifyEnd',
  between: 'justifyBetween',
};

@Component({
  selector: 'ds-column',
  standalone: true,
  template: `
    @switch (tag()) {
      @case ('aside') {
        <aside [class]="classes()" [style.gap]="gapStyle()"><ng-content /></aside>
      }
      @case ('section') {
        <section [class]="classes()" [style.gap]="gapStyle()"><ng-content /></section>
      }
      @default {
        <div [class]="classes()" [style.gap]="gapStyle()"><ng-content /></div>
      }
    }
  `,
  styles: [],
  host: { style: 'display: contents' },
})
export class DsColumn {
  /** HTML tag to render (renamed from 'as' to avoid reserved keyword conflict) */
  tag = input<string>('div');
  gap = input<string | undefined>(undefined);
  align = input<Align | undefined>(undefined);
  justify = input<Justify | undefined>(undefined);

  classes = computed(() => {
    const parts = ['column'];
    const a = this.align();
    const j = this.justify();
    if (a) parts.push(alignMap[a]);
    if (j) parts.push(justifyMap[j]);
    return parts.join(' ');
  });

  gapStyle = computed(() => {
    const g = this.gap();
    return g ? `var(--ds-spacing-${g})` : undefined;
  });
}
