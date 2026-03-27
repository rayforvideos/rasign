import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DsSwitch } from './switch.component';

@Component({
  standalone: true,
  imports: [DsSwitch],
  template: `<ds-switch label="Toggle" />`,
})
class SwitchHost {}

@Component({
  standalone: true,
  imports: [DsSwitch],
  template: `<ds-switch label="Dark mode" />`,
})
class DarkModeHost {}

describe('DsSwitch', () => {
  it('has switch role', () => {
    TestBed.configureTestingModule({ imports: [SwitchHost] });
    const fixture = TestBed.createComponent(SwitchHost);
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('role')).toBe('switch');
  });

  it('renders label', () => {
    TestBed.configureTestingModule({ imports: [DarkModeHost] });
    const fixture = TestBed.createComponent(DarkModeHost);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Dark mode');
  });
});
