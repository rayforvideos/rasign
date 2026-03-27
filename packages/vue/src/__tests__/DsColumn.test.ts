import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsColumn from '../components/DsColumn.vue';

describe('DsColumn', () => {
  test('renders as div by default', () => {
    const wrapper = mount(DsColumn, { slots: { default: 'Content' } });
    expect(wrapper.element.tagName).toBe('DIV');
  });

  test('renders with as prop', () => {
    const wrapper = mount(DsColumn, { props: { as: 'aside' }, slots: { default: 'Sidebar' } });
    expect(wrapper.element.tagName).toBe('ASIDE');
  });

  test('applies gap style', () => {
    const wrapper = mount(DsColumn, { props: { gap: '2' }, slots: { default: 'Content' } });
    expect(wrapper.attributes('style')).toContain('gap: var(--ds-spacing-2)');
  });
});
