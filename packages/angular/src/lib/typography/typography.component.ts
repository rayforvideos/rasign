import { Component, input, computed } from '@angular/core';

type Variant = 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'body' | 'body-sm' | 'caption' | 'code';

const variantClassMap: Record<Variant, string> = {
  'heading-xl': 'headingXl',
  'heading-lg': 'headingLg',
  'heading-md': 'headingMd',
  'heading-sm': 'headingSm',
  'body': 'body',
  'body-sm': 'bodySm',
  'caption': 'caption',
  'code': 'code',
};

@Component({
  selector: 'ds-typography',
  standalone: true,
  template: `
    @switch (tag()) {
      @case ('h1') { <h1 [class]="classes()"><ng-content /></h1> }
      @case ('h2') { <h2 [class]="classes()"><ng-content /></h2> }
      @case ('h3') { <h3 [class]="classes()"><ng-content /></h3> }
      @case ('h4') { <h4 [class]="classes()"><ng-content /></h4> }
      @case ('h5') { <h5 [class]="classes()"><ng-content /></h5> }
      @case ('h6') { <h6 [class]="classes()"><ng-content /></h6> }
      @case ('span') { <span [class]="classes()"><ng-content /></span> }
      @case ('a') { <a [class]="classes()"><ng-content /></a> }
      @case ('label') { <label [class]="classes()"><ng-content /></label> }
      @default { <p [class]="classes()"><ng-content /></p> }
    }
  `,
  styles: [],
  host: { style: 'display: contents' },
})
export class DsTypography {
  /** HTML tag to render (renamed from 'as' to avoid reserved keyword conflict) */
  tag = input<string>('p');
  variant = input<Variant>('body');

  classes = computed(() => `typography ${variantClassMap[this.variant()]}`);
}
