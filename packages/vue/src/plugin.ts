import { ref, watch, type Plugin } from 'vue';
import { designSystemKey, type Theme } from './composables/useDesignSystem';

interface DesignSystemOptions {
  brand: string;
  defaultTheme?: Theme;
}

export function createDesignSystem(options: DesignSystemOptions): Plugin {
  return {
    install(app) {
      const brand = ref(options.brand);
      const theme = ref<Theme>(options.defaultTheme ?? 'light');

      const setTheme = (newTheme: Theme) => {
        theme.value = newTheme;
      };

      // Set DOM attributes immediately
      document.documentElement.setAttribute('data-brand', brand.value);
      document.documentElement.setAttribute('data-theme', theme.value);

      // Watch for changes
      watch(brand, (val) => {
        document.documentElement.setAttribute('data-brand', val);
      });

      watch(theme, (val) => {
        document.documentElement.setAttribute('data-theme', val);
      });

      app.provide(designSystemKey, { brand, theme, setTheme });
    },
  };
}
