import { Component, input, computed } from '@angular/core';

type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

const alignMap: Record<Align, string> = {
  start: 'alignStart', center: 'alignCenter', end: 'alignEnd',
  stretch: 'alignStretch', baseline: 'alignBaseline',
};

const justifyMap: Record<Justify, string> = {
  start: 'justifyStart', center: 'justifyCenter', end: 'justifyEnd',
  between: 'justifyBetween', around: 'justifyAround', evenly: 'justifyEvenly',
};

@Component({
  selector: 'ds-row',
  standalone: true,
  template: `
    @switch (tag()) {
      @case ('nav') { <nav [class]="classes()" [style.gap]="gapStyle()"><ng-content /></nav> }
      @case ('section') { <section [class]="classes()" [style.gap]="gapStyle()"><ng-content /></section> }
      @case ('header') { <header [class]="classes()" [style.gap]="gapStyle()"><ng-content /></header> }
      @case ('footer') { <footer [class]="classes()" [style.gap]="gapStyle()"><ng-content /></footer> }
      @case ('ul') { <ul [class]="classes()" [style.gap]="gapStyle()"><ng-content /></ul> }
      @default { <div [class]="classes()" [style.gap]="gapStyle()"><ng-content /></div> }
    }
  `,
  styles: [],
  host: { style: 'display: contents' },
})
export class DsRow {
  /** HTML tag to render (renamed from 'as' to avoid reserved keyword conflict) */
  tag = input<string>('div');
  gap = input<string | undefined>(undefined);
  align = input<Align | undefined>(undefined);
  justify = input<Justify | undefined>(undefined);
  wrap = input<boolean>(false);

  classes = computed(() => {
    const parts = ['row'];
    const a = this.align();
    const j = this.justify();
    if (a) parts.push(alignMap[a]);
    if (j) parts.push(justifyMap[j]);
    if (this.wrap()) parts.push('wrap');
    return parts.join(' ');
  });

  gapStyle = computed(() => {
    const g = this.gap();
    return g ? `var(--ds-spacing-${g})` : undefined;
  });
}
