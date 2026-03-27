import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsIcon from '../components/DsIcon.vue';

describe('DsIcon', () => {
  test('renders with img role', () => {
    const wrapper = mount(DsIcon, { props: { label: 'Close' } });
    expect(wrapper.attributes('role')).toBe('img');
  });

  test('sets aria-label', () => {
    const wrapper = mount(DsIcon, { props: { label: 'Close' } });
    expect(wrapper.attributes('aria-label')).toBe('Close');
  });

  test('applies size class', () => {
    const wrapper = mount(DsIcon, { props: { label: 'Close', size: 'lg' } });
    expect(wrapper.classes()).toContain('lg');
  });
});
