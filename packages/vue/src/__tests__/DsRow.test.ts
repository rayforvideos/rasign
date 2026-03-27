import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsRow from '../components/DsRow.vue';

describe('DsRow', () => {
  test('renders as div by default', () => {
    const wrapper = mount(DsRow, { slots: { default: 'Content' } });
    expect(wrapper.element.tagName).toBe('DIV');
  });

  test('renders with as prop', () => {
    const wrapper = mount(DsRow, { props: { as: 'nav' }, slots: { default: 'Nav' } });
    expect(wrapper.element.tagName).toBe('NAV');
  });

  test('applies gap style', () => {
    const wrapper = mount(DsRow, { props: { gap: '4' }, slots: { default: 'Content' } });
    expect(wrapper.attributes('style')).toContain('gap: var(--ds-spacing-4)');
  });

  test('applies align class', () => {
    const wrapper = mount(DsRow, { props: { align: 'center' }, slots: { default: 'Content' } });
    expect(wrapper.classes()).toContain('alignCenter');
  });
});
