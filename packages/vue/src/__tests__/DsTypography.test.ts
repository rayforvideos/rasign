import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsTypography from '../components/DsTypography.vue';

describe('DsTypography', () => {
  test('renders as p by default', () => {
    const wrapper = mount(DsTypography, {
      props: { variant: 'body' },
      slots: { default: 'Hello' },
    });
    expect(wrapper.element.tagName).toBe('P');
    expect(wrapper.text()).toBe('Hello');
  });

  test('renders with as prop', () => {
    const wrapper = mount(DsTypography, {
      props: { as: 'h1', variant: 'heading-xl' },
      slots: { default: 'Title' },
    });
    expect(wrapper.element.tagName).toBe('H1');
  });

  test('applies variant class', () => {
    const wrapper = mount(DsTypography, {
      props: { variant: 'heading-lg' },
      slots: { default: 'Text' },
    });
    expect(wrapper.classes()).toContain('headingLg');
  });
});
