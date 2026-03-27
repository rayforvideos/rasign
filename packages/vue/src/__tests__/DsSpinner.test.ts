import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsSpinner from '../components/DsSpinner.vue';

describe('DsSpinner', () => {
  test('renders with status role', () => {
    const wrapper = mount(DsSpinner);
    expect(wrapper.attributes('role')).toBe('status');
  });

  test('has aria-label', () => {
    const wrapper = mount(DsSpinner, { props: { label: 'Loading data' } });
    expect(wrapper.attributes('aria-label')).toBe('Loading data');
  });

  test('applies size class', () => {
    const wrapper = mount(DsSpinner, { props: { size: 'lg' } });
    expect(wrapper.classes()).toContain('lg');
  });
});
