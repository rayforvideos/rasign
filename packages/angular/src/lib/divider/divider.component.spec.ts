import { TestBed } from '@angular/core/testing';
import { DsDivider } from './divider.component';

describe('DsDivider', () => {
  it('renders separator role', () => {
    TestBed.configureTestingModule({ imports: [DsDivider] });
    const fixture = TestBed.createComponent(DsDivider);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('[role="separator"]');
    expect(el).toBeTruthy();
  });

  it('defaults to horizontal', () => {
    TestBed.configureTestingModule({ imports: [DsDivider] });
    const fixture = TestBed.createComponent(DsDivider);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('hr');
    expect(el.className).toContain('horizontal');
  });
});
