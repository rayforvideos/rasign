import { describe, test, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { createDesignSystem, useDesignSystem } from '../index';

const ThemeDisplay = defineComponent({
  setup() {
    const { brand, theme, setTheme } = useDesignSystem();
    return () =>
      h('div', [
        h('span', { 'data-testid': 'brand' }, brand.value),
        h('span', { 'data-testid': 'theme' }, theme.value),
        h('button', { onClick: () => setTheme('dark') }, 'Toggle'),
      ]);
  },
});

describe('createDesignSystem plugin', () => {
  afterEach(() => {
    document.documentElement.removeAttribute('data-brand');
    document.documentElement.removeAttribute('data-theme');
  });

  test('sets data-brand and data-theme on documentElement', () => {
    mount(ThemeDisplay, {
      global: {
        plugins: [[createDesignSystem({ brand: 'service-a', defaultTheme: 'light' })]],
      },
    });
    expect(document.documentElement.getAttribute('data-brand')).toBe('service-a');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  test('provides brand and theme via composable', () => {
    const wrapper = mount(ThemeDisplay, {
      global: {
        plugins: [[createDesignSystem({ brand: 'service-b', defaultTheme: 'dark' })]],
      },
    });
    expect(wrapper.find('[data-testid="brand"]').text()).toBe('service-b');
    expect(wrapper.find('[data-testid="theme"]').text()).toBe('dark');
  });

  test('setTheme updates theme', async () => {
    const wrapper = mount(ThemeDisplay, {
      global: {
        plugins: [[createDesignSystem({ brand: 'service-a', defaultTheme: 'light' })]],
      },
    });
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('[data-testid="theme"]').text()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
