import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsDivider from '../components/DsDivider.vue';

describe('DsDivider', () => {
  test('renders separator role', () => {
    const wrapper = mount(DsDivider);
    expect(wrapper.attributes('role')).toBe('separator');
  });

  test('defaults to horizontal', () => {
    const wrapper = mount(DsDivider);
    expect(wrapper.classes()).toContain('horizontal');
  });

  test('applies vertical class', () => {
    const wrapper = mount(DsDivider, { props: { orientation: 'vertical' } });
    expect(wrapper.classes()).toContain('vertical');
  });
});
