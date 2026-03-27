import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsSurface from '../components/DsSurface.vue';

describe('DsSurface', () => {
  test('renders as div by default', () => {
    const wrapper = mount(DsSurface, { slots: { default: 'Content' } });
    expect(wrapper.element.tagName).toBe('DIV');
  });

  test('renders with as prop', () => {
    const wrapper = mount(DsSurface, { props: { as: 'section' }, slots: { default: 'Content' } });
    expect(wrapper.element.tagName).toBe('SECTION');
  });

  test('applies elevation class', () => {
    const wrapper = mount(DsSurface, { props: { elevation: 'md' }, slots: { default: 'Content' } });
    expect(wrapper.classes()).toContain('elevationMd');
  });
});
