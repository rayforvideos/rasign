import {
  Injectable,
  InjectionToken,
  makeEnvironmentProviders,
  signal,
  effect,
  inject,
  type EnvironmentProviders,
} from '@angular/core';

export type Theme = 'light' | 'dark';

export interface DesignSystemConfig {
  brand: string;
  defaultTheme?: Theme;
}

export const DESIGN_SYSTEM_CONFIG = new InjectionToken<DesignSystemConfig>('DesignSystemConfig');

@Injectable()
export class DesignSystemService {
  private config = inject(DESIGN_SYSTEM_CONFIG);

  readonly brand = this.config.brand;
  readonly theme = signal<Theme>(this.config.defaultTheme ?? 'light');

  constructor() {
    document.documentElement.setAttribute('data-brand', this.brand);
    document.documentElement.setAttribute('data-theme', this.theme());

    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme());
    });
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }
}

export function provideDesignSystem(config: DesignSystemConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: DESIGN_SYSTEM_CONFIG, useValue: config },
    DesignSystemService,
  ]);
}
