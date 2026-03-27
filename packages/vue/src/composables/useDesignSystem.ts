import { inject, type Ref, type InjectionKey } from 'vue';

export type Theme = 'light' | 'dark';

export interface DesignSystemContext {
  brand: Ref<string>;
  theme: Ref<Theme>;
  setTheme: (theme: Theme) => void;
}

export const designSystemKey: InjectionKey<DesignSystemContext> = Symbol('rasign-design-system');

export function useDesignSystem(): DesignSystemContext {
  const context = inject(designSystemKey);
  if (!context) {
    throw new Error('useDesignSystem must be used within createDesignSystem plugin');
  }
  return context;
}
