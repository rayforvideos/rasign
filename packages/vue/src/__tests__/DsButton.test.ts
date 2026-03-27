import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsButton from '../components/DsButton.vue';

describe('DsButton', () => {
  test('renders with children', () => {
    const wrapper = mount(DsButton, { slots: { default: 'Click' } });
    expect(wrapper.text()).toBe('Click');
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  test('applies primary variant by default', () => {
    const wrapper = mount(DsButton, { slots: { default: 'Click' } });
    expect(wrapper.classes()).toContain('primary');
  });

  test('applies secondary variant', () => {
    const wrapper = mount(DsButton, {
      props: { variant: 'secondary' },
      slots: { default: 'Click' },
    });
    expect(wrapper.classes()).toContain('secondary');
  });

  test('renders disabled', () => {
    const wrapper = mount(DsButton, { props: { disabled: true }, slots: { default: 'Click' } });
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  test('applies size class', () => {
    const wrapper = mount(DsButton, { props: { size: 'lg' }, slots: { default: 'Click' } });
    expect(wrapper.classes()).toContain('lg');
  });
});
