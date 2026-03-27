import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsBadge from '../components/DsBadge.vue';

describe('DsBadge', () => {
  test('renders children', () => {
    const wrapper = mount(DsBadge, { slots: { default: 'New' } });
    expect(wrapper.text()).toBe('New');
  });

  test('applies variant class', () => {
    const wrapper = mount(DsBadge, { props: { variant: 'success' }, slots: { default: 'OK' } });
    expect(wrapper.classes()).toContain('success');
  });
});
