import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DsTypography } from './typography.component';

@Component({
  standalone: true,
  imports: [DsTypography],
  template: `<ds-typography [tag]="'p'">Text</ds-typography>`,
})
class DefaultHost {}

@Component({
  standalone: true,
  imports: [DsTypography],
  template: `<ds-typography [tag]="'h1'" [variant]="'heading-xl'">Heading</ds-typography>`,
})
class H1Host {}

@Component({
  standalone: true,
  imports: [DsTypography],
  template: `<ds-typography [variant]="'heading-lg'">Text</ds-typography>`,
})
class VariantHost {}

describe('DsTypography', () => {
  it('renders as p by default', () => {
    TestBed.configureTestingModule({ imports: [DefaultHost] });
    const fixture = TestBed.createComponent(DefaultHost);
    fixture.detectChanges();
    const inner = fixture.nativeElement.querySelector('p');
    expect(inner).toBeTruthy();
  });

  it('renders as h1 when tag="h1"', () => {
    TestBed.configureTestingModule({ imports: [H1Host] });
    const fixture = TestBed.createComponent(H1Host);
    fixture.detectChanges();
    const inner = fixture.nativeElement.querySelector('h1');
    expect(inner).toBeTruthy();
  });

  it('applies variant class', () => {
    TestBed.configureTestingModule({ imports: [VariantHost] });
    const fixture = TestBed.createComponent(VariantHost);
    fixture.detectChanges();
    const inner = fixture.nativeElement.querySelector('p');
    expect(inner.className).toContain('headingLg');
  });
});
