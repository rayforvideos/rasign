import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DsRow } from './row.component';

@Component({
  standalone: true,
  imports: [DsRow],
  template: `<ds-row>content</ds-row>`,
})
class DefaultHost {}

@Component({
  standalone: true,
  imports: [DsRow],
  template: `<ds-row [tag]="'nav'">content</ds-row>`,
})
class NavHost {}

@Component({
  standalone: true,
  imports: [DsRow],
  template: `<ds-row [gap]="'4'">content</ds-row>`,
})
class GapHost {}

@Component({
  standalone: true,
  imports: [DsRow],
  template: `<ds-row [align]="'center'">content</ds-row>`,
})
class AlignHost {}

describe('DsRow', () => {
  it('renders as div by default', () => {
    TestBed.configureTestingModule({ imports: [DefaultHost] });
    const fixture = TestBed.createComponent(DefaultHost);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div')).toBeTruthy();
  });

  it('renders as nav when tag="nav"', () => {
    TestBed.configureTestingModule({ imports: [NavHost] });
    const fixture = TestBed.createComponent(NavHost);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('nav')).toBeTruthy();
  });

  it('applies gap style', () => {
    TestBed.configureTestingModule({ imports: [GapHost] });
    const fixture = TestBed.createComponent(GapHost);
    fixture.detectChanges();
    const inner = fixture.nativeElement.querySelector('div');
    expect(inner.style.gap).toBe('var(--ds-spacing-4)');
  });

  it('applies align class', () => {
    TestBed.configureTestingModule({ imports: [AlignHost] });
    const fixture = TestBed.createComponent(AlignHost);
    fixture.detectChanges();
    const inner = fixture.nativeElement.querySelector('div');
    expect(inner.className).toContain('alignCenter');
  });
});
