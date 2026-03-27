import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DsButton } from './button.component';

@Component({
  standalone: true,
  imports: [DsButton],
  template: `<ds-button>Click</ds-button>`,
})
class DefaultHost {}

@Component({
  standalone: true,
  imports: [DsButton],
  template: `<ds-button variant="secondary">Click</ds-button>`,
})
class SecondaryHost {}

@Component({
  standalone: true,
  imports: [DsButton],
  template: `<ds-button [disabled]="true">Click</ds-button>`,
})
class DisabledHost {}

describe('DsButton', () => {
  it('renders button element', () => {
    TestBed.configureTestingModule({ imports: [DefaultHost] });
    const fixture = TestBed.createComponent(DefaultHost);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button')).toBeTruthy();
  });

  it('applies primary variant by default', () => {
    TestBed.configureTestingModule({ imports: [DefaultHost] });
    const fixture = TestBed.createComponent(DefaultHost);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.className).toContain('primary');
  });

  it('applies secondary variant', () => {
    TestBed.configureTestingModule({ imports: [SecondaryHost] });
    const fixture = TestBed.createComponent(SecondaryHost);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.className).toContain('secondary');
  });

  it('renders disabled', () => {
    TestBed.configureTestingModule({ imports: [DisabledHost] });
    const fixture = TestBed.createComponent(DisabledHost);
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });
});
