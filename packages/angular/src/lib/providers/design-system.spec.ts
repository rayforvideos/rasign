import { TestBed } from '@angular/core/testing';
import { Component, inject } from '@angular/core';
import { provideDesignSystem, DESIGN_SYSTEM_CONFIG, DesignSystemService } from './design-system';

@Component({
  standalone: true,
  template: `
    <span data-testid="brand">{{ ds.brand }}</span>
    <span data-testid="theme">{{ ds.theme() }}</span>
  `,
})
class TestHost {
  ds = inject(DesignSystemService);
}

describe('provideDesignSystem', () => {
  afterEach(() => {
    document.documentElement.removeAttribute('data-brand');
    document.documentElement.removeAttribute('data-theme');
  });

  it('sets data-brand and data-theme on documentElement', () => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideDesignSystem({ brand: 'service-a', defaultTheme: 'light' })],
    });
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();

    expect(document.documentElement.getAttribute('data-brand')).toBe('service-a');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('provides brand and theme via service', () => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideDesignSystem({ brand: 'service-b', defaultTheme: 'dark' })],
    });
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();

    const brandEl = fixture.nativeElement.querySelector('[data-testid="brand"]');
    const themeEl = fixture.nativeElement.querySelector('[data-testid="theme"]');
    expect(brandEl.textContent).toBe('service-b');
    expect(themeEl.textContent).toBe('dark');
  });

  it('setTheme updates theme', () => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideDesignSystem({ brand: 'service-a', defaultTheme: 'light' })],
    });
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();

    const ds = TestBed.inject(DesignSystemService);
    ds.setTheme('dark');
    fixture.detectChanges();

    expect(ds.theme()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
