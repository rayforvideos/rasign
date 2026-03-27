import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DsSpinner } from './spinner.component';

@Component({
  standalone: true,
  imports: [DsSpinner],
  template: `<ds-spinner />`,
})
class DefaultHost {}

@Component({
  standalone: true,
  imports: [DsSpinner],
  template: `<ds-spinner [label]="'Loading data'" />`,
})
class LabelHost {}

describe('DsSpinner', () => {
  it('renders with status role', () => {
    TestBed.configureTestingModule({ imports: [DefaultHost] });
    const fixture = TestBed.createComponent(DefaultHost);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('[role="status"]');
    expect(el).toBeTruthy();
  });

  it('has aria-label', () => {
    TestBed.configureTestingModule({ imports: [LabelHost] });
    const fixture = TestBed.createComponent(LabelHost);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('[role="status"]');
    expect(el.getAttribute('aria-label')).toBe('Loading data');
  });
});
